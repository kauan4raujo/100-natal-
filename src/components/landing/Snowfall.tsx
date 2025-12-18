"use client";

import { useEffect, useState } from 'react';

type Snowflake = {
  id: number;
  style: React.CSSProperties;
};

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const snowflakeCount = 60;
    const createSnowflakes = () => {
      // Ensure this runs only in the browser
      if (typeof window === 'undefined') return;

      const newSnowflakes: Snowflake[] = [];
      for (let i = 0; i < snowflakeCount; i++) {
        const size = Math.random() * 4 + 2;
        const style: React.CSSProperties = {
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 10 + 5}s`,
          animationDelay: `${Math.random() * 10}s`,
          opacity: Math.random() * 0.7 + 0.3,
        };
        newSnowflakes.push({ id: i, style });
      }
      setSnowflakes(newSnowflakes);
    };

    createSnowflakes();
    
  }, []);

  return (
    <>
      {snowflakes.map((flake) => (
        <div key={flake.id} className="snowflake" style={flake.style} />
      ))}
    </>
  );
};

export default Snowfall;
