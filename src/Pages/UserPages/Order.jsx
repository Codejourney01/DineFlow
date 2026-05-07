// ORDER PAGE

import React from "react";
import {
  ChevronLeft,
  ShieldCheck,
  Receipt,
  Wallet,
  Clock2,
} from "lucide-react";

import CartRow from "../../Components/CartRow";
import { useNavigate } from "react-router-dom";

export default function Order() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#f8f8f8]">

      <div className="max-w-7xl mx-auto px-3 md:px-6 py-5">

        {/* HEADER */}
        <div className="w-full flex items-center justify-between pb-4 border-b border-gray-200">

          {/* LEFT */}
          <div className="flex items-center gap-3">

            <button
              onClick={() => navigate("/menu")}
              className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm hover:bg-orange-50 transition"
            >
              <ChevronLeft size={18} className="text-orange-500" />
            </button>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold font-poppins text-gray-900">
                Checkout
              </h2>

              <p className="text-xs text-gray-500 pt-[2px]">
                Review your order
              </p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="hidden sm:flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 rounded-xl shadow-sm">

            <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
              <Receipt size={16} className="text-orange-500" />
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-800">
                3 Items
              </h4>

              <p className="text-[11px] text-gray-500">
                Ready to order
              </p>
            </div>

          </div>

        </div>

        {/* MAIN */}
        <div className="w-full flex flex-col lg:flex-row gap-5 pt-5 md:px-3">

          {/* CART */}
          <div className="flex-1 flex flex-col gap-4">

            <CartRow />
            <CartRow />
            <CartRow />

          </div>

          {/* BILLING */}
          <div className="w-full lg:max-w-[340px]">

            <div className="w-full bg-white border border-gray-200 rounded-2xl p-5 shadow-sm sticky top-4">

              {/* TOP */}
              <div className="flex items-start justify-between">

                <div>
                  <h2 className="text-lg font-semibold font-poppins text-gray-900">
                    Bill Details
                  </h2>

                  <p className="text-xs text-gray-500 pt-1">
                    Fast & secure payment
                  </p>
                </div>

                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <Wallet size={18} className="text-orange-500" />
                </div>

              </div>

              {/* ETA */}
              <div className="w-full mt-5 bg-orange-500 rounded-2xl p-4 text-white">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-[11px] opacity-90">
                      Delivery Time
                    </p>

                    <h3 className="text-lg font-semibold pt-1">
                      15 - 20 Min
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Clock2 size={18} />
                  </div>

                </div>

              </div>

              {/* PRICE DETAILS */}
              <div className="pt-5 flex flex-col gap-4">

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-medium text-gray-800">
                    ₹1197
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    Delivery Fee
                  </span>

                  <span className="font-medium text-gray-800">
                    ₹40
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    GST & Taxes
                  </span>

                  <span className="font-medium text-gray-800">
                    ₹89
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    Platform Fee
                  </span>

                  <span className="font-medium text-gray-800">
                    ₹12
                  </span>
                </div>

              </div>

              {/* DIVIDER */}
              <div className="w-full border-t border-dashed border-gray-200 my-5" />

              {/* TOTAL */}
              <div className="flex items-center justify-between">

                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    Total Pay
                  </h3>

                  <p className="text-[11px] text-green-600 pt-1">
                    Inclusive of all taxes
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-orange-500">
                  ₹1338
                </h2>

              </div>

              {/* BUTTON */}
              <button className="w-full h-[48px] mt-6 rounded-xl bg-orange-500 hover:bg-orange-600 transition text-white text-sm font-semibold shadow-sm">

                Proceed To Payment

              </button>

              {/* SECURITY */}
              <div className="w-full flex items-center justify-center gap-2 pt-4">

                <ShieldCheck size={14} className="text-green-500" />

                <p className="text-[11px] text-gray-500">
                  100% Secure Payment
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}