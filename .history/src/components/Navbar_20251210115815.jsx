import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link, NavLink, useNavigate } from "react-router-dom";

const SESSION_KEY = "virtualrSession"; // only for login state

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // derive from localStorage every render
  const isLoggedIn = !!localStorage.getItem(SESSION_KEY);

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY); // do NOT delete the saved account
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

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <NavLink
              key={item.href ?? index}          // unique key
              to={item.href}
              className="hover:text-orange-400 transition"
            >
              {item.label}
            </NavLink>
          ))}

          {/* Auth buttons */}
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

        {/* Mobile menu button (optional) */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-neutral-800 px-6 pb-4 space-y-3">
          {navItems.map((item, index) => (
            <NavLink
              key={item.href ?? `mobile-${index}`}   // unique key
              to={item.href}
              className="block py-1 hover:text-orange-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          {!isLoggedIn ? (
            <>
              <Link
                to="/signin"
                className="block mt-2 px-4 py-2 border border-white rounded-lg text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/create-account"
                className="block mt-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-700 rounded-lg text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Create an account
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                setIsMenuOpen(false);
                handleLogout();
              }}
              className="block mt-2 w-full px-4 py-2 border border-red-500 text-red-400 rounded-lg text-center"
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
