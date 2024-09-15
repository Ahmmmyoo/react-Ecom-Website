import './App.css'
import Header from './assets/Header'
import ProductsList from './assets/ProductsList'
import Cart from './assets/Cart'
import { useState } from 'react';


function App() {

  // State to hold cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add product to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the product is already in the cart
      const isProductInCart = prevItems.find((item) => item.id === product.id);
      if (isProductInCart) {
        // If the product is already in the cart, update its quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove a product from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-8">
        {/* Products List */}
        <ProductsList addToCart={addToCart} />

        {/* Cart Component */}
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />
      </div>
    </div>
  );
}

export default App;