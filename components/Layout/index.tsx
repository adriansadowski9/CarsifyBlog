import * as React from 'react';

import Header from '@components/Header';
import MainContent from '@components/Layout/styled/MainContent';

interface LayoutProps {
  darkModeEnabled: boolean;
  enableDarkMode: () => void;
  disableDarkMode: () => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  darkModeEnabled,
  enableDarkMode,
  disableDarkMode,
  children,
}) => (
  <>
    <Header
      darkModeEnabled={darkModeEnabled}
      enableDarkMode={enableDarkMode}
      disableDarkMode={disableDarkMode}
    />
    <MainContent>{children}</MainContent>
  </>
);

export default Layout;
