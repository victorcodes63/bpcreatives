"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { FormField, Input, Select, Textarea } from "@/components/ui/FormField";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/lib/services";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/contact/actions";

const initialState: ContactFormState = {};

const TIMELINE_OPTIONS = [
  { value: "", label: "Select a timeline" },
  { value: "asap", label: "As soon as possible" },
  { value: "1-3-months", label: "1 to 3 months" },
  { value: "3-6-months", label: "3 to 6 months" },
  { value: "exploring", label: "Just exploring options" },
] as const;

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      queueMicrotask(() => setShowSuccess(true));
    }
  }, [state.success]);

  if (showSuccess && state.message) {
    return (
      <div
        className="flex min-h-[420px] flex-col items-center justify-center border border-bp-green/10 bg-white p-10 text-center sm:p-14"
        role="status"
        aria-live="polite"
      >
        <div className="mb-6 flex size-16 items-center justify-center rounded-full border border-bp-gold/30 bg-bp-cream">
          <CheckCircle2
            size={32}
            className="text-bp-green"
            strokeWidth={1.5}
          />
        </div>
        <h3 className="font-serif text-2xl text-bp-green sm:text-3xl">
          Message received
        </h3>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-bp-black/70">
          {state.message}
        </p>
        <button
          type="button"
          onClick={() => setShowSuccess(false)}
          className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-bp-green underline decoration-bp-gold/60 underline-offset-4 transition-colors hover:text-bp-gold"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className="border border-bp-green/10 bg-white p-8 sm:p-10 lg:p-12"
    >
      <div className="mb-10 border-b border-bp-green/10 pb-8">
        <h2 className="font-serif text-2xl text-bp-green sm:text-3xl">
          Start the conversation
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-bp-black/65">
          Tell us about your brand and what you&apos;re looking to achieve. Every
          great partnership begins with a thoughtful first message.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          id="name"
          label="Full name"
          error={state.errors?.name}
          className="sm:col-span-2"
        >
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            error={!!state.errors?.name}
            aria-describedby={state.errors?.name ? "name-error" : undefined}
            required
          />
        </FormField>

        <FormField id="email" label="Email" error={state.errors?.email}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            error={!!state.errors?.email}
            required
          />
        </FormField>

        <FormField
          id="phone"
          label="Phone"
          optional
          error={state.errors?.phone}
        >
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+254 ..."
            error={!!state.errors?.phone}
          />
        </FormField>

        <FormField id="company" label="Company / Brand" optional>
          <Input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your organisation"
          />
        </FormField>

        <FormField id="service" label="Service of interest" optional>
          <Select id="service" name="service" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </Select>
        </FormField>

        <FormField id="timeline" label="Project timeline" optional>
          <Select id="timeline" name="timeline" defaultValue="">
            {TIMELINE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </FormField>

        <FormField
          id="message"
          label="Your message"
          error={state.errors?.message}
          className="sm:col-span-2"
        >
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your brand, goals, and what success looks like for you..."
            error={!!state.errors?.message}
            required
          />
        </FormField>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-bp-black/50">
          By submitting, you agree to be contacted about your inquiry. We
          respect your privacy and never share your details.
        </p>
        <button
          type="submit"
          disabled={pending}
          className={cn(
            "inline-flex shrink-0 items-center justify-center gap-2.5 border border-bp-gold bg-bp-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-bp-green transition-colors hover:bg-bp-gold/95 disabled:cursor-not-allowed disabled:opacity-70",
          )}
        >
          {pending ? (
            <>
              <Loader2 size={14} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <ArrowRight size={14} strokeWidth={2.5} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
