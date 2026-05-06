import React from "react";
import { ChevronLeft } from "lucide-react";

export default function CategoryGrid({ categories, setShowAll }) {
  return (
    <div className="w-full">

      {/* 🔥 Same Heading Style */}
      <div className="max-w-[95%] w-full pt-8 px-7 md:px-12 flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-orange-400 text-xl font-[Poppins]">
            All Categories
          </h3>
        </div>

        <div
          onClick={() => setShowAll(false)}
          className="flex items-center gap-1 cursor-pointer"
        >
          <ChevronLeft className="text-gray-500 w-4 h-4" />
          <h4 className="text-gray-500 text-sm font-poppins">Back</h4>
        </div>
      </div>

      {/* 📊 Grid */}
      <div className="max-w-[95%] w-full px-2 pt-6">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">

          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col items-center gap-2 p-3 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl">
               <img src={cat.cimg} alt="" />
              </div>

              {/* Name */}
              <p className="text-[11px] md:text-xs text-gray-500 text-center">
                {cat.cname}
              </p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}