import * as React from 'react'
import styled from 'styled-components'
import Header from 'components/Header'

const MainContent = styled.main`
  padding: 0 ${props => props.theme.spaces.s};
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    padding: 0 ${props => props.theme.xxs};
    flex-direction: row;
  }
  
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    padding: 0 ${props => props.theme.xxs};
    max-width: ${props => props.theme.breakpoints[1]};
    flex-direction: row;
    align-self: center;
  }
`

interface LayoutProps {
  darkModeEnabled: boolean
  enableDarkMode: () => void
  disableDarkMode: () => void
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ darkModeEnabled, enableDarkMode, disableDarkMode, children }) => (
  <>
    <Header darkModeEnabled={darkModeEnabled} enableDarkMode={enableDarkMode} disableDarkMode={disableDarkMode} />
    <MainContent>
      {children}
    </MainContent>
    <footer>
      Footer
    </footer>
  </>
)

export default Layout
