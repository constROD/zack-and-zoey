import { AlphabetWrapper } from './Alphabet.styled';

import React, { useState } from 'react';
import { LETTERS } from 'shared/constants/Alphabet';

const Alphabet: React.FC = () => {
  const [key, setKey] = useState(0);

  const handleNext = () => setKey(key + 1);
  const handlePrevious = () => setKey(key - 1);
  const handleReset = () => setKey(0);

  return (
    <AlphabetWrapper>
      <div className="letter">{LETTERS[key].toUpperCase()}</div>
      <div className="actions">
        {key !== 0 && (
          <button className="previous" onClick={handlePrevious}>
            PREVIOUS
          </button>
        )}
        {key !== 25 && (
          <button className="next" onClick={handleNext}>
            NEXT
          </button>
        )}
        {key === 25 && (
          <button className="reset" onClick={handleReset}>
            RESET
          </button>
        )}
      </div>
    </AlphabetWrapper>
  );
};

export default Alphabet;
