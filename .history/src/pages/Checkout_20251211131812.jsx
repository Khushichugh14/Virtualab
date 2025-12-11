// src/pages/CheckoutPage.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";

/**
 * This checkout page reads the selected plan from:
 * 1) location.state.plan (preferred)
 * 2) querystring planId (fallback) - attempt to find a matching plan from the list (if you import plans)
 *
 * For simplicity, this example expects location.state.plan. If not found, it shows a friendly message.
 */


const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // If you also export the same `plans` array in a shared constants file, you can import it
  // and use query param fallback to find the plan by id.
  const statePlan = location.state?.plan || null;
  const billing = location.state?.billing || new URLSearchParams(location.search).get("billing") || "monthly";

  const plan = useMemo(() => statePlan, [statePlan]);

  if (!plan) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-24">
        <div className="max-w-xl text-center bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
          <h2 className="text-2xl font-semibold mb-4">No plan selected</h2>
          <p className="text-neutral-400 mb-6">
            We couldn't find a plan selected for checkout. Please go back and choose a plan.
          </p>
          <div className="flex gap-3 justify-center">
            <button onClick={() => navigate(-1)} className="px-4 py-2 bg-neutral-800 rounded">
              Go back
            </button>
            <button onClick={() => navigate("/pricing")} className="px-4 py-2 bg-orange-600 rounded text-black">
              Browse plans
            </button>
          </div>
        </div>
      </main>
    );
  }

  // Example pricing display and demo of form
  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Checkout — {plan.title}</h1>
              <p className="text-neutral-400">{plan.description}</p>
            </div>

            <div className="text-right">
              <div className="text-3xl font-extrabold">${plan.priceMonthly ?? "Contact"}</div>
              <div className="text-sm text-neutral-400">/ {billing}</div>
            </div>
          </div>

          <hr className="border-neutral-800 my-6" />

          <div>
            <h3 className="font-semibold mb-3">Your plan includes</h3>
            <ul className="text-neutral-300 space-y-2">
              {plan.features.map((f, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-green-400 mt-1">✔</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 space-y-4">
            <label className="block">
              <div className="text-sm text-neutral-400 mb-1">Email</div>
              <input className="w-full p-3 rounded bg-neutral-800 border border-neutral-700" placeholder="you@company.com" />
            </label>

            <label className="block">
              <div className="text-sm text-neutral-400 mb-1">Card (demo)</div>
              <input className="w-full p-3 rounded bg-neutral-800 border border-neutral-700" placeholder="4242 4242 4242 4242" />
            </label>

            <div className="flex gap-3">
              <button
                onClick={() => alert("Demo: integrate your payment gateway here")}
                className="px-4 py-2 bg-orange-600 rounded font-medium text-black"
              >
                Pay & Subscribe
              </button>

              <button onClick={() => navigate(-1)} className="px-4 py-2 bg-neutral-800 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-sm text-neutral-500">
          <p>By subscribing you agree to the Terms of Service and Billing Policies.</p>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
