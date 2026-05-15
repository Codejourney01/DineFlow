import React, { useState } from "react";
import {
  ChevronLeft,
  ShieldCheck,
  Receipt,
  Wallet,
  Clock2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import CartRow from "../../Components/CartRow";
import { useCart } from "../../CartProvider";
import { useNavigate } from "react-router-dom";

export default function Order() {

  const navigate = useNavigate();

  const { cartItems } = useCart();

  // SHOW / HIDE TERMS
  const [showTerms, setShowTerms] = useState(false);

  // SUBTOTAL
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // FEES
  const deliveryFee = subtotal > 0 ? 40 : 0;

  const gst = Math.floor(subtotal * 0.05);

  const platformFee = subtotal > 0 ? 12 : 0;

  // TOTAL
  const total =
    subtotal +
    deliveryFee +
    gst +
    platformFee;

  // TOTAL ITEMS
  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.qty,
    0
  );

  // EMPTY CART
  if (cartItems.length === 0) {
    return (
      <div className="w-full min-h-screen bg-[#f8f8f8] flex items-center justify-center px-4">

        <div className="max-w-[400px] w-full bg-white border border-gray-200 rounded-3xl p-8 shadow-sm text-center">

          {/* IMAGE */}
          <div className="w-28 h-28 mx-auto">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty Cart"
              className="w-full h-full object-contain"
            />

          </div>

          {/* TITLE */}
          <h2 className="text-2xl font-bold text-gray-800 pt-6 font-poppins">
            Your cart is empty
          </h2>

          {/* SUBTEXT */}
          <p className="text-sm text-gray-500 pt-3 leading-6">

            Looks like you haven’t added anything yet.
            Explore delicious meals and start ordering.

          </p>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/menu")}
            className="w-full h-[50px] mt-7 rounded-2xl bg-orange-500 hover:bg-orange-600 transition text-white font-semibold shadow-sm"
          >
            Browse Menu
          </button>

        </div>

      </div>
    );
  }

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
              <ChevronLeft
                size={18}
                className="text-orange-500"
              />
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

              <Receipt
                size={16}
                className="text-orange-500"
              />

            </div>

            <div>

              <h4 className="text-sm font-semibold text-gray-800">
                {totalItems} Items
              </h4>

              <p className="text-[11px] text-gray-500">
                Ready to order
              </p>

            </div>

          </div>

        </div>

        {/* MAIN */}
        <div className="w-full flex flex-col lg:flex-row gap-5 pt-5 md:px-3">

          {/* LEFT SIDE */}
          <div className="flex-1 flex flex-col gap-5">

            {/* CART */}
            <div className="flex flex-col gap-4">

              {cartItems.map((item) => (
                <CartRow
                  key={item.id}
                  item={item}
                />
              ))}

            </div>

            {/* COUPON SECTION */}
            <div className="max-w-[800px] w-full bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">

              {/* HEADER */}
              <div className="w-full p-5 border-b border-gray-100 flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">

                  <Receipt
                    size={18}
                    className="text-orange-500"
                  />

                </div>

                <div>

                  <h2 className="text-lg md:text-xl font-semibold text-gray-900 font-poppins">
                    Apply Coupon
                  </h2>

                  <p className="text-xs text-gray-500 pt-1">
                    Enter your coupon code to get discount
                  </p>

                </div>

              </div>

              {/* BODY */}
              <div className="p-5">

                <div className="w-full flex flex-col sm:flex-row gap-3">

                  {/* INPUT */}
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex-1 h-[50px] py-4 md:py-0 px-4 rounded-xl border border-gray-200 outline-none focus:border-orange-400 text-sm transition"
                  />

                  {/* BUTTON */}
                  <button className="sm:w-[140px] w-full h-[50px] rounded-xl bg-orange-500 hover:bg-orange-600 transition text-white text-sm font-semibold shadow-sm">

                    Apply Coupon

                  </button>

                </div>

              </div>

            </div>

            {/* TERMS & CONDITIONS */}
            <div className="max-w-[800px] w-full bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">

              {/* HEADER */}
              <button
                onClick={() => setShowTerms(!showTerms)}
                className="w-full p-5 flex items-center justify-between hover:bg-orange-50 transition"
              >

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">

                    <ShieldCheck
                      size={18}
                      className="text-orange-500"
                    />

                  </div>

                  <div className="text-left">

                    <h2 className="text-lg md:text-xl font-semibold text-gray-900 font-poppins">
                      Terms & Conditions
                    </h2>

                    <p className="text-xs text-gray-500 pt-1">
                      Please read before placing your order
                    </p>

                  </div>

                </div>

                <div>

                  {showTerms ? (
                    <ChevronUp
                      size={20}
                      className="text-gray-500"
                    />
                  ) : (
                    <ChevronDown
                      size={20}
                      className="text-gray-500"
                    />
                  )}

                </div>

              </button>

              {/* TERMS CONTENT */}
              {showTerms && (

                <div className="px-5 pb-5 flex flex-col gap-4 border-t border-gray-100">

                  <div className="flex gap-3 items-start pt-4">

                    <div className="min-w-[8px] h-[8px] rounded-full bg-orange-500 mt-2" />

                    <p className="text-sm text-gray-600 leading-6">
                      Orders placed through the QR table menu system are linked to your selected table number automatically.
                    </p>

                  </div>

                  <div className="flex gap-3 items-start">

                    <div className="min-w-[8px] h-[8px] rounded-full bg-orange-500 mt-2" />

                    <p className="text-sm text-gray-600 leading-6">
                      Once the kitchen starts preparing your order, cancellation or modification may not be possible.
                    </p>

                  </div>

                  <div className="flex gap-3 items-start">

                    <div className="min-w-[8px] h-[8px] rounded-full bg-orange-500 mt-2" />

                    <p className="text-sm text-gray-600 leading-6">
                      Delivery time may vary depending on restaurant rush hours and table service availability.
                    </p>

                  </div>

                  <div className="flex gap-3 items-start">

                    <div className="min-w-[8px] h-[8px] rounded-full bg-orange-500 mt-2" />

                    <p className="text-sm text-gray-600 leading-6">
                      GST, platform fees, and restaurant charges are included in the final payable amount.
                    </p>

                  </div>

                  <div className="flex gap-3 items-start">

                    <div className="min-w-[8px] h-[8px] rounded-full bg-orange-500 mt-2" />

                    <p className="text-sm text-gray-600 leading-6">
                      Please verify your ordered items carefully before proceeding to payment.
                    </p>

                  </div>

                  <div className="flex gap-3 items-start">

                    <div className="min-w-[8px] h-[8px] rounded-full bg-orange-500 mt-2" />

                    <p className="text-sm text-gray-600 leading-6">
                      Outside food or beverages are not permitted inside the restaurant premises.
                    </p>

                  </div>

                  <div className="flex gap-3 items-start">

                    <div className="min-w-[8px] h-[8px] rounded-full bg-orange-500 mt-2" />

                    <p className="text-sm text-gray-600 leading-6">
                      By placing the order, you agree to the restaurant's dining and service policies.
                    </p>

                  </div>

                </div>

              )}

            </div>

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

                  <Wallet
                    size={18}
                    className="text-orange-500"
                  />

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
                    ₹{subtotal}
                  </span>

                </div>

                <div className="flex items-center justify-between text-sm">

                  <span className="text-gray-500">
                    Delivery Fee
                  </span>

                  <span className="font-medium text-gray-800">
                    ₹{deliveryFee}
                  </span>

                </div>

                <div className="flex items-center justify-between text-sm">

                  <span className="text-gray-500">
                    GST & Taxes
                  </span>

                  <span className="font-medium text-gray-800">
                    ₹{gst}
                  </span>

                </div>

                <div className="flex items-center justify-between text-sm">

                  <span className="text-gray-500">
                    Platform Fee
                  </span>

                  <span className="font-medium text-gray-800">
                    ₹{platformFee}
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
                  ₹{total}
                </h2>

              </div>

              {/* BUTTON */}
              <button onClick={()=>{navigate('/payment')}} className="w-full h-[48px] mt-6 rounded-xl bg-orange-500 hover:bg-orange-600 transition text-white text-sm font-semibold shadow-sm">

                Proceed To Payment

              </button>

              {/* SECURITY */}
              <div className="w-full flex items-center justify-center gap-2 pt-4">

                <ShieldCheck
                  size={14}
                  className="text-green-500"
                />

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