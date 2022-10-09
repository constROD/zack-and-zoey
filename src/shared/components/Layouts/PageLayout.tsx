import { PageLayoutWrapper } from './PageLayout.styled';

import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { ROUTES } from 'shared/constants/Routes';

const PageLayout: React.FC<{ children: any }> = ({ children }) => {
  const router = useRouter();

  return (
    <PageLayoutWrapper className="h-full w-full relative">
      {router.pathname !== ROUTES.HOME && (
        <Link href={ROUTES.HOME}>
          <a className="absolute top-3 left-3 py-3 px-5 border-2 border-black text-base cursor-pointer z-10">
            BACK
          </a>
        </Link>
      )}
      <div className="h-full w-full px-5">{children}</div>
    </PageLayoutWrapper>
  );
};

export default PageLayout;
