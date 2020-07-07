import * as React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import Layout from 'components/Layout'
import { lightTheme, darkTheme } from 'public/assets/theme'

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
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const darkMode = useDarkMode(true)
  const theme = darkMode.value ? darkTheme : lightTheme
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Layout darkModeEnabled={darkMode.value} enableDarkMode={darkMode.enable} disableDarkMode={darkMode.disable}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
