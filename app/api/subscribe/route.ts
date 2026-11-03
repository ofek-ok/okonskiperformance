import { NextResponse } from "next/server";

// Clinify CRM Leads API Endpoint (Production: https://clinify-flame.vercel.app/)
const CLINIFY_API_URL =
  process.env.CLINIFY_API_URL ||
  "https://clinify-flame.vercel.app/api/leads";

const CLINIFY_SUPABASE_URL =
  process.env.CLINIFY_SUPABASE_URL ||
  process.env.SUPABASE_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://stwgtsmdtjfwfkibzdlh.supabase.co";

const CLINIFY_SUPABASE_KEY =
  process.env.CLINIFY_SUPABASE_KEY ||
  process.env.SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_EWD1n9Ejp-VGmK9NBEoEiw_kJdNwrcv";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const fullName = String(body.full_name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const topic = String(body.topic || "").trim();
    const painLevel = body.pain_level !== undefined && body.pain_level !== null ? Number(body.pain_level) : null;
    const note = String(body.note || "").trim();
    const marketingConsent = body.marketing_consent === true;

    if (!fullName || !phone || !topic || !marketingConsent) {
      return NextResponse.json({ error: "Missing required fields: full_name, phone, topic, marketing_consent" }, { status: 400 });
    }

    const payload = {
      full_name: fullName,
      phone: phone,
      email: email || null,
      topic: topic || null,
      pain_level: painLevel,
      note: note || null,
      marketing_consent: marketingConsent,
      utm_source: body.utm_source || "website",
      utm_medium: body.utm_medium || "organic",
      utm_campaign: body.utm_campaign || "performance_list",
    };

    // 1. Send directly to Clinify CRM Leads API (/api/leads)
    try {
      const crmResponse = await fetch(CLINIFY_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (crmResponse.ok) {
        const crmData = await crmResponse.json();
        return NextResponse.json({ ok: true, lead: crmData });
      }
      console.warn("Clinify API returned non-200 status:", crmResponse.status);
    } catch (crmErr) {
      console.warn("Could not reach Clinify CRM endpoint directly, trying Supabase fallback:", crmErr);
    }

    // 2. Fallback: attempt Supabase RPC public_subscribe_performance_list
    const rpcResponse = await fetch(
      `${CLINIFY_SUPABASE_URL}/rest/v1/rpc/public_subscribe_performance_list`,
      {
        method: "POST",
        headers: {
          apikey: CLINIFY_SUPABASE_KEY,
          Authorization: `Bearer ${CLINIFY_SUPABASE_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          p_full_name: fullName,
          p_email: email || null,
          p_phone: phone || null,
          p_utm_source: body.utm_source || "website",
          p_utm_medium: body.utm_medium || "organic",
          p_utm_campaign: body.utm_campaign || "performance_list",
        }),
      }
    );

    if (!rpcResponse.ok) {
      const errTxt = await rpcResponse.text();
      console.error("Supabase fallback failed:", rpcResponse.status, errTxt);
      return NextResponse.json({ error: "Could not save lead to CRM" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Clinify CRM subscribe route failed:", error);
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
