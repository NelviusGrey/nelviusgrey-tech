"use client";

import { Send } from "lucide-react";
import { useState } from "react";

import { serviceCapabilities } from "@/lib/constants";

const projectStages = [
  "Exploring an idea",
  "Planning the project",
  "Ready to begin",
  "Improving an existing system",
] as const;

const budgetRanges = [
  "Exploratory",
  "Below NGN 500,000",
  "NGN 500,000 - NGN 1,500,000",
  "NGN 1,500,000 - NGN 5,000,000",
  "Above NGN 5,000,000",
] as const;

const timelines = ["This month", "1-3 months", "3-6 months", "Flexible"] as const;

type FormStatus =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });

  return (
    <form
      className="border border-white/10 bg-[#060806]/80 p-5 sm:p-6"
      onSubmit={async (event) => {
        event.preventDefault();
        setStatus({ state: "loading" });

        const form = event.currentTarget;
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData.entries());

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          const result = (await response.json()) as { ok?: boolean; message?: string };

          if (!response.ok || !result.ok) {
            throw new Error(result.message ?? "Please review the form and try again.");
          }

          setStatus({
            state: "success",
            message: result.message ?? "Your project enquiry has been received.",
          });
          form.reset();
        } catch (error) {
          setStatus({
            state: "error",
            message:
              error instanceof Error
                ? error.message
                : "Something went wrong. Please try again.",
          });
        }
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Full name
          <input required name="fullName" className="h-12 rounded-md border border-white/10 bg-black/30 px-3 text-white placeholder:text-white/28" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Work email
          <input required type="email" name="email" className="h-12 rounded-md border border-white/10 bg-black/30 px-3 text-white placeholder:text-white/28" placeholder="you@organisation.com" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Phone / WhatsApp
          <input required name="phone" className="h-12 rounded-md border border-white/10 bg-black/30 px-3 text-white placeholder:text-white/28" placeholder="+234..." />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Organisation
          <input required name="organisation" className="h-12 rounded-md border border-white/10 bg-black/30 px-3 text-white placeholder:text-white/28" placeholder="Company, NGO, agency, or team" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Service needed
          <select required name="service" className="h-12 rounded-md border border-white/10 bg-black/30 px-3 text-white">
            {serviceCapabilities.map((service) => (
              <option key={service.slug}>{service.title}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Project stage
          <select required name="stage" className="h-12 rounded-md border border-white/10 bg-black/30 px-3 text-white">
            {projectStages.map((stage) => (
              <option key={stage}>{stage}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Estimated budget range
          <select required name="budget" className="h-12 rounded-md border border-white/10 bg-black/30 px-3 text-white">
            {budgetRanges.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Preferred timeline
          <select required name="timeline" className="h-12 rounded-md border border-white/10 bg-black/30 px-3 text-white">
            {timelines.map((timeline) => (
              <option key={timeline}>{timeline}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76 sm:col-span-2">
          Project description
          <textarea
            required
            name="description"
            minLength={20}
            rows={7}
            className="resize-none rounded-md border border-white/10 bg-black/30 px-3 py-3 text-white placeholder:text-white/28"
            placeholder="Tell us what you are trying to improve, who it is for, and what a successful system should help you do."
          />
        </label>
        <label className="flex gap-3 text-sm leading-7 text-white/62 sm:col-span-2">
          <input
            required
            name="consent"
            type="checkbox"
            value="accepted"
            className="mt-1 h-5 w-5 rounded border-white/20 bg-black/30 accent-[color:var(--brand-green)]"
          />
          <span>
            I consent to NelviusGrey Tech using this information to respond to my
            enquiry and discuss the project request.
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={status.state === "loading"}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[color:var(--brand-green)] px-6 text-sm font-semibold text-[#021008] transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status.state === "loading" ? "Sending enquiry..." : "Send Project Enquiry"}
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
