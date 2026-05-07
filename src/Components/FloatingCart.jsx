import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../CartProvider";

export default function FloatingCart() {

  const navigate = useNavigate();

  const location = useLocation();

  const { cartItems } = useCart();

  // HIDE ON CHECKOUT PAGE
  if (location.pathname === "/checkout" || location.pathname==="/") {
    return null;
  }

  // HIDE IF EMPTY
  if (cartItems.length === 0) {
    return null;
  }

  // TOTAL ITEMS
  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.qty,
    0
  );

  // TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:right-5 md:translate-x-0 z-50 w-[92%] md:w-[360px]">

      <div
        onClick={() => navigate("/checkout")}
        className="w-full bg-orange-500 rounded-2xl shadow-xl px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-orange-600 transition"
      >

        {/* LEFT */}
        <div className="flex items-center gap-3">

          {/* PRODUCT IMAGES */}
          <div className="flex -space-x-3">

            {cartItems.slice(0, 3).map((item) => (

              <div
                key={item.id}
                className="w-11 h-11 rounded-full border-2 border-white overflow-hidden bg-white shadow-sm"
              >

                <img
                  src={item.pimg}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />

              </div>

            ))}

            {/* EXTRA ITEMS */}
            {cartItems.length > 3 && (

              <div className="w-11 h-11 rounded-full border-2 border-white bg-black text-white flex items-center justify-center text-xs font-semibold shadow-sm">

                +{cartItems.length - 3}

              </div>

            )}

          </div>

          {/* TEXT */}
          <div>

            <h3 className="text-white font-semibold text-sm">
              {totalItems} Items Added
            </h3>

            <p className="text-white/80 text-xs pt-[2px]">
              Ready to checkout
            </p>

          </div>

        </div>

        {/* RIGHT */}
        <div className="text-right">

          <h2 className="text-white font-bold text-lg">
            ₹{totalPrice}
          </h2>

          <p className="text-white/80 text-xs">
            View Cart
          </p>

        </div>

      </div>

    </div>
  );
}