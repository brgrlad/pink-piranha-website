import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  // PARSE INCOMING REQUEST
  const body = await req.text();
  const parsedBody = JSON.parse(body);

  // CREATE AN INSTANCE OF RESEND
  const resend = new Resend(process.env.API_KEY);

  try {
    const { firstName, emailAddress, phoneNumber, message } = parsedBody;

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "bgrecchi@gmail.com",
      subject: `New message from ${firstName} , Phone: ${phoneNumber}`,
      html: `<p> FROM: ${emailAddress} </p> MESSAGE: <p> ${message}  </p>`,
    });

    if (error) {
      throw new Error(error.message);
    }

    console.log(data);

    return NextResponse.json(
      { ok: true, message: "E-mail sent successfully" },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { ok: false, message: e.message },
      { status: 500 }
    );
  }
}
