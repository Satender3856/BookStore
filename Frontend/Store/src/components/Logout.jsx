import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'
import { toast } from 'react-toastify'
import { FaSignOutAlt, FaSpinner } from 'react-icons/fa' // Import icons

function Logout({ variant = "default" }) {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      
      // Add a small delay to show the loading state (optional)
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Set auth user to null
      setAuthUser(null);
      
      // Remove from localStorage
      localStorage.removeItem("userInfo");
      
      // Show success message with custom styling
      toast.success("You've been successfully logged out", {
        icon: "👋",
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      
      // Navigate to home page
      navigate('/');
    } catch(error) {
      toast.error("Error logging out: " + error.message);
    } finally {
      setIsLoggingOut(false);
    }
  };

  // Different button variants
  const buttonStyles = {
    default: "bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md shadow-sm transition duration-300 flex items-center justify-center space-x-2",
    outline: "border border-red-500 text-red-500 hover:bg-red-50 font-medium py-2 px-4 rounded-md shadow-sm transition duration-300 flex items-center justify-center space-x-2",
    text: "text-red-500 hover:text-red-700 font-medium py-2 px-4 transition duration-300 flex items-center justify-center space-x-2 hover:bg-red-50 rounded-md",
    icon: "text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300",
    nav: "flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 hover:bg-red-100 dark:hover:bg-red-900 hover:text-red-700 dark:hover:text-red-300 transition duration-200"
  };

  // Render different button based on variant
  switch(variant) {
    case "outline":
      return (
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className={buttonStyles.outline}
        >
          {isLoggingOut ? (
            <FaSpinner className="animate-spin h-4 w-4" />
          ) : (
            <>
              <FaSignOutAlt className="h-4 w-4" />
              <span>Sign out</span>
            </>
          )}
        </button>
      );
    
    case "text":
      return (
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className={buttonStyles.text}
        >
          {isLoggingOut ? (
            <FaSpinner className="animate-spin h-4 w-4" />
          ) : (
            <>
              <FaSignOutAlt className="h-4 w-4" />
              <span>Sign out</span>
            </>
          )}
        </button>
      );
    
    case "icon":
      return (
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className={buttonStyles.icon}
          aria-label="Sign out"
          title="Sign out"
        >
          {isLoggingOut ? (
            <FaSpinner className="animate-spin h-5 w-5" />
          ) : (
            <FaSignOutAlt className="h-5 w-5" />
          )}
        </button>
      );
    
    case "nav":
      return (
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className={buttonStyles.nav}
        >
          {isLoggingOut ? (
            <FaSpinner className="animate-spin h-4 w-4" />
          ) : (
            <>
              <FaSignOutAlt className="h-4 w-4" />
              <span>Sign out</span>
            </>
          )}
        </button>
      );
    
    default:
      return (
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className={buttonStyles.default}
        >
          {isLoggingOut ? (
            <FaSpinner className="animate-spin h-4 w-4" />
          ) : (
            <>
              <FaSignOutAlt className="h-4 w-4" />
              <span>Logout</span>
            </>
          )}
        </button>
      );
  }
}

export default Logout
