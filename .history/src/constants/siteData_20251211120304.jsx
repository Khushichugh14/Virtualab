// src/constants/siteData.js
import { Zap, Clock, GitBranch, Award, DollarSign } from "lucide-react";

export const workflow = [
  {
    id: "plan",
    title: "Plan",
    short: "Create tasks, map dependencies and prioritize sprints.",
    longDescription:
      "Planning helps teams break down goals into actionable work. Use boards, milestones and priorities to keep the team aligned and reduce scope creep.",
    steps: ["Create board", "Add tasks", "Prioritize"],
    examples: [
      "Sprint planning: define issues and assign points.",
      "Roadmap: group tickets by milestone and owner."
    ],
    resources: [
      { label: "Planning template (PDF)", href: "/assets/docs/planning-template.pdf" },
      { label: "Agile 101", href: "https://example.com/agile-101" }
    ],
    video: "https://www.youtube.com/embed/5qap5aO4i9A", // optional external video
    icon: <Clock size={18} />
  },
  {
    id: "develop",
    title: "Develop",
    short: "Code in the cloud, previews per branch and realtime collaboration.",
    longDescription:
      "Develop with live previews, branch-level environments and shared editing for fast feedback loops. Integrate linting and tests into the workflow to catch issues early.",
    steps: ["Create branch", "Live edit", "Preview"],
    examples: [
      "Pair-programming: two developers collaborate on the same session.",
      "Preview per branch: QA can test feature branch before merge."
    ],
    resources: [
      { label: "Dev environment guide", href: "/docs/dev-environment" },
      { label: "Live share tutorial", href: "https://example.com/live-share" }
    ],
    video: "https://files.mycdn.com/videos/dev-preview.mp4", // mp4 link or null
    icon: <GitBranch size={18} />
  },
  {
    id: "release",
    title: "Release",
    short: "Build & deploy to staging/production with a single click.",
    longDescription:
      "Automate build & deploy pipelines with environment controls, rollbacks and build artifact storage so releases are reliable and traceable.",
    steps: ["Build", "Deploy", "Rollback"],
    examples: [
      "Blue/green deployment for zero-downtime releases.",
      "Automatic rollback when health checks fail."
    ],
    resources: [
      { label: "Deployment checklist", href: "/docs/deploy-checklist" },
      { label: "CI/CD best practices", href: "https://example.com/ci-cd" }
    ],
    video: null,
    icon: <Zap size={18} />
  }
];

export const pricing = [
  {
    id: "starter",
    name: "Starter",
    price: "$0",
    period: "mo",
    bullets: ["1 user", "Basic CI", "Community support"],
    cta: "/start"
  },
  {
    id: "pro",
    name: "Pro",
    price: "$12",
    period: "mo",
    bullets: ["5 users", "CI/CD", "Priority support"],
    cta: "/pricing#pro"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Contact",
    period: "",
    bullets: ["Custom seats", "SLA", "Dedicated support"],
    cta: "/contact"
  }
];

export const testimonials = [
  {
    id: "t1",
    name: "Asha K.",
    role: "Engineering Lead, Acme",
    quote:
      "The platform reduced our onboarding time by 40%. Collaboration is seamless.",
    avatar: "/assets/avatars/asha.jpg"
  },
  {
    id: "t2",
    name: "Ravi P.",
    role: "CTO, Buildify",
    quote:
      "One-click deploy saved so much time. The realtime editor made pair programming easy.",
    avatar: "/assets/avatars/ravi.jpg"
  }
];
