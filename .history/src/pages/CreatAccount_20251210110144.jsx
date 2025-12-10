import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // clear error for that field
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

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

    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    setIsLoading(true);

    // fake API delay
    setTimeout(() => {
      // save "account" to localStorage
      const userToSave = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      };

      localStorage.setItem("virtualrUser", JSON.stringify(userToSave));

      toast.success("Account created! Please sign in.");
      setIsLoading(false);

      // redirect to sign in page
      navigate("/signin");
    }, 800);
  };

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

        <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="block text-sm text-neutral-300 mb-1">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-orange-500"
              placeholder="Khushi"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-red-400">{errors.firstName}</p>
            )}
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm text-neutral-300 mb-1">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-orange-500"
              placeholder="Chugh"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-red-400">{errors.lastName}</p>
            )}
          </div>

          <div className="sm:col-span-2">
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

          <div className="sm:col-span-2">
            <label className="block text-sm text-neutral-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-orange-500"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-400">{errors.password}</p>
            )}
          </div>

          <div className="sm:col-span-2 flex items-start gap-2 text-xs text-neutral-400">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="mt-1 h-3 w-3 rounded border-neutral-600 bg-neutral-900"
              checked={formData.terms}
              onChange={handleChange}
            />
            <label htmlFor="terms">
              I agree to the Terms of Service and Privacy Policy.
            </label>
          </div>
          {errors.terms && (
            <p className="sm:col-span-2 text-xs text-red-400">{errors.terms}</p>
          )}

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 py-2.5 text-sm font-semibold hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading && (
                <span className="h-4 w-4 border-2 border-white/70 border-t-transparent rounded-full animate-spin" />
              )}
              {isLoading ? "Creating account..." : "Create account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
