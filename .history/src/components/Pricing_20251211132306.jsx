import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  const navigate = useNavigate();

  const goToCheckout = (planId) => {
    navigate(`/checkout?planId=${planId}`, {
      state: { planId },
    });
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">

        {/* Free Plan */}
        <div className="rounded-2xl p-8 border border-neutral-800 bg-neutral-900">
          <h3 className="text-3xl font-bold">Free</h3>
          <div className="text-5xl font-extrabold mt-4">$0</div>
          <p className="text-neutral-400">/Month</p>

          <ul className="mt-6 space-y-4">
            <li>✔ Private board sharing</li>
            <li>✔ 5 Gb Storage</li>
            <li>✔ Web Analytics</li>
            <li>✔ Private Mode</li>
          </ul>

          <button
            onClick={() => goToCheckout("plan_free")}
            className="mt-8 w-full py-3 rounded-lg border border-orange-600 hover:bg-orange-600"
          >
            Subscribe
          </button>
        </div>

        {/* Pro Plan */}
        <div className="rounded-2xl p-8 border border-orange-600 bg-neutral-900 shadow-2xl">
          <h3 className="text-3xl font-bold">Pro <span className="text-orange-400">(Most Popular)</span></h3>
          <div className="text-5xl font-extrabold mt-4">$10</div>
          <p className="text-neutral-400">/Month</p>

          <ul className="mt-6 space-y-4">
            <li>✔ Private board sharing</li>
            <li>✔ 10 Gb Storage</li>
            <li>✔ Web Analytics (Advanced)</li>
            <li>✔ Private Mode</li>
          </ul>

          <button
            onClick={() => goToCheckout("plan_pro")}
            className="mt-8 w-full py-3 rounded-lg border border-orange-600 bg-orange-600 hover:bg-orange-500 text-black"
          >
            Subscribe
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="rounded-2xl p-8 border border-neutral-800 bg-neutral-900">
          <h3 className="text-3xl font-bold">Enterprise</h3>
          <div className="text-5xl font-extrabold mt-4">$200</div>
          <p className="text-neutral-400">/Month</p>

          <ul className="mt-6 space-y-4">
            <li>✔ Private board sharing</li>
            <li>✔ Unlimited Storage</li>
            <li>✔ High Performance Network</li>
            <li>✔ Private Mode</li>
          </ul>

          <button
            onClick={() => goToCheckout("plan_enterprise")}
            className="mt-8 w-full py-3 rounded-lg border border-orange-600 hover:bg-orange-600"
          >
            Subscribe
          </button>
        </div>

      </div>
    </section>
     );
};

export default Pricing;