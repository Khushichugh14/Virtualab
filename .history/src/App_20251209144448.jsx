// App.jsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

import StartFree from "./pages/StartFree";
import Documentation from "./pages/Documentation";
import CreateAccount from "./pages/CreatAccount";
import SignIn from "./pages/SignIn";

import { Routes, Route } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
};

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
      </Routes>
    </>
  );
};

export default App;
