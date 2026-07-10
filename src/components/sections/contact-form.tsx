"use client";

import { Send } from "lucide-react";
import { useState } from "react";

import { siteConfig } from "@/lib/constants";

const serviceOptions = [
  "Website & Web App Development",
  "Custom IT Infrastructure",
  "Data Analytics & Dashboards",
  "Climate-Tech / GIS Solution",
  "NGO / Social Impact System",
  "Business Automation",
  "Innovation Consulting",
];

const budgetRanges = [
  "Exploratory",
  "Below NGN 500,000",
  "NGN 500,000 - NGN 1,500,000",
  "NGN 1,500,000 - NGN 5,000,000",
  "Above NGN 5,000,000",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="glass-panel rounded-lg p-5 sm:p-6"
      onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const lines = [
          `Full Name: ${form.get("fullName")}`,
          `Email Address: ${form.get("email")}`,
          `Phone / WhatsApp: ${form.get("phone")}`,
          `Organization: ${form.get("organization")}`,
          `Service Needed: ${form.get("service")}`,
          `Budget Range: ${form.get("budget")}`,
          "",
          String(form.get("message")),
        ];

        const subject = encodeURIComponent("Project inquiry for NelviusGrey Tech");
        const body = encodeURIComponent(lines.join("\n"));
        window.location.href = `mailto:${siteConfig.email.founder}?subject=${subject}&body=${body}`;
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Full Name
          <input
            required
            name="fullName"
            className="h-11 rounded-md border border-white/10 bg-black/25 px-3 text-white placeholder:text-white/28"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Email Address
          <input
            required
            type="email"
            name="email"
            className="h-11 rounded-md border border-white/10 bg-black/25 px-3 text-white placeholder:text-white/28"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Phone / WhatsApp
          <input
            name="phone"
            className="h-11 rounded-md border border-white/10 bg-black/25 px-3 text-white placeholder:text-white/28"
            placeholder="090..."
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Organization
          <input
            name="organization"
            className="h-11 rounded-md border border-white/10 bg-black/25 px-3 text-white placeholder:text-white/28"
            placeholder="Company, NGO, agency, or team"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Service Needed
          <select
            name="service"
            className="h-11 rounded-md border border-white/10 bg-black/25 px-3 text-white"
          >
            {serviceOptions.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Budget Range
          <select
            name="budget"
            className="h-11 rounded-md border border-white/10 bg-black/25 px-3 text-white"
          >
            {budgetRanges.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76 sm:col-span-2">
          Message
          <textarea
            required
            name="message"
            rows={6}
            className="resize-none rounded-md border border-white/10 bg-black/25 px-3 py-3 text-white placeholder:text-white/28"
            placeholder="Tell us what you want to build, who it is for, and what problem it should solve."
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[color:var(--brand-green)] px-6 text-sm font-semibold text-[#021008] transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_var(--brand-glow)] sm:w-auto"
      >
        Send Project Inquiry
        <Send className="h-4 w-4" />
      </button>
      {sent && (
        <p className="mt-4 text-sm text-[color:var(--brand-green)]">
          Your email app should open with the project details ready to send.
        </p>
      )}
    </form>
  );
}
