import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
    const [step, setStep] = useState(1);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const notifySuccess = (message) => {
        toast.success(message, { position: "top-right" });
    };

    const notifyError = (message) => {
        toast.error(message, { position: "top-right" });
    };

    const onSubmit = async (data) => {
        setErrorMessage("");
        try {
            if (step === 1) {
                setStep(2);
            } else {
                const response = await axios.post("http://localhost:8080/api/users/register", {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    birthday: data.birthday,
                    email: data.email,
                    password: data.password,
                });

                console.log("Signup response: ", response.data);
                notifySuccess("Signup successful! Redirecting to login...");
                setTimeout(() => navigate("/login"), 3000); // Redirect after 3 seconds
            }
        } catch (error) {
            const message = error.response?.data || error.message;
            setErrorMessage(message);
            notifyError(message);
            console.error("Signup error: ", message);
        }
    };

    return (
        <div
            className="relative bg-cover bg-center h-screen px-4"
            style={{ backgroundImage: "url('https://godare.net/wp-content/uploads/2024/11/bg-banner.png')" }}
        >
            <div className="absolute inset-0 bg-black-900 opacity-50"></div>
            <div className="max-w-7xl mx-auto relative z-10 h-full flex justify-start items-center">
                <div className="bg-white rounded-5 shadow-lg w-full max-w-lg p-6">
                    <h1 className="text-3xl font-bold text-[#333333] mb-7">
                        Sign up -
                        <span className="font-normal ml-2">
                            {step === 1 ? "Login details" : "Personal details"}
                        </span>
                    </h1>
                    <p className="text-[#333333] text-base mb-6">
                        {step === 1
                            ? "Please enter your login details to create your account"
                            : "Please provide your personal details to complete your signup"}
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {step === 1 && (
                            <>
                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="block text-lg font-normal text-black-900 mb-1"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        {...register("email", {
                                            required: "Email is required",
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
                                        placeholder="Enter your email"
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-red-500 mt-1">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

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
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters",
                                            },
                                        })}
                                        className={`w-full px-3 py-2 border rounded focus:outline-none ${
                                            errors.password
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
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <div className="mb-4">
                                    <label
                                        htmlFor="firstName"
                                        className="block text-lg font-normal text-black-900 mb-1"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        {...register("firstName", {
                                            required: "First name is required",
                                        })}
                                        className={`w-full px-3 py-2 border rounded focus:outline-none ${
                                            errors.firstName
                                                ? "border-red-500 focus:ring-2 focus:ring-red-500"
                                                : "border-gray-300 focus:ring-2 focus:ring-primary"
                                        }`}
                                        placeholder="Enter your first name"
                                    />
                                    {errors.firstName && (
                                        <p className="text-sm text-red-500 mt-1">
                                            {errors.firstName.message}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="lastName"
                                        className="block text-lg font-normal text-black-900 mb-1"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        {...register("lastName", {
                                            required: "Last name is required",
                                        })}
                                        className={`w-full px-3 py-2 border rounded focus:outline-none ${
                                            errors.lastName
                                                ? "border-red-500 focus:ring-2 focus:ring-red-500"
                                                : "border-gray-300 focus:ring-2 focus:ring-primary"
                                        }`}
                                        placeholder="Enter your last name"
                                    />
                                    {errors.lastName && (
                                        <p className="text-sm text-red-500 mt-1">
                                            {errors.lastName.message}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="birthday"
                                        className="block text-lg font-normal text-black-900 mb-1"
                                    >
                                        Birthday
                                    </label>
                                    <input
                                        type="date"
                                        id="birthday"
                                        {...register("birthday", {
                                            required: "Birthday is required",
                                        })}
                                        className={`w-full px-3 py-2 border rounded focus:outline-none ${
                                            errors.birthday
                                                ? "border-red-500 focus:ring-2 focus:ring-red-500"
                                                : "border-gray-300 focus:ring-2 focus:ring-primary"
                                        }`}
                                    />
                                    {errors.birthday && (
                                        <p className="text-sm text-red-500 mt-1">
                                            {errors.birthday.message}
                                        </p>
                                    )}
                                </div>
                            </>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-2.5 font-bold px-4 rounded-full hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            {step === 1 ? "Next" : "Sign up"}
                        </button>

                        <p className="text-left text-sm text-[#666666] mt-6">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-primary font-medium underline"
                            >
                                Log in
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Signup;
