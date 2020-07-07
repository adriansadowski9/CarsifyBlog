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
  * {
    font-family: 'Maven Pro', sans-serif;
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
