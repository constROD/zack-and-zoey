import { PageLayoutWrapper } from './PageLayout.styled';

import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { ROUTES } from 'shared/constants/Routes';

const PageLayout: React.FC<{ children: any }> = ({ children }) => {
  const router = useRouter();

  return (
    <PageLayoutWrapper className="relative w-full h-full">
      {router.pathname !== ROUTES.HOME && (
        <Link href={ROUTES.HOME}>
          <a className="absolute z-10 px-5 py-3 text-base cursor-pointer border-[1px] border-black top-3 left-3">
            BACK
          </a>
        </Link>
      )}
      <div className="w-full h-full px-5">{children}</div>
    </PageLayoutWrapper>
  );
};

export default PageLayout;
