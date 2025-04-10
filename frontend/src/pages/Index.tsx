import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import ProductList from '../components/ProductList';
import { getFeaturedProducts, categories } from '../data/products';
import { Product } from '../lib/types';
import { ArrowRight } from 'lucide-react';

interface IndexProps {
  addToCart: (product: Product) => void;
}

const Index: React.FC<IndexProps> = ({ addToCart }) => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      <HeroBanner />
      
      {/* Categories Section */}
      <div className="container py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-medium mb-0">Kategóriák</h2>
          <Link to="/products" className="text-blue-600 hover:underline flex items-center">
            Összes megtekintése <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="col">
              <Link to={`/category/${category.name.toLowerCase().split(' ')[0]}`} className="text-decoration-none">
                <div className="overflow-hidden rounded-xl bg-gray-50 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-md">
                  <img 
                    src={category.image} 
                    className="w-full object-cover aspect-square" 
                    alt={category.name}
                  />
                  <div className="p-4 text-center">
                    <h6 className="text-base font-medium mb-1">{category.name}</h6>
                    <p className="text-sm text-gray-500">{category.productCount} termék</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      {/* Featured Products Section */}
      <div className="bg-gray-50 py-16">
        <ProductList 
          products={featuredProducts} 
          title="Kiemelt Termékek" 
          addToCart={addToCart}
        />
      </div>
      
      {/* Special Offer Section */}
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="col">
            <img 
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Nyári Akció" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-black text-white p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-medium mb-4">Nyári Akció</h2>
            <p className="text-xl mb-6">
              Akár 30% kedvezmény a kiválasztott edzőtermi felszerelésekre. Korlátozott ideig.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">✓</span> Professzionális minőségű felszerelések
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">✓</span> Ingyenes kiszállítás 30.000 Ft felett
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">✓</span> 30 napos pénzvisszafizetési garancia
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">✓</span> 2 év garancia
              </li>
            </ul>
            <Link to="/products" className="bg-white text-black px-8 py-3 rounded-full inline-block w-max text-center hover:bg-gray-100 transition-colors">
              Vásárlás most
            </Link>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="container py-16">
        <h2 className="text-3xl font-medium text-center mb-12">Vásárlóink Véleménye</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="text-yellow-400 mb-4 flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="mr-1">★</span>
              ))}
            </div>
            <p className="mb-6 text-gray-700">
              "Régóta kerestem minőségi edzőtermi felszereléseket az otthonomba, és a GYMGO pontosan azt nyújtotta, amire szükségem volt. A súlyzórúd professzionális minőségű, a kézisúlyzók pedig tökéletesek."
            </p>
            <h5 className="font-medium mb-1">Kovács János</h5>
            <p className="text-sm text-gray-500">Fitness rajongó</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="text-yellow-400 mb-4 flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="mr-1">★</span>
              ))}
            </div>
            <p className="mb-6 text-gray-700">
              "A erőkeret minősége felülmúlta az elvárásaimat. Az összeszerelés egyszerű volt, és az ügyfélszolgálat kiváló volt, amikor kérdéseim voltak."
            </p>
            <h5 className="font-medium mb-1">Nagy Eszter</h5>
            <p className="text-sm text-gray-500">Személyi edző</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="text-yellow-400 mb-4 flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="mr-1">★</span>
              ))}
            </div>
            <p className="mb-6 text-gray-700">
              "Gyors szállítás és kitűnő csomagolás. Az állítható pad stabil és sokoldalú, tökéletes az otthoni edzőterem kialakításához. Biztosan újra itt vásárolok."
            </p>
            <h5 className="font-medium mb-1">Tóth László</h5>
            <p className="text-sm text-gray-500">CrossFit sportoló</p>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="bg-black text-white py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-medium mb-4">Iratkozz fel hírlevelünkre</h3>
            <p className="mb-6">
              Értesülj az új termékekről, különleges ajánlatokról és fitness tippekről.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                className="flex-grow px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Email címed" 
                required
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
                Feliratkozás
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
