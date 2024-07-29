// src/components/Settings.jsx
import React from 'react';

const Settings = ({ workTime, breakTime, setWorkTime, setBreakTime }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-white">Settings</h2>
      <div className="mt-4">
        <label className="block text-white">Work Time (minutes):</label>
        <input
          type="number"
          value={workTime}
          onChange={(e) => setWorkTime(Number(e.target.value))}
          className="mt-1 p-2 bg-gray-900 text-white border border-gray-700 rounded"
        />
        <p className="text-white mt-2">Current Value: <span className="font-bold">{workTime}</span></p>
      </div>
      <div className="mt-4">
        <label className="block text-white">Break Time (minutes):</label>
        <input
          type="number"
          value={breakTime}
          onChange={(e) => setBreakTime(Number(e.target.value))}
          className="mt-1 p-2 bg-gray-900 text-white border border-gray-700 rounded"
        />
        <p className="text-white mt-2">Current Value: <span className="font-bold">{breakTime}</span></p>
      </div>
    </div>
  );
};

export default Settings;
