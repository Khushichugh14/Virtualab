import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen((prev) => !prev);
  };

  // Scroll to section WITHOUT changing URL
  const handleScroll = (id) => {
    if (!id) return;

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <Link to="/" className="text-xl tracking-tight">
              VirtualR
            </Link>
          </div>

          {/* Desktop nav items */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="hover:text-orange-400 transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop auth buttons */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <NavLink to="/signin" className="py-2 px-3 border rounded-md" id="signin">
              Sign In
            </NavLink>
            <NavLink
              to="/create-account"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item) => (
                <li key={item.id} className="py-4">
                  <button
                    onClick={() => {
                      handleScroll(item.id);
                      toggleNavbar();
                    }}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex space-x-6 mt-6">
              <NavLink to="/signin" className="py-2 px-3 border rounded-md">
                Sign In
              </NavLink>
              <NavLink
                to="/create-account"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
