
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="mb-4">GYMGO</h5>
            <p className="text-white">
              Prémium edzőtermi felszerelések otthoni és kereskedelmi edzőtermekhez. Építsd fel velünk a tökéletes edzőteredet.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61575185637599" className="text-white">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/gymgo313/" className="text-white">
                <Instagram size={20} />
              </a>
              
              <a href="https://www.youtube.com/@gymgo313" className="text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="mb-4">Ezek vagyunk mi</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Főoldal</Link>
              </li>
              <li className="mb-2">
                <Link to="/products" className="text-white text-decoration-none">Termékek</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white text-decoration-none">Rólunk</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white text-decoration-none">Csapatunk</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="mb-4">Ügyfélszolgálat</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/faq" className="text-white text-decoration-none">GYIK</Link>
              </li>
              <li className="mb-2">
                <Link to="/shipping" className="text-white text-decoration-none">Szállítási Feltételek</Link>
              </li>
              <li className="mb-2">
                <Link to="/returns" className="text-white text-decoration-none">Visszatérítések</Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy" className="text-white text-decoration-none">Adatvédelmi Irányelvek</Link>
              </li>
              <li className="mb-2">
                <Link to="/terms" className="text-white text-decoration-none">Általános Szerződési Feltételek</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="mb-4">Infók</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex">
                <MapPin size={20} className="me-2" />
                <span className="text-white">2111, Szada Liget utca 21, Magyarország</span>
              </li>
              <li className="mb-3 d-flex">
                <Phone size={20} className="me-2" />
                <span className="text-white">06-30-713-9700</span>
              </li>
              <li className="mb-3 d-flex">
                <Mail size={20} className="me-2" />
                <span className="text-white">gymgo0313@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row align-items-center">
          <div className="col-12 text-center">
            <p className="mb-0 text-white">
              &copy; {new Date().getFullYear()} GYMGO. Minden jog fenntartva.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
