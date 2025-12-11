// src/constants/siteData.js
import { Zap, Clock, GitBranch, Award, DollarSign } from "lucide-react";

export const workflow = [
  {
    id: "plan",
    title: "Plan",
    description: "Create tasks, map dependencies and prioritize sprints.",
    steps: ["Create board", "Add tasks", "Prioritize"],
    icon: <Clock size={18} />
  },
  {
    id: "develop",
    title: "Develop",
    description: "Code in the cloud, previews per branch and realtime collaboration.",
    steps: ["Create branch", "Live edit", "Preview"],
    icon: <GitBranch size={18} />
  },
  {
    id: "release",
    title: "Release",
    description: "Build & deploy to staging/production with a single click.",
    steps: ["Build", "Deploy", "Rollback"],
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
