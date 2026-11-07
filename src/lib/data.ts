export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  date: string;
  desc: string;
  highlights?: string[];
}

export interface ProjectItem {
  projectName: string;
  projectDesc: string;
  tags: string[];
  link?: string;
}

export const portfolioData = {
  greeting: {
    username: "Mohamed Almadih",
    title: "Mohamed Almadih",
    subTitle:
      "Senior Backend Engineer with 7 years of building and running production systems in Laravel, Python, and Node.js. Known for taking over neglected codebases and making them tested, secure, and fast.",
    resumeLink: "/Mohamed Ibrahim - Software Engineer.pdf",
  },
  socialMediaLinks: {
    github: "https://github.com/almadih",
    linkedin: "https://linkedin.com/in/almadih",
    gmail: "modialmadih@gmail.com",
    website: "https://almadih.dev",
    blog: "https://blog.almadih.dev/",
  },
  skillsSection: {
    title: "What I do",
    subTitle: "SENIOR BACKEND & FULL-STACK ENGINEER",
    skills: [
      "⚡ Build and run production APIs and data pipelines with Laravel, Python, and Node.js",
      "⚡ Take over legacy codebases and refactor them in steps, without pausing feature delivery",
      "⚡ Introduce automated testing where none exists, and make it a safety net for releases",
      "⚡ Find and fix slow queries with indexing, partitioning, and caching as usage grows",
    ],
  },
  educationInfo: {
    schools: [
      {
        schoolName: "University of Bahri",
        subHeader: "Honors Bachelor in Information Technology",
        duration: "2021",
        desc: "GPA: 3.45",
      },
    ],
  },
  workExperiences: [
    {
      role: "Fullstack Developer",
      company: "Agilium",
      location: "Riyadh, Saudi Arabia - Remote",
      date: "March 2025 - Present",
      desc: "Procurement planning and process automation platform (Laravel API, React frontend). Small team that also delivers client projects.",
      highlights: [
        "Drove the modernization of a legacy Laravel API that had no tests, tangled structure, dead code, and unused dependencies. Refactored most of the codebase in steps, without pausing feature delivery.",
        "Built the backend test suite from zero to about 80% coverage, giving later refactors and releases a safety net.",
        "Hardened error handling, security, and query performance across every module rewritten.",
        "Migrated all React data fetching to React Query, adding caching and consistent server-state management.",
        "Own features end to end, from planning through the Laravel API and the React UI.",
      ],
    },
    {
      role: "Software Engineer",
      company: "StrangeLogic",
      location: "Khartoum",
      date: "August 2021 - January 2024",
      desc: "Startup of about 6 people behind a platform for finding and registering domains.",
      highlights: [
        "Designed and built most of Domain Intelligence, a distributed crawling platform (Python, Celery, Docker) that collected domain and SEO data for a data product.",
        "Ran it in production at about 100,000 websites a day and terabyte-scale data. Used data partitioning to keep queries fast as volume grew.",
        "Built most of Bravo Tango, a data service for LinkedIn profile scraping and email validation, with async processing on Celery and Redis.",
        "Exposed Bravo Tango through a REST API, a CLI, and webhooks for client integrations, with gRPC between internal services.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Freelance",
      location: "Khartoum",
      date: "October 2019 - Present",
      desc: "Backend and fullstack work for clients in Sudan and Saudi Arabia.",
      highlights: [
        "Lead engineer on a live Laravel and Vue.js learning platform with about 600 students. Hired in October 2025 for a feature contract, then kept on to own bugs, security, and deployments.",
        "Fixed slow pages on the platform by optimizing the database queries that degraded as the student base grew.",
        "Redesigned the platform's entire UI in stages, ending with a new landing page.",
        "Built backend and frontend for fintech products: a payments platform for a Saudi client (TourPay, Laravel and Vue.js), a money transfer platform (Node.js and Vue.js), and a digital wallet (Node.js and Vue.js).",
        "Also delivered a store management system (Laravel and React) and a delivery app backend (Node.js).",
      ],
    },
  ] as WorkExperience[],
  projects: [
    {
      projectName: "X/Twitter Video Bot",
      projectDesc:
        "Telegram bot for downloading X/Twitter videos, with 40,000+ users, about 10,000 monthly active users, and 1,000+ downloads a day. Cut database reads as usage grew with covering indexes, indexed UNION queries, and in-memory caching of aggregate stats. Monetized with paid plans, and run through a broadcast engine, channel auto-posting, and an admin dashboard.",
      tags: ["TypeScript", "Cloudflare Workers", "D1", "Telegram"],
      link: "https://t.me/twitter_vid_dl_bot",
    },
    {
      projectName: "Hindsight",
      projectDesc:
        "Free chess game review tool that grades every move, estimates accuracy and rating, and adds AI coach notes, from a pasted game or a Chess.com or Lichess username. Runs Stockfish in the browser, with a FastAPI service on Cloudflare Workers classifying moves, backed by D1, KV, and Workers AI.",
      tags: ["Python", "FastAPI", "Cloudflare Workers", "Stockfish", "Next.js", "D1", "Workers AI"],
      link: "https://hindsight.almadih.dev/",
    },
    {
      projectName: "Chess Academy",
      projectDesc:
        "Local-first training app that imports a player's full Chess.com and Lichess history and analyzes every game with Stockfish on background worker threads. Turns the analysis into a training plan: recurring mistakes, opening lines that keep going wrong, and spaced-repetition puzzles built from the player's own errors.",
      tags: ["Python", "FastAPI", "SQLite", "Stockfish", "Next.js"],
      link: "https://github.com/Almadih/chess-academy",
    },
    {
      projectName: "diffcv",
      projectDesc:
        "AI platform for writing and tailoring resumes and cover letters, ready for launch. Subscription billing on RevenueCat and Stripe with authenticated, idempotent webhooks, and per-user AI quotas that only count usage after a generation succeeds.",
      tags: ["Next.js", "Prisma", "NextAuth", "Stripe", "RevenueCat"],
    },
    {
      projectName: "Domain Intelligence",
      projectDesc:
        "Distributed crawling platform that collected domain and SEO data for a data product. Ran in production at about 100,000 websites a day and terabyte-scale data, with data partitioning to keep queries fast as volume grew.",
      tags: ["Python", "Celery", "Docker", "Data Partitioning"],
    },
    {
      projectName: "Bravo Tango",
      projectDesc:
        "Data service for LinkedIn profile scraping and email validation, with async processing on Celery and Redis. Exposed through a REST API, a CLI, and webhooks for client integrations, with gRPC between internal services.",
      tags: ["Python", "Celery", "Redis", "gRPC", "Webhooks"],
    },
  ] as ProjectItem[],
  contactInfo: {
    title: "Contact Me ☎️",
    subtitle: "Discuss a project, collaborate on system architecture, or just say hi. My inbox is always open.",
    number: "+249-129-709-315",
    email: "modialmadih@gmail.com",
    location: "Khartoum, Sudan",
  },
};
