import React, { useState, useEffect } from "react";
import { FaSearch, FaCog } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null); // Store user info
  const navigate = useNavigate();

  // Check for logged-in state on mount
  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setIsLoggedIn(true);
      setUserEmail(email);
    }
  }, []);

  // Handle sign-out
  const handleSignOut = () => {
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserEmail(null);
    navigate("/login");
  };

  return (
    <header className="bg-[#2b241a] p-7 sticky top-0 z-[20]">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white rounded-full px-6 py-2 shadow-md">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://godare.net/wp-content/uploads/2024/12/wahanalk-3-1.png" // Replace with your logo path
            alt="Wahanalk Logo"
            className="h-10 w-auto"
          />
        </div>

        <div className="flex items-center gap-5">
          {/* Icon Section */}
          <div className="flex items-center space-x-4 text-[#2b241a]">
            <button>
              <FaSearch className="w-5 h-5" />
            </button>
            <button>
              <FaCog className="w-5 h-5" />
            </button>
          </div>

          {/* Authentication/Avatar Section */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                {/* User Avatar */}
                <div className="flex items-center space-x-2">
                  <img
                    src={`https://api.dicebear.com/5.x/avataaars/svg?seed=${userEmail}`} // Generates avatar based on email
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium text-[#2b241a]">
                    {userEmail}
                  </span>
                </div>
                {/* Sign Out Button */}
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-1 text-sm font-medium text-[#2b241a] bg-white px-4 py-2 rounded-full hover:bg-opacity-90 border border-[#2b241a]"
                >
                  <FiLogOut className="w-4 h-4" />
                  
                </button>
                <Link to="/admin/account">
                  <button className="flex items-center space-x-1 text-sm font-medium text-[#2b241a] bg-white px-4 py-2 rounded-full hover:bg-opacity-90 border border-[#2b241a]">
                    <FaUserCircle className="w-6 h-6 text-[#2b241a]" />
                    <span>My account</span>
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button className="text-sm font-medium text-[#2b241a] bg-white px-8 py-2 rounded-full hover:bg-opacity-90 border border-[#2b241a]">
                    Sign In
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="text-sm font-medium text-white bg-[#2b241a] px-8 py-2 rounded-full hover:bg-opacity-90">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
