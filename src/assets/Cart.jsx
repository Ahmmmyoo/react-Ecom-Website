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
              <li key={item.id} className="group hover:shadow-md m-2 rounded-lg flex justify-between items-center border-b py-4">
                <div className="translate-x-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <div className="flex">
                    <p className="text-sm text-gray-600 px-2">
                      {item.quantity} x {item.price}
                    </p>
                    <p className="px-2 text-sm -translate-x-16 opacity-0 text-gray-600 group-hover:translate-x-0 group-hover:opacity-100 transition-all">{item.quantity > 1 ? `Total : $${(item.quantity) * parseFloat(item.price.replace('$', '').replace(',', ''))}` : ""}</p>
                  </div>
                </div>
                <button
                  className="text-red-500 hover:text-red-700 -translate-x-4 group-hover:scale-105 group-hover:-translate-x-5"
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
