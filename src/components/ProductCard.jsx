import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={`p-4 rounded shadow-md mb-4 ${!product.inStock ? 'bg-gray-200 opacity-50' : 'bg-white'}`}>
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
      <p className={`mt-2 font-semibold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
};

export default ProductCard;
