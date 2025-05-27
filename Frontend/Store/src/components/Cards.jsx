import React from 'react'

function Cards({ item }) {
  return (
    <>
      <div className="px-2 py-4">
        <div className="card bg-base-100 dark:bg-gray-800 shadow-sm h-full transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-blue-50 dark:hover:bg-gray-700">
          <figure className="px-10 pt-10">
            <div className="w-52 h-64 overflow-hidden flex items-center justify-center rounded-xl group transition-all duration-300 hover:shadow-md dark:hover:shadow-gray-600">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-xl w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              {item.name}
            </h2>
            <p className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition-colors duration-300">
              {item.Title}
            </p>
            <div className="card-actions mt-2">
              <button className="btn bg-blue-500 hover:bg-blue-700 text-white border-none shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:hover:shadow-blue-800">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
