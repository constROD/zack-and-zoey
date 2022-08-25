import { ShapeImageWrapper } from './ShapeImage.styled';

import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

interface Props {
  className: string;
  url: string;
  index: number;
}

const ShapeImage: React.FC<Props> = ({ className, url, index }) => {
  const shapeClass = classNames('shape-img', className);

  return (
    <ShapeImageWrapper className={shapeClass}>
      <Image
        src={url}
        alt={`shape-${index}`}
        height={350}
        width={350}
        layout="responsive"
        loading="eager"
      />
    </ShapeImageWrapper>
  );
};

export default ShapeImage;
