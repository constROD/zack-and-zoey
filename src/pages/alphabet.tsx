import Alphabet from 'components/Alphabet/Alphabet';
import { NextPage } from 'next';
import React from 'react';
import Layout from 'shared/components/Layout';

const AlphabetPage: NextPage = () => {
  return (
    <Layout>
      <Alphabet />
    </Layout>
  );
};

export default AlphabetPage;
