import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const storedUserEmail = localStorage.getItem("loggedInUser");
      if (storedUserEmail) {
        const storedUserData = localStorage.getItem(storedUserEmail);
        if (storedUserData) {
          setUser(JSON.parse(storedUserData));
        }
      }
    };

    checkAuth();
    // Add event listener for storage changes
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    if (user?.email) {
      localStorage.removeItem(user.email);
    }
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-slate-900 text-gray-100 px-8 py-4 fixed w-full z-20">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold text-blue-400">
          WebDev Workshop
        </NavLink>

        <div className="flex items-center gap-8">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-400">
            About
          </Link>

          {user ? (
            <div className="flex items-center gap-4">
              <Link
                to="/profile"
                className="flex items-center gap-2 hover:text-blue-400"
              >
                <FaUserCircle className="text-2xl" />
                <span>{user.name}</span>
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded transition-colors">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
