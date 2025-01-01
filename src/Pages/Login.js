import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        {
          email: data.email,
          password: data.password,
        }
      );
      // Save email to local storage
      localStorage.setItem("userEmail", data.email);
      toast.success("Login successful! Redirecting to personal details...", {
        position: "top-right",
        autoClose: 3000,
      });
      setTimeout(() => navigate("/admin/account"), 3000);
    } catch (error) {
      toast.error(
        "Login failed: " + (error.response?.data.message || error.message),
        {
          position: "top-right",
          autoClose: 5000,
        }
      );
    }
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen px-4"
      style={{
        backgroundImage:
          "url('https://godare.net/wp-content/uploads/2024/11/bg-banner.png')",
      }}
    >
      <div className="absolute inset-0 bg-black-900 opacity-50"></div>
      <div className="max-w-7xl mx-auto relative z-10 h-full flex justify-start items-center">
        <div className="bg-white rounded-5 shadow-lg w-full max-w-lg p-6">
          <h1 className="text-3xl font-bold text-[#333333] mb-7">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-normal text-black-900 mb-1"
              >
                Email or phone number
              </label>
              <input
                type="text"
                id="email"
                name="email"
                {...register("email", {
                  required: "Email or phone number is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full px-3 py-2 border rounded focus:outline-none ${
                  errors.email
                    ? "border-red-500 focus:ring-2 focus:ring-red-500"
                    : "border-gray-300 focus:ring-2 focus:ring-primary"
                }`}
                placeholder="Enter your email or phone number"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* Password input */}
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-lg font-normal text-black-900 mb-1"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={`w-full px-3 py-2 border rounded focus:outline-none pr-10 ${
                  errors.password
                    ? "border-red-500 focus:ring-2 focus:ring-red-500"
                    : "border-gray-300 focus:ring-2 focus:ring-primary"
                }`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-2.5 font-bold px-4 rounded-full hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Sign in
            </button>
            <div className="flex justify-between items-center mt-6">
              <p className="text-left text-sm text-[#666666]">
                Don’t have an account?{" "}
                <Link
                  to="/Signup"
                  className="text-primary font-medium underline"
                >
                  Sign up
                </Link>
              </p>
              <Link
                to="/Reset-password"
                className="text-primary font-medium underline "
              >
                Reset Password
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
