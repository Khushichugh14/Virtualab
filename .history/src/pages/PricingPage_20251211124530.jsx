import { pricing } from "../constants/siteData";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const navigate = useNavigate();

  const handleChoosePlan = (plan) => {
    // save selected plan to localStorage so checkout/sign-up can prefill it
    try {
      localStorage.setItem("selectedPlan", JSON.stringify(plan));
    } catch (e) {
      // localStorage can fail in some environments; fail silently
      console.warn("Could not save selected plan:", e);
    }

    // navigate to a checkout or signup page — adjust route if your app uses a different path
    navigate("/checkout");
  };

  return (
    <main className="px-6 pt-28 pb-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-3">Pricing</h1>
        <p className="text-neutral-400 mb-8">Simple pricing for teams of every size.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.map((p) => (
            <div key={p.id} className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
              <h3 className="text-2xl font-semibold">{p.name}</h3>
              <div className="text-3xl font-bold mt-2">
                {p.price} <span className="text-sm font-normal">/{p.period}</span>
              </div>
              <ul className="text-neutral-500 mt-4 space-y-2">
                {p.bullets.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
              <div className="mt-6">
                {/* Use button to handle click in-app instead of navigating with anchor tag */}
                <button
                  onClick={() => handleChoosePlan(p)}
                  className="inline-block px-4 py-2 rounded bg-orange-600 text-white"
                  aria-label={`Choose ${p.name} plan`}
                >
                  Choose {p.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PricingPage;
