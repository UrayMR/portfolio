import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    // Debug log
    console.log("Received request:", { email, subject, message });
    console.log("API Key exists:", !!process.env.RESEND_API_KEY);

    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["umrajsyafiq@gmail.com"],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>From: {email}</p>
          <p>Message:</p>
          <p>{message}</p>
        </>
      ),
    });

    console.log("Resend API Response:", data);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
