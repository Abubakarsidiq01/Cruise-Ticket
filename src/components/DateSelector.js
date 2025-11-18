import React, { useState } from 'react';

const DateSelector = ({ selectedDate, onDateChange, availableDates }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateSelect = (date) => {
    onDateChange(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    if (selectedDate) {
      onDateChange({ ...selectedDate, time });
    }
  };

  const getAvailableTimes = () => {
    if (!selectedDate) return [];
    return selectedDate.availableTimes || ['09:00', '14:00', '19:00'];
  };

  return (
    <div className="date-selector">
      <label className="form-label">Select Departure Date & Time</label>
      
      <div className="date-grid">
        {availableDates.map((date, idx) => (
          <button
            key={idx}
            className={`date-card ${selectedDate?.date === date.date ? 'date-card-active' : ''}`}
            onClick={() => handleDateSelect(date)}
          >
            <div className="date-day">{date.day}</div>
            <div className="date-number">{date.date}</div>
            <div className="date-month">{date.month}</div>
            {date.priceAdjustment && (
              <div className="date-badge">{date.priceAdjustment > 0 ? '+' : ''}{date.priceAdjustment}%</div>
            )}
          </button>
        ))}
      </div>

      {selectedDate && (
        <div className="time-selector">
          <label className="form-label">Select Time</label>
          <div className="time-grid">
            {getAvailableTimes().map((time, idx) => (
              <button
                key={idx}
                className={`time-button ${selectedTime === time ? 'time-button-active' : ''}`}
                onClick={() => handleTimeSelect(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DateSelector;

