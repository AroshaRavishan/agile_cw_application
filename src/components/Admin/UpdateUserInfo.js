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

    const handleUpdate = async () => {
        try {
            await axios.post("http://localhost:8080/api/users/update-user", userDetails);
            toast.success("User details updated successfully!", {
                position: "top-right",
                autoClose: 3000,
            });
        } catch (error) {
            console.error("Error updating user details:", error);
            toast.error("Error updating user details: " + (error.response?.data || error.message), {
                position: "top-right",
                autoClose: 5000,
            });
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Details</h2>
            <div className="flex items-start space-x-8">
                <div className="flex-1 space-y-4">
                    {/* First Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input type="text" value={userDetails.firstName} onChange={(e) => setUserDetails({ ...userDetails, firstName: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#2b241a] focus:border-[#2b241a] sm:text-sm bg-gray-100 py-2 px-4" />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input type="text" value={userDetails.lastName} onChange={(e) => setUserDetails({ ...userDetails, lastName: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#2b241a] focus:border-[#2b241a] sm:text-sm bg-gray-100 py-2 px-4" />
                    </div>

                    {/* Birthday */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Birthday</label>
                        <input type="date" value={userDetails.birthday} onChange={(e) => setUserDetails({ ...userDetails, birthday: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#2b241a] focus:border-[#2b241a] sm:text-sm bg-gray-100 py-2 px-4" />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" value={userDetails.email} readOnly className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#2b241a] focus:border-[#2b241a] sm:text-sm bg-gray-100 py-2 px-4" />
                    </div>

                    {/* Update Button */}
                    <button onClick={handleUpdate} className="mt-4 px-8 py-2 text-sm bg-[#2b241a] text-white rounded-md">Update Details</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default PersonalDetails;
