// src/App.jsx
import React, { useState, useEffect } from 'react';
import TimerDisplay from './components/TimerDisplay';
import Controls from './components/Controls';
import Settings from './components/Settings';
import History from './components/History';
import './index.css';

const App = () => {
  const [time, setTime] = useState(25 * 60); // default 25 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(timer);
    }
    if (time === 0) {
      clearInterval(timer);
      const sessionType = time === workTime * 60 ? 'Work' : 'Break';
      setSessions([...sessions, `${sessionType} session completed`]);
      setTime(sessionType === 'Work' ? breakTime * 60 : workTime * 60);
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(workTime * 60);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center space-y-6">
      <TimerDisplay time={time} />
      <Controls isRunning={isRunning} onStart={handleStart} onPause={handlePause} onReset={handleReset} />
      <Settings workTime={workTime} breakTime={breakTime} setWorkTime={setWorkTime} setBreakTime={setBreakTime} />
      <History sessions={sessions} />
    </div>
  );
};

export default App;
