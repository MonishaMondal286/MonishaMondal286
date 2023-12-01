// src/Header.js

import React from 'react';
import './Header.css';
import CartItem from './CartItem';

const Header = ({ cartItems, removeFromCart }) => {
  return (
    <header className="header"  >
      <h1>Ping Pong Restaurant</h1>
      <p>Discover the best dishes and flavors!</p>

      <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <CartItem item={item} removeFromCart={removeFromCart} />
            </li>
          ))}
        </ul>
      )}
    </div>
    </header>


  );
};

export default Header;
