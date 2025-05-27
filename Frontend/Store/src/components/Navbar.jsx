import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';
import Logout from './Logout';
import { useAuth } from '../context/AuthProvider';


function Navbar() {
     const [authUser, setAuthUser] = useAuth();

    // Initialize theme state from localStorage or system preference
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check localStorage first
        if (localStorage.getItem('theme') === 'dark') {
            return true;
        }
        // If no localStorage value, check system preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return true;
        }
        // Default to light mode
        return false;
    });

    // Apply theme class to document when component mounts or theme changes
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    // Toggle theme function
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <div className='max-w-screen2xl container mx-auto md:px-20 px-4'>
                <div className="navbar shadow-md rounded-lg mt-2 transition-all duration-300 hover:shadow-lg bg-white dark:bg-gray-800 dark:text-white">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>

                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-white/95 dark:bg-gray-800/95 dark:text-white rounded-2xl z-50 mt-3 w-60 p-4 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-lg animate-fadeIn"
                            >
                                {/* Home */}
                                <li className="mb-1">
                                    <Link
                                        to="/"
                                        className="group relative flex items-center space-x-3 px-4 py-3 rounded-xl font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900/30 dark:hover:to-blue-800/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
                                    >
                                        {/* Icon */}
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                            </svg>
                                        </div>
                                        {/* Text with underline effect */}
                                        <span className="relative flex-1 text-sm font-semibold">
                                            Home
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-300 ease-out"></span>
                                        </span>
                                        {/* Hover glow effect */}
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </Link>
                                </li>

                                {/* About */}
                                <li className="mb-1">
                                    <Link
                                        to="/about"
                                        className="group relative flex items-center space-x-3 px-4 py-3 rounded-xl font-medium text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-emerald-100 dark:hover:from-emerald-900/30 dark:hover:to-emerald-800/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
                                    >
                                        {/* Icon */}
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        {/* Text with underline effect */}
                                        <span className="relative flex-1 text-sm font-semibold">
                                            About
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 group-hover:w-full transition-all duration-300 ease-out"></span>
                                        </span>
                                        {/* Hover glow effect */}
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </Link>
                                </li>

                                {/* Course */}
                                <li className="mb-1">
                                    <Link
                                        to="/course"
                                        className="group relative flex items-center space-x-3 px-4 py-3 rounded-xl font-medium text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 dark:hover:from-purple-900/30 dark:hover:to-purple-800/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
                                    >
                                        {/* Icon */}
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                            </svg>
                                        </div>
                                        {/* Text with underline effect */}
                                        <span className="relative flex-1 text-sm font-semibold">
                                            Course
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-600 group-hover:w-full transition-all duration-300 ease-out"></span>
                                        </span>
                                        {/* Hover glow effect */}
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </Link>
                                </li>

                                {/* Contact */}
                                <li className="mb-1">
                                    <Link
                                        to="/Contect"
                                        className="group relative flex items-center space-x-3 px-4 py-3 rounded-xl font-medium text-gray-700 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-gradient-to-r hover:from-rose-50 hover:to-rose-100 dark:hover:from-rose-900/30 dark:hover:to-rose-800/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
                                    >
                                        {/* Icon */}
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        {/* Text with underline effect */}
                                        <span className="relative flex-1 text-sm font-semibold">
                                            Contact
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-rose-600 group-hover:w-full transition-all duration-300 ease-out"></span>
                                        </span>
                                        {/* Hover glow effect */}
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-rose-500/10 to-rose-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </Link>
                                </li>

                                {/* Decorative Divider */}
                                <div className="mt-3 pt-3 border-t border-gray-200/60 dark:border-gray-700/60">
                                    <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-emerald-500 to-rose-500 rounded-full relative overflow-hidden shadow-sm">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                                    </div>
                                </div>

                                {/* Optional: Menu Footer */}
                                <div className="mt-2 text-center">
                                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                        Navigate with ease ✨
                                    </span>
                                </div>
                            </ul>


                        </div>
                        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">BOOKSTORE</Link>
                    </div>

                    <div className='navbar-end space-x-3'>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300 rounded-md font-medium">Home</Link></li>
                                <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300 rounded-md font-medium">About</Link></li>
                                <li><Link to="/course" className="hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300 rounded-md font-medium">Course</Link></li>
                                <li><Link to="/contect" className="hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300 rounded-md font-medium">Contact</Link></li>
                            </ul>
                        </div>
                        <div className='hidden md:block'>
                            <label className="input input-bordered border-blue-200 focus-within:border-blue-400 transition-colors duration-300 hover:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus-within:border-blue-500">
                                <svg className="h-[1em] text-blue-400 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input type="search" required placeholder="Search" className="focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" />
                            </label>
                        </div>
                        <label className="swap swap-rotate hover:scale-110 transition-transform duration-300">
                            {/* Use the controlled checkbox with our state */}
                            <input
                                type="checkbox"
                                checked={isDarkMode}
                                onChange={toggleTheme}
                                className="theme-controller"
                            />
                            {/* sun icon */}
                            <svg
                                className="swap-off h-8 w-8 fill-yellow-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>
                            {/* moon icon */}
                            <svg
                                className="swap-on h-8 w-8 fill-indigo-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                        {authUser ? <Logout/>:
                        <div>
                            <a to="/Login" className="btn bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-none hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 dark:from-blue-600 dark:to-indigo-700 dark:hover:from-blue-700 dark:hover:to-indigo-800"
                                onClick={() => document.getElementById('my_modal_3').showModal()} >Login

                            </a>
                            <Login />
                        </div>
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar
