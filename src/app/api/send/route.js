import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_5E8CE8mu_G73misnYiTHzqrSMMEq3F7VK");

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

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

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
