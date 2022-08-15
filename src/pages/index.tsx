import Home from 'components/Home/Home';
import { NextPage } from 'next';
import React from 'react';
import Layout from 'shared/components/Layout';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
