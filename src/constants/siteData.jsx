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
    role: "Engineering Lead",
    company: "Acme Corp",
    location: "Bangalore, India",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    duration: "11 months",
    productUsed: "CI/CD Automation",
    improvement: "40% faster onboarding, 32% fewer delays",
    tags: ["Engineering", "Automation", "SaaS"],
    social: { linkedin: "https://linkedin.com/in/asha-example" },
    quote:
      "Boosted our engineering velocity and drastically reduced onboarding time.",
    longReview:
      "Before adopting the platform, our development process was slowed by manual steps and communication gaps. After switching, onboarding time fell by 40% and sprint delays reduced. The CI/CD automation has become essential to our workflow."
  },
  {
    id: "t2",
    name: "Ravi P.",
    role: "CTO",
    company: "Buildify",
    location: "Mumbai, India",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    duration: "1 year 4 months",
    productUsed: "Deployment & Monitoring",
    improvement: "50% faster deploys",
    tags: ["CTO", "Infrastructure"],
    social: { linkedin: "https://linkedin.com/in/ravi-example" },
    quote:
      "One-click deployment saved our team hours each week.",
    longReview:
      "We used to spend hours per release dealing with manual deploy processes. Now deployment takes seconds. Monitoring and rollback features give us confidence during releases."
  },
  {
    id: "t3",
    name: "Neha S.",
    role: "Product Manager",
    company: "FlowOps",
    location: "Hyderabad, India",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 4,
    duration: "8 months",
    productUsed: "Analytics Dashboard",
    improvement: "Data-driven decisions improved roadmap accuracy by 35%",
    tags: ["Product", "Analytics"],
    social: { linkedin: "https://linkedin.com/in/neha-example" },
    quote:
      "Crystal-clear analytics helped refine our product roadmap.",
    longReview:
      "The analytics suite gives us real-time insights into user activity, bottlenecks, and success metrics. This allowed us to restructure our roadmap and achieve measurable improvements."
  },
  {
    id: "t4",
    name: "Arjun V.",
    role: "DevOps Engineer",
    company: "CloudNext",
    location: "Pune, India",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 5,
    duration: "2 years",
    productUsed: "CI Pipeline",
    improvement: "2x deployment frequency",
    tags: ["DevOps", "Automation"],
    social: { linkedin: "https://linkedin.com/in/arjun-example" },
    quote:
      "The CI pipeline is stable, fast, and extremely reliable.",
    longReview:
      "Deployments used to be stressful due to slow pipelines. After using this system, build times decreased drastically and our deployment frequency doubled."
  },
  {
    id: "t5",
    name: "Mira T.",
    role: "Founder",
    company: "StartIQ",
    location: "Delhi, India",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    duration: "6 months",
    productUsed: "AI Automation",
    improvement: "60% fewer manual tasks",
    tags: ["Startup", "AI"],
    social: { linkedin: "https://linkedin.com/in/mira-example" },
    quote:
      "The AI automation alone makes this worth it.",
    longReview:
      "As a founder juggling multiple tasks, automation was a lifesaver. It removed repetitive work and improved operational flow significantly."
  },
  {
    id: "t6",
    name: "Sam K.",
    role: "UI/UX Designer",
    company: "PixelWorks",
    location: "Chennai, India",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 4,
    duration: "10 months",
    productUsed: "Real-time Collaboration",
    improvement: "30% faster design iteration",
    tags: ["Design", "Collaboration"],
    social: { linkedin: "https://linkedin.com/in/sam-example" },
    quote:
      "Real-time collaboration made design reviews effortless.",
    longReview:
      "Feedback loops became dramatically shorter thanks to instant updates. No more long emails or outdated screens."
  },
  {
    id: "t7",
    name: "Leena G.",
    role: "Marketing Manager",
    company: "Brandify",
    location: "Jaipur, India",
    avatar: "https://randomuser.me/api/portraits/women/19.jpg",
    rating: 5,
    duration: "1 year",
    productUsed: "Campaign Automation",
    improvement: "50% improved response rate",
    tags: ["Marketing", "Automation"],
    social: { linkedin: "https://linkedin.com/in/leena-example" },
    quote:
      "Helped us boost campaign performance significantly.",
    longReview:
      "We automated repetitive tasks and tracked performance metrics in real-time. Campaign insights helped us refine our targeting effectively."
  },
  {
    id: "t8",
    name: "Jacob R.",
    role: "Software Engineer",
    company: "CodeLab",
    location: "New York, USA",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: 4,
    duration: "1 year",
    productUsed: "Code Editor & Versioning",
    improvement: "Fewer merge conflicts, smoother workflow",
    tags: ["Engineering", "Version Control"],
    social: { linkedin: "https://linkedin.com/in/jacob-example" },
    quote:
      "The versioning system saved me more than once.",
    longReview:
      "The editor is fast and the versioning system made our workflow safer. Merge conflicts reduced drastically."
  },
  {
    id: "t9",
    name: "Priya M.",
    role: "Data Scientist",
    company: "InsightAI",
    location: "Singapore",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 5,
    duration: "7 months",
    productUsed: "AI Model Training Tools",
    improvement: "25% faster model experimentation",
    tags: ["AI", "Data"],
    social: { linkedin: "https://linkedin.com/in/priya-example" },
    quote:
      "AI-powered suggestions are incredibly helpful.",
    longReview:
      "The platform accelerates experimentation and helps me catch issues early. It’s a huge productivity boost for data teams."
  },
  {
    id: "t10",
    name: "Oliver S.",
    role: "Full Stack Developer",
    company: "HexaStudio",
    location: "Toronto, Canada",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 5,
    duration: "9 months",
    productUsed: "Team Hub",
    improvement: "Unified workflows across teams",
    tags: ["Developer", "Team Management"],
    social: { linkedin: "https://linkedin.com/in/oliver-example" },
    quote:
      "Our entire dev workflow improved instantly.",
    longReview:
      "A single place for tasks, reviews, and communication eliminated confusion across teams."
  },
  {
    id: "t11",
    name: "Nisha R.",
    role: "HR Operations Manager",
    company: "PeoplePro",
    location: "Kolkata, India",
    avatar: "https://randomuser.me/api/portraits/women/60.jpg",
    rating: 5,
    duration: "1 year 2 months",
    productUsed: "HR Automation",
    improvement: "20 hours saved monthly",
    tags: ["HR", "Automation"],
    social: { linkedin: "https://linkedin.com/in/nisha-example" },
    quote:
      "Onboarding is now smooth and automated.",
    longReview:
      "New hires get onboarded automatically, reducing HR workload by dozens of hours."
  },
  {
    id: "t12",
    name: "Harish M.",
    role: "Tech Founder",
    company: "DevOrigin",
    location: "Dubai, UAE",
    avatar: "https://randomuser.me/api/portraits/men/25.jpg",
    rating: 5,
    duration: "2 years",
    productUsed: "Cloud Infrastructure",
    improvement: "Zero downtime migrations",
    tags: ["Founder", "SaaS"],
    social: { linkedin: "https://linkedin.com/in/harish-example" },
    quote:
      "Scales perfectly with our startup.",
    longReview:
      "We scaled from 100 to 10,000 users without changing infrastructure. It handled everything smoothly."
  },
  {
    id: "t13",
    name: "Jia L.",
    role: "Operations Head",
    company: "Workflow Inc",
    location: "Hong Kong",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    rating: 4,
    duration: "5 months",
    productUsed: "Workflow Manager",
    improvement: "2x faster task completion",
    tags: ["Operations", "Productivity"],
    social: { linkedin: "https://linkedin.com/in/jia-example" },
    quote:
      "A massive improvement in team coordination.",
    longReview:
      "Our operations team delivers faster now because everything is organized and visible across departments."
  },
  {
    id: "t14",
    name: "Devan S.",
    role: "Frontend Engineer",
    company: "UIStack",
    location: "Bangalore, India",
    avatar: "https://randomuser.me/api/portraits/men/30.jpg",
    rating: 5,
    duration: "1 year",
    productUsed: "Component Library",
    improvement: "40% faster UI building",
    tags: ["Frontend", "UI"],
    social: { linkedin: "https://linkedin.com/in/devan-example" },
    quote:
      "Components are beautifully built and customizable.",
    longReview:
      "Creating interface screens became effortless. The design system is well documented and consistent."
  },
  {
    id: "t15",
    name: "Rhea P.",
    role: "Business Analyst",
    company: "DataBridge",
    location: "London, UK",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 5,
    duration: "3 months",
    productUsed: "Reporting Tools",
    improvement: "Presentation prep time reduced by 70%",
    tags: ["Analytics", "BI"],
    social: { linkedin: "https://linkedin.com/in/rhea-example" },
    quote:
      "The reporting tools are incredibly polished.",
    longReview:
      "Exports look stunning and clear, saving us hours preparing reports manually."
  },
  {
    id: "t16",
    name: "Carlos M.",
    role: "Security Analyst",
    company: "SecuraTech",
    location: "Austin, USA",
    avatar: "https://randomuser.me/api/portraits/men/82.jpg",
    rating: 4,
    duration: "1 year",
    productUsed: "Security Suite",
    improvement: "Reduced vulnerabilities by 28%",
    tags: ["Security", "Compliance"],
    social: { linkedin: "https://linkedin.com/in/carlos-example" },
    quote:
      "Security alerts are accurate and actionable.",
    longReview:
      "The automated scanning and alert system uncovered vulnerabilities we had missed for years."
  },
  {
    id: "t17",
    name: "Ana J.",
    role: "Creative Director",
    company: "DesignHub",
    location: "Berlin, Germany",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    rating: 5,
    duration: "2 years 3 months",
    productUsed: "Creative Workspace",
    improvement: "40% faster project delivery",
    tags: ["Design", "Creative"],
    social: { linkedin: "https://linkedin.com/in/ana-example" },
    quote:
      "The creative tools helped us unify our design process.",
    longReview:
      "Our team finally works in sync. Feedback cycles are short and clear with a unified workspace."
  },
  {
    id: "t18",
    name: "Ethan L.",
    role: "Backend Architect",
    company: "ScaleWorks",
    location: "San Francisco, USA",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    rating: 5,
    duration: "1 year 8 months",
    productUsed: "Load Balancing",
    improvement: "Handled 3x traffic with no slowdown",
    tags: ["Backend", "Architecture"],
    social: { linkedin: "https://linkedin.com/in/ethan-example" },
    quote:
      "Handles load like a beast.",
    longReview:
      "Our system performance tripled, and traffic surges are no longer a concern. Excellent engineering."
  },
  {
    id: "t19",
    name: "Sophia T.",
    role: "Customer Success Lead",
    company: "ClientFlow",
    location: "Paris, France",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    rating: 5,
    duration: "4 months",
    productUsed: "Client CRM",
    improvement: "Higher customer satisfaction scores",
    tags: ["CRM", "Customer Success"],
    social: { linkedin: "https://linkedin.com/in/sophia-example" },
    quote:
      "Our CSAT scores improved almost immediately.",
    longReview:
      "The CRM makes managing relationships easier and helps track insights effectively."
  },
  {
    id: "t20",
    name: "Mohammed A.",
    role: "Project Manager",
    company: "TaskFlow",
    location: "Riyadh, Saudi Arabia",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
    duration: "1 year 6 months",
    productUsed: "Project Planning Suite",
    improvement: "Team efficiency increased by 33%",
    tags: ["Project Management", "Productivity"],
    social: { linkedin: "https://linkedin.com/in/mohammed-example" },
    quote:
      "Project planning is now straightforward and predictable.",
    longReview:
      "Task clarity, automation, and visibility transformed the way our teams execute projects. Deadlines are consistently met."
  }
];
