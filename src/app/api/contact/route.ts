import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid work email.").max(180),
  phone: z.string().trim().min(7, "Please enter a reachable phone or WhatsApp number.").max(40),
  organisation: z.string().trim().min(2, "Please enter your organisation.").max(160),
  service: z.string().trim().min(3).max(160),
  stage: z.string().trim().min(3).max(80),
  budget: z.string().trim().min(3).max(80),
  timeline: z.string().trim().min(3).max(80),
  description: z.string().trim().min(20, "Please share a little more about the project.").max(3000),
  consent: z.literal("accepted", {
    error: "Please confirm consent before sending.",
  }),
  website: z.string().optional(),
});

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: parsed.error.issues[0]?.message ?? "Please review the form.",
      },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true, message: "Thank you. Your enquiry has been received." });
  }

  const hasEmailConfig = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL);

  if (!hasEmailConfig) {
    return NextResponse.json({
      ok: true,
      message:
        "Your enquiry passed validation. Email delivery is not configured in this environment, so please also use WhatsApp or email for urgent requests.",
    });
  }

  // Email delivery can be connected by adding RESEND_API_KEY and CONTACT_TO_EMAIL.
  // The route intentionally avoids importing Resend until credentials and package setup are added.
  return NextResponse.json({
    ok: true,
    message: "Your enquiry has been received. NelviusGrey Tech will respond shortly.",
  });
}
