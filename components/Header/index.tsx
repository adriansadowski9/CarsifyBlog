import * as React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Navigation from 'components/Header/styled/Navigation'
import NavList from 'components/Header/styled/NavList'
import NavListItem from 'components/Header/styled/NavListItem'
import LinkButton from 'components/Header/styled/LinkButton'
import Row from 'components/Layout/styled/Row';

interface HeaderProps {
  darkModeEnabled: boolean
  enableDarkMode: () => void
  disableDarkMode: () => void
}
const Header: React.FC<HeaderProps> = ({ darkModeEnabled, enableDarkMode, disableDarkMode }) => {
  const router = useRouter()
  return (
    <header>
      <Navigation>
        <Link href="/">
          <span>LOGO</span>
        </Link>
        <Row>
          <NavList>
            <NavListItem isActive={router.pathname === '/'}>
              <Link href="/">
                <LinkButton>Strona główna</LinkButton>
              </Link>
            </NavListItem>
            <NavListItem isActive={router.pathname.startsWith('/artykuly')}>
              <Link href="/artykuly">
                <LinkButton>Aktualności</LinkButton>
              </Link>
            </NavListItem>
            <NavListItem isActive={router.pathname.startsWith('/porady')}>
              <Link href="/porady">
                <LinkButton>Moto porady</LinkButton>
              </Link>
            </NavListItem>
            <NavListItem isActive={router.pathname.startsWith('/ogloszenia')}>
              <Link href="/ogloszenia">
                <LinkButton>Perełki z ogłoszeń</LinkButton>
              </Link>
            </NavListItem>
            <NavListItem isActive={router.pathname === '/kontakt'}>
              <Link href="/kontakt">
                <LinkButton>Kontakt</LinkButton>
              </Link>
            </NavListItem>
          </NavList>
          {darkModeEnabled ?
            <button type="button" onClick={disableDarkMode}>Jasność</button>
            :
            <button type="button" onClick={enableDarkMode}>Ciemność</button>
          }
        </Row>
      </Navigation>
    </header>
  )
}

export default Header
