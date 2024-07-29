// src/components/History.jsx
import React from 'react';

const History = ({ sessions }) => {
  return (
    <div>
      <h2 className="text-xl font-bold">History</h2>
      <ul className="space-y-2 mt-4">
        {sessions.map((session, index) => (
          <li key={index} className="border-b py-2">{session}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
