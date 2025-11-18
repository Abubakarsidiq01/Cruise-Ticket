import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import RoutesPage from './pages/RoutesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <Router>
      <div className="app-container">
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        <main className="main-content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/book" component={BookPage} />
            <Route path="/routes" component={RoutesPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/faq" component={FAQPage} />
          </Switch>
        </main>

        <footer className="app-footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>EcoVoyage</h3>
              <p>Sustainable cruise travel across Northern Europe</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <Link to="/routes">Routes</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/faq">FAQ</Link>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <a href="#terms">Terms & Conditions</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#cancellation">Cancellation Policy</a>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <p>support@ecovoyage.com</p>
              <p>+358 9 1234 5678</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 EcoVoyage - Making travel sustainable 🌱</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;