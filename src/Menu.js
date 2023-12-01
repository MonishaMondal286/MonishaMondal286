// src/Menu.js

import React from 'react';

const menuItems = [
  { id: 1, name: 'Burger', price: 8.99, image: 'burger.jpeg' },
  { id: 2, name: 'Pizza', price: 10.99, image: 'pizza.jpeg' },
  { id: 3, name: 'Salad', price: 5.99, image: 'salad.jpeg' },
  { id: 1, name: 'schezwan chicken noodles', price: 8.99, image: 'noodles.jpeg' },
  { id: 2, name: 'chicken', price: 10.99, image: 'chicken.jpeg' },
  { id: 3, name: 'mutton', price: 5.99, image: 'mutton.jpeg' },
  { id: 1, name: 'friedrice', price: 8.99, image: 'friedrice.jpeg' },
  { id: 2, name: 'momo', price: 10.99, image: 'momo.jpeg' },
  { id: 3, name: 'kabab', price: 5.99, image: 'kabab.jpeg' },
  { id: 1, name: 'rooti', price: 8.99, image: 'rooti.jpeg' },
  { id: 2, name: 'curry', price: 10.99, image: 'curry.jpeg' },
  { id: 3, name: 'Salad', price: 5.99, image: 'salad.jpeg' },
  // Add more items as needed
];

function Menu({ addToCart }) {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <div className="menu-list">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={`/images/${item.image}`} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button className="addToCard" onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
