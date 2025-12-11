// src/constants/features.js
import {
  Zap,
  Users,
  Server,
  Terminal,
  Database,
  Cpu,
  Archive,
  Clock,
  ShieldCheck
} from "lucide-react";

export const features = [
  {
    id: "ai-suggestions",
    icon: <Zap size={20} />,
    title: "AI Code Suggestions",
    short: "Autocomplete, refactors & smart snippets.",
    longDescription:
      "Context-aware AI suggestions that complete your code, propose refactors, and generate tests. Save developer time by letting the editor handle repetitive patterns while you focus on design and architecture.",
    image: "/asset",
    bullets: [
      "Contextual code completion",
      "Refactor suggestions",
      "Test skeleton generation"
    ],
    tags: ["AI", "Productivity"],
    link: "/features/ai-suggestions"
  },
  {
    id: "realtime-collab",
    icon: <Users size={20} />,
    title: "Real-time Collaboration",
    short: "Work together live with teammates.",
    longDescription:
      "Share a development session with teammates: live cursors, shared terminals, and synchronized previews. Ideal for pair programming, design reviews, and remote onboarding.",
    image: "/assets/features/realtime-collab.png",
    bullets: ["Live cursors", "Shared terminals", "Session recording"],
    tags: ["Collaboration", "Teams"],
    link: "/features/realtime-collab"
  },
  {
    id: "one-click-deploy",
    icon: <Server size={20} />,
    title: "One-Click Deployments",
    short: "Deploy to staging/production instantly.",
    longDescription:
      "Automate build & deploy pipelines with a single click. Choose environment, preview build logs, and roll back easily. Integrates with GitHub, GitLab and CI providers.",
    image: "/assets/features/one-click-deploy.png",
    bullets: ["Branches & environments", "Rollback", "CI integration"],
    tags: ["CI/CD", "Deployment"],
    link: "/features/one-click-deploy"
  },
  {
    id: "built-in-terminal",
    icon: <Terminal size={20} />,
    title: "Built-in Terminal",
    short: "Terminal inside the browser.",
    longDescription:
      "A secure, persistent terminal inside your workspace allowing commands, package installs, and runtime debugging without leaving the browser.",
    image: "/assets/features/built-in-terminal.png",
    bullets: ["Persistent sessions", "Port forwarding", "Shell access"],
    tags: ["DevTools"],
    link: "/features/built-in-terminal"
  },
  {
    id: "database-sync",
    icon: <Database size={20} />,
    title: "Database Sync",
    short: "Seed, inspect and sync databases.",
    longDescription:
      "Manage local and remote databases, sync schema changes, and generate migrations automatically. Inspect rows, run queries and snapshot production data safely.",
    image: "/assets/features/database-sync.png",
    bullets: ["Migrations", "Query explorer", "Snapshots"],
    tags: ["Database", "Productivity"],
    link: "/features/database-sync"
  },
  {
    id: "code-performance",
    icon: <Cpu size={20} />,
    title: "Performance Profiler",
    short: "Find hotspots & optimize.",
    longDescription:
      "Profile CPU and memory usage, visualize flamegraphs and get recommendations to reduce latency and resource use.",
    image: "/assets/features/code-performance.png",
    bullets: ["Flamegraphs", "Memory snapshots", "Actionable tips"],
    tags: ["Performance"],
    link: "/features/code-performance"
  },
  {
    id: "artifact-storage",
    icon: <Archive size={20} />,
    title: "Artifact Storage",
    short: "Keep build artifacts & logs.",
    longDescription:
      "Store build artifacts, logs and test reports per deployment so you can trace regressions and reproduce failures.",
    image: "/assets/features/artifact-storage.png",
    bullets: ["Retention policies", "Search logs", "Download artifacts"],
    tags: ["DevOps"],
    link: "/features/artifact-storage"
  },
  {
    id: "slo-monitoring",
    icon: <Clock size={20} />,
    title: "SLO Monitoring",
    short: "Uptime & latency monitoring with alerts.",
    longDescription:
      "Define SLOs, track uptime and latency, and receive alerts to Slack/email when thresholds are crossed.",
    image: "/assets/features/slo-monitoring.png",
    bullets: ["Custom alerts", "Dashboards", "Historical trends"],
    tags: ["Monitoring", "SRE"],
    link: "/features/slo-monitoring"
  },
  {
    id: "security-audit",
    icon: <ShieldCheck size={20} />,
    title: "Security Audits",
    short: "Automatic static & dependency scans.",
    longDescription:
      "Run automated security scans for vulnerabilities, suggest fixes and produce reports to meet compliance requirements.",
    image: "/assets/features/security-audit.png",
    bullets: ["Dependency scanning", "Static analysis", "Fix suggestions"],
    tags: ["Security", "Compliance"],
    link: "/features/security-audit"
  }
];

export default features;
