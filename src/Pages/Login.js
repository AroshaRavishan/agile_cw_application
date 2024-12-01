import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data: ", data);
        // Redirect to home page upon successful login
        navigate("/");
    };

    return (
        <div
            className="relative bg-cover bg-center h-screen px-4"
            style={{ backgroundImage: "url('https://godare.net/wp-content/uploads/2024/11/bg-banner.png')" }}
        >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black-900 opacity-50"></div>

            {/* Container for content */}
            <div className="max-w-7xl mx-auto relative z-10 h-full flex justify-start items-center">
                {/* Form container */}
                <div className="bg-white rounded-5 shadow-lg w-full max-w-lg p-6">
                    <h1 className="text-3xl font-bold text-[#333333] mb-7">Login</h1>
                    <p className="text-[#333333] text-base mb-6">
                        Enter your login credentials to access your account
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Email or Phone */}
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
                                className={`w-full px-3 py-2 border rounded focus:outline-none ${errors.email
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

                        {/* Password */}
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-lg font-normal text-black-900 mb-1"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                })}
                                className={`w-full px-3 py-2 border rounded focus:outline-none ${errors.password
                                        ? "border-red-500 focus:ring-2 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-2 focus:ring-primary"
                                    }`}
                                placeholder="Enter your password"
                            />
                            {errors.password && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Sign-in button */}
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-2.5 font-bold px-4 rounded-full hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            Sign in
                        </button>

                        {/* Remember me and Need help */}
                        <div className="flex items-center justify-between my-6">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-primary h-4 w-4"
                                />
                                <span className="ml-2 text-sm text-[#333333]">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-primary hover:underline">
                                Need help?
                            </a>
                        </div>

                        {/* Sign up */}
                        <p className="text-left text-sm text-[#666666] mt-6">
                            Don’t have an account?{" "}
                            <Link to="/Signup" className="text-primary font-medium underline">
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;