// src/components/Controls.jsx
import React from 'react';

const Controls = ({ isRunning, onStart, onPause, onReset }) => {
  return (
    <div className="flex space-x-4">
      {isRunning ? (
        <button onClick={onPause} className="bg-red-500 text-white px-4 py-2 rounded">Pause</button>
      ) : (
        <button onClick={onStart} className="bg-green-500 text-white px-4 py-2 rounded">Start</button>
      )}
      <button onClick={onReset} className="bg-yellow-500 text-white px-4 py-2 rounded">Reset</button>
    </div>
  );
};

export default Controls;
