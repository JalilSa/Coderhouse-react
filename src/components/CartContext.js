import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item, quantity = 1) => {

    const existingItem = cartItems.find((cartItem) => cartItem.item.id === item.id);
    if (existingItem) {
     
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.item.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
      );
      setCartItems(updatedCartItems);
    } else {

      setCartItems([...cartItems, { item, quantity }]);
    }
  };

  const removeItemFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);

  return context;
}

export default CartContext;
