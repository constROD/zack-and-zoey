import ShapeImage from './ShapeImage';
import { NumbersWrapper } from './Shapes.styled';

import classNames from 'classnames';
import React, { useState } from 'react';

const Numbers: React.FC = () => {
  const [key, setKey] = useState(0);

  const SHAPES = [
    '/svg/Shapes/shape-heart.svg',
    '/svg/Shapes/shape-star.svg',
    '/svg/Shapes/shape-circle.svg',
    '/svg/Shapes/shape-triangle.svg',
    '/svg/Shapes/shape-square.svg',
  ];

  const handleNext = () => key !== SHAPES.length - 1 && setKey(key + 1);
  const handlePrevious = () => key && setKey(key - 1);
  const handleReset = () => setKey(0);

  return (
    <NumbersWrapper>
      <div className="top-actions">
        <button className="reset" onClick={handleReset}>
          RESET
        </button>
      </div>
      <div className="placeholder">
        {SHAPES.map((shape, shapeIdx) => {
          const shapeClass = classNames(shapeIdx === key && 'show');
          return <ShapeImage key={shapeIdx} index={shapeIdx} className={shapeClass} url={shape} />;
        })}
      </div>
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
