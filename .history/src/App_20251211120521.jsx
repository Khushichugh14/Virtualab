// App.jsx
import Navbar from "./components/Navbar";

import StartFree from "./pages/StartFree";
import Documentation from "./pages/Documentation";
import CreateAccount from "./pages/CreatAccount";
import SignIn from "./pages/SignIn";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FeaturePage from "./pages/FeaturePage";
import FeatureDetail from "./pages/FeatureDetail";
import WorkflowPage from "./pages/WorkFlowPage";
import PricingPage from "./pages/PricingPage";
import TestimonialsPage from "./pages/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Landing page */}
        <Route path="/" element={<HomePage />} />

        {/* Other pages */}
        <Route path="/start-free" element={<StartFree />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/features" element={<FeaturePage />} />
        <Route path="/features/:id" element={<FeatureDetail />} />
        <Route path="/workflow" element={<WorkflowPage />} />
        <Route path="/workflow" element={<WorkflowDetai/>} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
      </Routes>
    </>
  );
};

export default App;
