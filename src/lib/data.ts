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

export interface SoftwareSkill {
  skillName: string;
  icon: string;
}

export const portfolioData = {
  greeting: {
    username: "Mohamed Almadih",
    title: "Mohamed Almadih",
    subTitle:
      "Senior Software & Backend Engineer with 7+ years of experience designing and building scalable backend architectures, high-throughput microservices, and reliable cloud systems using Python, Laravel, PostgreSQL, Docker, and AWS.",
    resumeLink: "/Mohamed Ibrahim - Software Engineer.pdf",
  },
  socialMediaLinks: {
    github: "https://github.com/almadih",
    linkedin: "https://linkedin.com/in/almadih",
    gmail: "modialmadih@gmail.com",
    website: "https://almadih.dev",
  },
  skillsSection: {
    title: "What I do",
    subTitle: "SENIOR BACKEND & FULL-STACK ENGINEER",
    skills: [
      "⚡ Design and deploy scalable REST APIs & distributed microservices with Laravel, Python, & Node.js",
      "⚡ Architect secure, high-performance database systems with PostgreSQL, PostGIS, & Redis",
      "⚡ Build robust automated CI/CD pipelines, containerization with Docker, and cloud deployments",
      "⚡ Refactor legacy architectures for 50%+ response time reduction and 99.9%+ high availability",
    ],
    softwareSkills: [
      { skillName: "Python", icon: "python" },
      { skillName: "Laravel", icon: "laravel" },
      { skillName: "PHP", icon: "php" },
      { skillName: "PostgreSQL", icon: "database" },
      { skillName: "Docker", icon: "docker" },
      { skillName: "TypeScript", icon: "typescript" },
      { skillName: "JavaScript", icon: "js" },
      { skillName: "Vue.js", icon: "vue" },
      { skillName: "React", icon: "react" },
      { skillName: "Node.js", icon: "node" },
      { skillName: "Next.js", icon: "next" },
      { skillName: "Redis", icon: "redis" },
      { skillName: "Linux", icon: "linux" },
      { skillName: "CI/CD", icon: "cicd" },
      { skillName: "Flutter", icon: "flutter" },
      { skillName: "AWS", icon: "aws" },
    ],
  },
  educationInfo: {
    schools: [
      {
        schoolName: "University of Bahri",
        subHeader: "Honor Bachelor in Information Technology",
        duration: "2021",
        desc: "GPA: 3.45 | Honor Degree",
      },
    ],
  },
  workExperiences: [
    {
      role: "Fullstack Developer",
      company: "Agilium",
      location: "Riyadh, Saudi Arabia - Remote",
      date: "March 2025 - Present",
      desc: "Engineering scalable REST APIs, backend microservices, and automated CI/CD pipelines supporting 10+ production applications.",
      highlights: [
        "Designed and deployed scalable REST APIs and backend microservices using Laravel and PostgreSQL, supporting 10+ production applications and 20+ third-party integrations, achieving 50% reduction in response time and 99.95% uptime.",
        "Optimized backend services by refactoring legacy code and implementing design patterns, resulting in a 30% reduction in response time and 45% improvement in maintainability via Python, Redis, and unit tests.",
        "Refactored frontend components using Vue 3 Composition API, cutting load time by 40% and raising Lighthouse performance score from 70 to 95.",
        "Engineered automated CI/CD pipelines using Docker and GitHub Actions, cutting deployment time by 70% and increasing deployment frequency from weekly to daily.",
        "Achieved 85% test coverage and reduced regression bugs by 70% by implementing unit and integration tests using Pytest.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Freelancer",
      location: "Khartoum | Remote",
      date: "October 2019 - Present",
      desc: "Architected 12+ custom web applications and secure backend systems for fintech, logistics, e-commerce, and SaaS clients.",
      highlights: [
        "Architected and implemented 12+ custom web applications using Python, Node.js, Vue.js, React, and Flutter, optimizing backend performance by 40% and reducing page load times by 50%.",
        "Architected secure, scalable backend systems and RESTful APIs using Python, Node.js, and PostgreSQL, achieving 99.9% uptime and reducing infrastructure costs by 30%.",
        "Engineered and integrated 20+ payment gateways, authentication systems, and third-party APIs into production with automated testing.",
        "Engineered high-performance backend systems achieving sub-100ms API response times through advanced database indexing and query optimization.",
        "Guided 12+ projects from conception to production with Agile methodologies and CI/CD pipelines, cutting post-release defects by 35%.",
      ],
    },
    {
      role: "Software Engineer",
      company: "StrangeLogic",
      location: "Khartoum | Remote",
      date: "August 2021 - January 2024",
      desc: "Built distributed scraping systems, automation scripts, and Linux-optimized backend services handling 500GB+ daily data.",
      highlights: [
        "Architected and implemented 20+ Python-based backend services and automation scripts, optimizing API response times by 50% and reducing deployment errors by 25%.",
        "Architected and optimized production software for Linux using Python and JavaScript, achieving 99.9% uptime and reducing memory usage by 25%.",
        "Architected distributed data processing and web scraping systems using Python, Scrapy, and Apache Spark, scaling to handle 500GB+ daily data ingestion with sub-second latency.",
        "Elevated code quality by driving peer code reviews and debugging initiatives that cut production defects by 30%.",
        "Engineered customer-focused software solutions maintaining 99.9% uptime and sub-200ms response times via microservices architecture.",
      ],
    },
  ] as WorkExperience[],
  projects: [
    {
      projectName: "InfraReport",
      projectDesc:
        "Cross-platform mobile app and real-time dashboard for infrastructure damage reporting adopted by 500+ field agents with geotagged photo capture and offline sync. Scalable Laravel backend with PostgreSQL & PostGIS handling 10K+ concurrent requests with sub-second spatial queries.",
      tags: ["Flutter", "Laravel", "PostgreSQL", "PostGIS", "Vue.js", "WebSocket"],
      link: "https://github.com/Almadih/infra-report-dashboard",
    },
    {
      projectName: "Domain Intelligence",
      projectDesc:
        "Distributed web crawling platform processing over 100,000 websites daily across 50+ data sources. Engineered range and hash data partitioning strategies with optimized APIs, delivering 10x throughput and sub-second latency on terabyte datasets.",
      tags: ["Python", "Docker", "Bash", "Celery", "Distributed Systems"],
    },
    {
      projectName: "TourPay",
      projectDesc:
        "Digital payment platform with wallet functionality processing $2M+ in monthly transactions. Integrated PayPal and Stripe APIs, with OAuth 2.0 and webhook infrastructure enabling seamless integration for 200+ third-party applications.",
      tags: ["Laravel", "PostgreSQL", "Vue.js", "TypeScript", "Node.js", "Stripe"],
    },
    {
      projectName: "Bravo Tango",
      projectDesc:
        "Scalable web scraping platform processing 100,000+ LinkedIn profiles daily with 99.9% uptime. High-performance email validation (99.5% accuracy) with Celery, Redis, and event-driven webhook architecture across 30+ microservices.",
      tags: ["Python", "gRPC", "Celery", "Redis", "Event-Driven"],
    },
  ] as ProjectItem[],
  achievementsSection: {
    title: "Achievements & Certifications 🏆",
    subtitle: "Achievements, Certifications, and Award Letters from my journey.",
    achievements: [
      {
        title: "Google Code-In Finalist",
        subtitle: "Selected as a Google Code-in Finalist from 4000 students from 77 different countries.",
        image: "/codeInLogo.webp",
        link: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
      },
      {
        title: "Google Assistant Action",
        subtitle: "Developed 'JavaScript Guru', available on 2 Billion devices worldwide.",
        image: "/googleAssistantLogo.webp",
        link: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
      },
      {
        title: "PWA Web App Developer",
        subtitle: "Completed Certification for PWA Web App Development.",
        image: "/pwaLogo.webp",
        link: "https://pakistan-olx-1.firebaseapp.com/",
      },
    ],
  },
  contactInfo: {
    title: "Contact Me ☎️",
    subtitle: "Discuss a project, collaborate on system architecture, or just say hi. My inbox is always open.",
    number: "+249-129-709-315",
    email: "modialmadih@gmail.com",
    location: "Khartoum, Sudan / Alexandria, Egypt",
  },
};
