import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import StartFree from "./pages/StartFree";
import Documentation from "./pages/Documentation";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection />
          <FeatureSection />
          <Workflow />
          <Pricing />
          <Testimonials />
          <Footer />
        </div>
        <Route path="/start-free" element={<StartFree />} />

        {/* Documentation page */}
        <Route path="/documentation" element={<Documentation />} />

        {/* Create account page */}
        <Route path="/create-account" element={<CreateAccount />} />

        {/* Sign in page */}
        <Route path="/signin" element={<SignIn />} />

      </Routes>

    </>
  );
};

export default App;