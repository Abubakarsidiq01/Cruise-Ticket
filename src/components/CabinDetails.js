import React from 'react';

const CabinDetails = ({ cabinType, onClose }) => {
  const cabinInfo = {
    standard: {
      name: 'Standard Cabin',
      size: '15 m²',
      beds: '2 Single Beds',
      amenities: ['Window View', 'Private Bathroom', 'TV', 'WiFi', 'Air Conditioning'],
      description: 'Comfortable and cozy cabin perfect for budget-conscious travelers.',
      image: '🪟'
    },
    premium: {
      name: 'Premium Cabin',
      size: '22 m²',
      beds: '1 Double Bed',
      amenities: ['Balcony', 'Private Bathroom', 'Mini Bar', 'TV', 'WiFi', 'Air Conditioning', 'Room Service'],
      description: 'Spacious cabin with private balcony offering stunning sea views.',
      image: '🌊'
    },
    deluxe: {
      name: 'Deluxe Suite',
      size: '35 m²',
      beds: '1 King Bed + Sofa Bed',
      amenities: ['Large Balcony', 'Jacuzzi', 'Private Bathroom', 'Living Area', 'Mini Bar', 'Premium TV', 'WiFi', 'Air Conditioning', '24/7 Room Service', 'Priority Boarding'],
      description: 'Luxurious suite with premium amenities and breathtaking ocean views.',
      image: '✨'
    }
  };

  const info = cabinInfo[cabinType];

  return (
    <div className="cabin-details-modal">
      <div className="cabin-details-content">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="cabin-details-header">
          <div className="cabin-icon">{info.image}</div>
          <h2>{info.name}</h2>
        </div>
        
        <div className="cabin-specs">
          <div className="spec-item">
            <span className="spec-label">Size:</span>
            <span className="spec-value">{info.size}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Beds:</span>
            <span className="spec-value">{info.beds}</span>
          </div>
        </div>

        <p className="cabin-description">{info.description}</p>

        <div className="amenities-section">
          <h3>Amenities</h3>
          <div className="amenities-grid">
            {info.amenities.map((amenity, idx) => (
              <div key={idx} className="amenity-item">
                <span className="amenity-icon">✓</span>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabinDetails;

