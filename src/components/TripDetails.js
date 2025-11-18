import React, { useState } from 'react';
import CabinDetails from './CabinDetails';

const TripDetails = ({ 
  passengers, 
  setPassengers, 
  ticketType, 
  setTicketType, 
  cabinType, 
  setCabinType,
  baseTicketPrice 
}) => {
  const [showCabinDetails, setShowCabinDetails] = useState(false);
  return (
    <div className="input-section">
      <h2 className="section-title">Your Trip Details</h2>
      
      <div className="form-group">
        <label className="form-label">Number of Passengers</label>
        <input 
          type="range" 
          min="1" 
          max="6" 
          value={passengers} 
          onChange={(e) => setPassengers(parseInt(e.target.value))}
          className="range-input" 
        />
        <div className="range-markers">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
        </div>
        <p className="passenger-count">{passengers} passenger{passengers !== 1 ? 's' : ''}</p>
      </div>
      
      <div className="form-group">
        <label className="form-label">Cabin Type</label>
        <div className="button-group">
          <button
            className={`button ${cabinType === 'standard' ? 'button-active' : 'button-inactive'}`}
            onClick={() => setCabinType('standard')}
          >
            Standard
          </button>
          <button
            className={`button ${cabinType === 'premium' ? 'button-active' : 'button-inactive'}`}
            onClick={() => setCabinType('premium')}
          >
            Premium
          </button>
          <button
            className={`button ${cabinType === 'deluxe' ? 'button-active' : 'button-inactive'}`}
            onClick={() => setCabinType('deluxe')}
          >
            Deluxe
          </button>
        </div>
        <button 
          className="cabin-details-button"
          onClick={() => setShowCabinDetails(true)}
        >
          View Cabin Details
        </button>
      </div>
      
      {showCabinDetails && (
        <CabinDetails 
          cabinType={cabinType}
          onClose={() => setShowCabinDetails(false)}
        />
      )}
      
      <div className="form-group">
        <label className="form-label">Ticket Type</label>
        <div className="ticket-type-group">
          <button
            className={`ticket-option ${ticketType === 'conventional' ? 'ticket-option-conventional' : 'ticket-option-inactive'}`}
            onClick={() => setTicketType('conventional')}
          >
            <h3 className="ticket-title">Conventional</h3>
            <p className="ticket-subtitle">Standard marine diesel</p>
            <p className="ticket-price">{baseTicketPrice[cabinType].conventional}€ per person</p>
          </button>
          <button
            className={`ticket-option ${ticketType === 'sustainable' ? 'ticket-option-sustainable' : 'ticket-option-inactive'}`}
            onClick={() => setTicketType('sustainable')}
          >
            <h3 className="ticket-title">Sustainable</h3>
            <p className="ticket-subtitle">Advanced biofuel blend</p>
            <p className="ticket-price">{baseTicketPrice[cabinType].sustainable}€ per person</p>
            <p className="ticket-tag">70% less emissions</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;