import React, { useState } from 'react';
import TripDetails from './TripDetails';
import TripResults from './TripResults';

const CruiseTicketCalculator = ({ route, selectedDate }) => {
  const [passengers, setPassengers] = useState(2);
  const [ticketType, setTicketType] = useState('sustainable');
  const [cabinType, setCabinType] = useState('standard');
  
  // Base emission factors (kg CO2e per passenger)
  const baseEmissions = {
    standard: {
      conventional: 84.5,
      sustainable: 25.3
    },
    premium: {
      conventional: 102.8,
      sustainable: 30.8
    },
    deluxe: {
      conventional: 125.2,
      sustainable: 37.5
    }
  };
  
  // Base ticket prices (EUR)
  const baseTicketPrice = {
    standard: {
      conventional: 89,
      sustainable: 107
    },
    premium: {
      conventional: 149,
      sustainable: 179
    },
    deluxe: {
      conventional: 229,
      sustainable: 275
    }
  };

  // Calculate emissions and prices
  const conventionalEmissions = baseEmissions[cabinType].conventional * passengers;
  const sustainableEmissions = baseEmissions[cabinType].sustainable * passengers;
  const emissionsSaved = conventionalEmissions - sustainableEmissions;
  const conventionalPrice = baseTicketPrice[cabinType].conventional * passengers;
  const sustainablePrice = baseTicketPrice[cabinType].sustainable * passengers;
  const priceDifference = sustainablePrice - conventionalPrice;
  
  // Equivalent impacts
  const carKilometers = Math.round(emissionsSaved * 5.5);
  const treeDays = Math.round(emissionsSaved * 1.8); 
  
  // Selected price and emissions
  const selectedPrice = ticketType === 'conventional' 
    ? conventionalPrice 
    : sustainablePrice;
  const selectedEmissions = ticketType === 'conventional' 
    ? conventionalEmissions 
    : sustainableEmissions;

  const calculationData = {
    passengers,
    ticketType,
    cabinType,
    conventionalEmissions,
    sustainableEmissions,
    emissionsSaved,
    conventionalPrice,
    sustainablePrice,
    priceDifference,
    carKilometers,
    treeDays,
    selectedPrice,
    selectedEmissions,
    baseTicketPrice
  };

  // Apply date-based price adjustment
  const dateMultiplier = selectedDate?.priceAdjustment ? (1 + selectedDate.priceAdjustment / 100) : 1;
  const adjustedConventionalPrice = Math.round(conventionalPrice * dateMultiplier);
  const adjustedSustainablePrice = Math.round(sustainablePrice * dateMultiplier);
  const adjustedSelectedPrice = ticketType === 'conventional' 
    ? adjustedConventionalPrice 
    : adjustedSustainablePrice;

  const finalCalculationData = {
    ...calculationData,
    conventionalPrice: adjustedConventionalPrice,
    sustainablePrice: adjustedSustainablePrice,
    selectedPrice: adjustedSelectedPrice,
    route: route || { name: 'Helsinki ↔ Stockholm' },
    selectedDate: selectedDate
  };

  return (
    <div className="calculator-container">
      <div className="calculator-inner">
        <h1 className="calculator-title">
          {route ? `${route.name} Cruise` : 'Cruise Calculator'}
        </h1>
        
        {selectedDate && (
          <div className="selected-date-info">
            <p>Departure: {selectedDate.day}, {selectedDate.date} {selectedDate.month} at {selectedDate.time || 'TBD'}</p>
          </div>
        )}
        
        <div className="info-box">
          <p className="info-text">Our sustainable cruises use advanced biofuel blends that reduce carbon emissions by up to 70% compared to conventional marine diesel. Each sustainable ticket directly funds our transition to cleaner fuels.</p>
        </div>
        
        <div className="main-grid">
          <TripDetails 
            passengers={passengers}
            setPassengers={setPassengers}
            ticketType={ticketType}
            setTicketType={setTicketType}
            cabinType={cabinType}
            setCabinType={setCabinType}
            baseTicketPrice={baseTicketPrice}
          />
          
          <TripResults 
            data={finalCalculationData}
          />
        </div>
      </div>
    </div>
  );
};

export default CruiseTicketCalculator;