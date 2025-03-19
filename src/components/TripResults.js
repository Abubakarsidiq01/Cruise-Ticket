import React from 'react';

const TripResults = ({ data }) => {
  const {
    ticketType,
    conventionalEmissions,
    sustainableEmissions,
    emissionsSaved,
    conventionalPrice,
    priceDifference,
    carKilometers,
    treeDays,
    selectedPrice
  } = data;

  // Setting sustainablePrice dynamically with a 20% premium
  const dynamicSustainablePrice = conventionalPrice * 1.2; // 20% premium

  const sustainableWidth = (sustainableEmissions / conventionalEmissions) * 100;
  const conventionalWidth = ((conventionalEmissions - sustainableEmissions) / conventionalEmissions) * 100;

  return (
    <div>
      <div className="footprint-section">
        <h2 className="section-title">Your Carbon Footprint</h2>
        
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-green"
              style={{ width: `${sustainableWidth}%` }}
            >
              <span className="progress-text">
                {Math.round(sustainableEmissions)} kg
              </span>
            </div>
            <div 
              className="progress-orange"
              style={{ width: `${conventionalWidth}%` }}
            >
              <span className="progress-text">
                {Math.round(conventionalEmissions - sustainableEmissions)} kg
              </span>
            </div>
          </div>
        </div>
        
        <div className="legend">
          <div className="legend-item">
            <span className="legend-marker marker-green"></span>
            Sustainable: {Math.round(sustainableEmissions)} kg CO₂e
          </div>
          <div className="legend-item">
            <span className="legend-marker marker-orange"></span>
            Conventional: {Math.round(conventionalEmissions)} kg CO₂e
          </div>
        </div>
      </div>
      
      {ticketType === 'sustainable' && (
        <div className="impact-section">
          <h2 className="impact-title">Your Positive Impact</h2>
          <p className="impact-description">By choosing sustainable fuel, you're saving:</p>
          
          <div className="impact-stats">
            <div className="impact-stat">
              <p className="impact-value">{Math.round(emissionsSaved)}</p>
              <p className="impact-label">kg CO₂e emissions</p>
            </div>
            <div className="impact-stat">
              <p className="impact-value">{carKilometers}</p>
              <p className="impact-label">km in an average car</p>
            </div>
          </div>
          
          <p className="impact-footer">
            That's equivalent to a tree absorbing CO₂ for {treeDays} days!
          </p>
        </div>
      )}
      
      <div className="price-section">
        <div className="price-row">
          <span>Total Price:</span>
          <span className="price-value">{selectedPrice} €</span>
        </div>
        
        {ticketType === 'sustainable' && (
          <div className="price-detail">
            <span>Sustainability premium:</span>
            <span>+{priceDifference} € ({Math.round((priceDifference/conventionalPrice)*100)}%)</span>
          </div>
        )}
        
        <div className="price-row">
          <span>Sustainable Price:</span>
          <span className="price-value">{dynamicSustainablePrice} €</span> {/* Display dynamic price */}
        </div>

        <button className="checkout-button">
          Proceed to Booking
        </button>
      </div>
    </div>
  );
};

export default TripResults;
