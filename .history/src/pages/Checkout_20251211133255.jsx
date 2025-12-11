import { useLocation, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

const demoPlans = [
  {
    id: "plan_free",
    title: "Free",
    priceMonthly: 0,
    description: "Good for personal use and testing out features.",
    features: ["Private board sharing", "5 Gb Storage", "Web Analytics", "Private Mode"],
  },
  {
    id: "plan_pro",
    title: "Pro",
    priceMonthly: 10,
    description: "For small teams who need collaboration and analytics.",
    features: ["Private board sharing", "10 Gb Storage", "Web Analytics (Advanced)", "Priority support"],
  },
  {
    id: "plan_enterprise",
    title: "Enterprise",
    priceMonthly: 200,
    description: "Custom pricing for large organisations and SLAs.",
    features: ["Custom seats", "SLA", "Dedicated support", "Unlimited Storage"],
  },
];

const genTxn = () => {
  const n = Math.floor(Math.random() * 90000000) + 10000000; // 8 digits
  return `${Date.now().toString().slice(-6)}${n.toString().slice(0, 5)}`;
};

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  // success state (stores txn details)
  const [successData, setSuccessData] = useState(null);

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
      // simulate processing delay
      await new Promise((res) => setTimeout(res, 900));

      // Build success payload
      const txn = genTxn();
      const amountPaid = plan?.priceMonthly ?? 0; // example: monthly amount
      const provider = "Paytm"; // change to actual provider if available
      const timestamp = new Date().toISOString();

      setSuccessData({
        txn,
        amountPaid,
        provider,
        email,
        timestamp,
      });

      // Optionally persist subscription to server here.

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

  /* If successData exists, show the receipt-like confirmation (single CTA: Back to Home) */
  if (successData) {
    return (
      <main className="min-h-screen bg-black text-black flex items-center justify-center px-6 py-24">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 text-center shadow-lg">
          {/* big green circle with check */}
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-green-50 p-8">
              <div className="w-20 h-20 rounded-full bg-green-400 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-2">Payment Successful!</h2>
          <p className="text-neutral-600 mb-6">Your subscription is now active.</p>

          <div className="text-neutral-700 text-sm mb-4">
            <div className="mb-3">
              <span className="block text-neutral-500">Transaction Number :</span>
              <span className="block font-medium text-neutral-900">{successData.txn}</span>
            </div>

            <div className="mb-3">
              <span className="block text-neutral-500">Amount paid</span>
              <span className="block font-medium text-neutral-900">${successData.amountPaid.toFixed(2)}</span>
            </div>

            <div className="mb-4">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-blue-600 underline"
              >
                {successData.provider}
              </a>
            </div>
          </div>

          <button
            onClick={() => navigate("/")}
            className="w-full inline-block px-4 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800"
          >
            Back to Home
          </button>
        </div>
      </main>
    );
  }

  /* default checkout form */
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
                className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 text-white"
                placeholder="you@company.com"
                type="email"
              />
            </label>

            <label className="block">
              <div className="text-sm text-neutral-400 mb-1">Card (demo)</div>
              <input
                value={card}
                onChange={(e) => setCard(e.target.value)}
                className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 text-white"
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
    </main>
  );
};

export default Checkout;
