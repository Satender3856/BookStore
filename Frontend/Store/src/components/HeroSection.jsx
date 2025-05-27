import React from 'react'
import Books from '../../public/Books.jpg'

function HeroSection() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-xl shadow-md py-8 my-6'>
                <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1'>
                    <div className='space-y-12 animate-fadeIn'>
                        <h1 className='text-4xl font-bold transition-all duration-500 hover:text-5xl text-black dark:text-white hover:text-blue-700 dark:hover:text-blue-300'>
                            Hello, Welcome Here To Learn Something{" "}
                            <span className='text-pink-500 dark:text-pink-400 animate-pulse hover:text-pink-600 dark:hover:text-pink-300 cursor-pointer transition-colors duration-300'>
                                New Everyday!!!
                            </span>
                        </h1>
                        <p className='text-base text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 transform hover:translate-x-2'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum deleniti quo minus, iusto, suscipit odit inventore amet quisquam exercitationem nam hic ab libero aperiam saepe.
                        </p>
                        <label className="input validator border-2 border-gray-300 dark:border-gray-600 hover:border-pink-400 dark:hover:border-pink-300 focus-within:border-pink-500 transition-all duration-300 transform hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                            <svg className="h-[1em] opacity-50 group-hover:opacity-100 text-pink-500 dark:text-pink-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input type="email" placeholder="mail@site.com" required className="focus:outline-none bg-transparent text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500" />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>
                    </div>
                    <button className="btn mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white border-none 
                        hover:scale-110 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 
                        hover:shadow-lg hover:shadow-pink-200 dark:hover:shadow-pink-500 animate-pulse-glow relative overflow-hidden
                        group">
                        <span className="relative z-10">Subscribe Now</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 
                            group-hover:opacity-30 transition-opacity duration-300 transform group-hover:scale-110 
                            animate-shimmer"></span>
                    </button>
                </div>
                <div className='order-1 w-full md:w-1/2 flex items-center justify-center p-4'>
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                        <img 
                            src={Books} 
                            alt="Books collection" 
                            className="relative rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 animate-fadeInRight"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
