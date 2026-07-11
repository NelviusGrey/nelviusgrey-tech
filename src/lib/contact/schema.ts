import { z } from "zod";

export const projectStages = [
  "Exploring an idea",
  "Planning the project",
  "Ready to begin",
  "Improving an existing system",
] as const;

export const budgetRanges = [
  "Exploratory",
  "Below NGN 500,000",
  "NGN 500,000 - NGN 1,500,000",
  "NGN 1,500,000 - NGN 5,000,000",
  "Above NGN 5,000,000",
] as const;

export const timelines = ["This month", "1-3 months", "3-6 months", "Flexible"] as const;

export const contactFormSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().email("Please enter a valid work email.").max(180),
  phone: z.string().trim().min(6, "Please enter a phone or WhatsApp number.").max(40),
  organisation: z.string().trim().min(2, "Please enter your organisation.").max(160),
  service: z.string().trim().min(2, "Please select a service."),
  stage: z.enum(projectStages),
  budget: z.enum(budgetRanges),
  timeline: z.enum(timelines),
  description: z
    .string()
    .trim()
    .min(20, "Please share a little more about the project.")
    .max(2400, "Please keep the project description under 2,400 characters."),
  consent: z.boolean().refine(Boolean, {
    message: "Please confirm that NelviusGrey Tech may use this information to respond.",
  }),
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
