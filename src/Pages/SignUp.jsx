import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState({
    name: "",
    regNo: "",
    college: "",
    email: "",
    phone: "",
    startYear: "",
    endYear: "",
    course: "",
    branch: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(user.email, JSON.stringify(user));
    alert("Signup Successful!");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center py-24 bg-gradient-to-r from-blue-500 to-purple-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Sign Up
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Personal Details
          </h3>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full px-2 mb-4">
              <label
                className="block text-gray-700 mb-2 capitalize"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-full px-2 mb-4">
              <label
                className="block text-gray-700 mb-2 capitalize"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="email"
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-full px-2 mb-4">
              <label
                className="block text-gray-700 mb-2 capitalize"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="phone"
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-full px-2 mb-4">
              <label
                className="block text-gray-700 mb-2 capitalize"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            College Details
          </h3>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full px-2 mb-4">
              <label
                className="block text-gray-700 mb-2 capitalize"
                htmlFor="regNo"
              >
                Registration Number
              </label>
              <input
                type="text"
                name="regNo"
                id="regNo"
                placeholder="regNo"
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-full px-2 mb-4">
              <label
                className="block text-gray-700 mb-2 capitalize"
                htmlFor="college"
              >
                College
              </label>
              <input
                type="text"
                name="college"
                id="college"
                placeholder="college"
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-full px-2 mb-4">
              <label
                className="block text-gray-700 mb-2 capitalize"
                htmlFor="startYear"
              >
                Start Year
              </label>
              <input
                type="date"
                name="startYear"
                id="startYear"
                placeholder="startYear"
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-full px-2 mb-4">
              <label
                className="block text-gray-700 mb-2 capitalize"
                htmlFor="endYear"
              >
                End Year
              </label>
              <input
                type="date"
                name="endYear"
                id="endYear"
                placeholder="endYear"
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-full px-2 mb-4">
              <label
                className="block text-gray-700 mb-2 capitalize"
                htmlFor="course"
              >
                Course
              </label>
              <input
                type="text"
                name="course"
                id="course"
                placeholder="course"
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-full px-2 mb-4">
              <label
                className="block text-gray-700 mb-2 capitalize"
                htmlFor="branch"
              >
                Branch
              </label>
              <input
                type="text"
                name="branch"
                id="branch"
                placeholder="branch"
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
