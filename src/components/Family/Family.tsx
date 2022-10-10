import { FamilyWrapper } from './Family.styled';

import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react';
import { FAMILY_IMAGES } from 'shared/constants/Family';

const Family: React.FC = () => {
  const [currentKey, setCurrentKey] = useState(0);

  const familyImagesEntries = Object.entries(FAMILY_IMAGES);
  const familyImages = familyImagesEntries.map(([, values]) => values);

  const handleNext = () => currentKey !== familyImages.length - 1 && setCurrentKey(currentKey + 1);
  const handlePrevious = () => currentKey && setCurrentKey(currentKey - 1);
  const handleReset = () => setCurrentKey(0);

  return (
    <FamilyWrapper className="relative w-full h-full">
      <div className="absolute translate-x-[-50%] left-[50%] top-[10%] z-10">
        <button
          className="px-5 py-3 text-base border-2 border-black cursor-pointer"
          onClick={handleReset}
        >
          RESET
        </button>
      </div>
      <div className="absolute translate-x-[-50%] left-[50%] top-[15%] text-[50px] uppercase whitespace-pre">
        {familyImages[currentKey].label}
      </div>
      <div className="relative flex items-center justify-center w-full h-full">
        {familyImages.map((familyImage, familyImagesIdx) => {
          const imageClass = classNames(
            'w-full absolute max-w-[300px]',
            familyImagesIdx === currentKey ? 'visibility' : 'invisible'
          );
          return (
            <div key={familyImagesIdx} className={imageClass}>
              <Image
                src={familyImage.url}
                alt="image"
                layout="responsive"
                width={familyImage.width}
                height={familyImage.height}
              />
            </div>
          );
        })}
      </div>
      <div className="absolute translate-x-[-50%] left-[50%] bottom-[10%] flex justify-center gap-5 z-10">
        <button
          className="px-5 py-3 text-base border-2 border-black cursor-pointer"
          onClick={handlePrevious}
        >
          PREVIOUS
        </button>
        <button
          className="px-5 py-3 text-base border-2 border-black cursor-pointer"
          onClick={handleNext}
        >
          NEXT
        </button>
      </div>
    </FamilyWrapper>
  );
};

export default Family;
