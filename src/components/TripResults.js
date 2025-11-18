import React, { useState } from 'react';

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
    selectedPrice,
    passengers,
    cabinType
  } = data;

  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingStep, setBookingStep] = useState('details'); // 'details', 'payment', 'confirmed'
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingReference, setBookingReference] = useState('');
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  // Setting sustainablePrice dynamically with a 20% premium
  const dynamicSustainablePrice = conventionalPrice * 1.2; // 20% premium

  const sustainableWidth = (sustainableEmissions / conventionalEmissions) * 100;
  const conventionalWidth = ((conventionalEmissions - sustainableEmissions) / conventionalEmissions) * 100;

  const handleBooking = () => {
    setShowBookingModal(true);
  };

  const handleInputChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value
    });
  };

  const generateBookingReference = () => {
    return 'EV' + Date.now().toString().slice(-8) + Math.random().toString(36).substr(2, 4).toUpperCase();
  };

  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    if (bookingDetails.name && bookingDetails.email && bookingDetails.phone) {
      setBookingStep('payment');
    } else {
      alert('Please fill in all required fields');
    }
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (paymentDetails.cardNumber && paymentDetails.expiryDate && paymentDetails.cvv && paymentDetails.cardName) {
      const ref = generateBookingReference();
      setBookingReference(ref);
      setBookingConfirmed(true);
      setBookingStep('confirmed');
      setTimeout(() => {
        setShowBookingModal(false);
        setBookingStep('details');
        setBookingConfirmed(false);
        setBookingDetails({ name: '', email: '', phone: '', address: '', city: '', postalCode: '', country: '' });
        setPaymentDetails({ cardNumber: '', expiryDate: '', cvv: '', cardName: '' });
        alert(`Booking confirmed! 🎉\n\nBooking Reference: ${ref}\n\nThank you ${bookingDetails.name}!\nYour ${cabinType} ${ticketType} ticket for ${passengers} passenger(s) has been booked.\nTotal: €${selectedPrice}\n\nConfirmation sent to ${bookingDetails.email}`);
      }, 3000);
    } else {
      alert('Please fill in all payment details');
    }
  };

  const handleCloseModal = () => {
    setShowBookingModal(false);
    setBookingStep('details');
    setBookingConfirmed(false);
    setBookingDetails({ name: '', email: '', phone: '', address: '', city: '', postalCode: '', country: '' });
    setPaymentDetails({ cardNumber: '', expiryDate: '', cvv: '', cardName: '' });
  };

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

        <button className="checkout-button" onClick={handleBooking}>
          Proceed to Booking
        </button>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {bookingStep === 'details' && (
              <>
                <h2 className="modal-title">Passenger Details</h2>
                <p className="modal-subtitle">
                  {passengers} {passengers === 1 ? 'Passenger' : 'Passengers'} • {cabinType.charAt(0).toUpperCase() + cabinType.slice(1)} Cabin • {ticketType.charAt(0).toUpperCase() + ticketType.slice(1)} Ticket
                </p>
                <p className="modal-price">Total: €{selectedPrice}</p>
                
                <form onSubmit={handleDetailsSubmit} className="booking-form">
                  <div className="form-field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={bookingDetails.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="form-field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={bookingDetails.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={bookingDetails.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={bookingDetails.address}
                        onChange={handleInputChange}
                        placeholder="Street address"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={bookingDetails.city}
                        onChange={handleInputChange}
                        placeholder="City"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="postalCode">Postal Code</label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={bookingDetails.postalCode}
                        onChange={handleInputChange}
                        placeholder="Postal code"
                      />
                    </div>
                  </div>
                  
                  <div className="modal-buttons">
                    <button type="button" className="modal-cancel-button" onClick={handleCloseModal}>
                      Cancel
                    </button>
                    <button type="submit" className="modal-confirm-button">
                      Continue to Payment
                    </button>
                  </div>
                </form>
              </>
            )}

            {bookingStep === 'payment' && (
              <>
                <h2 className="modal-title">Payment Information</h2>
                <p className="modal-subtitle">Secure payment processing</p>
                
                <form onSubmit={handlePaymentSubmit} className="booking-form">
                  <div className="form-field">
                    <label htmlFor="cardName">Cardholder Name *</label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={paymentDetails.cardName}
                      onChange={(e) => setPaymentDetails({...paymentDetails, cardName: e.target.value})}
                      placeholder="Name on card"
                      required
                    />
                  </div>
                  
                  <div className="form-field">
                    <label htmlFor="cardNumber">Card Number *</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={paymentDetails.cardNumber}
                      onChange={(e) => setPaymentDetails({...paymentDetails, cardNumber: e.target.value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim()})}
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      required
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="expiryDate">Expiry Date *</label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={paymentDetails.expiryDate}
                        onChange={(e) => setPaymentDetails({...paymentDetails, expiryDate: e.target.value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').substring(0, 5)})}
                        placeholder="MM/YY"
                        maxLength="5"
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="cvv">CVV *</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={paymentDetails.cvv}
                        onChange={(e) => setPaymentDetails({...paymentDetails, cvv: e.target.value.replace(/\D/g, '').substring(0, 3)})}
                        placeholder="123"
                        maxLength="3"
                        required
                      />
                    </div>
                  </div>

                  <div className="payment-summary">
                    <div className="summary-row">
                      <span>Subtotal:</span>
                      <span>€{selectedPrice}</span>
                    </div>
                    <div className="summary-row total">
                      <span>Total:</span>
                      <span>€{selectedPrice}</span>
                    </div>
                  </div>
                  
                  <div className="modal-buttons">
                    <button type="button" className="modal-cancel-button" onClick={() => setBookingStep('details')}>
                      Back
                    </button>
                    <button type="submit" className="modal-confirm-button">
                      Confirm & Pay €{selectedPrice}
                    </button>
                  </div>
                </form>
              </>
            )}

            {bookingStep === 'confirmed' && (
              <div className="booking-confirmed">
                <div className="checkmark">✓</div>
                <h2 className="modal-title">Booking Confirmed!</h2>
                <div className="booking-reference">
                  <p className="reference-label">Booking Reference:</p>
                  <p className="reference-number">{bookingReference}</p>
                </div>
                <p className="confirmation-text">
                  Thank you {bookingDetails.name}!<br/>
                  Your booking confirmation has been sent to {bookingDetails.email}
                </p>
                <div className="booking-summary">
                  <p><strong>Route:</strong> {data.route?.name || 'Helsinki ↔ Stockholm'}</p>
                  <p><strong>Passengers:</strong> {passengers}</p>
                  <p><strong>Cabin:</strong> {cabinType.charAt(0).toUpperCase() + cabinType.slice(1)}</p>
                  <p><strong>Total:</strong> €{selectedPrice}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TripResults;
