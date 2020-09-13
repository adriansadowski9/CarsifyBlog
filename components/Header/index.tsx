import Logo from '../../assets/icons/logo.svg';
import Moon from '../../assets/icons/moon.svg';
import Sun from '../../assets/icons/sun.svg';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';

import DarkModeButton from '@components/Header/styled/DarkModeButton';
import Hamburger from '@components/Header/styled/Hamburger';
import HamburgerContainer from '@components/Header/styled/HamburgerContainer';
import LinkButton from '@components/Header/styled/LinkButton';
import LogoIconWrapper from '@components/Header/styled/LogoIconWrapper';
import LogoText from '@components/Header/styled/LogoText';
import LogoWrapper from '@components/Header/styled/LogoWrapper';
import Menu from '@components/Header/styled/Menu';
import Navigation from '@components/Header/styled/Navigation';
import NavList from '@components/Header/styled/NavList';
import NavListItem from '@components/Header/styled/NavListItem';
import { Theme } from '@utils/theme';

interface HeaderProps {
  darkModeEnabled: boolean;
  enableDarkMode: () => void;
  disableDarkMode: () => void;
}
const Header: React.FC<HeaderProps> = ({ darkModeEnabled, enableDarkMode, disableDarkMode }) => {
  const router = useRouter();
  const themeContext: Theme = React.useContext(ThemeContext);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = React.useState(false);
  return (
    <header>
      <Navigation>
        <Link href="/" passHref>
          <LogoWrapper>
            <LogoText>Carsify</LogoText>
            <LogoIconWrapper>
              <Logo />
            </LogoIconWrapper>
          </LogoWrapper>
        </Link>
        <Menu isOpen={isMobileMenuOpened}>
          <NavList>
            <NavListItem isActive={router.pathname === '/'}>
              <Link href="/" passHref>
                <LinkButton>Strona główna</LinkButton>
              </Link>
            </NavListItem>
            <NavListItem isActive={router.pathname.startsWith('/artykuly')}>
              <Link href="/artykuly" passHref>
                <LinkButton>Aktualności</LinkButton>
              </Link>
            </NavListItem>
            <NavListItem isActive={router.pathname.startsWith('/porady')}>
              <Link href="/porady" passHref>
                <LinkButton>Moto porady</LinkButton>
              </Link>
            </NavListItem>
            <NavListItem isActive={router.pathname.startsWith('/ogloszenia')}>
              <Link href="/ogloszenia" passHref>
                <LinkButton>Ogłoszenia</LinkButton>
              </Link>
            </NavListItem>
            <NavListItem isActive={router.pathname === '/kontakt'}>
              <Link href="/kontakt" passHref>
                <LinkButton>Kontakt</LinkButton>
              </Link>
            </NavListItem>
          </NavList>
          {darkModeEnabled ? (
            <DarkModeButton type="button" onClick={disableDarkMode}>
              <Sun fill={themeContext.colors.text} />
            </DarkModeButton>
          ) : (
            <DarkModeButton type="button" onClick={enableDarkMode}>
              <Moon fill={themeContext.colors.text} />
            </DarkModeButton>
          )}
        </Menu>
        <HamburgerContainer onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}>
          <Hamburger isMenuOpened={isMobileMenuOpened} />
        </HamburgerContainer>
      </Navigation>
    </header>
  );
};

export default Header;
