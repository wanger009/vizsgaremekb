
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory, categories } from '../data/products';
import { Product } from '../lib/types';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal } from 'lucide-react';

interface CategoryPageProps {
  addToCart: (product: Product) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ addToCart }) => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortOption, setSortOption] = useState('default');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    if (categoryId) {
      const fetchedProducts = getProductsByCategory(categoryId);
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
      
      // Set initial price range based on products
      if (fetchedProducts.length > 0) {
        const prices = fetchedProducts.map(p => p.price);
        const min = Math.floor(Math.min(...prices));
        const max = Math.ceil(Math.max(...prices));
        setPriceRange([min, max]);
      }
    }
  }, [categoryId]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      const newRange = [...priceRange] as [number, number];
      newRange[index] = value;
      setPriceRange(newRange);
    }
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const applyFilters = () => {
    let result = [...products];
    
    // Filter by price
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort
    if (sortOption === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'rating-desc') {
      result.sort((a, b) => b.rating - a.rating);
    }
    
    setFilteredProducts(result);
    setIsMobileFilterOpen(false);
  };

  const resetFilters = () => {
    if (products.length > 0) {
      const prices = products.map(p => p.price);
      const min = Math.floor(Math.min(...prices));
      const max = Math.ceil(Math.max(...prices));
      setPriceRange([min, max]);
      setSortOption('default');
      setFilteredProducts(products);
    }
  };

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  // Get proper category name from the categoryId without showing the raw parameter
  const getCategoryName = () => {
    if (!categoryId) return 'Termékek';
    
    const category = categories.find(c => c.name.toLowerCase().includes(categoryId) || 
                                           c.name.toLowerCase() === categoryId);
    
    if (category) return category.name;
    
    // Fallback translations for common categories
    const translations: Record<string, string> = {
      'bars': 'Rudak és Súlyzók',
      'dumbbells': 'Kézisúlyzók',
      'racks': 'Súlyzóállványok',
      'benches': 'Súlyzópadok',
      'kettlebells': 'Kettlebell',
      'weights': 'Súlytárcsák'
    };
    
    return translations[categoryId] || 'Termékek';
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">{getCategoryName()}</h1>
      
      <div className="row g-4">
        <div className="col-lg-3">
          {/* Mobile filter toggle */}
          <div className="d-lg-none mb-3">
            <button 
              className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center" 
              onClick={toggleMobileFilter}
            >
              <SlidersHorizontal size={18} className="me-2" />
              {isMobileFilterOpen ? 'Szűrők elrejtése' : 'Szűrők mutatása'}
            </button>
          </div>
          
          <div className={`card border-0 shadow-sm mb-4 ${isMobileFilterOpen ? 'd-block' : 'd-none d-lg-block'}`}>
            <div className="card-body">
              <h5 className="card-title mb-4">Szűrők</h5>
              
              <div className="mb-4">
                <h6 className="mb-3">Árkategória</h6>
                <div className="d-flex gap-2 mb-3">
                  <div className="input-group">
                    <span className="input-group-text">💰</span>
                    <input 
                      type="number" 
                      className="form-control" 
                      placeholder="Min" 
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      min={0}
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">💰</span>
                    <input 
                      type="number" 
                      className="form-control" 
                      placeholder="Max" 
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(e, 1)}
                      min={0}
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <h6 className="mb-3">Rendezés</h6>
                <select 
                  className="form-select" 
                  value={sortOption}
                  onChange={handleSortChange}
                >
                  <option value="default">Alapértelmezett</option>
                  <option value="price-asc">Ár: alacsony-magas</option>
                  <option value="price-desc">Ár: magas-alacsony</option>
                  <option value="name-asc">Név: A-Z</option>
                  <option value="rating-desc">Legjobb értékelés</option>
                </select>
              </div>
              
              <div className="d-grid gap-2">
                <button className="btn btn-primary" onClick={applyFilters}>
                  Szűrők alkalmazása
                </button>
                <button className="btn btn-outline-secondary" onClick={resetFilters}>
                  Visszaállítás
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-9">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <span className="text-muted">
              {filteredProducts.length} termék
            </span>
            
            <div className="d-none d-lg-block">
              <select 
                className="form-select" 
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="default">Alapértelmezett rendezés</option>
                <option value="price-asc">Ár: alacsony-magas</option>
                <option value="price-desc">Ár: magas-alacsony</option>
                <option value="name-asc">Név: A-Z</option>
                <option value="rating-desc">Legjobb értékelés</option>
              </select>
            </div>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-5">
              <h3 className="mb-3">Nincs találat</h3>
              <p className="text-muted">
                Próbáld módosítani a szűrőket a termékek megtalálásához.
              </p>
              <button className="btn btn-outline-primary mt-2" onClick={resetFilters}>
                Szűrők visszaállítása
              </button>
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  addToCart={addToCart} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
