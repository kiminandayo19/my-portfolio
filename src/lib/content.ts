const PORTFOLIO_CONTENT = {
  experiences: [
    {
      id: "exp-1",
      role: "Full Stack Developer",
      company: "Berijalan Technocenter",
      period: "2024 - Present",
      description: [
        "Led a 4-person frontend team on Moxa Mitra (React Native, 50K+ downloads), remediating critical security vulnerabilities.",
        "Led technical execution of ACCOne platform migration (OutSystems to Next.js + Express.js).",
        "Designed PostgreSQL database schema and built ingestion APIs for huge data migration.",
        "Architected real-time global search functionality with Elasticsearch and Kafka.",
        "Designed and instructed a 13-person internal full-stack bootcamp.",
      ],
    },
    {
      id: "exp-2",
      role: "Front-End Developer",
      company: "Berijalan Technocenter",
      period: "2022 - 2024",
      description: [
        "Developed Otoransi insurance mobile app (React Native, 500+ downloads).",
        "Optimized map performance for 500+ workshop markers.",
        "Integrated Espay client-side SDK for seamless payments.",
        "Promoted to Cell Lead in 2024 due to strong performance.",
      ],
    },
    {
      id: "exp-3",
      role: "Front-End Developer (Freelance)",
      company: "Freelance",
      period: "2024 - 2025",
      description: [
        "Built a CMS dashboard for Forest Fire Hotspot monitoring (Next.js, Leaflet, Zustand).",
        "Integrated spatial tools for real-time monitoring.",
        "Achieved 100 Best Practices score with CI/CD implementation on GCP.",
      ],
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "ACCOne Platform Migration",
      description:
        "Migration of a customer-facing financial platform from legacy OutSystems to modern Next.js 16 + Express.js architecture.",
      tags: ["Next.js", "Express.js", "PostgreSQL", "Kafka", "Elasticsearch"],
      link: null,
    },
    {
      id: "proj-2",
      title: "Moxa Mitra Mobile App",
      description:
        "Partner mobile application with 50K+ downloads. Focused on security improvements and feature stability.",
      tags: ["React Native", "Mobile Security", "Team Leadership"],
      link: null,
    },
    {
      id: "proj-3",
      title: "Forest Fire Hotspot Dashboard",
      description:
        "Real-time environmental monitoring dashboard with interactive maps and spatial analysis tools.",
      tags: ["Next.js", "Leaflet", "Zustand", "GCP", "Tailwind/MUI"],
      link: null,
    },
    {
      id: "proj-4",
      title: "Otoransi Insurance Mobile App",
      description:
        "Insurance mobile application with map integration and payment gateway.",
      tags: ["React Native", "Google Maps API", "Payment Gateway"],
      link: null,
    },
  ],
  skills: [
    {
      id: "skill-1",
      category: "Languages & Frameworks",
      items: [
        "Javascript",
        "TypeScript",
        "React.js",
        "Next.js",
        "React Native",
        "Express.js",
      ],
    },
    {
      id: "skill-2",
      category: "Methodologies",
      items: [
        "Scrum/Agile",
        "Team Leadership",
        "Mentoring",
        "Technical Architecture",
      ],
    },
    {
      id: "skill-3",
      category: "Tools & Infrastructure",
      items: [
        "Git",
        "GitHub",
        "GitLab",
        "Elasticsearch",
        "Kafka",
        "Google Cloud Platform",
      ],
    },
  ],
  profile: {
    id: "profile-1",
    name: "Muhammad Arif Faishal Haq",
    title: "Full-stack Developer",
    email: "arif.faishal.haq@gmail.com",
    linkedin: "https://www.linkedin.com/in/ariffaishalhaq/",
    github: "https://github.com/kiminandayo19",
    location: "Indonesia",
    summary: "Full-stack Developer with over 2 years of experience specializing in the javascript ecosystem (React Native, Next.js). In my role as a Cell Lead, I guide my team on large-scale projects like our current platform migration from Outsystems. I also contribute to growing our team by helping train new developers in our internal bootcamp"
  }
};


export { PORTFOLIO_CONTENT };
