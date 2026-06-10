"use server";

export type ContactFormState = {
  success?: boolean;
  message?: string;
  errors?: Partial<
    Record<
      "name" | "email" | "phone" | "company" | "service" | "timeline" | "message",
      string
    >
  >;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const company = formData.get("company")?.toString().trim() ?? "";
  const service = formData.get("service")?.toString().trim() ?? "";
  const timeline = formData.get("timeline")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  const errors: ContactFormState["errors"] = {};

  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (phone && phone.length < 7) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!message) {
    errors.message = "Please tell us about your project or inquiry.";
  } else if (message.length < 20) {
    errors.message = "Please share a bit more detail (at least 20 characters).";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  // Ready for email integration (Resend, SendGrid, etc.)
  console.info("[Contact form]", {
    name,
    email,
    phone: phone || undefined,
    company: company || undefined,
    service: service || undefined,
    timeline: timeline || undefined,
    message,
    submittedAt: new Date().toISOString(),
  });

  return {
    success: true,
    message:
      "Thank you for reaching out. Our team will be in touch soon.",
  };
}
