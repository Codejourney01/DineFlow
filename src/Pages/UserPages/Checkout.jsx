import React, { useState } from "react";
import { ChevronLeft, Receipt } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {

  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("upi");

  // ONLINE ICONS
  const paymentIcons = {
    phonepe:
      "https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg",

    gpay:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg",

    paytm:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Paytm_Logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",

    upi:
      "https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg",

    visa:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLrTDxeHgBWrog8NZyWJ8NHWAGbxedAz3m5g&s",

    mastercard:
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",

    rupay:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/1280px-RuPay.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
  };

  return (

    <div className="max-w-7xl mx-auto px-3 md:px-6 py-5">

      {/* HEADER */}
      <div className="w-full flex items-center justify-between pb-4 border-b border-gray-200">

        {/* LEFT */}
        <div className="flex items-center gap-3">

          <button
            onClick={() => navigate("/order")}
            className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm hover:bg-orange-50 transition"
          >
            <ChevronLeft
              size={18}
              className="text-orange-500"
            />
          </button>

          <div className="flex flex-col">

            <div className="flex items-center gap-2">

              <h2 className="text-lg md:text-2xl font-semibold font-poppins text-gray-900">
                Payment
              </h2>

              <span className="text-gray-300 text-base">-</span>

              <h3 className="text-base md:text-xl font-medium text-orange-500">
                Checkout
              </h3>

            </div>

            <p className="text-[11px] md:text-xs text-gray-500 pt-[2px]">
              Review your order & complete payment
            </p>

          </div>

        </div>

        {/* RIGHT */}
        <div className="hidden sm:flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 rounded-2xl shadow-sm">

          <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center">

            <Receipt
              size={16}
              className="text-orange-500"
            />

          </div>

          <div>

            <h4 className="text-sm font-semibold text-gray-800">
              Fast Checkout
            </h4>

            <p className="text-[11px] text-gray-500">
              Secure Payment
            </p>

          </div>

        </div>

      </div>

      {/* PAYMENT CARD */}
      <div className="mt-6 bg-white border border-gray-200 rounded-3xl shadow-sm p-4 md:p-6">

        {/* TOP TEXT */}
        <div className="mb-5">

          <h3 className="text-sm md:text-lg font-semibold text-gray-900">
            Customer & Payment Details
          </h3>

          <p className="text-[12px] md:text-[13px] text-gray-400 font-poppins mt-1 leading-relaxed">
            Enter your username, mobile number, table number and
            choose your preferred payment method to complete your order.
          </p>

        </div>

        {/* INPUTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* USERNAME */}
          <div className="flex flex-col gap-2">

            <label className="text-[12px] font-medium text-gray-700">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              className="w-full h-11 rounded-2xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none focus:border-orange-400 focus:bg-white transition"
            />

          </div>

          {/* MOBILE */}
          <div className="flex flex-col gap-2">

            <label className="text-[12px] font-medium text-gray-700">
              Mobile Number
            </label>

            <input
              type="tel"
              placeholder="Enter mobile number"
              className="w-full h-11 rounded-2xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none focus:border-orange-400 focus:bg-white transition [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

          </div>

          {/* TABLE */}
          <div className="flex flex-col gap-2">

            <label className="text-[12px] font-medium text-gray-700">
              Table Number
            </label>

            <input
              type="text"
              placeholder="Enter table no."
              className="w-full h-11 rounded-2xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none focus:border-orange-400 focus:bg-white transition"
            />

          </div>

        </div>

        {/* PAYMENT METHODS */}
        <div className="mt-7">

          <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-4">
            Select Payment Method
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* UPI */}
            <div
              onClick={() => setPaymentMethod("upi")}
              className={`cursor-pointer rounded-3xl border p-4 transition-all ${
                paymentMethod === "upi"
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-200 bg-white hover:border-orange-200"
              }`}
            >

              <div className="flex items-start justify-between">

                <div>

                  <h4 className="text-sm font-semibold text-gray-900">
                    UPI Payment
                  </h4>

                  <p className="text-[11px] text-gray-500 mt-1">
                    Pay using PhonePe, GPay, Paytm & other UPI apps
                  </p>

                </div>

                <div
                  className={`w-4 h-4 rounded-full border-2 mt-1 ${
                    paymentMethod === "upi"
                      ? "border-orange-500 bg-orange-500"
                      : "border-gray-300"
                  }`}
                />

              </div>

              {/* UPI ICONS */}
              <div className="flex flex-wrap gap-3 mt-5">

                {/* PHONEPE */}
                <div className="w-[70px] h-9 rounded-2xl border border-gray-200 bg-white flex items-center justify-center">
                  <img
                    src={paymentIcons.phonepe}
                    alt="PhonePe"
                    className="h-4 object-contain"
                  />
                </div>

                {/* GPAY */}
                <div className="w-[70px] h-9 rounded-2xl border border-gray-200 bg-white flex items-center justify-center">
                  <img
                    src={paymentIcons.gpay}
                    alt="Google Pay"
                    className="h-4 object-contain"
                  />
                </div>

                {/* PAYTM */}
                <div className="w-[70px] h-9 rounded-2xl border border-gray-200 bg-white flex items-center justify-center">
                  <img
                    src={paymentIcons.paytm}
                    alt="Paytm"
                    className="h-3 object-contain"
                  />
                </div>

                {/* UPI */}
                <div className="w-[70px] h-9 rounded-2xl border border-gray-200 bg-white flex items-center justify-center">
                  <img
                    src={paymentIcons.upi}
                    alt="UPI"
                    className="h-3 object-contain"
                  />
                </div>

              </div>

            </div>

            {/* CARD */}
            <div
              onClick={() => setPaymentMethod("card")}
              className={`cursor-pointer rounded-3xl border p-4 transition-all ${
                paymentMethod === "card"
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-200 bg-white hover:border-orange-200"
              }`}
            >

              <div className="flex items-start justify-between">

                <div>

                  <h4 className="text-sm font-semibold text-gray-900">
                    Card Payment
                  </h4>

                  <p className="text-[11px] text-gray-500 mt-1">
                    Debit card, credit card & contactless pay
                  </p>

                </div>

                <div
                  className={`w-4 h-4 rounded-full border-2 mt-1 ${
                    paymentMethod === "card"
                      ? "border-orange-500 bg-orange-500"
                      : "border-gray-300"
                  }`}
                />

              </div>

              {/* CARD ICONS */}
              <div className="flex flex-wrap gap-3 mt-5">

                {/* VISA */}
                <div className="w-[70px] h-9 rounded-2xl border border-gray-200 bg-white flex items-center justify-center">
                  <img
                    src={paymentIcons.visa}
                    alt="Visa"
                    className="h-4 object-contain"
                  />
                </div>

                {/* MASTERCARD */}
                <div className="w-[70px] h-9 rounded-2xl border border-gray-200 bg-white flex items-center justify-center">
                  <img
                    src={paymentIcons.mastercard}
                    alt="Mastercard"
                    className="h-4 object-contain"
                  />
                </div>

                {/* RUPAY */}
                <div className="w-[70px] h-9 rounded-2xl border border-gray-200 bg-white flex items-center justify-center">
                  <img
                    src={paymentIcons.rupay}
                    alt="RuPay"
                    className="h-3 object-contain"
                  />
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* BUTTON */}
        <button onClick={()=>{navigate('/receipt')}} className="w-full h-12 md:h-14 mt-7 rounded-2xl bg-orange-500 hover:bg-orange-600 transition text-sm md:text-base font-semibold text-white shadow-lg shadow-orange-200">
          Proceed To Pay
        </button>

      </div>

    </div>

  );
}