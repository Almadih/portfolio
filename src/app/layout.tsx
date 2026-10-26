import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#fbfbfd",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://almadih.dev"),
  title: {
    default: "Mohamed Almadih | Senior Backend & Full-Stack Engineer",
    template: "%s | Mohamed Almadih",
  },
  description:
    "Portfolio of Mohamed Almadih – Senior Backend & Full-Stack Engineer with 7+ years of experience architecting scalable distributed systems, high-throughput microservices, and reliable cloud architectures using Python, Laravel, PostgreSQL, Docker, and AWS.",
  keywords: [
    "Mohamed Almadih",
    "Mohamed Ibrahim",
    "Senior Backend Engineer",
    "Full-Stack Developer",
    "Python",
    "Laravel",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Microservices",
    "Distributed Systems",
    "System Design",
    "Vue.js",
    "FastAPI",
    "Sudan",
    "Saudi Arabia",
    "Remote Engineer",
  ],
  authors: [{ name: "Mohamed Almadih", url: "https://almadih.dev" }],
  creator: "Mohamed Almadih",
  alternates: {
    canonical: "https://almadih.dev",
  },
  openGraph: {
    title: "Mohamed Almadih | Senior Backend & Full-Stack Engineer",
    description:
      "Senior Software Engineer with 7+ years of experience in distributed systems, scalable APIs, and cloud architecture with Python, Laravel, PostgreSQL, and Docker.",
    url: "https://almadih.dev",
    siteName: "Mohamed Almadih Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Almadih | Senior Backend & Full-Stack Engineer",
    description:
      "Senior Backend Engineer with 7+ years designing distributed systems, high-availability APIs, and automated CI/CD pipelines.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://almadih.dev/#person",
      name: "Mohamed Almadih",
      alternateName: "Mohamed Ibrahim Mohamed Ahmed",
      url: "https://almadih.dev",
      jobTitle: "Senior Backend & Full-Stack Engineer",
      description:
        "Senior Software Engineer with 7+ years of experience designing and building scalable backend systems, microservices, and reliable cloud architectures.",
      sameAs: [
        "https://github.com/almadih",
        "https://linkedin.com/in/almadih",
      ],
      knowsAbout: [
        "Backend Engineering",
        "System Architecture",
        "Python",
        "Laravel",
        "PostgreSQL",
        "PostGIS",
        "Docker",
        "AWS",
        "Distributed Systems",
        "RESTful APIs",
        "CI/CD Automation",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Bahri",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://almadih.dev/#website",
      url: "https://almadih.dev",
      name: "Mohamed Almadih | Senior Backend & Full-Stack Engineer",
      publisher: {
        "@id": "https://almadih.dev/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased selection:bg-primary/30 min-h-screen`}
      >
        <Toaster position="bottom-right" />
        {children}
      </body>
    </html>
  );
}
