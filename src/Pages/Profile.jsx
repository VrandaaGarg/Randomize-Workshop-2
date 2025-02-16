import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaUniversity, FaGraduationCap } from "react-icons/fa";

function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedInEmail = localStorage.getItem("loggedInUser");
    if (!loggedInEmail) {
      navigate("/login");
      return;
    }

    try {
      const userData = JSON.parse(localStorage.getItem(loggedInEmail));
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="text-red-500">No profile data found</div>
      </div>
    );
  }

  const profileSections = [
    { icon: <FaUser className="text-blue-500" />, label: "Name", value: user.name },
    { icon: <FaEnvelope className="text-blue-500" />, label: "Email", value: user.email },
    { icon: <FaUniversity className="text-blue-500" />, label: "College", value: user.college },
    { icon: <FaGraduationCap className="text-blue-500" />, label: "Course", value: user.course }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-8">
            <div className="flex items-center justify-center">
              <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center">
                <FaUser className="text-4xl text-blue-500" />
              </div>
            </div>
            <h1 className="text-center text-white text-2xl font-bold mt-4">
              {user.name}
            </h1>
          </div>

          {/* Profile Information */}
          <div className="p-6">
            <div className="space-y-6">
              {profileSections.map((section, index) => (
                section.value && (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    {section.icon}
                    <div>
                      <p className="text-sm text-gray-500">{section.label}</p>
                      <p className="text-gray-800 font-medium">{section.value}</p>
                    </div>
                  </div>
                )
              ))}
            </div>

            <button
              onClick={() => navigate("/")}
              className="w-full mt-8 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
