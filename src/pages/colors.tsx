import Colors from 'components/Colors/Colors';
import { NextPage } from 'next';
import React from 'react';
import PageLayout from 'shared/components/Layouts/PageLayout';

const ColorsPage: NextPage = () => {
  return (
    <PageLayout>
      <Colors />
    </PageLayout>
  );
};

export default ColorsPage;
