// src/components/Cart.jsx
import React from 'react';

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  // Calculate the total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  );

  return (
    <div className="container mx-auto py-6">
      <h2 id='shoppingcart' className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b py-4">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    {item.quantity} x {item.price}
                  </p>
                </div>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
            <button
              className="bg-red-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-red-500 transition"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
