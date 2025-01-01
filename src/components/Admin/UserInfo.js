import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PersonalDetails = () => {
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        birthday: "",
        email: "",
    });

    useEffect(() => {
        const email = localStorage.getItem("userEmail");
        if (email) {
            // Fetch user details based on email
            axios.get(`http://localhost:8080/api/users/${email}`)
                .then(response => {
                    setUserDetails(response.data);
                })
                .catch(error => {
                    console.error("Error fetching user details:", error);
                    toast.error("Failed to load user details.", {
                        position: "top-right",
                        autoClose: 5000,
                    });
                });
        }
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Details</h2>
            <div className="flex flex-col space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input 
                        type="text" 
                        value={userDetails.firstName} 
                        readOnly 
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 py-2 px-4" 
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input 
                        type="text" 
                        value={userDetails.lastName} 
                        readOnly 
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 py-2 px-4" 
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Birthday</label>
                    <input 
                        type="text" 
                        value={userDetails.birthday} 
                        readOnly 
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 py-2 px-4" 
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input 
                        type="email" 
                        value={userDetails.email} 
                        readOnly 
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 py-2 px-4" 
                    />
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default PersonalDetails;
