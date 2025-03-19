import React from 'react';
import CruiseTicketCalculator from './components/CruiseTicketCalculator';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Eco-Friendly Cruise Booking</h1>
      </header>
      <main>
        <CruiseTicketCalculator />
      </main>
      <footer className="app-footer">
        <p>© 2025 Eco Cruise Lines - Making travel sustainable</p>
      </footer>
    </div>
  );
}

export default App;