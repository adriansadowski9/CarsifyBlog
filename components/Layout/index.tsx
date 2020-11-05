import * as React from 'react';
import { useRouter } from 'next/router';

import Alert from '@components/Alert';
import Header from '@components/Header';
import MainContent from '@components/Layout/styled/MainContent';
import { ArticleCategory } from '@pages/artykuly/[id]';
import { TipCategory } from '@pages/porady/[id]';

interface LayoutProps {
  children: React.ReactNode;
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
}

const Layout: React.FC<LayoutProps> = ({ children, articleCategories, tipCategories }) => {
  const {
    query: { alertType, alertHeading, alertMessage },
  } = useRouter();
  return (
    <>
      <Header articleCategories={articleCategories} tipCategories={tipCategories} />
      <MainContent>
        {alertType && alertMessage && (
          <Alert
            type={alertType === 'error' ? 'error' : 'success'}
            message={{
              heading: alertHeading ? alertHeading.toString() : undefined,
              text: alertMessage.toString(),
            }}
          />
        )}
        {children}
      </MainContent>
    </>
  );
};

export default Layout;
