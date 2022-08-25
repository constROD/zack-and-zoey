import { BodyPartImageWrapper } from './BodyPartImage.styled';

import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

interface Props {
  className: string;
  url: string;
  index: number;
}

const BodyPartImage: React.FC<Props> = ({ className, url, index }) => {
  const bodyPartClass = classNames('bodyPart-img', className);

  return (
    <BodyPartImageWrapper className={bodyPartClass}>
      <Image
        src={url}
        alt={`bodyPart-${index}`}
        layout="fill"
        objectFit="contain"
        loading="eager"
      />
    </BodyPartImageWrapper>
  );
};

export default BodyPartImage;
