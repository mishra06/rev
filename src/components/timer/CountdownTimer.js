import React, { useState, useEffect, useRef } from 'react';

function CountdownTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    setTimer(hours * 3600 + minutes * 60 + seconds);
  };

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    startTimer();
  };

  useEffect(() => {
    if (timer === 0) {
      return;
    }

    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [timer]);

  return (
    <div>
      <h2>Countdown Timer</h2>
      <div>
       
         
          <input
            type="number"
            min="0"
            value={hours}
            onChange={(e) => setHours(parseInt(e.target.value))}
          />
        
        
          <input
            type="number"
            min="0"
            max="59"
            value={minutes}
            onChange={(e) => setMinutes(parseInt(e.target.value))}
          />
        
        
          <input
            type="number"
            min="0"
            max="59"
            value={seconds}
            onChange={(e) => setSeconds(parseInt(e.target.value))}
          />
       
        <button onClick={startTimer}>Start</button>
        <button onClick={clearTimer}>Clear</button>
      </div>
      <p>
        {Math.floor(timer / 3600)
          .toString()
          .padStart(2, '0')}:
        {Math.floor((timer % 3600) / 60)
          .toString()
          .padStart(2, '0')}:
        {(timer % 60)
          .toString()
          .padStart(2, '0')}
      </p>
    </div>
  );
}

export default CountdownTimer;