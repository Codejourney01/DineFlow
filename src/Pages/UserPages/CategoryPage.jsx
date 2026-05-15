// CategoryPage.jsx

import React from 'react'
import ProductCard from '../../Components/ProductCard'

export default function CategoryPage() {

  const tabs = [
    "Classic Pizzas",
    "Starters",
    "Desserts",
    "Drinks",
    "Combos",
  ];

  const pizzas = [
    {
      id: 1,
      name: "Capricciosa",
      price: 10,
      oldPrice: 18,
      badge: "Popular",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Pesto Chicken Club",
      price: 11,
      oldPrice: 14,
      badge: "Highly Rated",
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Chicken Supreme",
      price: 12,
      oldPrice: 20,
      badge: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "BBQ Chicken",
      price: 15,
      oldPrice: 22,
      badge: "Spicy",
      image:
        "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Margherita",
      price: 9,
      oldPrice: 12,
      badge: "Classic",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Veggie Feast",
      price: 13,
      oldPrice: 18,
      badge: "Veg",
      image:
        "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f5f5f5] flex justify-center py-4 px-3 md:px-5">

      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-sm overflow-hidden">

        {/* TOP BAR */}
        <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-gray-100">

          <div>
            <h1 className="text-lg md:text-2xl font-semibold text-gray-800">
              Pizza Menu
            </h1>

            <p className="text-sm text-gray-400 pt-1">
              Fresh & delicious handcrafted pizzas
            </p>
          </div>

          <button className="hidden md:flex px-5 py-2 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-all">
            Table T-16
          </button>

        </div>

        {/* BANNER */}
        <div className="px-4 md:px-6 pt-5">

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 min-h-[180px] md:min-h-[220px] flex items-center">

            <div className="relative z-10 p-6 md:p-10 max-w-lg">

              <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight">
                Discount up to 20% for Garlic Prawn Pizza
              </h2>

              <p className="text-white/80 pt-3 text-sm md:text-base">
                Enjoy premium flavors with freshly baked pizzas.
              </p>

              <button className="mt-5 bg-yellow-300 text-black px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-all">
                Order Now
              </button>

            </div>

            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop"
              alt="pizza"
              className="absolute right-0 h-full w-[45%] object-cover hidden md:block"
            />

          </div>
        </div>

        {/* SEARCH */}
        <div className="px-4 md:px-6 pt-5 flex gap-3">

          <input
            type="text"
            placeholder="Search your dish..."
            className="w-full h-12 rounded-xl border border-gray-200 px-4 outline-none focus:border-orange-400 bg-[#fafafa]"
          />

          <button className="w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-all">
            ⚙️
          </button>

        </div>

        {/* CATEGORY TABS */}
        <div className="px-4 md:px-6 pt-5 overflow-x-auto scrollbar-hide">

          <div className="flex gap-3 min-w-max pb-2">

            {tabs.map((tab, index) => (

              <button
                key={index}
                className={`px-5 py-2 rounded-full whitespace-nowrap transition-all text-sm md:text-base ${
                  index === 0
                    ? "bg-red-500 text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>

            ))}

          </div>
        </div>

        {/* TITLE */}
        <div className="px-4 md:px-6 pt-6">

          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Classic Pizzas
          </h2>

        </div>

        {/* GRID */}
        <div className="p-4 md:p-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">

          {pizzas.map((pizza) => (

            <ProductCard
              key={pizza.id}
              data={{
                pname: pizza.name,
                price: pizza.price,
                ingredient: [pizza.badge],
                pimg: pizza.image,
              }}
            />

          ))}

        </div>

      </div>
    </div>
  );
}