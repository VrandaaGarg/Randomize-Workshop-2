import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const email = location?.state?.email; // Fetch email from state
  console.log(email);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (email) {
      const storedUser = JSON.parse(localStorage.getItem(email));
      setUser(storedUser);
    }
  }, [email]);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-xl">
      {user ? (
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4">Profile</h2>
          {Object.entries(user).map(
            ([key, value]) =>
              key !== "password" && (
                <p key={key} className="mb-2">
                  <strong>{key}:</strong> {value}
                </p>
              )
          )}
        </div>
      ) : (
        <p>No Profile Data Found</p>
      )}
    </div>
  );
}

export default Profile;
