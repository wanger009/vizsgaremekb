
import React from 'react';
import { CartItem } from '../lib/types';
import Cart from '../components/Cart';

interface CartPageProps {
  cartItems: CartItem[];
  updateQuantity: (productId: number, amount: number) => void;
  removeFromCart: (productId: number) => void;
}

const CartPage: React.FC<CartPageProps> = ({ 
  cartItems, 
  updateQuantity, 
  removeFromCart 
}) => {
  return (
    <div className="bg-white py-5">
      <div className="container">
        <h1 className="text-3xl font-medium mb-6">Kosár</h1>
        <Cart 
          items={cartItems} 
          updateQuantity={updateQuantity} 
          removeFromCart={removeFromCart} 
        />
      </div>
    </div>
  );
};

export default CartPage;
