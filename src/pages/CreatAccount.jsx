const CreateAccount = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl border border-neutral-800 bg-neutral-950/80 p-8 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">
          Create your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
            VirtualR
          </span>{" "}
          account
        </h2>
        <p className="mt-2 text-center text-neutral-400 text-sm">
          Start building immersive VR experiences in minutes.
        </p>

        <form className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="block text-sm text-neutral-300 mb-1">
              First name
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-orange-500"
              placeholder="Khushi"
            />
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm text-neutral-300 mb-1">
              Last name
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-orange-500"
              placeholder="Chugh"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm text-neutral-300 mb-1">
              Email address
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-orange-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm text-neutral-300 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-orange-500"
              placeholder="Create a strong password"
            />
          </div>

          <div className="sm:col-span-2 flex items-start gap-2 text-xs text-neutral-400">
            <input
              id="terms"
              type="checkbox"
              className="mt-1 h-3 w-3 rounded border-neutral-600 bg-neutral-900"
            />
            <label htmlFor="terms">
              I agree to the Terms of Service and Privacy Policy.
            </label>
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-red-600 py-2.5 text-sm font-semibold hover:scale-[1.02] transition-transform"
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
