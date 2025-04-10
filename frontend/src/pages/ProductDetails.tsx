
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Check, ShoppingCart, ArrowLeft } from 'lucide-react';
import { getProductById } from '../data/products';
import { Product } from '../lib/types';

interface ProductDetailsProps {
  addToCart: (product: Product, quantity: number) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ addToCart }) => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    if (id) {
      const productData = getProductById(parseInt(id));
      if (productData) {
        setProduct(productData);
      }
    }
  }, [id]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <Link to="/" className="d-inline-flex align-items-center text-decoration-none text-dark mb-4">
        <ArrowLeft size={16} className="me-1" />
        Back to Home
      </Link>
      
      <div className="row g-5">
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <img 
              src={product.image} 
              alt={product.name} 
              className="card-img-top img-fluid"
              style={{ height: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
        
        <div className="col-lg-6">
          <h1 className="mb-3">{product.name}</h1>
          
          <div className="d-flex align-items-center mb-3">
            <div className="d-flex text-warning me-2">
              {[...Array(5)].map((_, index) => (
                <Star 
                  key={index} 
                  size={20} 
                  fill={index < Math.floor(product.rating) ? 'currentColor' : 'none'} 
                />
              ))}
            </div>
            <span className="text-muted">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
          
          <div className="mb-4">
            {product.isOnSale && product.originalPrice && (
              <span className="text-muted text-decoration-line-through me-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="fs-3 fw-bold">${product.price.toFixed(2)}</span>
          </div>
          
          <div className="mb-4">
            <span className={`badge ${product.stock > 0 ? 'bg-success' : 'bg-danger'} mb-3`}>
              {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
            <p>{product.description}</p>
          </div>
          
          <div className="d-flex align-items-center mb-4">
            <div className="input-group me-3" style={{ width: '120px' }}>
              <button 
                className="btn btn-outline-secondary" 
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <input 
                type="number" 
                className="form-control text-center" 
                value={quantity} 
                onChange={handleQuantityChange}
                min="1"
              />
              <button 
                className="btn btn-outline-secondary" 
                type="button"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            
            <button 
              className="btn btn-primary d-flex align-items-center" 
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              <ShoppingCart size={20} className="me-2" />
              Add to Cart
            </button>
          </div>
          
          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'description' ? 'active' : ''}`} 
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'features' ? 'active' : ''}`} 
                onClick={() => setActiveTab('features')}
              >
                Features
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'shipping' ? 'active' : ''}`} 
                onClick={() => setActiveTab('shipping')}
              >
                Shipping
              </button>
            </li>
          </ul>
          
          <div className="tab-content">
            {activeTab === 'description' && (
              <div className="tab-pane fade show active">
                <p>{product.description}</p>
              </div>
            )}
            
            {activeTab === 'features' && (
              <div className="tab-pane fade show active">
                <ul className="list-group list-group-flush">
                  {product.features?.map((feature, index) => (
                    <li key={index} className="list-group-item bg-transparent d-flex align-items-center ps-0">
                      <Check size={16} className="text-success me-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'shipping' && (
              <div className="tab-pane fade show active">
                <p>We offer the following shipping options:</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-transparent ps-0">
                    <strong>Standard Shipping:</strong> 3-5 business days
                  </li>
                  <li className="list-group-item bg-transparent ps-0">
                    <strong>Express Shipping:</strong> 1-2 business days
                  </li>
                  <li className="list-group-item bg-transparent ps-0">
                    <strong>Free shipping:</strong> On orders over $100
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
