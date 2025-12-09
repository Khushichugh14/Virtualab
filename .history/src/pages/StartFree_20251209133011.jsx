const StartFree = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-4xl rounded-2xl border border-neutral-800 bg-neutral-950/80 p-8 sm:p-10 shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center">
          Start for free
        </h2>
        <p className="mt-3 text-center text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">
          Launch your first VR project with the free VirtualR developer plan.
          No credit card required. Upgrade only when you&apos;re ready to scale.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold mb-2">Free tier</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Perfect for experimenting and prototyping.
            </p>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>• Up to 3 VR projects</li>
              <li>• Core build tools</li>
              <li>• Community support</li>
            </ul>
          </div>

          <div className="rounded-xl border border-orange-600 bg-gradient-to-b from-orange-500/10 via-neutral-900 to-neutral-900 p-6">
            <h3 className="text-lg font-semibold mb-2 flex items-baseline gap-1">
              Pro
              <span className="ml-1 rounded-full bg-orange-600/20 px-2 py-0.5 text-[10px] uppercase tracking-wide text-orange-400">
                Popular
              </span>
            </h3>
            <p className="text-neutral-300 text-sm mb-4">
              For serious teams building production-ready VR apps.
            </p>
            <ul className="space-y-2 text-xs text-neutral-200">
              <li>• Unlimited projects</li>
              <li>• Advanced debugging tools</li>
              <li>• Priority support</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold mb-2">Studio</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Custom solutions for large VR studios.
            </p>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>• Dedicated infra</li>
              <li>• SSO & enterprise features</li>
              <li>• Dedicated success manager</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 text-sm font-semibold hover:scale-105 transition-transform">
            Continue with free plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartFree;
