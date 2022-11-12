import { ColorsWrapper, ColorWrapper } from './Colors.styled';

import React, { useState } from 'react';
import { COLORS } from 'shared/constants/Colors';

const Colors: React.FC = () => {
  const [key, setKey] = useState(0);

  const handleNext = () => key < 9 && setKey(key + 1);
  const handlePrevious = () => key && setKey(key - 1);
  const handleReset = () => setKey(0);

  return (
    <ColorsWrapper>
      <div className="top-actions">
        <button className="reset" onClick={handleReset}>
          RESET
        </button>
      </div>
      <div className="placeholder">
        <ColorWrapper colorProps={COLORS[key]}>{COLORS[key].label.toUpperCase()}</ColorWrapper>
      </div>
      <div className="bot-actions">
        <button className="previous" onClick={handlePrevious}>
          PREVIOUS
        </button>
        <button className="next" onClick={handleNext}>
          NEXT
        </button>
      </div>
    </ColorsWrapper>
  );
};

export default Colors;
