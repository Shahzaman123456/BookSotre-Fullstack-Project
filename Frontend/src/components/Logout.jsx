import React from "react";
import { useAuth } from "../context/AuthicPrvider.jsx"; // adjust path
import toast from "react-hot-toast";
import User from "../../../Backend/model/user.model.js";

const Logout = () => {
  const { authUser, setAuthUser } = useAuth(); // ✅ use context

  const handleLogout = () => {
    try {
     setAuthUser({
        authUser,
        User: null,
      });
      localStorage.removeItem("users");
      toast.success("Logged out successfully");
       setTimeout(() => {
           window.location.reload();
        }, 2000);
      // Optionally, redirect to home or login page
      // navigate('/login')
    } catch (error) {
      toast.error("Logout error: " + error.message);
    }
  };

  if (!authUser) return null; // hide button if no user is logged in

  return (
    <button
      className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
