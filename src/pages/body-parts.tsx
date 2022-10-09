import BodyParts from 'components/BodyParts/BodyParts';
import { NextPage } from 'next';
import React from 'react';
import PageLayout from 'shared/components/Layouts/PageLayout';

const BodyPartsPage: NextPage = () => {
  return (
    <PageLayout>
      <BodyParts />
    </PageLayout>
  );
};

export default BodyPartsPage;
