import React, { useState } from 'react';
import CruiseTicketCalculator from '../components/CruiseTicketCalculator';
import RouteSelector from '../components/RouteSelector';
import DateSelector from '../components/DateSelector';

const BookPage = () => {
  const [selectedRoute, setSelectedRoute] = useState({
    id: 'helsinki-stockholm',
    name: 'Helsinki ↔ Stockholm',
    duration: '16 hours',
    description: 'Scenic journey through the Baltic Sea',
    icon: '🇫🇮🇸🇪',
    features: ['Overnight Cruise', 'City Views', 'Dining Included']
  });

  const routes = [
    {
      id: 'helsinki-stockholm',
      name: 'Helsinki ↔ Stockholm',
      duration: '16 hours',
      description: 'Scenic journey through the Baltic Sea',
      icon: '🇫🇮🇸🇪',
      features: ['Overnight Cruise', 'City Views', 'Dining Included']
    },
    {
      id: 'tallinn-helsinki',
      name: 'Tallinn ↔ Helsinki',
      duration: '2.5 hours',
      description: 'Quick connection between two capitals',
      icon: '🇪🇪🇫🇮',
      features: ['Day Trip', 'Fast Ferry', 'Multiple Departures']
    },
    {
      id: 'stockholm-turku',
      name: 'Stockholm ↔ Turku',
      duration: '11 hours',
      description: 'Historic route through the archipelago',
      icon: '🇸🇪🇫🇮',
      features: ['Archipelago Views', 'Overnight', 'Entertainment']
    },
    {
      id: 'riga-stockholm',
      name: 'Riga ↔ Stockholm',
      duration: '18 hours',
      description: 'Baltic Sea adventure',
      icon: '🇱🇻🇸🇪',
      features: ['Extended Cruise', 'Premium Dining', 'Spa Access']
    }
  ];

  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      
      dates.push({
        date: date.getDate(),
        day: dayNames[date.getDay()],
        month: monthNames[date.getMonth()],
        fullDate: date.toISOString().split('T')[0],
        availableTimes: ['09:00', '14:00', '19:00'],
        priceAdjustment: i < 7 ? 0 : i < 14 ? 10 : 20
      });
    }
    return dates;
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [showRouteSelector, setShowRouteSelector] = useState(true);

  return (
    <div className="book-page">
      <div className="book-page-header">
        <h1>Book Your Sustainable Cruise</h1>
        <p>Follow these simple steps to reserve your eco-friendly journey</p>
      </div>

      {showRouteSelector && (
        <div className="booking-steps">
          <div className="step-section">
            <div className="step-number">1</div>
            <h2 className="step-title">Choose Your Route</h2>
            <p className="step-description">Select from our network of sustainable routes across Northern Europe</p>
            <RouteSelector
              selectedRoute={selectedRoute}
              onRouteChange={(route) => {
                setSelectedRoute(route);
                setShowRouteSelector(false);
              }}
              routes={routes}
            />
          </div>
        </div>
      )}

      {!showRouteSelector && (
        <>
          <div className="selected-route-banner">
            <button className="change-route-btn" onClick={() => setShowRouteSelector(true)}>
              Change Route
            </button>
            <div className="route-info">
              <span className="route-icon">{selectedRoute.icon}</span>
              <div>
                <h3>{selectedRoute.name}</h3>
                <p>{selectedRoute.duration} • {selectedRoute.description}</p>
              </div>
            </div>
          </div>

          <div className="step-section">
            <div className="step-number">2</div>
            <h2 className="step-title">Select Date & Time</h2>
            <p className="step-description">Choose your preferred departure date and time</p>
            <DateSelector
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
              availableDates={getAvailableDates()}
            />
          </div>

          {selectedDate && (
            <div className="step-section">
              <div className="step-number">3</div>
              <h2 className="step-title">Customize Your Trip</h2>
              <p className="step-description">Select passengers, cabin type, and see your carbon impact</p>
              <CruiseTicketCalculator 
                route={selectedRoute}
                selectedDate={selectedDate}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BookPage;

