// src/constants/siteData.js
import { Zap, Clock, GitBranch, Award, DollarSign } from "lucide-react";
export const workflow = [
  {
    id: "plan",
    title: "Plan",
    short: "Create tasks, map dependencies and prioritize sprints.",
    longDescription: `Planning is the foundation of a predictable, healthy engineering organization.
It ensures teams work toward a shared outcome, minimize rework, and stay aligned on priorities.
A strong planning process includes backlog refinement, roadmapping, estimation, stakeholder
alignment, and clearly defined acceptance criteria.

During this phase, teams break down roadmap goals into epics, stories, and tasks. Each story
must include user-centric descriptions, acceptance criteria, and an estimate that fits the team's
velocity. Dependencies should be identified early to prevent bottlenecks.`,
    steps: [
      "Create board",
      "Add tasks",
      "Prioritize",
      "Define acceptance criteria",
      "Identify dependencies",
    ],
    examples: [
      "Turn a Q3 objective into 3 major epics with 20 user stories.",
      "Add spikes for unknown API integrations before committing to estimates.",
      "Use design handoff to attach Figma files to stories.",
    ],
    checklist: [
      "Confirm roadmap alignment",
      "Break tasks into clear user stories",
      "Write acceptance criteria",
      "Estimate story points",
      "Review dependencies",
      "Finalize sprint commitment",
    ],
    // <- EMBED URL (reliable for iframe)
    video: "https://www.youtube.com/embed/W10CVrvX4so",
    icon: "⏱️",
  },

  {
    id: "develop",
    title: "Develop",
    short: "Code in the cloud, previews per branch and realtime collaboration.",
    longDescription: `The development phase turns planned stories into production-quality code. Modern development emphasizes short feedback loops,
automation, collaboration, and developer ergonomics. A mature workflow reduces review friction and surface area for bugs while enabling
rapid iteration through small, testable changes.

Key principles:
• Reproducible developer environments (dev containers, cloud workspaces) so "works on my machine" disappears.
• Branch-per-feature with short-lived PRs and automatic previews to validate behavior before merging.
• Continuous testing: unit, integration, and lightweight end-to-end tests run on every commit.
• Fast, helpful CI feedback with clear failure messages and logs so developers fix issues quickly.`,
    steps: [
      "Create branch",
      "Live edit",
      "Preview",
      "Open pull request",
      "Run CI checks",
    ],
    checklist: [
      "Create a small, focused feature branch",
      "Write or update unit tests for new behavior",
      "Run local linting and type checks",
      "Open PR with description, testing steps, and screenshots",
      "Ensure CI passes all checks before requesting approval",
    ],
    roles: [
      { role: "Developer", responsibilities: "Implements feature, writes tests, and updates docs." },
      { role: "Reviewer", responsibilities: "Validates correctness, readability, and performance." },
      { role: "QA Engineer", responsibilities: "Verifies functionality in branch preview and runs regression tests." }
    ],
    metrics: [
      { name: "PR Lead Time", description: "Time from opening a PR to merge — lower is faster feedback." },
      { name: "Test Pass Rate", description: "Percentage of CI runs that pass on first attempt." },
      { name: "Flaky Test Rate", description: "Portion of tests that fail intermittently across runs." }
    ],
    examples: [
      "Pair-programming session to unblock complex algorithm logic for 30–60 minutes.",
      "Preview environment created for every PR so PM and QA can validate UI and behavior without merging.",
      "Automated dependency update PRs that run tests and report incompatibilities automatically.",
    ],
    resources: [
      { label: "Dev container setup guide", href: "/docs/dev-container" },
      { label: "PR template example", href: "/assets/docs/pr-template.md" },
      { label: "Automated testing best practices", href: "https://example.com/unit-testing" }
    ],
    templates: [
      { name: "pull-request-template.md", path: "/assets/templates/pull-request-template.md" },
      { name: "code-review-checklist.md", path: "/assets/templates/code-review-checklist.md" }
    ],
    // EMBED format
    video: "https://www.youtube.com/embed/vwT5Tun61hI",
    icon: "💻",
  },

  {
    id: "release",
    title: "Release",
    short: "Build & deploy to staging/production with a single click.",
    longDescription: `The release stage converts validated artifacts into live product. Reliable releases are automated, auditable, and reversible.
Good release engineering reduces customer impact and speeds recovery when incidents occur.

Core practices:
• Produce immutable, versioned build artifacts and promote the exact artifact from staging to production.
• Use canary or blue/green strategies to minimize risk and enable safe rollbacks.
• Run smoke and integration tests in an environment that mirrors production.
• Automate rollback triggers for health-check failures to reduce MTTR.`,
    steps: [
      "Build",
      "Deploy",
      "Rollback",
      "Publish release notes",
      "Verify health checks"
    ],
    checklist: [
      "Build and store immutable artifacts",
      "Run integration and smoke tests in staging",
      "Deploy with canary or blue/green strategy",
      "Monitor metrics for X minutes before full promotion",
      "Publish release notes and inform stakeholders",
      "Have rollback plan and runbook ready"
    ],
    roles: [
      { role: "Release Engineer", responsibilities: "Manages pipeline, verifies artifacts, and coordinates promotion." },
      { role: "SRE", responsibilities: "Monitors health, executes rollbacks, and handles incident response." },
      { role: "Product Manager", responsibilities: "Approves release window and communicates to customers." }
    ],
    metrics: [
      { name: "Deployment Success Rate", description: "Percent of deployments completed without manual rollback." },
      { name: "Mean Time To Recovery (MTTR)", description: "Time to recover from release-related incidents." },
      { name: "Change Failure Rate", description: "Percent of releases that cause an incident or require rollback." }
    ],
    examples: [
      "Canary rollout: start with 5% traffic to new version and monitor key metrics for 15 minutes before expanding.",
      "Blue/green: maintain parallel environments and switch traffic once health checks pass.",
      "Automated rollback when error rate exceeds threshold for X consecutive minutes."
    ],
    resources: [
      { label: "Deployment checklist (PDF)", href: "/assets/docs/deployment-checklist.pdf" },
      { label: "Canary deployment guide", href: "https://example.com/canary" },
      { label: "Observability runbook template", href: "/assets/templates/observability-runbook.md" }
    ],
    templates: [
      { name: "release-notes-template.md", path: "/assets/templates/release-notes-template.md" },
      { name: "post-deploy-checklist.md", path: "/assets/templates/post-deploy-checklist.md" }
    ],
    // EMBED format
    video: "https://www.youtube.com/embed/A1E6P7U_nrk",
    icon: "🚀",
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
