import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useAuth } from '../context/AuthProvider'
import { toast } from 'react-toastify'
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaSignInAlt, FaUserPlus } from 'react-icons/fa'

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm()
    
    const navigate = useNavigate();
    const [authUser, setAuthUser] = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    
    // Define the onSubmit function
    const onSubmit = async (data) => {
        try {
            const userInfo = {
                email_id: data.email,
                password: data.password
            };
            
            const res = await axios.post("http://localhost:4001/api/user/login", userInfo);
            console.log(res.data);
            
            if(res.data) {
                // Close the modal
                document.getElementById('my_modal_3').close();
                
                // Store user data in localStorage and context
                setAuthUser(res.data.user);
                
                // Show non-blocking toast notification instead of alert
                toast.success("Welcome back! You've successfully logged in.", {
                    icon: "🎉",
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                
                // Redirect to home page after successful login
                navigate('/');
            }
        } catch(error) {
            if(error.response) {
                console.log(error);
                // Show error toast instead of alert
                toast.error(error.response.data.message || "Login failed", {
                    icon: "❌",
                    position: "top-right",
                    autoClose: 4000,
                });
            } else {
                toast.error("Error: " + error.message);
            }
        }
    };
    
    // Handle close modal
    const handleCloseModal = () => {
        document.getElementById('my_modal_3').close();
    };
    
    const handleSignupClick = (e) => {
        e.preventDefault();
        // Close the modal first
        document.getElementById('my_modal_3').close();
        // Navigate to signup page
        navigate('/signup');
    };
    
    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box bg-white dark:bg-gray-800 shadow-xl rounded-lg max-w-md mx-auto p-6 border-t-4 border-blue-500 dark:border-blue-400">
                        {/* Close button - moved outside form */}
                        <button
                            type="button"
                            onClick={handleCloseModal}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                        >
                            ✕
                        </button>
                        
                        <div className="text-center mb-8">
                            <div className="inline-block p-3 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                                <FaSignInAlt className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="font-bold text-2xl mb-2 text-gray-800 dark:text-white">Welcome Back</h3>
                            <p className="text-gray-600 dark:text-gray-300">Sign in to access your account</p>
                        </div>
                        
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Email field */}
                            <div className='space-y-2'>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Email Address
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaEnvelope className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder='Enter your email'
                                        className='w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-200'
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                            }
                                        })}
                                    />
                                </div>
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>
                            
                            {/* Password field */}
                            <div className='space-y-2'>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Password
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaLock className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder='Enter your password'
                                        className='w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-200'
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters"
                                            }
                                        })}
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="text-gray-400 hover:text-blue-500 focus:outline-none transition-colors duration-200"
                                        >
                                            {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                                        </button>
                                    </div>
                                </div>
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                            </div>
                            
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                                    Remember me
                                </label>
                            </div>
                            
                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Signing in...
                                        </>
                                    ) : (
                                        <>
                                            <FaSignInAlt className="mr-2 h-5 w-5" />
                                            Sign in
                                        </>
                                    )}
                                </button>
                            </div>
                            
                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                                        New to our platform?
                                    </span>
                                </div>
                            </div>
                            
                            <div>
                                <button
                                    type="button"
                                    onClick={handleSignupClick}
                                    className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                                >
                                    <FaUserPlus className="mr-2 h-5 w-5 text-blue-500" />
                                    Create a new account
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login
