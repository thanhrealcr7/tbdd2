

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      updateCartItemQuantity(item.id, 1);
    } else {
      setCartItems([...cartItems, { ...item, addNumber: 1 }]);
    }
  };
  const clearCart = () => {
    setCartItems([]);
  };
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const updateCartItemQuantity = (itemId, change) => {
    setCartItems((cartItems) =>
      cartItems
        .map((item) =>
          item.id === itemId
            ? { ...item, addNumber: Math.max(0, item.addNumber + change) }
            : item
        )
        .filter((item) => item.addNumber > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartはCartProvider内で使用する必要があります");
  }
  return context;
};
