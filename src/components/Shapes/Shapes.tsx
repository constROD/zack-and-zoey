import { NumbersWrapper } from './Shapes.styled';

import Image from 'next/image';
import React, { useState } from 'react';
// import CircleSvg from 'shared/assets/svg/shape-circle.svg';
// import HeartSvg from 'shared/assets/svg/shape-heart.svg';
// import SquareSvg from 'shared/assets/svg/shape-square.svg';
// import StarSvg from 'shared/assets/svg/shape-star.svg';
// import TriangleSvg from 'shared/assets/svg/shape-triangle.svg';

const Numbers: React.FC = () => {
  const [key, setKey] = useState(0);

  const SHAPES = [
    '/svg/shape-heart.svg',
    '/svg/shape-star.svg',
    '/svg/shape-circle.svg',
    '/svg/shape-triangle.svg',
    '/svg/shape-square.svg',
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
      <div className="item">
        <Image src={SHAPES[key]} alt="shape" width="100%" height="100%" layout="responsive" />
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
