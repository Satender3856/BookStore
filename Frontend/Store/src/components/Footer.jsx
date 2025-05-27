import React from 'react'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12 mt-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        
        {/* Top section with logo and newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10 border-b border-gray-700">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">BOOKSTORE</h2>
            <p className="text-gray-400 max-w-md hover:text-gray-300 transition-colors duration-300">
              Discover the world through our curated collection of books. From fiction to non-fiction, we have something for every reader.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:bg-gray-600 flex-grow"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-medium 
                hover:from-pink-600 hover:to-purple-700 transition-all duration-300 
                hover:shadow-lg hover:shadow-purple-500/30 transform hover:scale-105 
                relative overflow-hidden group">
                <span className="relative z-10">Subscribe</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 
                  group-hover:opacity-30 transition-opacity duration-300 transform group-hover:scale-110"></span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Middle section with links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-gray-700">
          {[
            { title: 'Shop', links: ['New Arrivals', 'Best Sellers', 'Fiction', 'Non-Fiction'] },
            { title: 'About', links: ['Our Story', 'Blog', 'Events', 'Careers'] },
            { title: 'Support', links: ['Contact Us', 'FAQs', 'Shipping', 'Returns'] },
          ].map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-300">
                📍 123 Book Street, Reading City
              </li>
              <li className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-300">
                📧 info@bookstore.com
              </li>
              <li className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-300">
                📞 +1 (234) 567-8900
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {/* Facebook */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.364 3.608 1.339.975.975 1.277 2.242 1.339 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.364 2.633-1.339 3.608-.975.975-2.242 1.277-3.608 1.339-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.364-3.608-1.339-.975-.975-1.277-2.242-1.339-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.849c.062-1.366.364-2.633 1.339-3.608C4.547 2.597 5.814 2.295 7.18 2.233 8.445 2.175 8.825 2.163 12 2.163zm0 1.838c-3.134 0-3.507.012-4.741.068-1.019.048-1.573.218-1.94.362a3.61 3.61 0 00-1.312.86 3.61 3.61 0 00-.86 1.312c-.144.367-.314.921-.362 1.94C3.175 8.493 3.163 8.866 3.163 12c0 3.134.012 3.507.068 4.741.048 1.019.218 1.573.362 1.94a3.61 3.61 0 00.86 1.312 3.61 3.61 0 001.312.86c.367.144.921.314 1.94.362 1.234.056 1.607.068 4.741.068s3.507-.012 4.741-.068c1.019-.048 1.573-.218 1.94-.362a3.61 3.61 0 001.312-.86 3.61 3.61 0 00.86-1.312c.144-.367.314-.921.362-1.94.056-1.234.068-1.607.068-4.741s-.012-3.507-.068-4.741c-.048-1.019-.218-1.573-.362-1.94a3.61 3.61 0 00-.86-1.312 3.61 3.61 0 00-1.312-.86c-.367-.144-.921-.314-1.94-.362C15.507 4.013 15.134 4.001 12 4.001zM12 5.838a6.163 6.163 0 100 12.325 6.163 6.163 0 000-12.325zm0 10.163a4 4 0 110-8 4 4 0 010 8zm4.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-400 text-sm text-center md:text-left">© 2023 Bookstore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
