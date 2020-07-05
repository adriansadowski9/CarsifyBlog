import React from 'react'
import Navigation from 'components/Navigation';

const Layout = ({ children }) => (
  <>
    <Navigation/>
    <main>
      {children}
    </main>
    <footer>
      Footer
    </footer>
  </>
)

export default Layout
