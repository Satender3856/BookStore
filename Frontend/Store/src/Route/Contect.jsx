import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitError(null);
        
        try {
            // 1. Send WhatsApp message (using WhatsApp API)
            const whatsappNumber = "+9184486 47331"; // Add country code (91 for India)
            const whatsappMessage = encodeURIComponent(
                `New Contact Form Submission:\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\nMessage: ${data.message}`
            );
            
            // Open WhatsApp API in a new tab
            window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`, '_blank');
            
            // 2. Open email client with pre-filled data
            const emailSubject = encodeURIComponent("New Contact Form Submission");
            const emailBody = encodeURIComponent(
                `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\n\nMessage:\n${data.message}`
            );
            
            // Open default email client
            window.open(`mailto:satender2303@gmail.com?subject=${emailSubject}&body=${emailBody}`);
            
            // 3. Log the data to console
            console.log("Contact data:", data);
            
            // 4. Show success message and reset form
            setSubmitSuccess(true);
            toast.success("Message sent successfully! Thank you for contacting us.");
            reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
            
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitError("Failed to send your message. Please try again later.");
            toast.error("Failed to send your message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 relative'>
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            
            <div className="w-full max-w-md relative z-10">
                {/* Main Card */}
                <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/50 p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                            Contact Us
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            We'd love to hear from you. Send us a message!
                        </p>
                    </div>
                    
                    {/* Success Message */}
                    {submitSuccess && (
                        <div className="mb-6 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg flex items-start animate-fade-in-down">
                            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <p className="font-medium">Message sent successfully!</p>
                                <p className="text-sm">Thank you for contacting us. We'll get back to you soon.</p>
                            </div>
                        </div>
                    )}
                    
                    {/* Error Message */}
                    {submitError && (
                        <div className="mb-6 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg flex items-start animate-fade-in-down">
                            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <p className="font-medium">Error</p>
                                <p className="text-sm">{submitError}</p>
                            </div>
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Name Field */}
                        <div className='group'>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                Full Name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder='Enter your full name'
                                    className='w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl outline-none bg-white/50 dark:bg-gray-700/50 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md'
                                    {...register("name", { required: "Name is required" })}
                                />
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-2 flex items-center animate-pulse">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        
                        {/* Email Field */}
                        <div className='group'>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder='Enter your email address'
                                    className='w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl outline-none bg-white/50 dark:bg-gray-700/50 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md'
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-2 flex items-center animate-pulse">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        
                        {/* Phone Number Field */}
                        <div className='group'>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                Phone Number (Optional)
                            </label>
                            <div className="relative">
                                <input
                                    type="tel"
                                    placeholder='Enter your phone number'
                                    className='w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl outline-none bg-white/50 dark:bg-gray-700/50 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md'
                                    {...register("phone", {
                                        pattern: {
                                            value: /^[0-9+-\s]+$/,
                                            message: "Invalid phone number"
                                        }
                                    })}
                                />
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-2 flex items-center animate-pulse">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>
                        
                        {/* Message Field */}
                        <div className='group'>
                                                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                Message
                            </label>
                            <div className="relative">
                                <textarea
                                    placeholder='Tell us what you think...'
                                    rows="5"
                                    className='w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl outline-none bg-white/50 dark:bg-gray-700/50 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md resize-none'
                                    {...register("message", { required: "Message is required" })}
                                />
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-2 flex items-center animate-pulse">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.message.message}
                                </p>
                            )}
                        </div>
                        
                        {/* Consent Checkbox */}
                        <div className="group">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="consent"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                        {...register("consent", { required: "You must agree to the terms" })}
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="consent" className="text-gray-600 dark:text-gray-400">
                                        I agree to be contacted via email and WhatsApp regarding my inquiry
                                    </label>
                                </div>
                            </div>
                            {errors.consent && (
                                <p className="text-red-500 text-sm mt-2 flex items-center animate-pulse">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.consent.message}
                                </p>
                            )}
                        </div>
                        
                        {/* Submit Button */}
                        <div className='pt-4'>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className='w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-700 focus:ring-4 focus:ring-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 active:scale-95 group disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none'
                            >
                                <span className="flex items-center justify-center">
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                            </svg>
                                            Send Message
                                        </>
                                    )}
                                </span>
                            </button>
                        </div>
                    </form>
                    
                  
                    
                    {/* Footer */}
                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Want to go back?{" "}
                            <Link
                                to="/"
                                className='inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200 hover:underline decoration-2 underline-offset-4'
                            >
                                <svg className="w-4 h-4 mr-1 transform group-hover:-translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>
                                Back to Home
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
