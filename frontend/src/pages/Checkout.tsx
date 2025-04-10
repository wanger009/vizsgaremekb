
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../lib/types';

interface CheckoutProps {
  cartItems: CartItem[];
  clearCart: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cartItems, clearCart }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'Hungary',
    paymentMethod: 'credit-card',
    saveInfo: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData({
      ...formData,
      [name]: val
    });
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  };

  const calculateShipping = () => {
    const subtotal = calculateSubtotal();
    return subtotal > 100 ? 0 : 10;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      clearCart();
      setIsSubmitting(false);
      setIsOrderPlaced(true);
    }, 1500);
  };

  if (isOrderPlaced) {
    return (
      <div className="container py-5">
        <div className="card border-0 shadow-sm p-4 p-md-5 mx-auto" style={{ maxWidth: '600px' }}>
          <div className="text-center mb-4">
            <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '64px', height: '64px' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="mb-2">Thank You!</h2>
            <p className="text-muted mb-4">Your order has been placed successfully.</p>
          </div>
          
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <p className="card-text">Order Number: <strong>ORD-{Math.floor(Math.random() * 10000)}</strong></p>
              <p className="card-text">Date: <strong>{new Date().toLocaleDateString()}</strong></p>
              <p className="card-text">Total: <strong>${calculateTotal().toFixed(2)}</strong></p>
            </div>
          </div>
          
          <p className="text-muted mb-4">
            A confirmation email has been sent to <strong>{formData.email}</strong>. 
            You will receive another email when your order ships.
          </p>
          
          <div className="d-grid gap-2">
            <Link to="/products" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2 className="mb-4">Your cart is empty</h2>
        <p className="mb-4">Add some products to your cart before proceeding to checkout.</p>
        <Link to="/products" className="btn btn-primary">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4">Checkout</h1>
      
      <div className="row g-5">
        <div className="col-md-7">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h4 className="mb-4">Shipping Information</h4>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="firstName" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="lastName" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="col-12">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="address" 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="col-md-5">
                    <label htmlFor="city" className="form-label">City</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="city" 
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="col-md-4">
                    <label htmlFor="zipCode" className="form-label">Zip Code</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="zipCode" 
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="col-md-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <select 
                      className="form-select" 
                      id="country" 
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="Hungary">Hungary</option>
                      <option value="Austria">Austria</option>
                      <option value="Germany">Germany</option>
                      <option value="Romania">Romania</option>
                      <option value="Slovakia">Slovakia</option>
                    </select>
                  </div>
                </div>
                
                <hr className="my-4" />
                
                <h4 className="mb-4">Payment Method</h4>
                
                <div className="form-check mb-3">
                  <input 
                    type="radio" 
                    className="form-check-input" 
                    id="credit-card" 
                    name="paymentMethod"
                    value="credit-card"
                    checked={formData.paymentMethod === 'credit-card'}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="credit-card">Credit Card</label>
                </div>
                
                <div className="form-check mb-3">
                  <input 
                    type="radio" 
                    className="form-check-input" 
                    id="paypal" 
                    name="paymentMethod"
                    value="paypal"
                    checked={formData.paymentMethod === 'paypal'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="paypal">PayPal</label>
                </div>
                
                <div className="form-check mb-4">
                  <input 
                    type="radio" 
                    className="form-check-input" 
                    id="cash-on-delivery" 
                    name="paymentMethod"
                    value="cash-on-delivery"
                    checked={formData.paymentMethod === 'cash-on-delivery'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="cash-on-delivery">Cash on Delivery</label>
                </div>
                
                <div className="form-check mb-4">
                  <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="saveInfo" 
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="saveInfo">
                    Save this information for next time
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Processing...
                    </>
                  ) : (
                    'Place Order'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-md-5">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h4 className="mb-4">Order Summary</h4>
              
              {cartItems.map((item) => (
                <div key={item.product.id} className="d-flex mb-3">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="me-3"
                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-0">{item.product.name}</h6>
                    <div className="text-muted small">
                      ${item.product.price.toFixed(2)} x {item.quantity}
                    </div>
                  </div>
                  <div className="fw-bold">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
              
              <hr className="my-4" />
              
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>
                  {calculateShipping() > 0 
                    ? `$${calculateShipping().toFixed(2)}` 
                    : 'Free'}
                </span>
              </div>
              
              <hr className="my-2" />
              
              <div className="d-flex justify-content-between mb-4">
                <strong>Total</strong>
                <strong>${calculateTotal().toFixed(2)}</strong>
              </div>
              
              <div className="bg-light p-3 rounded">
                <h6 className="mb-2">Have a coupon?</h6>
                <div className="input-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Promo code" 
                  />
                  <button className="btn btn-outline-dark" type="button">Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
