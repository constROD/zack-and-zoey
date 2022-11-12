import { BodyPartsWrapper } from './BodyParts.styled';

import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react';
import { BODY_PARTS_IMAGES } from 'shared/constants/BodyParts';

const BodyParts: React.FC = () => {
  const [currentKey, setCurrentKey] = useState(0);

  const bodyPartsImagesEntries = Object.entries(BODY_PARTS_IMAGES);
  const bodyPartsImages = bodyPartsImagesEntries.map(([, values]) => values);

  const handleNext = () =>
    currentKey !== bodyPartsImages.length - 1 && setCurrentKey(currentKey + 1);
  const handlePrevious = () => currentKey && setCurrentKey(currentKey - 1);
  const handleReset = () => setCurrentKey(0);

  return (
    <BodyPartsWrapper className="relative w-full h-full">
      <div className="absolute translate-x-[-50%] left-[50%] top-[10%] z-10">
        <button
          className="py-3 px-5 border-[1px] border-black text-base cursor-pointer"
          onClick={handleReset}
        >
          RESET
        </button>
      </div>
      <div className="absolute translate-x-[-50%] left-[50%] top-[15%] text-[50px] uppercase whitespace-pre">
        {bodyPartsImages[currentKey].label}
      </div>
      <div className="relative flex items-center justify-center w-full h-full">
        {bodyPartsImages.map((bodyPartsImage, bodyPartsImagesIdx) => {
          const imageClass = classNames(
            'w-full absolute max-w-[300px]',
            bodyPartsImagesIdx === currentKey ? 'visibility' : 'invisible'
          );
          return (
            <div key={bodyPartsImagesIdx} className={imageClass}>
              <Image
                src={bodyPartsImage.url}
                alt="image"
                layout="responsive"
                width={bodyPartsImage.width}
                height={bodyPartsImage.height}
              />
            </div>
          );
        })}
      </div>
      <div className="absolute translate-x-[-50%] left-[50%] bottom-[10%] flex justify-center gap-5 z-10">
        <button
          className="py-3 px-5 border-[1px] border-black text-base cursor-pointer"
          onClick={handlePrevious}
        >
          PREVIOUS
        </button>
        <button
          className="py-3 px-5 border-[1px] border-black text-base cursor-pointer"
          onClick={handleNext}
        >
          NEXT
        </button>
      </div>
    </BodyPartsWrapper>
  );
};

export default BodyParts;
