import React from 'react';

function CartItem({ item, removeFromCart }) {
  return (
    <div>
      <p>{item.name} - ${item.price}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
