"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Please fill in all fields." };
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
