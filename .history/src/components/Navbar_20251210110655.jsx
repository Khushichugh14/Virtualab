import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login state on load
  useEffect(() => {
    const logged = localStorage.getItem("virtualrIsLoggedIn") === "true";
    setIsLoggedIn(logged);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("virtualrIsLoggedIn");
    localStorage.removeItem("virtualrUser"); // optional
    setIsLoggedIn(false);
    navigate("/signin");
  };

  return (
    <nav className="w-full bg-black px-6 py-4 flex justify-between items-center">
      <h1 className="text-white font-bold text-xl">VirtualR</h1>

      <div className="flex items-center gap-6 text-sm text-white">

        {/* IF NOT LOGGED IN → SHOW SIGN IN + CREATE ACCOUNT */}
        {!isLoggedIn && (
          <>
            <NavLink to="/signin" className="hover:text-orange-400">
              Sign In
            </NavLink>

            <NavLink to="/create-account" className="hover:text-orange-400">
              Create Account
            </NavLink>
          </>
        )}

        {/* IF LOGGED IN → SHOW LOGOUT */}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-1.5 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
