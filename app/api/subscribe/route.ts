import { NextResponse } from "next/server";

// Clinify CRM Supabase connection (https://clinify-flame.vercel.app/)
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

    if (!fullName || !email || body.marketing_consent !== true) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Insert lead directly into Clinify CRM `leads` table (Leads Pipeline -> "ליד חדש")
    const clinifyLeadResponse = await fetch(`${CLINIFY_SUPABASE_URL}/rest/v1/leads`, {
      method: "POST",
      headers: {
        apikey: CLINIFY_SUPABASE_KEY,
        Authorization: `Bearer ${CLINIFY_SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        full_name: fullName,
        email: email,
        phone: phone || "-",
        source: "Website",
        status: "new",
      }),
    });

    if (!clinifyLeadResponse.ok) {
      const errorText = await clinifyLeadResponse.text();
      console.error("Clinify CRM lead insert failed:", clinifyLeadResponse.status, errorText);

      // Fallback: attempt legacy RPC if configured on a custom database
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
        return NextResponse.json({ error: "Could not save lead to CRM" }, { status: 502 });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Clinify CRM subscribe route failed:", error);
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
