import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import axios  from "axios";
import toast from "react-hot-toast";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    document.getElementById("my_modal_1")?.close(); // close
const userInfo={
    fullname:data.fullname,
    email:data.email,
    password:data.password
    }
    await  axios.post("http://localhost:4001/users/login",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Loggedin Successfully!');
         setTimeout(() => {
           window.location.reload();
        }, 2000);
      }
   localStorage.setItem("users",JSON.stringify(res.data.user));
    }).catch((err)=>{
    if(err.response){
      console.log(err)
      toast.error('Error'+err.response.data.message);
    }
    })
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box relative max-w-sm">
          {/*  Cross button */}
          <button
            type="button"
            onClick={() => document.getElementById("my_modal_1")?.close()}
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
            aria-label="Close"
          >
            <AiOutlineClose size={24} />
          </button>

          <h3 className="font-bold text-xl text-center mb-4">Login</h3>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn w-full bg-pink-500 hover:bg-pink-400 text-white"
            >
              Login
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-sm mt-2">
              Don’t have an account?{" "}
              <Link to="/signup" className="link link-primary">
                Sign Up
              </Link>
            </p>
          </form>

          {/* Bottom Close Button */}
          <div className="modal-action">
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_1")?.close()}
              className="btn"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
