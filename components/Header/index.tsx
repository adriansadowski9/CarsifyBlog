import * as React from 'react'
import Link from 'next/link'

interface HeaderProps {
  darkModeEnabled: boolean
  enableDarkMode: () => void
  disableDarkMode: () => void
}
const Header: React.FC<HeaderProps> = ({ darkModeEnabled, enableDarkMode, disableDarkMode }) => (
  <header>
    <nav>
      <Link href="/">
        <span>LOGO</span>
      </Link>
      <ul>
        <li>
          <Link href="/">
            <a>Strona główna</a>
          </Link>
        </li>
        <li>
          <Link href="/artykuly">
            <a>Aktualności</a>
          </Link>
        </li>
        <li>
          <Link href="/porady">
            <a>Moto porady</a>
          </Link>
        </li>
        <li>
          <Link href="/ogloszenia">
            <a>Perełki z ogłoszeń</a>
          </Link>
        </li>
        <li>
          <Link href="/kontakt">
            <a>Kontakt</a>
          </Link>
        </li>
      </ul>
    </nav>
    {darkModeEnabled ?
      <button type="button" onClick={disableDarkMode}>Turn on light theme</button>
      :
      <button type="button" onClick={enableDarkMode}>Turn on dark theme</button>
    }
  </header>
)

export default Header
