import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status on every reload
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedI(!!user);
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

          {/* 🔥 CONDITIONAL BUTTONS */}
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
      </div>
    </nav>
  );
};

export default Navbar;
