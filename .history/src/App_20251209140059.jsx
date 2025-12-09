import Navbar from "./components/Navbar";
import HeroSection from "./";
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

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Routes>
        <Route path="/start-free" element={<StartFree />} />

        {/* Documentation page */}
        <Route path="/documentation" element={<Documentation />} />

        {/* Create account page */}
        <Route path="/create-account" element={<CreateAccount />} />

        {/* Sign in page */}
        <Route path="/signin" element={<SignIn />} />

      </Routes>
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />
      

    </>
  );
};

export default App;