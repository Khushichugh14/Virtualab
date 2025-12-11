// src/constants/siteData.js
import { Zap, Clock, GitBranch, Award, DollarSign } from "lucide-react";


export const workflow = [
  {
    id: "plan",
    title: "Plan",
    short: "Create tasks, map dependencies and prioritize sprints.",
    longDescription: `
Planning is the deliberate process of converting product vision into a set of prioritized, testable, and time-boxed units of work.
A good plan reduces wasted effort, creates a reliable release cadence, and gives engineering and product teams a shared definition of "done".
This planning phase should include stakeholder alignment, scope decomposition, risk identification, and definition of acceptance criteria for each item.

Start with a product-level roadmap, break the roadmap into releases or milestones, then decompose each release into epics and user stories.
Every story should include:
• A clear user-oriented description (who, what, why)
• Acceptance criteria that are specific and testable
• An estimate (story points / time) and a priority tag
• A clear owner and any required dependencies (design, infra, legal)

Well-run planning cycles also integrate discovery work (spikes, prototypes) and non-functional requirements (security, performance, compliance).
Use the outputs from planning to populate the sprint backlog and to drive your test and release automation strategy.
    `,
    steps: ["Create board", "Add tasks", "Prioritize", "Define acceptance criteria", "Identify dependencies"],
    checklist: [
      "Define release goals and timeline",
      "Break goals into epics and stories",
      "Write acceptance criteria for each story",
      "Estimate effort (story points or hours)",
      "Identify external dependencies and owners",
      "Schedule spike tasks for unknowns",
      "Hold backlog grooming with stakeholders",
      "Finalize sprint scope and commitments"
    ],
    roles: [
      { role: "Product Manager", responsibilities: "Defines roadmap, prioritizes backlog, writes acceptance criteria." },
      { role: "Engineering Lead", responsibilities: "Estimates work, identifies technical risks, ensures capacity." },
      { role: "Designer", responsibilities: "Provides wireframes, UX acceptance criteria, and design assets." },
      { role: "QA", responsibilities: "Defines test plan and entry/exit criteria for stories." }
    ],
    metrics: [
      { name: "Planned vs Completed", description: "Percentage of committed stories completed each sprint." },
      { name: "Cycle Time", description: "Average time from story start to production release." },
      { name: "Scope Creep", description: "Number of new scope items added after sprint start." }
    ],
    examples: [
      "Sprint planning: take top-priority epics, slice them into user stories with acceptance criteria and estimates.",
      "Roadmap milestone: group customer-facing features into a Q3 release, assign owners & tentative timeline.",
      "Discovery spike: add time-boxed research task (2–3 days) to evaluate a new third-party API before committing.",
      "Cross-team dependency: schedule coordination meeting when Feature A requires an infra change owned by Platform."
    ],
    resources: [
      { label: "Product roadmap template (Google Slides)", href: "/assets/docs/roadmap-template.pptx" },
      { label: "User story template (MD)", href: "/assets/docs/user-story-template.md" },
      { label: "Planning playbook: best practices", href: "https://example.com/planning-playbook" }
    ],
    templates: [
      { name: "sprint-planning-checklist.md", path: "/assets/templates/sprint-planning-checklist.md" },
      { name: "user-story-template.md", path: "/assets/templates/user-story-template.md" }
    ],
    video: ""
    icon: <Clock size={18} />
  },

  {
    id: "develop",
    title: "Develop",
    short: "Code in the cloud, previews per branch and realtime collaboration.",
    longDescription: `
Development is where product intent becomes working software. Modern development workflows emphasize short feedback loops, pull-request driven collaboration,
automated testing, and build previews per branch so reviewers and QA can validate changes before merge.

A robust development workflow includes:
1) A standardized branching strategy (feature branches + short-lived PRs).
2) Automated linting and unit tests in every push.
3) Pull request templates that require a description, testing steps, and a link to design or ticket.
4) Preview environments for each branch so product/QA can test the exact deployed change.

Invest in developer ergonomics (fast local or cloud start-up, reproducible environments, pre-configured dev containers).
Automate routine tasks (dependency upgrades, formatting, test reporting) so developers focus on delivering value.
Make code review a teaching moment: require at least one approving review and a successful CI run before merge.
    `,
    steps: ["Create branch", "Live edit", "Preview", "Open pull request", "Run CI checks"],
    checklist: [
      "Create feature branch from main",
      "Run local linting and unit tests",
      "Push branch and open pull request",
      "Add PR description, testing steps, and screenshots",
      "Link design tickets and acceptance criteria",
      "Ensure CI pipeline passes (lint, tests, build)"
    ],
    roles: [
      { role: "Developer", responsibilities: "Implements feature, writes tests, updates docs." },
      { role: "Reviewer", responsibilities: "Reviews code for correctness, style, and security issues." },
      { role: "QA Engineer", responsibilities: "Validates feature on preview environment, runs regression tests." }
    ],
    metrics: [
      { name: "PR Lead Time", description: "Time from PR opened to merged." },
      { name: "Test Pass Rate", description: "Percentage of CI runs that pass on first attempt." },
      { name: "Flaky Test Rate", description: "Number of tests failing intermittently across runs." }
    ],
    examples: [
      "Pair programming: two collaborators edit the same branch via shared session for 30–60 mins to unblock complex logic.",
      "Branch preview: every PR automatically deploys to a preview URL so PM/QA can validate UI and behavior.",
      "Pre-merge checks: run static security analysis and dependency vulnerability scan on every PR."
    ],
    resources: [
      { label: "Dev container setup guide", href: "/docs/dev-container" },
      { label: "PR template example", href: "/assets/docs/pr-template.md" },
      { label: "Unit testing best practices", href: "https://example.com/unit-testing" }
    ],
    templates: [
      { name: "pull-request-template.md", path: "/assets/templates/pull-request-template.md" },
      { name: "code-review-checklist.md", path: "/assets/templates/code-review-checklist.md" }
    ],
    video: "https://files.mycdn.com/videos/dev-preview.mp4", // example mp4 or null
    codeSamples: [
      {
        title: "Sample .github/workflows/ci.yml (snippet)",
        code: `name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with: { node-version: '18' }
      - run: npm ci
      - run: npm test`
      }
    ],
    icon: <GitBranch size={18} />
  },

  {
    id: "release",
    title: "Release",
    short: "Build & deploy to staging/production with a single click.",
    longDescription: `
Reliable releases are a combination of automation, observability, and runbooks. The release stage should be deterministic: given the same source and artifact,
the deployed outcome is reproducible. Automate your pipeline to produce immutable artifacts, run integration tests, and deploy with health checks.

Key release practices:
• Promote the exact build artifact from staging to production (don't rebuild on promote).
• Run smoke and integration tests in staging that mirror production traffic patterns.
• Have rollback strategies (blue/green, canary, or immediate rollback on failed health checks).
• Create a release notes doc automatically from merged PRs to help customer-facing teams communicate changes.

Prepare incident runbooks for release failures, ensure on-call and SRE contacts are notified, and keep deployment windows and maintenance notices consistent for users.
    `,
    steps: ["Build", "Deploy", "Rollback", "Publish release notes", "Verify health checks"],
    checklist: [
      "Build artifacts (immutable and versioned)",
      "Run integration & smoke tests on staging",
      "Promote artifact to production or initiate canary",
      "Monitor health metrics for X minutes",
      "Rollback if error rates exceed threshold",
      "Publish release notes and communicate to stakeholders"
    ],
    roles: [
      { role: "Release Engineer", responsibilities: "Runs or verifies the pipeline, monitors deployments." },
      { role: "SRE", responsibilities: "Observability, rollback triggers, runbook execution." },
      { role: "Product/PM", responsibilities: "Approves release window and verifies customer impact." }
    ],
    metrics: [
      { name: "Mean Time To Recovery (MTTR)", description: "Time to recover from release-induced incidents." },
      { name: "Deployment Success Rate", description: "Percent of deployments without manual rollback." },
      { name: "Change Failure Rate", description: "Percent of releases resulting in an incident or rollback." }
    ],
    examples: [
      "Canary release: deploy 5% of traffic to new version, run canary validations, then increase traffic.",
      "Blue/green: keep parallel environments to switch traffic if the new release fails.",
      "Rollback automation: if health checks fail for 3 consecutive minutes, automatically rollback to previous artifact."
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
    video: null,
    playbook: {
      onFailure: [
        "Notify on-call SRE and paging list",
        "Run rollback script (automated or manual depending on policy)",
        "Collect logs and create incident ticket",
        "Communicate outage and ETA to stakeholders"
      ]
    },
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
