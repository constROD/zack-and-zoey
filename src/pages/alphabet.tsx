import Alphabet from 'components/Alphabet/Alphabet';
import { NextPage } from 'next';
import React from 'react';
import PageLayout from 'shared/components/Layouts/PageLayout';

const AlphabetPage: NextPage = () => {
  return (
    <PageLayout>
      <Alphabet />
    </PageLayout>
  );
};

export default AlphabetPage;
