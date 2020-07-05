import * as React from 'react'
import Navigation from 'components/Navigation'

interface LayoutProps {
  darkModeEnabled: boolean
  enableDarkMode: () => void
  disableDarkMode: () => void
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ darkModeEnabled, enableDarkMode, disableDarkMode, children }) => (
  <>
    <Navigation darkModeEnabled={darkModeEnabled} enableDarkMode={enableDarkMode} disableDarkMode={disableDarkMode}/>
    <main>
      {children}
    </main>
    <footer>
      Footer
    </footer>
  </>
)

export default Layout
