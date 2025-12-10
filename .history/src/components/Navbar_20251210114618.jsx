import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status on mount
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
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className="hover:text-orange-400 transition"
            >
              {item.label}
            </NavLink>
          ))}

          {!isLoggedIn ? (
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
          ) : (
            <button
              onClick={handleLogout}
              className="px-5 py-2 border border-red-500 text-red-400 hover:bg-red-600 hover:text-white rounded-lg transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-neutral-800 px-6 pb-4 space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-1 hover:text-orange-400 transition"
            >
              {item.label}
            </NavLink>
          ))}

          {!isLoggedIn ? (
            <div className="flex flex-col gap-2 pt-2">
              <Link
                to="/signin"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
              >
                Sign In
              </Link>
              <Link
                to="/create-account"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-700 rounded-lg"
              >
                Create an account
              </Link>
            </div>
          ) : (
            <button
              onClick={() => {
                setIsMenuOpen(false);
                handleLogout();
              }}
              className="w-full text-center px-4 py-2 border border-red-500 text-red-400 hover:bg-red-600 hover:text-white rounded-lg transition mt-2"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
