import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.text();

  const parsedBody = JSON.parse(body);

  console.log(parsedBody);
  return NextResponse.json(
    { ok: true, message: "Email sent successfully!" },
    { status: 201 }
  );
}
