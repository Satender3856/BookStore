import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the auth context
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    // Initialize state from localStorage, but only once during component mount
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Load user data from localStorage on component mount
    useEffect(() => {
        try {
            const storedUser = localStorage.getItem('userInfo');
            if (storedUser) {
                setAuthUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error('Error parsing user info from localStorage:', error);
            // Clear potentially corrupted data
            localStorage.removeItem('userInfo');
        } finally {
            setLoading(false);
        }
    }, []);

    // Enhanced setAuthUser function that also updates localStorage
    const updateAuthUser = (user) => {
        if (user) {
            localStorage.setItem('userInfo', JSON.stringify(user));
        } else {
            localStorage.removeItem('userInfo');
        }
        setAuthUser(user);
    };

    // Logout function for convenience
    const logout = () => {
        localStorage.removeItem('userInfo');
        setAuthUser(null);
    };

    // Create a value object with the state and helper functions
    const value = [
        authUser, 
        updateAuthUser,
        { logout, loading }
    ];

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);
