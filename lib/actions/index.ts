"use server";

import EmailTemplate from "@/components/EmailTemplate";
import { EmailTemplateProps } from "@/types";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ name, email, message }: EmailTemplateProps) {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["jayhogan.dev@gmail.com"],
      subject: "Website Inquiry",
      react: EmailTemplate({ name, email, message }),
    });

    return data;
  } catch (error) {
    return NextResponse.json({ error });
  }
}
