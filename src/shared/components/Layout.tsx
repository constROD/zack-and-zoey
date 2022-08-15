import { LayoutWrapper } from './Layout.styled';

import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { ROUTES } from 'shared/constants/Routes';

const Layout: React.FC<{ children: any }> = ({ children }) => {
  const router = useRouter();

  return (
    <LayoutWrapper>
      {router.pathname !== ROUTES.HOME && (
        <Link href={ROUTES.HOME}>
          <a className="back">BACK</a>
        </Link>
      )}
      <div className="content-main">{children}</div>
    </LayoutWrapper>
  );
};

export default Layout;
