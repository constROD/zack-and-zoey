import { HomeWrapper } from './Home.styled';

import Link from 'next/link';
import React from 'react';
import { ROUTES } from 'shared/constants/Routes';

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <Link href={ROUTES.ALPHABET}>ALPHABET</Link>
      <Link href={ROUTES.NUMBERS}>NUMBERS</Link>
      <Link href={ROUTES.PARTS_OF_THE_BODY}>PARTS OF THE BODY</Link>
    </HomeWrapper>
  );
};

export default Home;
