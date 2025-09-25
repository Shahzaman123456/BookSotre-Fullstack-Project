import React from "react";
import { Link, Navigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthicPrvider.jsx";
import { login } from "../../../Backend/controller/user.controller.js";

const SignUP = () => {
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const { setAuthUser } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(`${API_URL}/users/signup`, userInfo);
      if (res.data) {
        toast.success("Signup Successfully!");
      <Navigate to="/"/>
        localStorage.setItem("users", JSON.stringify(res.data.user));
        setAuthUser(res.data.user); // ✅ update context
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 relative">
        {/* cross icon */}
        <Link
          to="/"
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
        >
          <AiOutlineClose size={24} />
        </Link>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              {...register("fullname", { required: "Name is required" })}
            />
            {errors.fullname && <p className="text-red-500">{errors.fullname.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700" 
            onClick={()=>{document.getElementById("my_modal_1")?.close()}}
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{" "}
          <button
            className="text-indigo-600 hover:underline"
            onClick={() => document.getElementById("my_modal_1")?.close()}
          >
            <Link to="/" className="link link-primary ">Login</Link>
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUP;
