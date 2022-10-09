import { AnimalsWrapper } from './Animals.styled';

import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react';
import { ANIMALS_IMAGES } from 'shared/constants/Animals';

const Animals: React.FC = () => {
  const [currentKey, setCurrentKey] = useState(0);

  const animalsImagesEntries = Object.entries(ANIMALS_IMAGES);
  const animalsImages = animalsImagesEntries.map(([, values]) => values);

  const handleNext = () => currentKey !== animalsImages.length - 1 && setCurrentKey(currentKey + 1);
  const handlePrevious = () => currentKey && setCurrentKey(currentKey - 1);
  const handleReset = () => setCurrentKey(0);

  return (
    <AnimalsWrapper className="h-full w-full relative">
      <div className="absolute translate-x-[-50%] left-[50%] top-[10%] z-10">
        <button
          className="py-3 px-5 border-2 border-black text-base cursor-pointer"
          onClick={handleReset}
        >
          RESET
        </button>
      </div>
      <div className="absolute translate-x-[-50%] left-[50%] top-[15%] text-[50px] uppercase whitespace-pre">
        {animalsImages[currentKey].label}
      </div>
      <div className="h-full w-full relative flex justify-center items-center">
        {animalsImages.map((animalsImage, animalsImagesIdx) => {
          const imageClass = classNames(
            'w-full absolute max-w-[300px]',
            animalsImagesIdx === currentKey ? 'visibility' : 'invisible'
          );
          return (
            <div key={animalsImagesIdx} className={imageClass}>
              <Image
                src={animalsImage.url}
                alt="image"
                layout="responsive"
                width={animalsImage.width}
                height={animalsImage.height}
              />
            </div>
          );
        })}
      </div>
      <div className="absolute translate-x-[-50%] left-[50%] bottom-[10%] flex justify-center gap-5 z-10">
        <button
          className="py-3 px-5 border-2 border-black text-base cursor-pointer"
          onClick={handlePrevious}
        >
          PREVIOUS
        </button>
        <button
          className="py-3 px-5 border-2 border-black text-base cursor-pointer"
          onClick={handleNext}
        >
          NEXT
        </button>
      </div>
    </AnimalsWrapper>
  );
};

export default Animals;
