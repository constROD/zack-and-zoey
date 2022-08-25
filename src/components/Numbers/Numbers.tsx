import { NumbersWrapper } from './Numbers.styled';

import React, { useState } from 'react';

const Numbers: React.FC = () => {
  const [number, setNumber] = useState(0);

  const handleNext = () => setNumber(number + 1);
  const handlePrevious = () => number && setNumber(number - 1);
  const handleReset = () => setNumber(0);

  return (
    <NumbersWrapper>
      <div className="top-actions">
        <button className="reset" onClick={handleReset}>
          RESET
        </button>
      </div>
      <div className="placeholder">{number}</div>
      <div className="bot-actions">
        <button className="previous" onClick={handlePrevious}>
          PREVIOUS
        </button>
        <button className="next" onClick={handleNext}>
          NEXT
        </button>
      </div>
    </NumbersWrapper>
  );
};

export default Numbers;
