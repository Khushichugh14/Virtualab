import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("selectedPlan");
      if (raw) setPlan(JSON.parse(raw));
    } catch (e) {
      console.warn("Could not read selectedPlan", e);
    }
  }, []);

  const parsePriceToNumber = (priceStr) => {
    if (!priceStr) return 0;
    // expected format: "$12" or "$12/mo" etc.
    const digits = priceStr.replace(/[^0-9.]/g, "");
    return Number(digits) || 0;
  };

  const handlePay = () => {
    if (!plan) return;
    setProcessing(true);

    // simulate payment delay
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);

      // create a fake transaction id
      const txn = Math.floor(100000000 + Math.random() * 900000000).toString();
      setTransaction(txn);

      // optionally clear the selection if you want
      // localStorage.removeItem('selectedPlan');
    }, 1400);
  };

  if (!plan) {
    return (
      <main className="px-6 pt-28">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">No plan selected</h2>
          <p className="text-neutral-400 mb-6">Please choose a plan on the Pricing page first.</p>
          <button onClick={() => navigate("/pricing")} className="px-4 py-2 rounded bg-orange-600 text-white">Go to Pricing</button>
        </div>
      </main>
    );
  }

  // success screen
  if (success) {
    const amount = parsePriceToNumber(plan.price);
    return (
      <main className="px-6 pt-28">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow p-8 text-center">
          <div className="w-36 h-36 mx-auto rounded-full flex items-center justify-center bg-green-50 mb-6">
            <div className="w-20 h-20 rounded-full bg-green-400 flex items-center justify-center text-white text-3xl">✓</div>
          </div>

          <h3 className="text-xl font-semibold">Ticket Payment Successful</h3>
          <p className="text-sm text-neutral-500 mt-2">Transaction Number : {transaction}</p>

          <hr className="my-5" />

          <p className="text-neutral-700">Amount paid <span className="font-semibold">${amount.toFixed(2)}</span></p>
          <p className="mt-2">Payed by <a href="#" onClick={(e)=>e.preventDefault()} className="text-blue-600 underline">Paytm</a></p>

          <div className="mt-6 flex justify-center gap-3">
            <button onClick={() => navigate("/")} className="px-4 py-2 rounded bg-neutral-800 text-white">Back to Home</button>
            <button onClick={() => navigate("/pricing")} className="px-4 py-2 rounded border">Choose another plan</button>
          </div>
        </div>
      </main>
    );
  }

  // normal checkout UI
  const priceNum = parsePriceToNumber(plan.price);

  return (
    <main className="px-6 pt-28">
      <div className="max-w-2xl mx-auto bg-neutral-950 rounded-lg p-8">
        <h2 className="text-2xl font-bold">Checkout</h2>
        <p className="text-neutral-400">Review your plan and complete payment.</p>

        <div className="mt-6 flex items-center justify-between bg-neutral-900 p-4 rounded">
          <div>
            <div className="text-sm text-neutral-400">Plan</div>
            <div className="text-lg font-semibold">{plan.name}</div>
            <div className="text-sm text-neutral-500">{plan.bullets?.join(' • ')}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-neutral-400">Amount</div>
            <div className="text-xl font-bold">{plan.price} <span className="text-sm text-neutral-500">/{plan.period}</span></div>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handlePay}
            disabled={processing}
            className="px-4 py-2 rounded bg-orange-600 text-white"
          >
            {processing ? 'Processing...' : `Pay $${priceNum.toFixed(2)}`}
          </button>
          <button onClick={() => navigate(-1)} className="ml-3 px-4 py-2 rounded border">Back</button>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
