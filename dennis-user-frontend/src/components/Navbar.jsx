import React, { useContext } from "react";
import { AuthContext } from "../context/AuthConext.jsx"; // ✅ fixed filename typo
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-amber-50 shadow-sm">
      <h1
        onClick={() => navigate("/")}
        className="text-xl font-extrabold text-gray-800 cursor-pointer"
      >
        Dennis America User
      </h1>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-gray-700 font-medium">
              Welcome, <span className="font-bold">{user.username}</span>
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white font-semibold px-3 py-1 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/loginUser")}
              className="text-blue-600 hover:underline font-medium"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/registerUser")}
              className="text-blue-600 hover:underline font-medium"
            >
              Register
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
