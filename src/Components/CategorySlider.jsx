import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight } from "lucide-react";
import "swiper/css";

export default function CategorySlider({ categories, setShowAll }) {
  return (
    <div className="w-full">

      {/* 🔥 Your Heading Layout */}
      <div className="max-w-[95%] w-full pt-8 px-7 md:px-12 flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-orange-400 text-xl font-[Poppins]">
            Top Picks For You
          </h3>
        </div>

        <div
          onClick={() => setShowAll(true)}
          className="flex items-center gap-1 cursor-pointer"
        >
          <h4 className="text-gray-500 text-sm font-poppins">See All</h4>
          <ChevronRight className="text-gray-500 w-4 h-4" />
        </div>
      </div>

      {/* 🔁 Slider */}
      <div className="max-w-[95%] w-full px-2 pt-4">
        <Swiper
          spaceBetween={12}
          breakpoints={{
            320: { slidesPerView: 3 },   // 📱 mobile
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },  // 💻 desktop
          }}
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <div className="flex flex-col items-center gap-2 py-2 cursor-pointer">

                {/* Icon Circle */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl">
                  <img src= {cat.cimg} alt="" />
                </div>

                {/* Name */}
                <p className="text-[11px] md:text-xs text-gray-500 text-center">
                  {cat.cname}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
}