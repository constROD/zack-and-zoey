import BodyParts from 'components/BodyParts/BodyParts';
import { NextPage } from 'next';
import React from 'react';
import Layout from 'shared/components/Layout';

const BodyPartsPage: NextPage = () => {
  return (
    <Layout>
      <BodyParts />
    </Layout>
  );
};

export default BodyPartsPage;
