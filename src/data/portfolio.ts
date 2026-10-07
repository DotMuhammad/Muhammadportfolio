export interface Metric {
  label: string;
  value: string;
}

export interface CaseStudy {
  overview: string;
  problem: string;
  idea: string;
  design: string;
  architecture: string;
  results: string[];
}

export interface Project {
  id: string;
  name: string;
  displayName: string;
  tagline: string;
  description: string;
  technologies: string[];
  language: string;
  githubUrl: string;
  liveUrl?: string;
  category: 'Web Platform' | 'Full-Stack' | 'Frontend' | 'AI & Tools' | 'Mobile & Systems';
  featured?: boolean;
  metrics: Metric[];
  features: string[];
  caseStudy: CaseStudy;
  previewGradient: string;
  mockupType: 'dashboard' | 'ecommerce' | 'ai' | 'analytics' | 'workflow' | 'tool';
}

export interface SkillNode {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Databases & Cloud' | 'Tools & DevOps';
  level: 'Expert' | 'Advanced' | 'Proficient';
  experienceYears: string;
  description: string;
  relations: string[];
  iconName: string;
}

export interface LabItem {
  id: string;
  title: string;
  category: 'UI Experiments' | 'Brand & Graphics' | 'Motion & Canvas';
  date: string;
  description: string;
  tags: string[];
  accentColor: 'cyan' | 'blue' | 'emerald' | 'purple' | 'amber';
  badge: string;
  details: string;
}

