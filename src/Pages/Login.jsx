import React from 'react'
import { Eye, EyeOff } from "lucide-react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [show, setShow] = useState(false);
  const navigate=useNavigate();
  return (
    <div className="w-full flex font-poppins">
      
      {/* LEFT SIDE (FORM) */}
      <div className="w-full md:max-w-[50%] lg:max-w-[40%] min-h-screen bg-white flex flex-col px-6 sm:px-10 py-8 justify-center">

        {/* FORM CONTENT */}
        <div className="max-w-sm w-full mx-auto">
          
          {/* HEADING */}
          <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-black">
            Manage your Restaurant
            <span className="hidden md:inline">, </span>
            <br className="md:hidden" />
            <span className="text-orange-500 italic">
              Smarter
            </span>
          </h1>

          <p className="text-gray-400 text-[12px] pt-5 pb-4">
            A simple and powerful tool designed to help restaurants run smoother,
            faster, and smarter.
          </p>

          {/* INPUTS */}
          <div className="mt-5 space-y-5">
            
            {/* EMAIL */}
            <input
              type="email"
              placeholder="jane@gmail.com"
              className="w-full bg-[#efeded] px-4 py-3 rounded-lg outline-none text-sm focus:ring-2 focus:ring-orange-500"
            />

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                placeholder="••••••"
                className="w-full bg-[#efeded] px-4 py-3 rounded-lg outline-none text-sm pr-10 focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-3 text-gray-400 hover:text-black"
              >
                {show ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* REMEMBER + FORGOT */}
            <div className="flex justify-between items-center text-sm text-gray-500 py-5">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-orange-500" />
                Remember me
              </label>

              <span className="hover:text-orange-500 cursor-pointer">
                Forgot Password?
              </span>
            </div>

            {/* BUTTON */}
            <button onClick={()=>navigate('/menu')} className="w-full bg-orange-500 text-white hover:bg-orange-600 transition py-2 rounded-lg font-medium">
              Sign in
            </button>
          </div>
        </div>


        
      </div>

      {/* RIGHT SIDE (VIDEO) */}
      <div className="hidden md:flex md:max-w-[50%] lg:max-w-[60%] w-full h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/login.mov"
        />
      </div>
    </div>
  );
  
}
