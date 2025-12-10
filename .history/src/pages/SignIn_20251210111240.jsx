import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login success
    localStorage.setItem("user", JSON.stringify({ email }));

    toast.success("Logged in successfully!");

    navigate("/");
  };


  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-950/80 p-8 shadow-xl">
        <h2 className="text-2xl sm:3xl font-semibold text-center">
          Welcome back to{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
            VirtualR
          </span>
        </h2>
        <p className="mt-2 text-center text-neutral-400 text-sm">
          Sign in to manage your VR projects and tools.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="block text-sm text-neutral-300 mb-1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-orange-500"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-neutral-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-orange-500"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-400">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 py-2.5 text-sm font-semibold hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading && (
              <span className="h-4 w-4 border-2 border-white/70 border-t-transparent rounded-full animate-spin" />
            )}
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-neutral-500">
          Don&apos;t have an account?{" "}
          <NavLink to="/create-account" className="text-orange-400 hover:underline">
            Create one
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
