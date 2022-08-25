import { BodyPartsWrapper } from './BodyParts.styled';

import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react';

const BodyParts: React.FC = () => {
  const [key, setKey] = useState(0);

  const BODY_PARTS = [
    '/img/body-eyes.png',
    '/img/body-ear.png',
    '/img/body-mouth.png',
    '/img/body-nose.png',
  ];

  const handleNext = () => key !== BODY_PARTS.length - 1 && setKey(key + 1);
  const handlePrevious = () => key && setKey(key - 1);
  const handleReset = () => setKey(0);

  return (
    <BodyPartsWrapper>
      <div className="top-actions">
        <button className="reset" onClick={handleReset}>
          RESET
        </button>
      </div>
      <div className="placeholder">
        {BODY_PARTS.map((bodyPart, bodyPartIdx) => {
          const bodyPartClass = classNames('bodyPart-img', bodyPartIdx === key && 'show');

          return (
            <div key={bodyPartIdx} className={bodyPartClass}>
              <Image
                key={bodyPartIdx}
                src={bodyPart}
                alt={`bodyPart-${bodyPartIdx}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          );
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
    </BodyPartsWrapper>
  );
};

export default BodyParts;
