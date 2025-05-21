import { Resend } from "resend";
import { NextResponse } from "next/server";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export const bodyParser = false;

export async function POST(req) {
  const resend = new Resend(process.env.NEXT_PUBLIC_API_KEY);

  try {

    const formData = await req.formData();

    const file = formData.get("file");

    if (!file) {
      throw new Error("No file uploaded");
    }

    const fileBuffer = await file.arrayBuffer();

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "bgrecchi@gmail.com",
      subject: "New CV submission",
      attachments: [
        {
          filename: file.name,
          content: Buffer.from(fileBuffer),
        },
      ],
      html: `
        <p>Hello! Someone has sent you their CV.</p>
        <p>Name: ${formData.get("fullName")}</p>
        <p>Email: ${formData.get("emailAddress")}</p>
        <p>Phone: ${formData.get("phoneNumber")}</p>
        <p>Message: ${formData.get("message")}</p>
      `,
    });

    if (error) {
      throw new Error(
        error.message || "Unknown error in staff-form API handler"
      );
    }

    return NextResponse.json(
      { ok: true, data: "Email sent successfully" },
      { status: 200 }
    );
  } catch (e) {
    console.error("Error in POST handler:", e);
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
