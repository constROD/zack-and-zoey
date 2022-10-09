import { HomeWrapper } from './Home.styled';

import Link from 'next/link';
import React from 'react';
import { ROUTES } from 'shared/constants/Routes';

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <Link href={ROUTES.FAMILY}>FAMILY</Link>
      <Link href={ROUTES.ALPHABET}>ALPHABET</Link>
      <Link href={ROUTES.NUMBERS}>NUMBERS</Link>
      <Link href={ROUTES.SHAPES}>SHAPES</Link>
      <Link href={ROUTES.BODY_PARTS}>BODY PARTS</Link>
      <Link href={ROUTES.ANIMALS}>ANIMALS</Link>
    </HomeWrapper>
  );
};

export default Home;
