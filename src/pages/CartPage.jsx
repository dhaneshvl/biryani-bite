import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, removeFromCart, updateQuantity, placeOrder }) => {
  return (
    <Cart 
      cartItems={cartItems} 
      removeFromCart={removeFromCart} 
      updateQuantity={updateQuantity}
      placeOrder={placeOrder} 
    />
  );
};

export default CartPage;
