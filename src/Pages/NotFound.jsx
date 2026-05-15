import React from 'react'
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 px-4">
      
      <div className="text-center">
        
        <h1 className="text-7xl font-bold text-orange-400">
          404
        </h1>

        <h2 className="text-2xl font-semibold pt-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 pt-2">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-all"
        >
          Back To Home
        </Link>
      </div>
    </div>
  )
}
