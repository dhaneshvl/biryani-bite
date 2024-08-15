// hooks/useCart.js
import { useState } from 'react';

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId, quantity, name, price) => {
    setCartItems(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.id === itemId);
      if (existingItemIndex > -1) {
        // Update quantity if item exists
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        // Add new item
        return [...prevCart, { id: itemId, quantity, name, price }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems(prevCart => {
      const updatedCart = prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
      return updatedCart;
    });
  };

  const placeOrder = () => {
    // Place order logic
    setCartItems([]);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    placeOrder,
  };
};

export default useCart;
