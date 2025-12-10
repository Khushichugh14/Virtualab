import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // check login once when navbar mounts
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    // only clear login session
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/signin");
  };

  const handleNavClick = (href) => {
    // close mobile menu when clicking any nav item
    setIsMenuOpen(false);

    // section links like "#features"
    if (href.startsWith("#")) {
      // make sure we are on homepage so sections exist
      navigate("/");

      // wait for page render then scroll
      setTimeout(() => {
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
      return;
    }

    // normal route (e.g. /start-free, /docs)
    navigate(href);
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
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="hover:text-orange-400 transition text-sm"
            >
              {item.label}
            </button>
          ))}

          {!isLoggedIn ? (
            <>
              <button
                onClick={() => navigate("/signin")}
                className="px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition text-sm"
              >
                Sign In
              </button>

              <button
                onClick={() => navigate("/create-account")}
                className="px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-700 rounded-lg text-sm"
              >
                Create an account
              </button>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-5 py-2 border border-red-500 text-red-400 hover:bg-red-600 hover:text-white rounded-lg transition text-sm"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-neutral-700"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-black">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left w-full hover:text-orange-400 transition text-sm"
              >
                {item.label}
              </button>
            ))}

            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => handleNavClick("/signin")}
                  className="mt-2 w-full px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition text-sm"
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleNavClick("/create-account")}
                  className="w-full px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-700 rounded-lg text-sm"
                >
                  Create an account
                </button>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="mt-2 w-full px-5 py-2 border border-red-500 text-red-400 hover:bg-red-600 hover:text-white rounded-lg transition text-sm"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
