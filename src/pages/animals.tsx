import Animals from 'components/Animals/Animals';
import { NextPage } from 'next';
import React from 'react';
import PageLayout from 'shared/components/Layouts/PageLayout';

const AnimalsPage: NextPage = () => {
  return (
    <PageLayout>
      <Animals />
    </PageLayout>
  );
};

export default AnimalsPage;
