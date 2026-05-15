import React, { useEffect, useState } from "react";
import {
  Check,
  Download,
  FileText,
  Star,
} from "lucide-react";

// SOUND
import successSound from "../../assets/success.mp3";

export default function Receipt() {

  const [showTick, setShowTick] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {

    const timer = setTimeout(() => {

      setShowTick(true);

      // PLAY SOUND
      const audio = new Audio(successSound);

      audio.volume = 0.5;

      audio.play();

      // MOBILE VIBRATION
      if (navigator.vibrate) {
        navigator.vibrate(120);
      }

    }, 300);

    return () => clearTimeout(timer);

  }, []);

  return (

    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4 py-8">

      {/* MAIN CARD */}
      <div className="w-full max-w-md bg-white rounded-[32px] border border-gray-200 shadow-sm overflow-hidden">

        {/* TOP SUCCESS AREA */}
        <div className="relative flex flex-col items-center justify-center px-6 pt-10 pb-8 bg-gradient-to-b from-orange-50 to-white">

          {/* GLOW */}
          <div className="absolute top-10 w-40 h-40 bg-orange-100 blur-3xl rounded-full opacity-60" />

          {/* SUCCESS TICK */}
          <div
            className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center border-8 border-orange-100 bg-orange-500 transition-all duration-700 ${
              showTick
                ? "scale-100 opacity-100"
                : "scale-50 opacity-0"
            }`}
          >

            <Check
              size={42}
              className="text-white"
              strokeWidth={3}
            />

          </div>

          {/* TEXT */}
          <div className="relative z-10 text-center mt-6">

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Order Placed
            </h1>

            <p className="text-sm text-gray-500 mt-2 leading-relaxed max-w-[260px] mx-auto">
              Your order has been placed successfully.
              Your delicious food is being prepared.
            </p>

          </div>

        </div>

        {/* CONTENT */}
        <div className="px-5 md:px-6 pb-6">

          {/* ORDER INFO */}
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-4 flex items-center justify-between">

            <div>

              <p className="text-[11px] text-gray-500">
                ORDER ID
              </p>

              <h3 className="text-sm font-semibold text-gray-900 mt-1">
                #DF29481
              </h3>

            </div>

            <div className="text-right">

              <p className="text-[11px] text-gray-500">
                ESTIMATED TIME
              </p>

              <h3 className="text-sm font-semibold text-orange-500 mt-1">
                20 - 25 Min
              </h3>

            </div>

          </div>

          {/* CTA BUTTONS */}
          <div className="grid grid-cols-2 gap-3 mt-5">

            {/* VIEW BILL */}
            <button className="h-12 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 transition flex items-center justify-center gap-2 text-sm font-medium text-gray-800">

              <FileText size={18} />

              View Bill

            </button>

            {/* DOWNLOAD */}
            <button className="h-12 rounded-2xl bg-orange-500 hover:bg-orange-600 transition flex items-center justify-center gap-2 text-sm font-semibold text-white shadow-lg shadow-orange-200">

              <Download size={18} />

              Download

            </button>

          </div>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 my-6">

            <div className="flex-1 h-[1px] bg-gray-200" />

            <p className="text-[11px] text-gray-400 uppercase tracking-wider">
              Feedback
            </p>

            <div className="flex-1 h-[1px] bg-gray-200" />

          </div>

          {/* RATING */}
          <div className="text-center">

            <h3 className="text-sm md:text-base font-semibold text-gray-900">
              Rate Your Experience
            </h3>

            <p className="text-[11px] md:text-sm text-gray-500 mt-1">
              Your feedback helps DineFlow improve better
            </p>

            {/* STARS */}
            <div className="flex items-center justify-center gap-2 mt-5">

              {[1, 2, 3, 4, 5].map((star) => (

                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`w-11 h-11 rounded-2xl border transition-all flex items-center justify-center ${
                    rating >= star
                      ? "bg-orange-500 border-orange-500"
                      : "bg-white border-gray-200 hover:border-orange-300"
                  }`}
                >

                  <Star
                    size={20}
                    className={
                      rating >= star
                        ? "text-white fill-white"
                        : "text-gray-400"
                    }
                  />

                </button>

              ))}

            </div>

          </div>

          {/* FOOTER */}
          <div className="mt-7 text-center">

            <p className="text-xs text-gray-500 leading-relaxed">
              Thank you for choosing
            </p>

            <h3 className="text-lg font-bold text-orange-500 mt-1">
              DineFlow
            </h3>

            <p className="text-[11px] text-gray-400 mt-2">
              Crafted for smooth & modern dining experiences
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}