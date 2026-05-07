

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  // ADD ITEM
  const addToCart = (item) => {

    const existing = cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existing) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...item, qty: 1 },
      ]);
    }
  };

  // REMOVE ITEM
  const removeFromCart = (id) => {
    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );
  };

  // INCREASE
  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // DECREASE
  const decreaseQty = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);