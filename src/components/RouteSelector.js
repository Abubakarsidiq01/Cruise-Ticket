import React from 'react';

const RouteSelector = ({ selectedRoute, onRouteChange, routes }) => {
  return (
    <div className="route-selector">
      <label className="form-label">Select Route</label>
      <div className="route-grid">
        {routes.map(route => (
          <button
            key={route.id}
            className={`route-card ${selectedRoute.id === route.id ? 'route-card-active' : ''}`}
            onClick={() => onRouteChange(route)}
          >
            <div className="route-icon">{route.icon}</div>
            <h3 className="route-name">{route.name}</h3>
            <p className="route-duration">{route.duration}</p>
            <p className="route-description">{route.description}</p>
            <div className="route-badges">
              {route.features.map((feature, idx) => (
                <span key={idx} className="route-badge">{feature}</span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RouteSelector;

