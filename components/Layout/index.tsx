import * as React from 'react';
import CookieConsent from 'react-cookie-consent';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';

import Alert from '@components/Alert';
import Header from '@components/Header';
import MainContent from '@components/Layout/styled/MainContent';
import { ArticleCategory } from '@pages/artykuly/[id]';
import { TipCategory } from '@pages/porady/[id]';
import { Theme } from '@utils/theme';

interface LayoutProps {
  children: React.ReactNode;
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
}

const Layout: React.FC<LayoutProps> = ({ children, articleCategories, tipCategories }) => {
  const themeContext: Theme = React.useContext(ThemeContext);
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
        <CookieConsent
          location="bottom"
          buttonText="Rozumiem"
          cookieName="cookie-consent"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            background: themeContext.colors.cookieConsentBg,
            color: themeContext.colors.cookieConsentText,
            fontSize: themeContext.fontSizes.m,
            paddingTop: themeContext.spaces.xs,
          }}
          contentStyle={{
            marginTop: 0,
          }}
          buttonStyle={{
            background: themeContext.colors.cookieConsentButtonBg,
            color: themeContext.colors.cookieConsentButtonText,
            fontSize: themeContext.fontSizes.m,
            fontWeight: themeContext.fontWeights.medium,
            padding: `${themeContext.spaces.xxs} ${themeContext.spaces.m}`,
            marginTop: 0,
          }}
          expires={150}
        >
          Strona wykorzystuje do poprawnego działania pliki cookies. Możesz określić warunki
          przechowywania lub dostępu do plików cookies w Twojej przeglądarce.
        </CookieConsent>
      </MainContent>
    </>
  );
};

export default Layout;
