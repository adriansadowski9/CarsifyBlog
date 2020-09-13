import ChevronWrapper from './styled/ChevronWrapper';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';

import ChevronDown from '@assets/icons/chevronDown.svg';
import Logo from '@assets/icons/logo.svg';
import Moon from '@assets/icons/moon.svg';
import Sun from '@assets/icons/sun.svg';
import Dropdown from '@components/Dropdown';
import DarkModeButton from '@components/Header/styled/DarkModeButton';
import Hamburger from '@components/Header/styled/Hamburger';
import HamburgerContainer from '@components/Header/styled/HamburgerContainer';
import LinkButton from '@components/Header/styled/LinkButton';
import LogoIconWrapper from '@components/Header/styled/LogoIconWrapper';
import LogoText from '@components/Header/styled/LogoText';
import LogoWrapper from '@components/Header/styled/LogoWrapper';
import Menu from '@components/Header/styled/Menu';
import Navigation from '@components/Header/styled/Navigation';
import NavItemChevronContainer from '@components/Header/styled/NavItemChevronContainer';
import NavList from '@components/Header/styled/NavList';
import NavListItem from '@components/Header/styled/NavListItem';
import { ArticleCategory } from '@pages/artykuly/[articleParam]';
import { TipCategory } from '@pages/porady/[tipParam]';
import { Theme } from '@utils/theme';

interface HeaderProps {
  darkModeEnabled: boolean;
  enableDarkMode: () => void;
  disableDarkMode: () => void;
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
}
const Header: React.FC<HeaderProps> = ({
  darkModeEnabled,
  enableDarkMode,
  disableDarkMode,
  articleCategories,
  tipCategories,
}) => {
  const router = useRouter();
  const themeContext: Theme = React.useContext(ThemeContext);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = React.useState(false);
  const isAnyArticleCategoryActive = articleCategories.some((articleCategory) =>
    router.asPath.startsWith(`/artykuly/${articleCategory.slug}`)
  );
  const isDropdownItemActive = (basePath, itemSlug) =>
    router.asPath.startsWith(`${basePath}/${itemSlug}`);
  console.log('isAnyArticleCategoryActive', isAnyArticleCategoryActive);
  console.log('router.pathname', router);
  console.log('articleCategories', articleCategories);
  return (
    <header>
      <Navigation>
        <Link href="/">
          <LogoWrapper>
            <LogoText>Carsify</LogoText>
            <LogoIconWrapper>
              <Logo />
            </LogoIconWrapper>
          </LogoWrapper>
        </Link>
        <Menu isOpen={isMobileMenuOpened}>
          <NavList>
            <NavListItem>
              <Link href="/">
                <LinkButton isActive={router.pathname === '/'}>Strona główna</LinkButton>
              </Link>
            </NavListItem>
            <NavListItem>
              <NavItemChevronContainer>
                <ChevronWrapper>
                  <ChevronDown width="16px" />
                </ChevronWrapper>
                <Link href="/artykuly">
                  <LinkButton
                    isActive={
                      router.pathname.startsWith('/artykuly') && !isAnyArticleCategoryActive
                    }
                  >
                    Aktualności
                  </LinkButton>
                </Link>
              </NavItemChevronContainer>
              <Dropdown
                categories={articleCategories}
                basePath="/artykuly"
                isDropdownItemActive={isDropdownItemActive}
              />
            </NavListItem>
            <NavListItem>
              <NavItemChevronContainer>
                <ChevronWrapper>
                  <ChevronDown width="16px" />
                </ChevronWrapper>
                <Link href="/porady">
                  <LinkButton
                    isActive={router.pathname.startsWith('/porady') && !isAnyArticleCategoryActive}
                  >
                    Moto porady
                  </LinkButton>
                </Link>
              </NavItemChevronContainer>
              <Dropdown
                categories={tipCategories}
                basePath="/porady"
                isDropdownItemActive={isDropdownItemActive}
              />
            </NavListItem>
            <NavListItem>
              <Link href="/ogloszenia">
                <LinkButton isActive={router.pathname.startsWith('/ogloszenia')}>
                  Ogłoszenia
                </LinkButton>
              </Link>
            </NavListItem>
            <NavListItem>
              <Link href="/kontakt">
                <LinkButton isActive={router.pathname === '/kontakt'}> Kontakt</LinkButton>
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
