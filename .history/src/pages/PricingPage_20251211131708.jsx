// src/pages/PricingPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Plans data — same style as your testimonials dataset (rich fields)
 */
const plans = [
  {
    id: "plan_free",
    title: "Free",
    subtitle: "Starter",
    priceMonthly: 0,
    priceYearly: 0,
    billing: "month",
    popular: false,
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
    tags: ["Free", "Starter"],
    description: "Good for personal use and testing out features.",
    ctaLabel: "Subscribe",
    // optional checkoutUrl for direct gateway redirect
    checkoutUrl: null,
  },
  {
    id: "plan_pro",
    title: "Pro",
    subtitle: "Most Popular",
    priceMonthly: 10,
    priceYearly: 100,
    billing: "month",
    popular: true,
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advanced)",
      "Private Mode",
      "Priority support",
    ],
    tags: ["Team", "Growth"],
    description: "For small teams who need collaboration and analytics.",
    ctaLabel: "Subscribe",
    checkoutUrl: null,
  },
  {
    id: "plan_enterprise",
    title: "Enterprise",
    subtitle: "Contact",
    priceMonthly: null, // contact sales
    priceYearly: null,
    billing: "custom",
    popular: false,
    features: [
      "Custom seats",
      "SLA",
      "Dedicated support",
      "High Performance Network",
      "Unlimited Storage",
    ],
    tags: ["Enterprise", "SLA"],
    description: "Custom pricing for large organisations and SLAs.",
    ctaLabel: "Contact Sales",
    // optionally, you can use a special checkout url (eg. external sales form)
    checkoutUrl: "/contact-sales",
  },
];

const PriceTag = ({ price, billing }) => {
  if (price === null) {
    return (
      <div className="text-3xl md:text-4xl font-extrabold">
        Contact
        <span className="text-sm ml-2 text-neutral-400">/ custom</span>
      </div>
    );
  }

  return (
    <div className="flex items-baseline gap-2">
      <span className="text-4xl md:text-5xl font-extrabold">${price}</span>
      <span className="text-sm text-neutral-400">/{billing}</span>
    </div>
  );
};

const PricingPage = () => {
  const navigate = useNavigate();
  const [billingYearly, setBillingYearly] = useState(false);

  const goToCheckout = (plan) => {
    // If the plan has an external checkout URL (enterprise), go there
    if (plan.checkoutUrl) {
      navigate(plan.checkoutUrl);
      return;
    }

    // Build query fallback
    const query = new URLSearchParams({
      planId: plan.id,
      billing: billingYearly ? "yearly" : "monthly",
    }).toString();

    // Pass full plan object via location state for immediate UI on checkout
    navigate(`/checkout?${query}`, { state: { plan, billing: billingYearly ? "yearly" : "monthly" } });
  };

  return (
    <main className="px-6 py-20 bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold">Simple pricing for teams of every size.</h1>
          <p className="text-neutral-400 mt-3 max-w-2xl mx-auto">
            Choose a plan that fits your workflow — upgrade anytime as your team grows. No hidden fees.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4 text-sm">
            <span className={`px-3 py-2 rounded-full ${billingYearly ? "bg-neutral-800" : "bg-neutral-900"}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingYearly((s) => !s)}
              className="bg-neutral-800 px-3 py-2 rounded-md"
              aria-pressed={billingYearly}
              aria-label="Toggle billing"
            >
              Toggle billing
            </button>
            <span className={`px-3 py-2 rounded-full ${billingYearly ? "bg-neutral-900" : "bg-neutral-800"}`}>
              Yearly
            </span>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => {
            // compute displayed price depending on billing toggle
            const priceToShow =
              p.priceMonthly === null
                ? null
                : billingYearly && p.priceYearly != null
                ? Math.round((p.priceYearly / 12) * 100) / 100 // monthly equivalent of yearly
                : p.priceMonthly;

            return (
              <div
                key={p.id}
                className={`rounded-2xl p-8 border ${p.popular ? "border-orange-600 shadow-2xl" : "border-neutral-800"} bg-neutral-900`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{p.title}</h3>
                    {p.subtitle && <div className="text-sm text-orange-400">{p.subtitle}</div>}
                  </div>

                  {p.tags?.length > 0 && (
                    <div className="text-xs text-neutral-400">{p.tags.join(" • ")}</div>
                  )}
                </div>

                <div className="mt-6">
                  <PriceTag price={priceToShow} billing={billingYearly ? "month (billed yearly)" : "month"} />
                  <p className="text-neutral-400 mt-3">{p.description}</p>
                </div>

                <ul className="mt-6 space-y-3 text-neutral-300">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 text-green-400">✔</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <button
                    onClick={() => goToCheckout(p)}
                    className={`w-full py-3 rounded-lg font-medium transition ${
                      p.popular ? "bg-orange-600 hover:bg-orange-500 text-black" : "bg-neutral-800 hover:bg-neutral-700"
                    }`}
                  >
                    {p.ctaLabel}
                  </button>
                </div>

                {/* small meta */}
                <div className="mt-4 text-xs text-neutral-500">
                  {p.duration ? <span>{p.duration} • </span> : null}
                  <span>{p.popular ? "Recommended for fast-growing teams" : "Flexible plan"}</span>
                </div>
              </div>
            );
          })}
        </section>

        {/* optional footer callout */}
        <div className="mt-12 text-center text-neutral-400">
          <small>All plans include 24/7 support and a 14-day money-back guarantee.</small>
        </div>
      </div>
    </main>
  );
};

export default PricingPage;
