"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  // Honeypot filled in: a bot. Pretend success so it doesn't retry.
  if (formData.get("company")) {
    return { success: true };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { error: "Please fill in all fields." };
  }
  // Mirrors the form's maxlength; the browser check can be bypassed
  if (name.length > 100 || email.length > 254 || message.length > 5000) {
    return { error: "Your message is too long." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <contact@almadih.dev>",
      to: "modialmadih@gmail.com",
      subject: `New Message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { error: "Failed to send message. Please try again later." };
    }

    return { success: true };
  } catch (err) {
    console.error("Server Error:", err);
    return { error: "An unexpected error occurred." };
  }
}
