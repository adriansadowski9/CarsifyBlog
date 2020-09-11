import * as React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

import Layout from '@components/Layout';
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
  
  .carousel .control-dots .dot {
    width: 5px;
    height: 5px;
    margin: 0 5px;
    box-shadow: none;
    
    .selected {
      opacity: .35;
    }
    
    :focus {
      outline: none;
    }
  }
`;

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const darkMode = useDarkMode();
  const theme: Theme = darkMode.value ? darkTheme : lightTheme;

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout
        darkModeEnabled={darkMode.value}
        enableDarkMode={darkMode.enable}
        disableDarkMode={darkMode.disable}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );

  if (!mounted) {
    return null;
  }

  return body;
};

export default MyApp;
