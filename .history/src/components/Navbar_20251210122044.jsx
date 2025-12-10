import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status on initial load
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/signin");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-8" />
          <span className="text-xl font-semibold">VirtualR</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={`${item.label}-${index}`}
              href={item.href}
              className="hover:text-orange-400 transition"
            >
              {item.label}
            </a>
          ))}

          {/* Auth buttons */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-5 py-2 border border-red-500 text-red-400 hover:bg-red-600 hover:text-white rounded-lg transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/signin"
                className="px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
              >
                Sign In
              </Link>

              <Link
                to="/create-account"
                className="px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-700 rounded-lg"
              >
                Create an account
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-black px-6 pb-4">
          <div className="flex flex-col gap-4 mt-4">
            {navItems.map((item, index) => (
              <a
                key={`${item.label}-mobile-${index}`}
                href={item.href}
                className="hover:text-orange-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {isLoggedIn ? (
              <button
                className="mt-2 px-4 py-2 border border-red-500 text-red-400 rounded-lg"
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="mt-2 px-4 py-2 border border-white rounded-lg text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/create-account"
                  className="mt-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-700 rounded-lg text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create an account
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
