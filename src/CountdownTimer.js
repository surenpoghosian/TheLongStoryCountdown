import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [countdown, setCountdown] = useState({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date('2023-10-13T19:30:00').getTime(); // Replace with your target date and time

  useEffect(() => {
    function calculateCountdown() {
      const currentDate = new Date().getTime();
      const timeRemaining = targetDate - currentDate;

      if (timeRemaining <= 0) {
        clearInterval(interval);
        setCountdown({ weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
        );
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setCountdown({ weeks, days, hours, minutes, seconds });
      }
    }

    // Calculate the countdown initially
    calculateCountdown();

    // Update the countdown every second
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-timer">
      <div>
        <span>{countdown.weeks}</span> weeks
      </div>
      <div>
        <span>{countdown.days}</span> days
      </div>
      <div>
        <span>{countdown.hours}</span> hours
      </div>
      <div>
        <span>{countdown.minutes}</span> minutes
      </div>
      <div>
        <span>{countdown.seconds}</span> seconds
      </div>
    </div>
  );
}

export default CountdownTimer;
