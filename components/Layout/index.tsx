import * as React from 'react';

import Header from '@components/Header';
import MainContent from '@components/Layout/styled/MainContent';
import { ArticleCategory } from '@pages/artykuly/[articleParam]';
import { TipCategory } from '@pages/porady/[tipParam]';

interface LayoutProps {
  darkModeEnabled: boolean;
  enableDarkMode: () => void;
  disableDarkMode: () => void;
  children: React.ReactNode;
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
}

const Layout: React.FC<LayoutProps> = ({
  darkModeEnabled,
  enableDarkMode,
  disableDarkMode,
  children,
  articleCategories,
  tipCategories,
}) => (
  <>
    <Header
      darkModeEnabled={darkModeEnabled}
      enableDarkMode={enableDarkMode}
      disableDarkMode={disableDarkMode}
      articleCategories={articleCategories}
      tipCategories={tipCategories}
    />
    <MainContent>{children}</MainContent>
  </>
);

export default Layout;
