import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch logged-in user from localStorage
    const storedUserEmail = localStorage.getItem("loggedInUser"); // Store only email
    if (storedUserEmail) {
      const storedUserData = localStorage.getItem(storedUserEmail); // Fetch full user data
      if (storedUserData) {
        setUser(JSON.parse(storedUserData));
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    if (user?.email) {
      localStorage.removeItem(user.email); // Remove user-specific data
    }
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <NavLink to="/" className="text-2xl font-bold">
        WebDev Workshop
      </NavLink>
      <div className="space-x-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
      </div>
      <div>
        {user ? (
          // ✅ Show profile icon & logout button if user is logged in
          <div className="flex items-center space-x-4">
            <FaUserCircle
              className="text-2xl cursor-pointer"
              onClick={() => navigate("/profile", { state: { user } })}
            />
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          // ✅ Show login button if no user is logged in
          <button
            className="hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
