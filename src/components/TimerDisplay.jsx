// src/components/TimerDisplay.jsx
import React from 'react';

const TimerDisplay = ({ time }) => {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  return (
    <div className="text-6xl font-bold">
      {minutes}:{seconds}
    </div>
  );
};

export default TimerDisplay;
