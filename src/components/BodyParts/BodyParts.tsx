import { BodyPartsWrapper } from './BodyParts.styled';

import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react';

const BodyParts: React.FC = () => {
  const [key, setKey] = useState(0);

  const BODY_PARTS = [
    '/img/body-eyes.png|/img/body-eyes-blur.jpg',
    '/img/body-ear.png|/img/body-ear-blur.jpg',
    '/img/body-mouth.png|/img/body-mouth-blur.jpg',
    '/img/body-nose.png|/img/body-nose-blur.jpg',
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
          const srcUrls = bodyPart.split('|');

          return (
            <div key={bodyPartIdx} className={bodyPartClass}>
              <Image
                key={bodyPartIdx}
                src={srcUrls[0]}
                alt={`bodyPart-${bodyPartIdx}`}
                layout="fill"
                objectFit="contain"
                loading="eager"
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
