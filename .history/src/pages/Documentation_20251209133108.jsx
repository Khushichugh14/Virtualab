const Documentation = () => {
  const sections = [
    {
      title: "Getting started",
      text: "Install the CLI, initialize your first VR project, and run your app locally in minutes.",
    },
    {
      title: "Core concepts",
      text: "Understand scenes, assets, pipelines, and how VirtualR builds and optimizes your VR apps.",
    },
    {
      title: "API reference",
      text: "Explore detailed APIs for build config, environment variables, hooks, and plugins.",
    },
    {
      title: "Deploy & scale",
      text: "Learn how to ship to production, monitor performance, and collaborate with your team.",
    },
  ];

  return (
    <div className="min-h-screen bg-black px-4 py-12 sm:px-10 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium uppercase tracking-wide text-orange-500">
            Docs
          </span>
          <h1 className="mt-6 text-3xl sm:text-5xl font-semibold tracking-wide">
            VirtualR{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              Documentation
            </span>
          </h1>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            Everything you need to build, test, and ship VR apps using the
            VirtualR toolchain.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6 hover:border-orange-500/70 hover:-translate-y-1 transition"
            >
              <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
              <p className="text-sm text-neutral-400">{section.text}</p>
              <button className="mt-4 text-xs text-orange-400 hover:underline">
                Read more →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-neutral-800 bg-gradient-to-r from-orange-500/10 via-neutral-900 to-neutral-900 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            Ready to explore the full docs?
          </h2>
          <p className="text-sm text-neutral-300 mb-4 max-w-xl">
            Combine this with your Feature, Workflow, and Pricing sections to
            guide developers from first contact to fully deployed VR apps.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-neutral-900 px-5 py-2 text-xs font-medium text-neutral-100 border border-neutral-700 hover:border-orange-500 transition">
              Open CLI guide
            </button>
            <button className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 py-2 text-xs font-semibold hover:scale-105 transition-transform">
              View API reference
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
