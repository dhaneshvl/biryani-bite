import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useCart from './hooks/useCart'; // Import the custom hook
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import BiryaniDetail from './pages/BiryaniDetail';
import CartPage from './pages/CartPage';
import OrderComplete from './pages/OrderComplete';


const App = () => {
  const { cartItems, addToCart, removeFromCart, updateQuantity, placeOrder } = useCart(); // Use the custom hook

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />x
        <Route path="/biryani/:id" element={<BiryaniDetail addToCart={addToCart} />} />
        <Route 
          path="/cart" 
          element={
            <CartPage 
              cartItems={cartItems} 
              removeFromCart={removeFromCart} 
              updateQuantity={updateQuantity}
              placeOrder={placeOrder} 
            />
          } 
        />
        <Route path="/order-complete" element={<OrderComplete />} />
      </Routes>
    </Router>
  );
};

export default App;
