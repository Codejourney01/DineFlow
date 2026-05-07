// CART ROW

import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartRow() {

  const ingredients = ["Onion", "Capsicum"];

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl p-3 shadow-sm">

      <div className="flex items-start justify-between gap-4">

        {/* LEFT */}
        <div className="flex gap-3">

          {/* IMAGE */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">

            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop"
              alt="Pizza"
              className="w-full h-full object-cover"
            />

          </div>

          {/* DETAILS */}
          <div className="flex flex-col justify-between">

            <div>

              <h2 className="font-semibold text-sm md:text-base text-gray-900">
                Farmhouse Pizza
              </h2>

              <p className="text-[11px] text-gray-500 pt-1">
                Medium Size
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-1.5 pt-2">

                {ingredients.map((item, index) => (
                  <div
                    key={index}
                    className="px-2 py-[3px] rounded-md bg-orange-50 text-orange-500 text-[10px] font-medium"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

            {/* PRICE */}
            <div className="flex items-center gap-2 pt-3">

              <span className="text-orange-500 font-semibold text-sm md:text-base">
                ₹399
              </span>

              <span className="text-xs text-gray-400 line-through">
                ₹499
              </span>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-end gap-3">

          {/* DELETE */}
          <button className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 hover:bg-red-100 transition">

            <Trash2 size={15} />

          </button>

          {/* COUNTER */}
          <div className="flex items-center gap-3 border border-gray-200 rounded-full px-2.5 py-1.5">

            <button className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
              <Minus size={12} />
            </button>

            <span className="text-sm font-medium">
              1
            </span>

            <button className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition">
              <Plus size={12} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}