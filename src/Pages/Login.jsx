import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem(email));
    localStorage.setItem("loggedInUser", JSON.stringify(email));

    if (storedUser && storedUser.password === password) {
      alert("Login Successful!");
      navigate("/profile", { state: { email } }); // Fixed user.email issue
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="">
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded-lg shadow-md w-96"
        >
          <h2 className="text-xl font-bold mb-4">Login</h2>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded"
          >
            Login
          </button>
        </form>
        <div className=" text-black">
          No account? <NavLink to="/signup">Signup</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
