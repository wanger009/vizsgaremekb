
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, LogIn, UserPlus } from 'lucide-react';

interface NavbarProps {
  cartItemsCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemsCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality would go here
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <div className="d-flex align-items-center">
          <Link className="navbar-brand fw-bold" to="/">
            GYM<span className="text-danger">GO</span>
          </Link>
          <Link to="/cart" className="btn btn-outline-light position-relative ms-2">
            <ShoppingCart size={20} />
            {cartItemsCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItemsCount}
              </span>
            )}
          </Link>
        </div>
        
        <div className="d-flex order-lg-1 ms-auto me-3">
          <Link to="/login" className="btn btn-outline-light me-2 d-flex align-items-center">
            <LogIn size={18} className="me-1" />
            <span className="d-none d-sm-inline">Bejelentkezés</span>
          </Link>
          <Link to="/register" className="btn btn-outline-light d-flex align-items-center">
            <UserPlus size={18} className="me-1" />
            <span className="d-none d-sm-inline">Regisztráció</span>
          </Link>
        </div>
        
        <button 
          className="navbar-toggler border-0 order-lg-2" 
          type="button" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <div className={`collapse navbar-collapse order-lg-0 ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Főoldal
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown"
              >
                Kategóriák
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/category/bars">
                    Rudak és Súlyzók
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/dumbbells">
                    Kézisúlyzók
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/racks">
                    Súlyzóállványok
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/benches">
                    Súlyzópadok
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/kettlebells">
                    Kettlebell
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/weights">
                    Súlytárcsák
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Rólunk
              </Link>
            </li>
          </ul>
          
          <form className="d-flex" onSubmit={handleSearch}>
            <div className="input-group">
              <input 
                type="search" 
                className="form-control" 
                placeholder="Keresés..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-light" type="submit">
                <Search size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
