import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setCurrentPage('home');
    else if (path === '/book') setCurrentPage('book');
    else if (path === '/routes') setCurrentPage('routes');
    else if (path === '/about') setCurrentPage('about');
    else if (path === '/contact') setCurrentPage('contact');
    else if (path === '/faq') setCurrentPage('faq');
  }, [location, setCurrentPage]);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'book', label: 'Book Cruise', path: '/book' },
    { id: 'routes', label: 'Routes', path: '/routes' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'contact', label: 'Contact', path: '/contact' },
    { id: 'faq', label: 'FAQ', path: '/faq' }
  ];

  return (
    <nav className="main-navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setCurrentPage('home')}>
          <img src="/logo.svg" alt="EcoVoyage Logo" className="logo-img" />
          <span className="logo-text">EcoVoyage</span>
        </Link>
        
        <div className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
          {navItems.map(item => (
            <Link
              key={item.id}
              to={item.path}
              className={`nav-link ${currentPage === item.id ? 'nav-link-active' : ''}`}
              onClick={() => {
                setCurrentPage(item.id);
                setIsMobileMenuOpen(false);
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

