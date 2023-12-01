// src/App.js

import React, { useState } from 'react';
import Header from './Header';
import Menu from './Menu';
import Navbar from './Navbar';
import Footer from './Footer'; // Import the Footer component
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, { ...item, id: cartItems.length + 1 }]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <Navbar />
      <div className="content">
        <Header cartItems={cartItems} removeFromCart={removeFromCart} />
        <div className="menu-and-cart">
          <Menu addToCart={addToCart} />
        </div>
      </div>
      <Footer /> {/* Include the Footer component here */}
    </div>
  );
}

export default App;
