import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartRow() {

  const ingredients = [
    "Onion",
    "Capsicum",
  ];

  return (
    <div className="max-w-[800px] w-full border border-gray-200 rounded-2xl p-2 shadow-sm bg-white">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 pt-2">

        {/* LEFT SECTION */}
        <div className="flex gap-4">

          {/* FOOD IMAGE */}
          <div className="w-24 mt-1 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop"
              alt="Pizza"
              className="w-full h-full object-cover"
            />
          </div>

          {/* FOOD DETAILS */}
          <div className="flex flex-col justify-between">

            <div className="pt-2">

              <h2 className="font-poppins font-semibold text-lg md:text-xl">
                Farmhouse Pizza
              </h2>

              {/* CAPSULES */}
              <div className="flex flex-wrap gap-2 pt-3 max-w-[260px]">

                {ingredients.map((item, index) => (
                  <div
                    key={index}
                    className="px-2 py-[3px] rounded-md bg-orange-100 text-orange-600 font-medium text-[10px] md:text-[11px]"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

            {/* PRICE */}
            <div className="flex items-center gap-2 mt-4">
              <span className="font-semibold text-lg text-orange-500">
                ₹399
              </span>

              <span className="text-sm text-gray-400 line-through">
                ₹499
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center justify-between md:justify-end gap-6">

          {/* QUANTITY */}
          <div className="flex items-center gap-3 border border-gray-200 rounded-full px-3 py-2">

            <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
              <Minus size={16} />
            </button>

            <span className="font-medium text-lg">
              1
            </span>

            <button className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition">
              <Plus size={16} />
            </button>

          </div>

          {/* DELETE */}
          <button className="w-11 h-11 rounded-full bg-red-50 flex items-center justify-center text-red-500 hover:bg-red-100 transition">
            <Trash2 size={20} />
          </button>

        </div>

      </div>

    </div>
  );
}