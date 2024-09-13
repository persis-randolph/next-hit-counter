'use client';
import { useState } from 'react';

const HitCounter = ({ hits }) => {
  const [isCensored, setIsCensored] = useState(false);

  const handleClick = () => {
    setIsCensored(!isCensored);
  };

  return (
    <p>
      You are visitor number{' '}
      <button
        className={isCensored ? 'censored' : undefined}
        onClick={handleClick}
      >
        {hits}
      </button>
      .
    </p>
  );
};

export default HitCounter;