export interface ExperienceItem {
  year: string;
  title: string;
  desc: string;
  focus: string;
  achievements: string[];
  technologies: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    firstName: "MUHAMMAD",
    lastName: "BIN QASIM",
    fullName: "Muhammad Bin Qasim",
    handle: "muhammadbinqasim",
    title: "Full-Stack Developer & Creative Builder",
    specialties: [
      "Full-Stack Web Architect",
      "Creative UI/UX Engineer",
      "Scalable System Builder",
      "Cloud & API Specialist"
    ],
    taglineLine1: "Full-Stack Developer & Creative Builder",
    taglineLine2: "Modern Web & Architecture",
    availability: "Available for Projects & Remote Roles",
    bio: "I build modern web experiences, interactive applications, scalable architectures, and creative digital products.",
    longBio: "I'm Muhammad Bin Qasim, a passionate full-stack developer dedicated to crafting modern, reliable, and visually engaging digital products. I believe the best software lives at the intersection of aesthetic restraint and high-performance engineering. From fluid user interfaces to resilient backend APIs, every line of code is written with intent.",
    quote: `"Great software is where mathematical precision meets intuitive craftsmanship. If it doesn't feel instant, effortless, and accessible, the work isn't done."`,
    email: "binqasim.dev@example.com",
    githubUrl: "https://github.com/muhammadbinqasim",
    linkedinUrl: "https://linkedin.com/in/muhammadbinqasim",
    location: "Global Remote",
    timezone: "UTC+5 (Flexible overlap)",
    stats: {
      publicRepos: "18+",
      liveWebApps: "12+",
      commitment: "100%",
      clientSatisfaction: "99%"
    }
  },

  journey: [
    {
      year: "2026",
      title: "Advanced Full-Stack Systems & Distributed Architecture",
      desc: "Architecting modern high-throughput web applications with Next.js, React 19, TypeScript, and micro-backend services.",
      focus: "Cloud Systems & Scalability",
      achievements: [
        "Constructed resilient web platforms with sub-second API latencies",
        "Designed accessible, type-safe design systems with Tailwind CSS",
        "Implemented real-time client state pipelines and database index optimizations"
      ],
      technologies: ["Next.js", "React 19", "TypeScript", "Node.js", "PostgreSQL", "Docker"]
    },
    {
      year: "2025",
      title: "Frontend Engineering & High-Performance UI Craft",
      desc: "Specialized in responsive web performance, Framer Motion micro-interactions, and design token integration.",
      focus: "UI/UX & Interactive Interfaces",
      achievements: [
        "Delivered zero-layout-shift frontend architectures with 95+ Core Web Vitals",
        "Built modular component libraries with accessible keyboard navigation",
        "Integrated modern REST and WebSocket telemetry streams"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "REST APIs"]
    },
    {
      year: "2024",
      title: "Core Software Engineering Foundations",
      desc: "Built foundational competence in modern JavaScript, data structures, relational database normalization, and web protocols.",
      focus: "Web Foundations & Algorithms",
      achievements: [
        "Developed full-stack CRUD applications with Node.js and SQL engines",
        "Mastered Git branching conventions and automated CI/CD workflows",
        "Prioritized clean code, modular architecture, and semantic HTML"
      ],
      technologies: ["JavaScript (ES6+)", "Node.js", "Express", "HTML5/CSS3", "Git"]
    }
  ] as ExperienceItem[],

  skills: [
    {
      id: "typescript",
      name: "TypeScript",
      category: "Frontend",
      level: "Expert",
      experienceYears: "3+ Years",
      description: "Strict compile-time safety, generics, mapped types, and robust interfaces across full-stack applications.",
      relations: ["react", "nextjs", "nodejs"],
      iconName: "Code"
    },
    {
      id: "react",
      name: "React 19",
      category: "Frontend",
      level: "Expert",
      experienceYears: "3+ Years",
      description: "Modern hooks, concurrent rendering, server components, and responsive state orchestrations.",
      relations: ["nextjs", "typescript", "tailwind"],
      iconName: "Layers"
    },
    {
      id: "nextjs",
      name: "Next.js",
      category: "Frontend",
      level: "Expert",
      experienceYears: "2+ Years",
      description: "App Router, SSR, SSG, edge middleware, dynamic routing, and search engine optimization.",
      relations: ["react", "typescript", "nodejs"],
      iconName: "Globe"
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      category: "Frontend",
      level: "Expert",
      experienceYears: "3+ Years",
      description: "Utility-first CSS architecture, bespoke design tokens, fluid clamp sizing, and dark mode systems.",
      relations: ["react", "motion"],
      iconName: "Palette"
    },
    {
      id: "motion",
      name: "Framer Motion",
      category: "Frontend",
      level: "Advanced",
      experienceYears: "2+ Years",
      description: "Kinetic animations, layout projections, spring physics, and scroll-linked viewport transitions.",
      relations: ["react", "tailwind"],
      iconName: "Sparkles"
    },
    {
      id: "nodejs",
      name: "Node.js",
      category: "Backend",
      level: "Expert",
      experienceYears: "3+ Years",
      description: "Asynchronous I/O pipelines, custom middlewares, worker threads, and scalable server runtimes.",
      relations: ["express", "typescript", "postgres"],
      iconName: "Server"
    },
    {
      id: "express",
      name: "Express.js",
      category: "Backend",
      level: "Expert",
      experienceYears: "3+ Years",
      description: "RESTful API engineering, JWT and session authorization, request validation, and rate limiting.",
      relations: ["nodejs", "postgres", "mongodb"],
      iconName: "Cpu"
    },
    {
      id: "postgres",
      name: "PostgreSQL",
      category: "Databases & Cloud",
      level: "Advanced",
      experienceYears: "2+ Years",
      description: "Relational schema modeling, index optimization, foreign key integrity, and connection pooling.",
      relations: ["nodejs", "express"],
      iconName: "Database"
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "Databases & Cloud",
      level: "Advanced",
      experienceYears: "2+ Years",
      description: "Document storage, aggregation queries, schema validation, and replica set synchronization.",
      relations: ["nodejs", "express"],
      iconName: "Boxes"
    },
    {
      id: "docker",
      name: "Docker",
      category: "Tools & DevOps",
      level: "Advanced",
      experienceYears: "2+ Years",
      description: "Containerization, multi-stage production builds, environment parity, and Docker Compose orchestration.",
      relations: ["nodejs", "git"],
      iconName: "Container"
    },
    {
      id: "git",
      name: "Git & GitHub",
      category: "Tools & DevOps",
      level: "Expert",
      experienceYears: "3+ Years",
      description: "Git branching workflows, CI/CD pipelines, semantic versioning, and code review hygiene.",
      relations: ["docker", "typescript"],
      iconName: "GitBranch"
    },
    {
      id: "rest-apis",
      name: "REST APIs & Architecture",
      category: "Backend",
      level: "Expert",
      experienceYears: "3+ Years",
      description: "Clean endpoint contracts, idempotency, pagination strategies, and error handling pipelines.",
      relations: ["express", "nodejs"],
      iconName: "Network"
    }
  ] as SkillNode[],

  flagshipProject: {
    id: "pulseflow-analytics",
    name: "pulseflow-analytics-suite",
    displayName: "PulseFlow Analytics & Cloud Telemetry",
    tagline: "Enterprise-grade real-time metric stream with dynamic dashboard widgets and role-based access",
    description: "A production full-stack telemetry and analytics platform built with Next.js, TypeScript, Node.js, and PostgreSQL. Features instant sub-50ms query responses, live telemetry charts, and automated report exports.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Docker"],
    language: "TypeScript",
    githubUrl: "https://github.com/muhammadbinqasim/pulseflow-analytics",
    liveUrl: "https://example.com/pulseflow-demo",
    category: "Full-Stack",
    featured: true,
    metrics: [
      { label: "Query Response", value: "< 45ms" },
      { label: "Availability", value: "99.9% Uptime" },
      { label: "Test Coverage", value: "98.5%" }
    ],
    features: [
      "Real-time event aggregation pipeline with sub-50ms query response",
      "Role-based permission architecture (Administrator, Analyst, Viewer)",
      "Interactive data visualization charts with custom temporal ranges",
      "One-click report generation into PDF and structured CSV datasets"
    ],
    caseStudy: {
      overview: "PulseFlow is a unified cloud telemetry platform engineered to monitor microservices and application performance without cognitive overload.",
      problem: "Teams struggled with fragmented monitoring tools that were slow, expensive, and difficult to customize for specific operational workflows.",
      idea: "Construct a sleek, high-throughput analytics dashboard combining optimistic client updates with resilient server-side aggregation pipelines.",
      design: "Engineered with a high-contrast dark palette, ergonomic typography, and zero layout shift, ensuring rapid comprehension under critical incident response.",
      architecture: "Next.js App Router frontend with type-safe server actions, communicating with an Express.js ingestion cluster backed by indexed PostgreSQL storage.",
      results: [
        "Reduced dashboard initial load time from 2.4s to under 380ms",
        "Achieved 60fps chart rendering during heavy multi-series metric streams",
        "Zero downtime recorded across automated stress testing suites"
      ]
    },
    previewGradient: "from-cyan-500/20 via-blue-500/15 to-indigo-500/20",
    mockupType: "dashboard"
  } as Project,

  projects: [
    {
      id: "pulseflow-analytics",
      name: "pulseflow-analytics-suite",
      displayName: "PulseFlow Cloud Telemetry Suite",
      tagline: "Enterprise real-time analytics with sub-50ms queries",
      description: "A responsive full-stack telemetry platform featuring real-time metric streams, modular widgets, customizable team access, and automated data exports.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js"],
      language: "TypeScript",
      githubUrl: "https://github.com/muhammadbinqasim/pulseflow-analytics",
      liveUrl: "https://example.com/pulseflow-demo",
      category: "Full-Stack",
      featured: true,
      metrics: [
        { label: "Deployment", value: "Active Production" },
        { label: "Latency", value: "< 45ms Response" }
      ],
      features: [
        "Real-time metric streaming dashboard with zero layout shift",
        "Role-based access hierarchy with granular access policies",
        "Automated report generation in CSV and formatted PDF",
        "Keyboard navigation shortcuts for power developer workflows"
      ],
      caseStudy: {
        overview: "PulseFlow gives engineering teams clear visibility into application metrics and traffic spikes.",
        problem: "Monitoring systems often have bloated dashboards and high latency that impair incident resolution.",
        idea: "Build a streamlined telemetry interface using Next.js, WebSockets, and indexed SQL queries.",
        design: "Focused on dark mode ergonomic visualization with high contrast metric callouts.",
        architecture: "Next.js frontend with Node.js event ingestion and PostgreSQL time-series indexing.",
        results: ["45ms response time", "99.9% uptime verified", "Sub-400ms initial load"]
      },
      previewGradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
      mockupType: "dashboard"
    },
    {
      id: "aura-commerce",
      name: "aura-commerce-platform",
      displayName: "Aura Headless Commerce Platform",
      tagline: "Ultra-fast headless commerce with instant search & cart synchronization",
      description: "A modern full-stack e-commerce experience featuring instant catalog indexing, frictionless checkout flows, and resilient cart synchronization across devices.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      language: "TypeScript",
      githubUrl: "https://github.com/muhammadbinqasim/aura-commerce",
      liveUrl: "https://example.com/aura-commerce-demo",
      category: "Full-Stack",
      featured: true,
      metrics: [
        { label: "Lighthouse", value: "98 Performance" },
        { label: "Search Index", value: "Instant 0ms" }
      ],
      features: [
        "Instant client-side catalog filtering without full page reload",
        "Cross-device cart synchronization and offline item caching",
        "Idempotent checkout pipeline with webhook validation",
        "Adaptive mobile UI optimized for ergonomic thumb-reach navigation"
      ],
      caseStudy: {
        overview: "Aura Commerce provides an instantaneous shopping experience built for modern digital retail brands.",
        problem: "Traditional monolithic storefronts suffer from slow page reloads and abandoned carts due to clunky checkouts.",
        idea: "Create a decoupled headless storefront with optimistic cart mutations and fast catalog search.",
        design: "Clean minimalist layout with generous whitespace, subtle hairline borders, and clear purchase hierarchy.",
        architecture: "React frontend with Node.js REST backend, MongoDB document models, and tokenized payment pipelines.",
        results: ["98 Lighthouse performance score", "Zero layout shift during image loads", "Smooth 60fps checkout"]
      },
      previewGradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
      mockupType: "ecommerce"
    },
    {
      id: "nova-ai-workspace",
      name: "nova-ai-productivity",
      displayName: "Nova Contextual AI Workspace",
      tagline: "Context-aware AI productivity engine with semantic search and markdown export",
      description: "An intelligent workspace assistant that synthesizes long-form technical drafts, documents complex architectures, and organizes developer notes seamlessly.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "Vector Embeddings"],
      language: "TypeScript",
      githubUrl: "https://github.com/muhammadbinqasim/nova-ai-workspace",
      liveUrl: "https://example.com/nova-workspace-demo",
      category: "AI & Tools",
      featured: true,
      metrics: [
        { label: "Streaming", value: "< 150ms TTFT" },
        { label: "Privacy", value: "Client-Side Safe" }
      ],
      features: [
        "Low-latency token streaming with markdown and code syntax highlighting",
        "Document-grounded contextual recall and summarization",
        "Distraction-free editor with customizable workspace panels",
        "Instant export to GitHub Gist, Markdown, and formatted text"
      ],
      caseStudy: {
        overview: "Nova AI Workspace streamlines technical drafting and code explanation for software engineers.",
        problem: "Existing AI tools clutter the writing experience with bloated chat threads and disjointed copy-pasting.",
        idea: "Combine a clean canvas editor with direct streaming language model completions and document grounding.",
        design: "Distraction-free typography, subtle violet glow accents, and responsive dual-pane editing.",
        architecture: "Next.js App Router with streaming HTTP endpoints connecting to modern LLM APIs.",
        results: ["Sub-150ms time to first token", "Zero lag during long document streaming", "Client privacy verified"]
      },
      previewGradient: "from-violet-500/20 via-purple-500/10 to-pink-500/20",
      mockupType: "ai"
    },
    {
      id: "apex-developer-toolkit",
      name: "apex-developer-toolkit",
      displayName: "Apex Developer Utility Suite",
      tagline: "Lightweight browser toolkit for JSON schema validation, regex debugging, and token inspection",
      description: "A fast, offline-first developer toolkit featuring zero-latency JSON formatting, regex testing, JWT decoding, and curl-to-fetch code conversion.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Web Workers"],
      language: "TypeScript",
      githubUrl: "https://github.com/muhammadbinqasim/apex-toolkit",
      liveUrl: "https://example.com/apex-toolkit-demo",
      category: "Frontend",
      featured: false,
      metrics: [
        { label: "Execution", value: "0ms Offline" },
        { label: "Bundle Size", value: "Zero External Libs" }
      ],
      features: [
        "100% offline-capable PWA running in browser Web Workers",
        "Zero data transmission: all cryptography and formatting runs on-device",
        "Instant validation for JSON, YAML, SQL, and JWT tokens"
      ],
      caseStudy: {
        overview: "Apex eliminates tab fatigue by consolidating essential developer utilities into one instant tool.",
        problem: "Developers frequently copy sensitive payloads into dubious online formatters that log their data.",
        idea: "Provide a client-only utility suite executed within local Web Workers with guaranteed zero telemetry.",
        design: "Compact monospace aesthetics with high-contrast syntax highlighting.",
        architecture: "React and TypeScript with background Web Workers for intensive schema calculations.",
        results: ["Instant offline execution", "100% data privacy guaranteed", "Zero external network requests"]
      },
      previewGradient: "from-amber-500/20 via-orange-500/10 to-red-500/20",
      mockupType: "tool"
    },
    {
      id: "strata-design-system",
      name: "strata-ui-system",
      displayName: "Strata Accessible Design System",
      tagline: "Production-ready accessible component library with strict WCAG AA contrast compliance",
      description: "A comprehensive UI component library crafted in React and Tailwind CSS with fluid responsive clamp typography, keyboard navigation, and micro-interactions.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      language: "TypeScript",
      githubUrl: "https://github.com/muhammadbinqasim/strata-design-system",
      liveUrl: "https://example.com/strata-ui-demo",
      category: "Frontend",
      featured: false,
      metrics: [
        { label: "Accessibility", value: "WCAG AA Pass" },
        { label: "Components", value: "35+ Elements" }
      ],
      features: [
        "Complete accessibility compliance with visible focus outlines and screen reader labels",
        "Harmonious design tokens for color, typography, spacing, and elevation",
        "Zero-dependency modular architecture allowing tree-shakeable imports"
      ],
      caseStudy: {
        overview: "Strata provides foundational UI building blocks for enterprise web applications.",
        problem: "Inconsistent UI patterns and poor accessibility lead to degraded user satisfaction and compliance issues.",
        idea: "Build an accessible, theme-aware component system adhering strictly to WCAG AA guidelines.",
        design: "Refined dark and light mode tokens, fluid typography, and ergonomic focus indicators.",
        architecture: "React components written with strict TypeScript props and headless accessibility hooks.",
        results: ["100% accessibility audit score", "Adopted across 5 client platforms", "Sub-10kB modular footprint"]
      },
      previewGradient: "from-blue-500/20 via-cyan-500/10 to-teal-500/20",
      mockupType: "workflow"
    },
    {
      id: "hyperion-task-engine",
      name: "hyperion-distributed-tasks",
      displayName: "Hyperion Asynchronous Job Engine",
      tagline: "Resilient background worker queue with exponential backoff and Redis pub/sub",
      description: "A high-performance Node.js task orchestration engine capable of distributing asynchronous jobs, managing retries, and surfacing live queue metrics.",
      technologies: ["Node.js", "TypeScript", "Express", "Docker", "Redis"],
      language: "TypeScript",
      githubUrl: "https://github.com/muhammadbinqasim/hyperion-tasks",
      liveUrl: "https://example.com/hyperion-demo",
      category: "Mobile & Systems",
      featured: false,
      metrics: [
        { label: "Throughput", value: "10k jobs/sec" },
        { label: "Reliability", value: "Zero Message Loss" }
      ],
      features: [
        "Idempotent task queuing with guaranteed at-least-once delivery",
        "Configurable backoff strategies and dead-letter queues",
        "Live status monitor endpoint and prometheus metrics exporter"
      ],
      caseStudy: {
        overview: "Hyperion handles computationally heavy background tasks outside the primary web request cycle.",
        problem: "Heavy batch processes blocked main HTTP threads, causing request timeouts and system instability.",
        idea: "Architect a resilient worker queue system utilizing Redis pub/sub and distributed lock mechanisms.",
        design: "Lightweight dashboard with live event streams and queue depth meters.",
        architecture: "Node.js clustering with distributed Redis state and atomic transaction locks.",
        results: ["Processed 10,000+ jobs/sec without memory leak", "Zero message loss under failure tests"]
      },
      previewGradient: "from-rose-500/20 via-pink-500/10 to-purple-500/20",
      mockupType: "analytics"
    }
  ] as Project[],

  creativeLab: [
    {
      id: "lab-1",
      title: "Minimalist Brand & Editorial Design System",
      category: "Brand & Graphics",
      date: "2026",
      description: "High-contrast editorial typography pairing, monochrome composition, and geometric product card staging.",
      tags: ["Brand Identity", "Editorial Typography", "Art Direction", "Design Systems"],
      accentColor: "cyan",
      badge: "Brand Identity",
      details: "An exploration of ultra-clean typography pairings, negative space ratios, and modern digital editorial branding."
    },
    {
      id: "lab-2",
      title: "Kinetic Velocity & Elastic Magnetic Physics",
      category: "UI Experiments",
      date: "2026",
      description: "Physics-based magnetic pointer attraction with damping spring physics and tactile micro-audio feedback.",
      tags: ["Motion Physics", "Micro-Interactions", "Spring Dynamics", "Sound Synthesis"],
      accentColor: "blue",
      badge: "Interactive UI",
      details: "Explores subtle 2D cursor gravity wells that pull interactive elements toward user pointers without jitter or disorientation."
    },
    {
      id: "lab-3",
      title: "Algorithmic Plexus & Particle Drift Network",
      category: "Motion & Canvas",
      date: "2026",
      description: "Hardware-accelerated HTML5 Canvas particle mesh with proximity threshold algorithms and responsive scaling.",
      tags: ["HTML5 Canvas", "Math Algorithms", "60 FPS", "Reduced Motion"],
      accentColor: "purple",
      badge: "Canvas Experiment",
      details: "Calculates spatial distance matrices between moving vector nodes to dynamically generate translucent connecting webs."
    },
    {
      id: "lab-4",
      title: "Obsidian Glassmorphic Interface Tokens",
      category: "UI Experiments",
      date: "2025",
      description: "Multi-layered depth composition utilizing variable backdrop blur filters and chromatic edge highlights.",
      tags: ["Glassmorphism", "CSS Architecture", "Visual Depth", "Dark Aesthetics"],
      accentColor: "emerald",
      badge: "UI Concept",
      details: "A design exploration testing backdrop blur performance and border gradient rendering across mobile and desktop devices."
    },
    {
      id: "lab-5",
      title: "Audio Frequency Spectrum & Wave Synthesizer",
      category: "Motion & Canvas",
      date: "2025",
      description: "Real-time canvas frequency spectrum analyzer using Web Audio API harmonic oscillators and wave rendering.",
      tags: ["Web Audio API", "Oscillators", "Canvas Animation", "Real-Time"],
      accentColor: "amber",
      badge: "Audio Synthesis",
      details: "Generates pure harmonic sine waves and animates responsive amplitude waves in an interactive visual canvas."
    },
    {
      id: "lab-6",
      title: "Dynamic Sports Matchday Poster Architecture",
      category: "Brand & Graphics",
      date: "2025",
      description: "High-energy athletic social template system crafted with bold typography, player silhouettes, and match stats.",
      tags: ["Graphic Layout", "Visual Hierarchy", "Sports Media", "High Impact"],
      accentColor: "cyan",
      badge: "Visual Concept",
      details: "A modular template system designed to announce match fixtures, starting line-ups, and game analytics."
    }
  ] as LabItem[],

  resume: {
    name: "MUHAMMAD BIN QASIM",
    title: "Full-Stack Developer & Creative Builder",
    email: "binqasim.dev@example.com",
    github: "github.com/muhammadbinqasim",
    linkedin: "linkedin.com/in/muhammadbinqasim",
    location: "Global Remote",
    summary: "Full-Stack Developer specializing in modern web platforms (React, Next.js, TypeScript), scalable backend architectures with Node.js and PostgreSQL, and intelligent digital experiences. Committed to clean architecture, zero-bloat performance, accessible UX/UI craft, and resilient system engineering.",
    coreCompetencies: [
      "Full-Stack Web Architecture (Next.js, React 19, TypeScript)",
      "Backend & REST API Engineering (Node.js, Express, PostgreSQL)",
      "Responsive UI & Design Systems (Tailwind CSS, Framer Motion)",
      "Database Modeling & Optimization (PostgreSQL, MongoDB)",
      "DevOps & Tooling (Docker, Git, CI/CD, Linux Environments)",
      "Accessibility (WCAG AA Compliance, Semantic HTML)"
    ],
    experience: [
      {
        role: "Full-Stack Engineer & Architect",
        period: "2025 — Present",
        company: "Independent Engineering & Client Platforms",
        points: [
          "Architected production web platforms utilizing Next.js, TypeScript, and modern backend services with sub-second API latencies.",
          "Constructed scalable RESTful services with Node.js and PostgreSQL, implementing structured migrations and unit tests.",
          "Engineered responsive, accessible user interfaces with Tailwind CSS and Framer Motion achieving 95+ Core Web Vitals scores."
        ]
      },
      {
        role: "Frontend Developer & UI Specialist",
        period: "2024 — 2025",
        company: "Digital Product Labs",
        points: [
          "Developed reusable component design systems and interactive web applications in React and TypeScript.",
          "Optimized client-side rendering pipelines and eliminated layout shifts across multi-screen layouts.",
          "Integrated real-time WebSocket and REST endpoints with optimistic state management."
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science / Software Engineering",
        institution: "University Faculty of Computer Sciences",
        year: "2024"
      }
    ],
    certifications: [
      "Advanced TypeScript & Full-Stack Web Development",
      "Modern Web Architecture & Core Web Vitals Optimization",
      "PostgreSQL Database Design & Query Tuning"
    ]
  }
};
