import * as React from 'react'
import { useRouter } from 'next/router'
import { ThemeContext } from 'styled-components'
import Link from 'next/link'
import Navigation from 'components/Header/styled/Navigation'
import Menu from 'components/Header/styled/Menu'
import NavList from 'components/Header/styled/NavList'
import NavListItem from 'components/Header/styled/NavListItem'
import LinkButton from 'components/Header/styled/LinkButton'
import Hamburger from 'components/Header/styled/Hamburger'
import HamburgerContainer from 'components/Header/styled/HamburgerContainer'
import LogoWrapper from 'components/Header/styled/LogoWrapper'
import Logo from 'assets/icons/Logo'

interface HeaderProps {
  darkModeEnabled: boolean
  enableDarkMode: () => void
  disableDarkMode: () => void
}
const Header: React.FC<HeaderProps> = ({ darkModeEnabled, enableDarkMode, disableDarkMode }) => {
  const router = useRouter()
  const [isMobileMenuOpened, setIsMobileMenuOpened] = React.useState(false)
  return (
    <header>
      <Navigation>
        <Link href="/">
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </Link>
        <Menu isOpen={isMobileMenuOpened}>
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
                <LinkButton>Ogłoszenia</LinkButton>
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
        </Menu>
        <HamburgerContainer onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}>
          <Hamburger isMenuOpened={isMobileMenuOpened}/>
        </HamburgerContainer>
      </Navigation>
    </header>
  )
}

export default Header
