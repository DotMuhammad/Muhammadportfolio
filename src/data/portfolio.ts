export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'Full-Stack' | 'Frontend' | 'AI & Tools';
  featured: boolean;
  technologies: string[];
  metrics?: string;
  highlights: string[];
  liveUrl: string;
  githubUrl: string;
  previewGradient: string;
  mockupType: 'dashboard' | 'ecommerce' | 'ai' | 'analytics';
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Proficient"
    iconName: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  year: string;
  period: string;
  role: string;
  focus: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Muhammad Bin Qasim",
    shortName: "MBQ",
    title: "Full-Stack Developer & Creative Builder",
    headline: "I design and build modern web applications with clean interfaces, scalable architecture, and meaningful user experiences.",
    availability: "Available for new projects & opportunities",
    location: "Global Remote",
    timezone: "UTC+5 (Flexible overlap)",
    email: "binqasim.dev@example.com",
    github: "https://github.com/muhammadbinqasim",
    linkedin: "https://linkedin.com/in/muhammadbinqasim",
    xTwitter: "https://x.com/muhammadbinqasim",
    yearsExperience: "3+",
    completedProjects: "18+",
    technologiesCount: "20+",
    satisfactionRate: "99%",
  },
  
  about: {
    heading: "About Me",
    subheading: "Bridging the gap between ambitious interface design and resilient server infrastructure.",
    paragraphs: [
      "I'm Muhammad Bin Qasim, a passionate full-stack developer dedicated to crafting modern, reliable, and visually engaging digital products. I believe the best software lives at the intersection of aesthetic restraint and high-performance engineering.",
      "My approach balances modern frontend craftsmanship—intuitive layouts, fluid transitions, and responsive precision—with robust backend principles including clean API design, type-safe data pipelines, and optimized query execution.",
      "Whether architecting a distributed web application from scratch or fine-tuning user micro-interactions, I focus on building sustainable software that feels effortless to use and maintain."
    ],
    highlights: [
      {
        title: "Frontend Engineering",
        description: "Pixel-perfect interfaces using React, Next.js, and TypeScript with strict accessibility and sub-second load times."
      },
      {
        title: "Backend Architecture",
        description: "Scalable REST & GraphQL services with Node.js, Express, and PostgreSQL, focusing on security and resilience."
      },
      {
        title: "Design Systems & UI/UX",
        description: "Systematic UI components, micro-interactions, and responsive layouts tailored for clarity and engagement."
      },
      {
        title: "Performance & DX",
        description: "Zero-bloat bundle hygiene, automated testing, modern build tooling, and continuous integration pipelines."
      }
    ],
    stats: [
      { label: "Years of Craft", value: "3+" },
      { label: "Completed Projects", value: "18+" },
      { label: "Technologies Mastered", value: "24+" },
      { label: "Client Satisfaction", value: "99%" },
    ]
  },

  services: [
    {
      id: "web-dev",
      number: "01",
      title: "Web Development",
      description: "Build fast, scalable, and responsive web applications engineered for seamless cross-device performance and high conversion.",
      features: ["Next.js & React SPA/SSR", "Responsive mobile-first layouts", "SEO & Core Web Vitals optimization"],
      icon: "Code2"
    },
    {
      id: "ui-dev",
      number: "02",
      title: "UI / UX Development",
      description: "Transform creative ideas and Figma concepts into polished, interactive interfaces with purposeful micro-animations.",
      features: ["Design system architecture", "Framer Motion micro-interactions", "Accessible WCAG AA standards"],
      icon: "Palette"
    },
    {
      id: "fullstack",
      number: "03",
      title: "Full-Stack Solutions",
      description: "Develop complete applications from frontend clients to backend APIs, authentication, and database orchestration.",
      features: ["Node.js & Express REST APIs", "PostgreSQL & Prisma data modeling", "Secure JWT & OAuth 2.0 auth flows"],
      icon: "Layers"
    },
    {
      id: "optimization",
      number: "04",
      title: "Performance & Optimization",
      description: "Audit and eliminate frontend bottlenecks, streamline data fetching, and enhance system reliability and speed.",
      features: ["Lighthouse 95+ score targets", "Database query optimization", "Code splitting & asset compression"],
      icon: "Zap"
    }
  ] as ServiceItem[],

  skillCategories: [
    {
      name: "Frontend",
      description: "Building expressive, ultra-responsive web interfaces with modern frameworks",
      skills: [
        { name: "TypeScript", level: "Advanced", iconName: "Code", description: "Strict static typing, interfaces, generics" },
        { name: "React", level: "Advanced", iconName: "Layers", description: "Hooks, custom state orchestration, suspense" },
        { name: "Next.js", level: "Advanced", iconName: "Globe", description: "App router, SSR, server components, API routes" },
        { name: "Tailwind CSS", level: "Advanced", iconName: "Palette", description: "Utility-first design, custom themes, dark mode" },
        { name: "HTML5 & CSS3", level: "Advanced", iconName: "FileCode", description: "Semantic markup, modern grid, flexbox, animations" },
        { name: "Framer Motion", level: "Proficient", iconName: "Sparkles", description: "Layout animations, gestures, scroll triggers" }
      ]
    },
    {
      name: "Backend",
      description: "Constructing reliable server runtimes and secure data workflows",
      skills: [
        { name: "Node.js", level: "Advanced", iconName: "Server", description: "Asynchronous runtime, streams, microservices" },
        { name: "Express", level: "Advanced", iconName: "Cpu", description: "RESTful architecture, middleware pipelines, error handling" },
        { name: "REST APIs", level: "Advanced", iconName: "Network", description: "Idempotent endpoints, pagination, versioning" },
        { name: "Authentication", level: "Proficient", iconName: "Lock", description: "JWT, session management, OAuth 2.0, RBAC" }
      ]
    },
    {
      name: "Databases & Cloud",
      description: "Designing structured schemas, data caching, and serverless hosting",
      skills: [
        { name: "PostgreSQL", level: "Proficient", iconName: "Database", description: "Relational modeling, indexing, ACID transactions" },
        { name: "MongoDB", level: "Proficient", iconName: "Boxes", description: "Document collections, aggregation pipelines" },
        { name: "MySQL", level: "Proficient", iconName: "Database", description: "Schema normalization, joins, migrations" },
        { name: "Redis", level: "Proficient", iconName: "Flame", description: "In-memory caching, pub/sub, rate limiting" }
      ]
    },
    {
      name: "Tools & DevOps",
      description: "Modern developer workflow tools, version control, and containerization",
      skills: [
        { name: "Git & GitHub", level: "Advanced", iconName: "GitBranch", description: "Branching strategies, CI/CD actions, code reviews" },
        { name: "Docker", level: "Proficient", iconName: "Container", description: "Containerization, multi-stage builds, compose" },
        { name: "Vercel / Cloud Run", level: "Advanced", iconName: "Cloud", description: "Production deployments, serverless functions, DNS" },
        { name: "VS Code & Tooling", level: "Advanced", iconName: "Terminal", description: "ESLint, Prettier, debugging workflows" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "project-01",
      title: "PulseFlow SaaS Analytics",
      tagline: "Real-time enterprise dashboard with live telemetry and role-based workspaces",
      description: "A responsive full-stack telemetry platform featuring real-time metric streams, modular widgets, customizable team access, and automated data exports.",
      longDescription: "Built for teams needing clear insights into application metrics and user retention. Designed with sub-100ms client interactions, optimized data aggregation pipelines, and comprehensive dark-mode visualization charts.",
      category: "Full-Stack",
      featured: true,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
      metrics: "99.8% test coverage · Sub-50ms response",
      highlights: [
        "Modular dashboard cards with drag-and-drop reorganization",
        "Role-based permission hierarchy (Admin, Editor, Observer)",
        "Automated report generation in CSV and formatted PDF",
        "Comprehensive keyboard shortcuts for power workflows"
      ],
      liveUrl: "https://example.com/pulseflow-demo",
      githubUrl: "https://github.com/muhammadbinqasim/pulseflow-saas",
      previewGradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
      mockupType: "dashboard"
    },
    {
      id: "project-02",
      title: "Aura Commerce Suite",
      tagline: "Ultra-fast headless commerce platform with instant search and cart synchronization",
      description: "A modern full-stack e-commerce experience featuring instant catalog indexing, frictionless guest and authenticated checkouts, and resilient inventory sync.",
      longDescription: "Engineered to deliver instantaneous page transitions with zero layout shift. Features optimistic UI updates for cart items, multi-currency support, and clean checkout validation.",
      category: "Full-Stack",
      featured: true,
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Stripe API"],
      metrics: "Lighthouse 98 Performance · Instant filter",
      highlights: [
        "Instant client-side catalog filtering without full page reload",
        "Persistent cart synchronization across multiple tabs and devices",
        "Secure checkout pipeline with webhook idempotency",
        "Adaptive mobile layout optimized for thumb-reach interactions"
      ],
      liveUrl: "https://example.com/aura-commerce-demo",
      githubUrl: "https://github.com/muhammadbinqasim/aura-commerce",
      previewGradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
      mockupType: "ecommerce"
    },
    {
      id: "project-03",
      title: "Nova AI Workspace",
      tagline: "Context-aware AI productivity engine with semantic search and markdown export",
      description: "An intelligent workspace assistant that synthesizes long-form documents, generates structured technical drafts, and organizes developer notes seamlessly.",
      longDescription: "Combines modern language model streaming responses with a clean distraction-free editor. Includes multi-modal input processing, history timeline, and syntax-highlighted code blocks.",
      category: "AI & Tools",
      featured: true,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "Vector Embeddings"],
      metrics: "Streaming latency < 200ms · 100% Client-side privacy mode",
      highlights: [
        "Low-latency token streaming with markdown & syntax highlighting",
        "Document-grounded contextual recall and summarization",
        "Clean minimal canvas layout with customizable workspace panes",
        "One-click export to GitHub Gist, Markdown, and plain text"
      ],
      liveUrl: "https://example.com/nova-workspace-demo",
      githubUrl: "https://github.com/muhammadbinqasim/nova-ai-workspace",
      previewGradient: "from-violet-500/20 via-purple-500/10 to-pink-500/20",
      mockupType: "ai"
    },
    {
      id: "project-04",
      title: "Apex Developer Toolkit",
      tagline: "Lightweight browser utility suite for rapid regex, JSON formatting, and API testing",
      description: "A developer utility suite featuring zero-latency JSON schema validation, regex debugging, token generation, and curl-to-fetch code conversion.",
      longDescription: "Crafted to eliminate tab fatigue for developers. Runs completely offline in the browser using Web Workers for computationally intensive schema inspections.",
      category: "Frontend",
      featured: false,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Web Workers"],
      metrics: "Zero external dependencies · 100% offline capable",
      highlights: [
        "Offline-first PWA architecture with local storage persistence",
        "Instant syntax formatting for JSON, YAML, and SQL",
        "Built-in JWT inspector and visual cryptographic signature verifier"
      ],
      liveUrl: "https://example.com/apex-toolkit-demo",
      githubUrl: "https://github.com/muhammadbinqasim/apex-toolkit",
      previewGradient: "from-amber-500/20 via-orange-500/10 to-red-500/20",
      mockupType: "analytics"
    }
  ] as Project[],

  experience: [
    {
      year: "2026",
      period: "Present",
      role: "Full-Stack Development & Architecture",
      focus: "Scalable Web Systems & Cloud Workflows",
      description: "Building production-grade web applications with Next.js, TypeScript, and modern backend services. Focusing on resilient distributed architectures, sub-second response times, and component systems.",
      achievements: [
        "Architected scalable frontend platforms with strict TypeScript typing and accessibility standards",
        "Constructed high-throughput REST APIs and database schema migrations with automated testing",
        "Integrated AI and automated data workflows into production interfaces"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Docker"]
    },
    {
      year: "2025",
      period: "2025",
      role: "Frontend Engineer & UI Specialist",
      focus: "Modern Web Interfaces & Performance Optimization",
      description: "Focused on creating fluid user experiences, design systems, and responsive web applications with React, Tailwind CSS, and Framer Motion.",
      achievements: [
        "Developed custom design systems and interactive UI component libraries",
        "Optimized Web Vitals across multi-page client applications to achieve 95+ scores",
        "Implemented state management pipelines and client-side data caching strategies"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "REST APIs", "Git"]
    },
    {
      year: "2024",
      period: "2024",
      role: "Web Development Foundations",
      focus: "Core JavaScript, Algorithms & Backend Fundamentals",
      description: "Built rigorous foundational competence in modern JavaScript, responsive CSS layouts, database design, and software engineering principles.",
      achievements: [
        "Constructed foundational full-stack CRUD applications with Node.js and SQL databases",
        "Mastered Git workflows, clean code principles, and semantic HTML accessibility",
        "Completed comprehensive engineering roadmaps covering algorithms and web protocols"
      ],
      technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "Node.js", "Express", "MongoDB"]
    }
  ] as ExperienceItem[],

  contact: {
    heading: "Let's Build Something Great",
    subheading: "Have an idea, project, or opportunity? I'm always open to discussing technical collaborations, full-stack engineering roles, or ambitious digital products.",
    email: "binqasim.dev@example.com",
    location: "Available Globally / Remote",
    responseExpectation: "Prompt response within 24 hours"
  }
};
