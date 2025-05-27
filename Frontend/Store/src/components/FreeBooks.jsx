import React from 'react';
import list from '../../public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
import { useEffect } from 'react';

function FreeBooks() {

  // make API For All Books Of Data When I Use THis API Then Show All Books In Cards Format
  // Fetching data from the list.JSON file

  const [book, setBook] = React.useState([]);
    useEffect(() => {
      const getbBook = async () => {
          try{
            const res = await axios.get('http://localhost:4001/api/book');
            console.log(res.data);
            const data = res.data.filter((data) =>
    data.category.toLowerCase() === 'free');
            setBook(data);
            
        } catch (error) {
            console.log(error);

        }
      };
      getbBook();
    },[]);


  // Case-insensitive filtering
  const FilterData = list.filter((data) =>
    data.category.toLowerCase() === 'free'
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Main Container with Enhanced Styling */}
      <div className="relative max-w-screen-2xl container mx-auto md:px-20 px-4 py-12 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-rose-400/20 to-orange-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Content Container with Glass Effect */}
        <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30 p-8 md:p-12 transition-all duration-500 hover:shadow-3xl hover:bg-white/90 dark:hover:bg-gray-900/90">
          
          {/* Header Section with Enhanced Typography */}
          <div className="text-center mb-12 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 dark:border-emerald-400/20 backdrop-blur-sm">
              <svg className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                100% Free Access
              </span>
            </div>

            {/* Main Title with Gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
              Free Offered Courses
            </h1>

            {/* Subtitle with Enhanced Styling */}
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                Discover our carefully curated collection of{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">premium courses</span>{" "}
                available at no cost. Start your learning journey today with expert-crafted content.
              </p>
            </div>

            {/* Decorative Line */}
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24"></div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-24"></div>
            </div>
          </div>

          {/* Enhanced Slider Container */}
          <div className="relative group">
            {/* Slider Wrapper with Hover Effects */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 p-6 transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]">
              
              {/* Slider Component with Custom Styling */}
              <div className="slider-container">
                <style jsx>{`
                  .slider-container .slick-dots {
                    bottom: -50px;
                  }
                  .slider-container .slick-dots li button:before {
                    font-size: 12px;
                    color: #3b82f6;
                    opacity: 0.5;
                    transition: all 0.3s ease;
                  }
                  .slider-container .slick-dots li.slick-active button:before {
                    opacity: 1;
                    color: #1d4ed8;
                    transform: scale(1.2);
                  }
                  .slider-container .slick-dots li button:hover:before {
                    opacity: 0.8;
                    transform: scale(1.1);
                  }
                  .slider-container .slick-prev,
                  .slider-container .slick-next {
                    z-index: 10;
                    width: 50px;
                    height: 50px;
                    background: rgba(59, 130, 246, 0.1);
                    border-radius: 50%;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(59, 130, 246, 0.2);
                    transition: all 0.3s ease;
                  }
                  .slider-container .slick-prev:hover,
                  .slider-container .slick-next:hover {
                    background: rgba(59, 130, 246, 0.2);
                    transform: scale(1.1);
                  }
                  .slider-container .slick-prev:before,
                  .slider-container .slick-next:before {
                    font-size: 20px;
                    color: #3b82f6;
                  }
                `}</style>
                
                <Slider {...settings}>
                  {book.map((item) => (
                    <div key={item.id} className="px-3">
                      <div className="transform transition-all duration-300 hover:scale-105">
                        <Cards item={item} />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>

              {/* Gradient Overlays for Visual Enhancement */}
              <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-50/80 to-transparent dark:from-gray-800/80 pointer-events-none z-10"></div>
              <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-50/80 to-transparent dark:from-gray-800/80 pointer-events-none z-10"></div>
            </div>

            {/* Stats or Additional Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200/50 dark:border-blue-700/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {FilterData.length}+
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  Free Courses
                </div>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border border-emerald-200/50 dark:border-emerald-700/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                  100%
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  Free Access
                </div>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200/50 dark:border-purple-700/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  ∞
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  Lifetime Access
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeBooks;
