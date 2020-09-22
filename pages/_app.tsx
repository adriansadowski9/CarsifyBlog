import { ArticleCategory } from './artykuly/[articleParam]';
import { TipCategory } from './porady/[tipParam]';

import * as React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import withDarkMode from 'next-dark-mode';
import { useDarkMode } from 'next-dark-mode';
import App, { AppContext, AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Layout from '@components/Layout';
import { getArticleCategories } from '@utils/getCategories';
import { getTipCategories } from '@utils/getCategories';
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
interface MyAppProps extends AppProps {
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
}

const MyApp: ThemeProvider<MyAppProps> = ({
  Component,
  pageProps,
  articleCategories,
  tipCategories,
}) => {
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode();
  const theme: Theme = darkModeActive ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout
        darkModeEnabled={darkModeActive}
        enableDarkMode={switchToDarkMode}
        disableDarkMode={switchToLightMode}
        articleCategories={articleCategories}
        tipCategories={tipCategories}
      >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const articleCategories = await getArticleCategories();
  const tipCategories = await getTipCategories();
  return { ...appProps, articleCategories, tipCategories };
};
export default withDarkMode(MyApp);
