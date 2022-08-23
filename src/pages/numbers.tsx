import Numbers from 'components/Numbers/Numbers';
import { NextPage } from 'next';
import React from 'react';
import Layout from 'shared/components/Layout';

const NumbersPage: NextPage = () => {
  return (
    <Layout>
      <Numbers />
    </Layout>
  );
};

export default NumbersPage;
