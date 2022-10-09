import Family from 'components/Family/Family';
import { NextPage } from 'next';
import React from 'react';
import PageLayout from 'shared/components/Layouts/PageLayout';

const FamilyPage: NextPage = () => {
  return (
    <PageLayout>
      <Family />
    </PageLayout>
  );
};

export default FamilyPage;
