import { NumbersWrapper } from './Numbers.styled';

import React, { useState } from 'react';

const Numbers: React.FC = () => {
  const [number, setNumber] = useState(0);

  const handleNext = () => setNumber(number + 1);
  const handlePrevious = () => setNumber(number - 1);
  const handleReset = () => setNumber(0);

  return (
    <NumbersWrapper>
      <div className="top-actions">
        <button className="reset" onClick={handleReset}>
          RESET
        </button>
      </div>
      <div className="number">{number}</div>
      <div className="bot-actions">
        {number !== 0 && (
          <button className="previous" onClick={handlePrevious}>
            PREVIOUS
          </button>
        )}
        {number !== 25 && (
          <button className="next" onClick={handleNext}>
            NEXT
          </button>
        )}
      </div>
    </NumbersWrapper>
  );
};

export default Numbers;
