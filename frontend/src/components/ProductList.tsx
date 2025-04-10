
import React from 'react';
import { Product } from '../lib/types';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  title: string;
  addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, title, addToCart }) => {
  return (
    <div className="container py-10">
      <h2 className="text-3xl font-medium mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
