import React from 'react';
import { Link } from 'react-router-dom';

const RoutesPage = () => {
  const routes = [
    {
      id: 'helsinki-stockholm',
      name: 'Helsinki ↔ Stockholm',
      duration: '16 hours',
      description: 'Experience the beauty of the Baltic Sea on this overnight journey between two stunning Nordic capitals.',
      icon: '🇫🇮🇸🇪',
      features: ['Overnight Cruise', 'City Views', 'Dining Included', 'Entertainment'],
      highlights: ['Archipelago views', 'Northern Lights (winter)', 'City center access'],
      price: 'From €89'
    },
    {
      id: 'tallinn-helsinki',
      name: 'Tallinn ↔ Helsinki',
      duration: '2.5 hours',
      description: 'Quick and convenient connection between Estonia and Finland, perfect for day trips.',
      icon: '🇪🇪🇫🇮',
      features: ['Day Trip', 'Fast Ferry', 'Multiple Departures', 'WiFi'],
      highlights: ['Multiple daily departures', 'Quick connection', 'Budget-friendly'],
      price: 'From €45'
    },
    {
      id: 'stockholm-turku',
      name: 'Stockholm ↔ Turku',
      duration: '11 hours',
      description: 'Journey through the stunning Finnish archipelago with breathtaking island views.',
      icon: '🇸🇪🇫🇮',
      features: ['Archipelago Views', 'Overnight', 'Entertainment', 'Premium Dining'],
      highlights: ['30,000 islands', 'Historic route', 'Scenic beauty'],
      price: 'From €95'
    },
    {
      id: 'riga-stockholm',
      name: 'Riga ↔ Stockholm',
      duration: '18 hours',
      description: 'Extended Baltic Sea adventure connecting Latvia and Sweden.',
      icon: '🇱🇻🇸🇪',
      features: ['Extended Cruise', 'Premium Dining', 'Spa Access', 'Entertainment'],
      highlights: ['Luxury experience', 'Spa facilities', 'Fine dining'],
      price: 'From €120'
    }
  ];

  return (
    <div className="routes-page">
      <section className="routes-hero">
        <div className="hero-badge">Destinations</div>
        <h1>Explore Our Routes</h1>
        <p>Discover beautiful destinations across Northern Europe with our sustainable cruise network</p>
      </section>

      <section className="routes-grid">
        {routes.map(route => (
          <div key={route.id} className="route-card-large">
            <div className="route-card-header">
              <div className="route-icon-large">{route.icon}</div>
              <div>
                <h2>{route.name}</h2>
                <p className="route-duration">{route.duration}</p>
              </div>
            </div>
            
            <p className="route-description">{route.description}</p>
            
            <div className="route-features">
              <h3>Features:</h3>
              <div className="features-list">
                {route.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">{feature}</span>
                ))}
              </div>
            </div>

            <div className="route-highlights">
              <h3>Highlights:</h3>
              <ul>
                {route.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="route-footer">
              <div className="route-price">{route.price}</div>
              <Link to="/book" className="btn-primary">
                Book This Route
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RoutesPage;

