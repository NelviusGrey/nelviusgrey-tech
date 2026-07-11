"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  budgetRanges,
  contactFormSchema,
  projectStages,
  timelines,
  type ContactFormValues,
} from "@/lib/contact/schema";
import { serviceCapabilities, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

type FormStatus =
  | { state: "idle" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

type ContactResponse = {
  ok?: boolean;
  message?: string;
  fallback?: "mailto";
  mailto?: string;
};

const inputClass =
  "h-12 w-full min-w-0 max-w-full rounded-md border border-white/10 bg-black/30 px-3 text-white placeholder:text-white/28 transition focus:border-[color:var(--brand-green)]";
const textareaClass =
  "w-full min-w-0 max-w-full resize-none rounded-md border border-white/10 bg-black/30 px-3 py-3 text-white placeholder:text-white/28 transition focus:border-[color:var(--brand-green)]";

function localMailto(values: ContactFormValues) {
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

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="text-xs text-red-200">{message}</p>;
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      organisation: "",
      service: serviceCapabilities[0].title,
      stage: projectStages[0],
      budget: budgetRanges[0],
      timeline: timelines[0],
      description: "",
      consent: false,
      website: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus({ state: "idle" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const payload = (await response.json().catch(() => ({}))) as ContactResponse;

      if (!response.ok || !payload.ok) {
        throw new Error(payload.message ?? "Please check the form and try again.");
      }

      if (payload.fallback === "mailto" && payload.mailto) {
        window.location.assign(payload.mailto);
      }

      setStatus({
        state: "success",
        message: payload.message ?? "Your enquiry has been prepared successfully.",
      });
    } catch (error) {
      const mailto = localMailto(values);

      if (mailto.length < 1900) {
        window.location.assign(mailto);
        setStatus({
          state: "success",
          message: "Your email app should open with the enquiry prepared. Send it from there and we will reply.",
        });
        return;
      }

      setStatus({
        state: "error",
        message:
          error instanceof Error
            ? error.message
            : "The form could not be submitted. Please shorten the message or use WhatsApp.",
      });
    }
  }

  return (
    <form className="w-full min-w-0 border border-white/10 bg-[#060806]/80 p-5 sm:p-6" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("website")} />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Full name
          <input {...register("fullName")} className={cn(inputClass, errors.fullName && "border-red-300/50")} placeholder="Your name" />
          <FieldError message={errors.fullName?.message} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Work email
          <input
            {...register("email")}
            type="email"
            className={cn(inputClass, errors.email && "border-red-300/50")}
            placeholder="you@organisation.com"
          />
          <FieldError message={errors.email?.message} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Phone / WhatsApp
          <input {...register("phone")} className={cn(inputClass, errors.phone && "border-red-300/50")} placeholder="+234..." />
          <FieldError message={errors.phone?.message} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Organisation
          <input
            {...register("organisation")}
            className={cn(inputClass, errors.organisation && "border-red-300/50")}
            placeholder="Company, NGO, agency, or team"
          />
          <FieldError message={errors.organisation?.message} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Service needed
          <select {...register("service")} className={inputClass}>
            {serviceCapabilities.map((service) => (
              <option key={service.slug}>{service.title}</option>
            ))}
          </select>
          <FieldError message={errors.service?.message} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Project stage
          <select {...register("stage")} className={inputClass}>
            {projectStages.map((stage) => (
              <option key={stage}>{stage}</option>
            ))}
          </select>
          <FieldError message={errors.stage?.message} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Estimated budget range
          <select {...register("budget")} className={inputClass}>
            {budgetRanges.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
          <FieldError message={errors.budget?.message} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Preferred timeline
          <select {...register("timeline")} className={inputClass}>
            {timelines.map((timeline) => (
              <option key={timeline}>{timeline}</option>
            ))}
          </select>
          <FieldError message={errors.timeline?.message} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76 sm:col-span-2">
          Project description
          <textarea
            {...register("description")}
            rows={7}
            className={cn(textareaClass, errors.description && "border-red-300/50")}
            placeholder="Tell us what you are trying to improve, who it is for, and what a successful system should help you do."
          />
          <FieldError message={errors.description?.message} />
        </label>
        <label className="flex gap-3 text-sm leading-7 text-white/62 sm:col-span-2">
          <input
            {...register("consent")}
            type="checkbox"
            className="mt-1 h-5 w-5 rounded border-white/20 bg-black/30 accent-[color:var(--brand-green)]"
          />
          <span>
            I consent to NelviusGrey Tech using this information to respond to my
            enquiry and discuss the project request.
          </span>
        </label>
        <div className="sm:col-span-2">
          <FieldError message={errors.consent?.message} />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[color:var(--brand-green)] px-6 text-sm font-semibold text-[#021008] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "Send Project Enquiry"}
        <Send className="h-4 w-4" />
      </button>

      {status.state === "success" && (
        <p className="mt-4 rounded-md border border-[color:var(--brand-green)]/30 bg-[color:var(--brand-green-soft)] px-4 py-3 text-sm text-white">
          {status.message}
        </p>
      )}
      {status.state === "error" && (
        <p className="mt-4 rounded-md border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm text-red-100">
          {status.message}
        </p>
      )}
    </form>
  );
}
