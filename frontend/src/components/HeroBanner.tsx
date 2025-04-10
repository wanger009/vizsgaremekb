
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HeroBanner: React.FC = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-semibold mb-6">Építsd fel tökéletes otthoni edzőtermedet</h1>
          <p className="text-xl sm:text-2xl mb-8 opacity-90">
            Professzionális felszerelés a professzionális eredményekért. Válogass prémium edzőtermi eszközeink között.
          </p>
          <div className="flex justify-center">
            <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
              Vásárlás most
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
