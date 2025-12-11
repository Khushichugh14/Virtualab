import { pricing } from "../constants/siteData";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const PricingPage = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    // try to prefill from localStorage if user came back
    try {
      const saved = localStorage.getItem("selectedPlan");
      if (saved) setSelectedPlan(JSON.parse(saved));
    } catch (e) {
     console.log
    }
  }, []);

  const handleChoosePlan = (plan) => {
    setSelectedPlan(plan);
    try {
      localStorage.setItem("selectedPlan", JSON.stringify(plan));
    } catch (e) {
      console.warn("Could not save selected plan:", e);
    }
  };

  const handleContinue = () => {
    // continue to checkout or signup — change route if needed
    navigate("/checkout");
  };

  const handleCancelSelection = () => {
    setSelectedPlan(null);
    try {
      localStorage.removeItem("selectedPlan");
    } catch (e) {}
  };

  return (
    <main className="px-6 pt-28 pb-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-3">Pricing</h1>
        <p className="text-neutral-400 mb-2">Simple pricing for teams of every size.</p>
        <p className="text-neutral-500 mb-8">Choose a plan that fits your workflow — upgrade anytime as your team grows. No hidden fees. Cancel anytime.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.map((p) => {
            const isSelected = selectedPlan && selectedPlan.id === p.id;
            return (
              <div
                key={p.id}
                className={`p-6 rounded-xl bg-neutral-900 border ${isSelected ? "border-orange-500 ring-2 ring-orange-400/20" : "border-neutral-800"}`}
              >
                <h3 className="text-2xl font-semibold">{p.name}</h3>
                <div className="text-3xl font-bold mt-2">
                  {p.price} <span className="text-sm font-normal">/{p.period}</span>
                </div>
                <ul className="text-neutral-500 mt-4 space-y-2 text-left">
                  {p.bullets.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button
                    onClick={() => handleChoosePlan(p)}
                    className={`inline-block px-4 py-2 rounded ${isSelected ? "bg-orange-700" : "bg-orange-600"} text-white`}
                    aria-label={`Choose ${p.name} plan`}
                  >
                    {isSelected ? `Selected: ${p.name}` : `Choose ${p.name}`}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded selection section (Option C) */}
        {selectedPlan && (
          <section className="mt-10 p-6 rounded-lg bg-neutral-950 border border-neutral-800 max-w-4xl mx-auto text-left">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">Your Selected Plan</h2>
                <p className="text-neutral-400">Handy summary of the plan you chose. Review the features and continue to checkout or change your selection.</p>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{selectedPlan.name} — {selectedPlan.price}/{selectedPlan.period}</h3>
                  <ul className="mt-2 text-neutral-400 list-disc pl-5">
                    {selectedPlan.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex gap-3">
                  <button onClick={handleContinue} className="px-4 py-2 rounded bg-orange-600 text-white">Continue to Checkout</button>
                  <button onClick={handleCancelSelection} className="px-4 py-2 rounded border border-neutral-700">Change selection</button>
                </div>
              </div>

              <div className="shrink-0 text-right">
                <p className="text-sm text-neutral-500">Need help choosing?</p>
                <button
                  onClick={() => window.alert('Contact sales at sales@example.com')}
                  className="mt-3 px-3 py-2 rounded border border-neutral-700"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default PricingPage;
