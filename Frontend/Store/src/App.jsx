import { useEffect } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import emailjs from '@emailjs/browser';
import Home from './Route/Home';
import Course from './Route/Course';
import Navbar from './components/Navbar';
import { applySavedTheme } from '../src/utility/theme.js';
import Signup from './components/Signup';
import Contect from './Route/Contect';
import About from './Route/About.jsx';
import { useAuth } from './context/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  
  useEffect(() => {
    // Apply theme before anything renders
    applySavedTheme(); 
    
    // Initialize EmailJS with your user ID
    emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your actual EmailJS User ID
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Course /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      
      {/* Toast Container for notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
      />
    </div>
  );
}

export default App;
