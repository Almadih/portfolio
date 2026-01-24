import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://almadih.dev"), // Replace with your actual domain
  title: "Mohamed Almadih | Full-Stack Software Engineer",
  description: "Portfolio of Mohamed Almadih, an experienced Full-Stack Software Engineer specializing in Laravel, Vue.js, Node.js, and DevOps.",
  keywords: ["Mohamed Almadih", "Software Engineer", "Full-Stack Developer", "Laravel", "Vue.js", "Node.js", "Portfolio", "Egypt", "Sudan"],
  authors: [{ name: "Mohamed Almadih" }],
  openGraph: {
    title: "Mohamed Almadih | Full-Stack Software Engineer",
    description: "Experienced Full-Stack Software Engineer with 5+ years of expertise in building scalable web applications.",
    url: "https://almadih.dev", // Replace with your actual domain
    siteName: "Mohamed Almadih Portfolio",
    images: [
      {
        url: "/og-image.png", // You should add an OG image to public/
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Almadih | Full-Stack Software Engineer",
    description: "Experienced Full-Stack Software Engineer specializing in Laravel, Vue.js, and Node.js.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased selection:bg-primary/30`}
      >
        <Toaster position="bottom-right" />
        {children}
      </body>
    </html>
  );
}
