import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  // PARSE INCOMING REQUEST
  const body = await req.text();
  const parsedBody = JSON.parse(body);

  // CREATE AN INSTANCE OF RESEND EMAIL API
  const resend = new Resend(process.env.NEXT_PUBLIC_API_KEY);

  try {
    const { firstName, emailAddress, phoneNumber, message } = parsedBody;

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["bgrecchi@gmail.com"],
      subject: `New message from ${firstName} , Phone: ${phoneNumber}`,
      html: `<p> FROM: ${emailAddress} </p> MESSAGE: <p> ${message}  </p>`,
    });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json(
      { ok: true, message: "E-mail sent successfully" },
      { status: 200 }
    );
  } catch (e) {
    console.error("Error in POST handler:", e);
    return NextResponse.json(
      {
        ok: false,
        message: e.message || "Unknown error in business-form API handler",
      },
      { status: 500 }
    );
  }
}
