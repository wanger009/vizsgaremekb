
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../lib/types';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  const { id, name, price, originalPrice, image, rating, reviews, isNew, isOnSale } = product;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="col">
      <div className="card h-100 product-card border-0 shadow-sm">
        <div className="position-relative">
          <Link to={`/product/${id}`}>
            <img 
              src={image} 
              className="card-img-top" 
              alt={name}
              style={{ height: '200px', objectFit: 'cover' }}
            />
          </Link>
          
          {isNew && (
            <span className="position-absolute top-0 start-0 bg-primary text-white py-1 px-2 m-2 rounded-pill">
              Új
            </span>
          )}
          
          {isOnSale && (
            <span className="position-absolute top-0 end-0 bg-danger text-white py-1 px-2 m-2 rounded-pill">
              Akció
            </span>
          )}
        </div>
        
        <div className="card-body d-flex flex-column">
          <Link to={`/product/${id}`} className="text-decoration-none text-dark">
            <h5 className="card-title">{name}</h5>
          </Link>
          
          <div className="d-flex align-items-center mb-2">
            <div className="text-warning me-1">
              <Star size={16} fill="currentColor" />
            </div>
            <span>{rating} <small className="text-muted">({reviews} értékelés)</small></span>
          </div>
          
          <div className="mt-auto">
            <div className="d-flex align-items-center mb-3">
              {isOnSale && originalPrice && (
                <span className="text-muted text-decoration-line-through me-2">
                  💰 {originalPrice.toLocaleString('hu-HU')} Ft
                </span>
              )}
              <span className="fw-bold fs-5">💰 {price.toLocaleString('hu-HU')} Ft</span>
            </div>
            
            <button 
              className="btn btn-outline-dark w-100" 
              onClick={handleAddToCart}
            >
              Kosárba
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
