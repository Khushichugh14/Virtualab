// App.jsx
import Navbar from "./components/Navbar";

import StartFree from "./pages/StartFree";
import Documentation from "./pages/Documentation";
import CreateAccount from "./pages/CreatAccount";
import SignIn from "./pages/SignIn";

import { Routes, Route } from "react-router-dom";

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
