import React from 'react';
import '../TimeDisplay.css';

function TimeDisplay({ currentTime }) {
  return (
    <div className="time-circle">
      <p className="time">{currentTime}</p>
    </div>
  );
}

export default TimeDisplay;
