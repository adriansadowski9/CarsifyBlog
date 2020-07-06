import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import Layout from 'components/Layout'
import { lightTheme, darkTheme } from 'public/assets/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const darkMode = useDarkMode(true)
  const theme = darkMode.value ? darkTheme : lightTheme
  return (
    <ThemeProvider theme={theme}>
      <Layout darkModeEnabled={darkMode.value} enableDarkMode={darkMode.enable} disableDarkMode={darkMode.disable}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
