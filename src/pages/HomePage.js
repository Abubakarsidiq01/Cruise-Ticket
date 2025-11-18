import React from 'react';
import { Link } from 'react-router-dom';
import CruiseTicketCalculator from '../components/CruiseTicketCalculator';

const HomePage = () => {
  const features = [
    { icon: '🌱', title: '70% Less Emissions', desc: 'Advanced biofuel technology reduces carbon footprint' },
    { icon: '🌍', title: 'Multiple Routes', desc: 'Explore beautiful destinations across Northern Europe' },
    { icon: '💰', title: 'Transparent Pricing', desc: 'See real-time carbon impact and pricing' },
    { icon: '⭐', title: 'Premium Experience', desc: 'Comfortable cabins with modern amenities' }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Travelers' },
    { number: '1.2M', label: 'kg CO₂ Saved' },
    { number: '15+', label: 'Destinations' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">🌱 Carbon-Neutral Travel</div>
          <h1 className="hero-title">Sail Sustainably Across Northern Europe</h1>
          <p className="hero-subtitle">
            Experience luxury cruising with 70% less carbon emissions. 
            Our advanced biofuel technology makes every journey an eco-friendly adventure. 
            Book your sustainable voyage today and make a positive impact on our planet.
          </p>
          <div className="hero-buttons">
            <Link to="/book" className="btn-primary btn-large">
              Book Your Cruise
            </Link>
            <Link to="/routes" className="btn-secondary btn-large">
              Explore Routes
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="calculator-section">
        <div className="calculator-section-header">
          <h2 className="section-heading">Calculate Your Carbon Impact</h2>
          <p className="section-subtitle">See how choosing sustainable travel makes a difference. Try our interactive calculator below.</p>
        </div>
        <CruiseTicketCalculator />
      </section>

      <section className="features-section">
        <h2 className="section-heading">Why Choose EcoVoyage?</h2>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Sustainable Journey?</h2>
          <p>Join thousands of eco-conscious travelers making a difference</p>
          <Link to="/book" className="btn-primary btn-large">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

