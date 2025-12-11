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


const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Try to read plan from state first, then fallback to query param
  const statePlan = location.state?.plan || null;
  const planIdFromQuery = new URLSearchParams(location.search).get("planId");
  const planId = statePlan?.id || planIdFromQuery || null;

  const plan = useMemo(() => {
    if (statePlan) return statePlan;
    return demoPlans.find((p) => p.id === planId) || null;
  }, [statePlan, planId]);

  // form state
  const [email, setEmail] = useState("");
  const [card, setCard] = useState("");
  const [loading, setLoading] = useState(false);

  // success popup state
  const [successOpen, setSuccessOpen] = useState(false);

  // error state simple
  const [error, setError] = useState("");

  const validate = () => {
    setError("");
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (!card || card.trim().length < 6) {
      setError("Please enter a valid card number (demo).");
      return false;
    }
    return true;
  };

  const handlePay = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      // Simulate payment processing delay
      await new Promise((res) => setTimeout(res, 900));

      // Show success popup
      setSuccessOpen(true);

      // Optionally: save subscription to server here
      // await api.subscribe({ planId: plan.id, email, card });

      // Optionally redirect after a short delay (uncomment to enable)
      // setTimeout(() => navigate("/dashboard"), 2200);
    } catch (err) {
      setError("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!plan) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-24">
        <div className="max-w-xl text-center bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
          <h2 className="text-2xl font-semibold mb-4">No plan selected</h2>
          <p className="text-neutral-400 mb-6">Please go back and choose a plan to continue to checkout.</p>
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
              <div className="text-3xl font-extrabold">
                ${plan.priceMonthly ?? "Contact"}
              </div>
              <div className="text-sm text-neutral-400">/ month</div>
            </div>
          </div>

          <hr className="border-neutral-800 my-6" />

          <div>
            <h3 className="font-semibold mb-3">Your plan includes</h3>
            <ul className="text-neutral-300 space-y-2">
              {(plan.features || []).map((f, i) => (
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
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded bg-neutral-800 border border-neutral-700"
                placeholder="you@company.com"
                type="email"
              />
            </label>

            <label className="block">
              <div className="text-sm text-neutral-400 mb-1">Card (demo)</div>
              <input
                value={card}
                onChange={(e) => setCard(e.target.value)}
                className="w-full p-3 rounded bg-neutral-800 border border-neutral-700"
                placeholder="4242 4242 4242 4242"
              />
            </label>

            {error && <div className="text-red-400 text-sm">{error}</div>}

            <div className="flex gap-3">
              <button
                onClick={handlePay}
                disabled={loading}
                className="px-4 py-2 bg-orange-600 rounded font-medium text-black disabled:opacity-60"
              >
                {loading ? "Processing..." : "Pay & Subscribe"}
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

      {/* SUCCESS POPUP */}
      {successOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md bg-neutral-900 rounded-2xl p-6 border border-neutral-700 text-center transform transition-all">
            <div className="flex items-center justify-center mb-4">
              {/* green check svg */}
              <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div className="text-left">
                <h2 className="text-xl font-bold">Payment Successful!</h2>
                <p className="text-neutral-300 text-sm mt-1">Your subscription is now active.</p>
              </div>
            </div>

            <p className="text-neutral-400 mb-6">
              A confirmation email will be sent to <span className="text-white font-medium">{email}</span>.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setSuccessOpen(false);
                  // optional immediate redirect to dashboard
                  // navigate("/dashboard");
                }}
                className="flex-1 px-4 py-2 bg-neutral-800 rounded"
              >
                Close
              </button>

              <button
                onClick={() => {
                  // Example: go to invoices / subscription page
                  setSuccessOpen(false);
                  navigate("/dashboard/subscriptions");
                }}
                className="flex-1 px-4 py-2 bg-orange-600 rounded text-black"
              >
                View subscription
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default CheckoutPage;
