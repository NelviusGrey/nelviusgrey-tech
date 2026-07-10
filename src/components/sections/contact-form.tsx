"use client";

import { Send } from "lucide-react";
import { useState } from "react";

import { serviceCapabilities, siteConfig } from "@/lib/constants";

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
  | { state: "success"; message: string }
  | { state: "error"; message: string };

function stringify(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value : "";
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });

  return (
    <form
      className="border border-white/10 bg-[#060806]/80 p-5 sm:p-6"
      onSubmit={async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        if (!form.reportValidity()) {
          return;
        }

        const subject = `Project enquiry from ${stringify(formData.get("organisation"))}`;
        const body = [
          `Full name: ${stringify(formData.get("fullName"))}`,
          `Email: ${stringify(formData.get("email"))}`,
          `Phone / WhatsApp: ${stringify(formData.get("phone"))}`,
          `Organisation: ${stringify(formData.get("organisation"))}`,
          `Service needed: ${stringify(formData.get("service"))}`,
          `Project stage: ${stringify(formData.get("stage"))}`,
          `Budget range: ${stringify(formData.get("budget"))}`,
          `Timeline: ${stringify(formData.get("timeline"))}`,
          "",
          "Project description:",
          stringify(formData.get("description")),
        ].join("\n");

        const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        if (mailto.length > 1900) {
          setStatus({
            state: "error",
            message:
              "This message is a little too long for an email link. Please shorten it or use WhatsApp/phone above.",
          });
          return;
        }

        window.location.href = mailto;
        setStatus({
          state: "success",
          message:
            "Your email app should open with the enquiry prepared. Send it from there and we will reply.",
        });
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
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[color:var(--brand-green)] px-6 text-sm font-semibold text-[#021008] transition hover:-translate-y-0.5 sm:w-auto"
      >
        Send Project Enquiry
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
