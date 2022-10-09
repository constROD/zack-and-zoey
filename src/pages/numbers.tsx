import Numbers from 'components/Numbers/Numbers';
import { NextPage } from 'next';
import React from 'react';
import PageLayout from 'shared/components/Layouts/PageLayout';

const NumbersPage: NextPage = () => {
  return (
    <PageLayout>
      <Numbers />
    </PageLayout>
  );
};

export default NumbersPage;
