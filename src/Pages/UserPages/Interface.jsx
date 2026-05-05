import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "../../Components/ProductCard";

export default function Interface() {
  const texts = [
    "Search Pizza, Burger...",
    "Craving something tasty?",
    "Find your favorite dish..."
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex items-center justify-center h-dvh md:h-[600px]">
      
      <div className="md:max-w-[95%] w-full flex flex-col items-center h-full">
        
        <div className="max-w-[95%] w-full pt-5 relative">
          

          <Search className="text-orange-400 absolute left-3 top-8 w-5 h-5" />

      
          <input
            type="text"
            className="w-full h-10 px-12 md:px-10 rounded-lg border border-gray-300 shadow-sm shadow-gray-100  focus:outline-orange-300"
          />

       
          <div className="absolute left-12 top-8 text-gray-400 text-sm pointer-events-none transition-all duration-500">
            {texts[index]}
          </div>

        </div>
            {/* Heading Part  */}
        <div className="max-w-[95%] w-full pt-8 px-2">
                <h2 className="font-semibold text-orange-400 text-xl font-[Poppins]">Welcome to DineFlow </h2>
                <h4 className="text-gray-400 text-sm pt-1">No waiting — just tasty ordering made simple. </h4>
        </div>

        {/* Slider Part 1 */}
        <div className="max-w-[95%] w-full px-2 pt-4 flex gap-3 ">
                <ProductCard />
                <ProductCard />

        </div>
      </div>
    </div>
  );
}