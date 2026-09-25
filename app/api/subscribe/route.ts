import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY =
  process.env.SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function POST(request: Request) {
  try {
    if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
      return NextResponse.json({ error: "Server configuration is missing" }, { status: 500 });
    }

    const body = await request.json();
    const fullName = String(body.full_name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();

    if (!fullName || (!email && !phone)) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const rpcResponse = await fetch(`${SUPABASE_URL}/rest/v1/rpc/public_subscribe_performance_list`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        p_full_name: fullName,
        p_email: email || null,
        p_phone: phone || null,
        p_utm_source: body.utm_source || "website",
        p_utm_medium: body.utm_medium || "organic",
        p_utm_campaign: body.utm_campaign || "performance_list"
      })
    });

    if (!rpcResponse.ok) {
      const errorText = await rpcResponse.text();
      console.error("Performance List subscribe RPC failed:", rpcResponse.status, errorText);
      return NextResponse.json({ error: "Could not save lead" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Performance List subscribe route failed:", error);
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
