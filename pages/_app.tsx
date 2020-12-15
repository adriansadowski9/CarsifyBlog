import * as gtag from '../utils/gtag';

import * as React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import { DarkModeContext } from 'contexts/darkModeContext';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

import { darkTheme, lightTheme, Theme } from '@utils/theme';
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
      src: url('/assets/fonts/MavenPro-Regular.ttf');
      src: url('/static/fonts/MavenPro-Medium.ttf');
      src: url('/static/fonts/MavenPro-Bold.ttf');
  }

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Maven Pro', sans-serif;
  }
  
  body {
    padding: 0;
    margin: 0;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.bg}; 
  }
  
  
`;

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const darkMode = useDarkMode(false);
  const theme: Theme = darkMode.value ? darkTheme : lightTheme;
  const [mounted, setMounted] = React.useState(false);

  if (process.env.NODE_ENV === 'production') {
    React.useEffect(() => {
      const handleRouteChange = (url: URL) => {
        gtag.pageview(url);
      };
      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }, [router.events]);
  }

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const getBody = (usedTheme: Theme) => (
    <ThemeProvider theme={usedTheme}>
      <GlobalStyle />
      <DarkModeContext.Provider value={darkMode}>
        <Component {...pageProps} />
      </DarkModeContext.Provider>
    </ThemeProvider>
  );

  if (!mounted) {
    return getBody(lightTheme);
  }

  return getBody(theme);
};

export default MyApp;
