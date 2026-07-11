import { NextResponse, type NextRequest } from "next/server";

import { contactFormSchema, type ContactFormValues } from "@/lib/contact/schema";
import { siteConfig } from "@/lib/constants";

function enquiryEmail(values: ContactFormValues) {
  const subject = `Project enquiry from ${values.organisation}`;
  const body = [
    `Full name: ${values.fullName}`,
    `Email: ${values.email}`,
    `Phone / WhatsApp: ${values.phone}`,
    `Organisation: ${values.organisation}`,
    `Service needed: ${values.service}`,
    `Project stage: ${values.stage}`,
    `Budget range: ${values.budget}`,
    `Timeline: ${values.timeline}`,
    "",
    "Project description:",
    values.description,
  ].join("\n");

  return `mailto:${siteConfig.email.support}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function POST(request: NextRequest) {
  const json = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please check the highlighted fields and try again.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true, message: "Thank you. We will respond if the request is valid." });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          receivedAt: new Date().toISOString(),
          source: "nelviusgrey-tech-website",
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook failed with ${response.status}`);
      }

      return NextResponse.json({
        ok: true,
        message: "Your project enquiry has been received. NelviusGrey Tech will reply soon.",
      });
    } catch (error) {
      console.warn("Contact webhook unavailable", error instanceof Error ? error.message : error);
    }
  }

  return NextResponse.json(
    {
      ok: true,
      fallback: "mailto",
      mailto: enquiryEmail(parsed.data),
      message: "Your enquiry is validated. Send the prepared email draft to complete submission.",
    },
    { status: 202 },
  );
}
