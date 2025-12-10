import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { useNavigate, useLocation } from "react-router-dom";

const SESSION_KEY = "virtualrSession"; // ✅ Match CreateAccount & SignIn

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const session = localStorage.getItem(SESSION_KEY);
    setIsLoggedIn(!!session); // logged in if session exists
  }, [location.pathname]);

  const handleNavClick = (path) => {
    if (!path) return;

    setIsMenuOpen(false);

    if (path.startsWith("#") || path.startsWith("/#")) {
      const sectionId = path.startsWith("#")
        ? path.slice(1)
        : path.split("#")[1];

      const scrollToSection = () => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      };

      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(scrollToSection, 150);
      } else {
        scrollToSection();
      }

      return;
    }

    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY); // ❗ remove VR login session
    setIsLoggedIn(false);
    navigate("/create-account"); // after logout go to signup
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-orange-500/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick("/")}
          >
            <img src={logo} alt="VirtualR Logo" className="h-8 w-auto" />
            <span className="text-white font-semibold text-lg">VirtualR</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition-colors"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={() => handleNavClick("/signin")}
                  className="px-4 py-2 rounded-full border border-gray-500 text-gray-200 hover:bg-gray-800 text-sm font-medium transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleNavClick("/create-account")}
                  className="px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition-colors"
                >
                  Create an account
                </button>
              </>
            )}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-orange-500/40">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className="block w-full text-left text-gray-300 hover:text-white py-1"
              >
                {item.label}
              </button>
            ))}

            <div className="pt-3 border-t border-gray-700 mt-2">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition-colors"
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    onClick={() => handleNavClick("/signin")}
                    className="w-full mb-2 px-4 py-2 rounded-full border border-gray-500 text-gray-200 hover:bg-gray-800 text-sm font-medium transition-colors"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => handleNavClick("/create-account")}
                    className="w-full px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition-colors"
                  >
                    Create an account
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
