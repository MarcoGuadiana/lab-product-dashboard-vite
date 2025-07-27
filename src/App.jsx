import React, { useState } from 'react';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

const App = () => {
  // TODO: Define initial product data
   const products = [
    { id: 1, name: 'Jeans', price: 50, inStock: true },
    { id: 2, name: 'Shorts', price: 40, inStock: true },
    { id: 3, name: 'Cap', price: 15, inStock: false },
    { id: 4, name: 'Jacket', price: 79, inStock: true },
    { id: 5, name: 'Book', price: 15, inStock: false },
  ];
  // TODO: Implement state to manage filtering
      const [showInStockOnly, setShowInStockOnly] = useState(false);
  // TODO: Implement logic to filter products based on availability
       const filteredProducts = showInStockOnly
    ? products.filter((product) => product.inStock)
    : products;

  return (
    <div>
   <h1>Product Dashboard</h1>

      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setShowInStockOnly(false)}>Show All</button>
        <button onClick={() => setShowInStockOnly(true)}>In Stock Only</button>
      </div>

      
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
