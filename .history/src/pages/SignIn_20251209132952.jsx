const SignIn = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-950/80 p-8 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">
          Welcome back to{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
            VirtualR
          </span>
        </h2>
        <p className="mt-2 text-center text-neutral-400 text-sm">
          Sign in to manage your VR projects and tools.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="block text-sm text-neutral-300 mb-1">
              Email address
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-orange-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-300 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-orange-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-gradient-to-r from-orange-500 to-red-600 py-2.5 text-sm font-semibold hover:scale-[1.02] transition-transform"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-neutral-500">
          Don&apos;t have an account?{" "}
          <a
            href="/create-account"
            className="text-orange-400 hover:underline"
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
