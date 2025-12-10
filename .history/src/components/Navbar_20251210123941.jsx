import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    // clear login flag and redirect to sign-in
    localStorage.removeItem("isLoggedIn");
    navigate("/signin");
  };

  // 👇 scroll to section on the current page
  const handleNavClick = (href) => {
    // href can be "#features" or "features"
    const id = href.startsWith("#") ? href.slice(1) : href;
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // close mobile drawer if open
    if (mobileDrawerOpen) setMobileDrawerOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-0">
        {/* Logo – goes to home */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="VirtualR" className="h-8 w-8" />
          <span className="text-lg font-semibold text-white">VirtualR</span>
        </Link>

        {/* Desktop nav items */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-neutral-300 hover:text-white"
            >
              {item.label}
            </button>
          ))}

          {/* Auth buttons */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="rounded-full px-4 py-2 text-sm font-semibold text-black bg-white hover:bg-neutral-200 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/signin"
                className="rounded-full px-4 py-2 text-sm font-semibold text-black bg-white hover:bg-neutral-200 transition"
              >
                Sign In
              </Link>
              <Link
                to="/create-account"
                className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition"
              >
                Create an account
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white"
          type="button"
          onClick={toggleNavbar}
        >
          {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileDrawerOpen && (
        <div className="border-t border-neutral-800 bg-black lg:hidden">
          <div className="flex flex-col gap-3 px-4 py-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="text-left text-sm font-medium text-neutral-300 hover:text-white"
              >
                {item.label}
              </button>
            ))}

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="mt-2 rounded-full px-4 py-2 text-sm font-semibold text-black bg-white hover:bg-neutral-200 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/signin"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="mt-2 rounded-full px-4 py-2 text-center text-sm font-semibold text-black bg-white hover:bg-neutral-200 transition"
                >
                  Sign In
                </Link>
                <Link
                  to="/create-account"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="rounded-full bg-orange-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-orange-600 transition"
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
