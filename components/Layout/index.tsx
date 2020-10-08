import * as React from 'react';

import Header from '@components/Header';
import MainContent from '@components/Layout/styled/MainContent';
import { ArticleCategory } from '@pages/artykuly/[articleParam]';
import { TipCategory } from '@pages/porady/[tipParam]';

interface LayoutProps {
  children: React.ReactNode;
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
}

const Layout: React.FC<LayoutProps> = ({ children, articleCategories, tipCategories }) => (
  <>
    <Header articleCategories={articleCategories} tipCategories={tipCategories} />
    <MainContent>{children}</MainContent>
  </>
);

export default Layout;
