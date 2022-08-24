import Shapes from 'components/Shapes/Shapes';
import { NextPage } from 'next';
import React from 'react';
import Layout from 'shared/components/Layout';

const ShapesPage: NextPage = () => {
  return (
    <Layout>
      <Shapes />
    </Layout>
  );
};

export default ShapesPage;
