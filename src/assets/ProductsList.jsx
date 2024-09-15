// src/components/ProductsList.jsx
import React from 'react';
import products from '../data/products';

const ProductsList = ({ addToCart }) => {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-6 text-3xl font-bold text-center flex justify-center">
      <h2 className=" hover:scale-110 transition-all">Apple Products</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group bg-white rounded-lg shadow-md p-6 hover:shadow-xl shadow-[rgba(144,192,231,0.39)] hover:shadow-[rgba(144,192,231,0.73)] transition-all ">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 h-fit "
            />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-2xl group-hover:translate-x-3 transition-all">{product.name}</h3>
            <p className="text-gray-600 mb-2 group-hover:text-gray-800 transition-all">
              <strong>Price:</strong> {product.price}
            </p>
            <div className="text-sm text-gray-500 mb-4">
              <p><strong>Display:</strong> {product.specs.display}</p>
              <p><strong>Processor:</strong> {product.specs.processor}</p>
              {product.specs.camera && <p><strong>Camera:</strong> {product.specs.camera}</p>}
              {product.specs.memory && <p><strong>Memory:</strong> {product.specs.memory}</p>}
              {product.specs.healthFeatures && <p><strong>Health Features:</strong> {product.specs.healthFeatures}</p>}
              <p><strong>Storage:</strong> {product.specs.storage}</p>
            </div>
            <button
              className=" bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 hover:scale-105 transition w-full"
              onClick={() => addToCart(product)} // Add product to cart
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
