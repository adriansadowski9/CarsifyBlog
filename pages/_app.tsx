import * as React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import Layout from 'components/Layout'
import { lightTheme, darkTheme } from 'utils/theme'
import "react-responsive-carousel/lib/styles/carousel.min.css"

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
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.bg};
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

const MyApp = ({ Component, pageProps }: AppProps) => {
  const darkMode = useDarkMode()
  const theme = darkMode.value ? darkTheme : lightTheme

  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const body = (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Layout darkModeEnabled={darkMode.value} enableDarkMode={darkMode.enable} disableDarkMode={darkMode.disable}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )

  if (!mounted) {
    return null
  }

  return body
}

export default MyApp
