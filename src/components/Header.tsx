import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : ''}`}>
      <div className="page-center plr15 m-plr20">
        <div className="flex items-center justify-between py-4">
          <div className="w-[139px]">
            <Link to="/" className="block">
              <img src="/logo.svg" alt="SystemDox Logo" className="w-full xl-6" />
            </Link>
          </div>

          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              <li><Link to="/product">Product</Link></li>
              <li><Link to="/solutions">Solutions</Link></li>
              <li><Link to="/customers">Customers</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/company">Company</Link></li>
            </ul>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/demo" className="topNavBtn requestDemo">Request Demo</Link>
            <Link to="/login" className="loginBtn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <div className="relative">
              <button className="flex items-center">
                EN
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Language dropdown menu here */}
            </div>
          </div>

          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white">
          {/* Mobile menu items */}
        </div>
      )}
    </header>
  );
};

export default Header;
