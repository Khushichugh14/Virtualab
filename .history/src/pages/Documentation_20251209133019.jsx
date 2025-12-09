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
          {sections.map((section, idx) =>
