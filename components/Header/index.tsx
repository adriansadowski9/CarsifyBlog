import ChevronWrapper from './styled/ChevronWrapper';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';

import ChevronDown from '@assets/icons/chevronDown.svg';
import Logo from '@assets/icons/logo.svg';
import Moon from '@assets/icons/moon.svg';
import Sun from '@assets/icons/sun.svg';
import DarkModeButton from '@components/Header/styled/DarkModeButton';
import Hamburger from '@components/Header/styled/Hamburger';
import HamburgerContainer from '@components/Header/styled/HamburgerContainer';
import LinkButton from '@components/Header/styled/LinkButton';
import LogoIconWrapper from '@components/Header/styled/LogoIconWrapper';
import LogoText from '@components/Header/styled/LogoText';
import LogoWrapper from '@components/Header/styled/LogoWrapper';
import Menu from '@components/Header/styled/Menu';
import MenuDropdown from '@components/Header/styled/MenuDropdown';
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
  const isAnyTipCategoryActive = tipCategories.some((tipCategory) =>
    router.asPath.startsWith(`/porady/${tipCategory.slug}`)
  );
  const isDropdownItemActive = (basePath, itemSlug) =>
    router.asPath.startsWith(`${basePath}/${itemSlug}`);
  const [isArticlesOpen, setIsArticlesOpen] = React.useState(false);
  const [isTipsOpen, setIsTipsOpen] = React.useState(false);
  const handleArticlesOpen = () => {
    setIsArticlesOpen(!isArticlesOpen);
    setIsTipsOpen(false);
  };
  const handleTipsOpen = () => {
    setIsTipsOpen(!isTipsOpen);
    setIsArticlesOpen(false);
  };
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
                <ChevronWrapper isOpen={isArticlesOpen}>
                  <ChevronDown width="16px" height="10px" fill={themeContext.colors.menuArrow} />
                </ChevronWrapper>
                <Link href="/artykuly">
                  <LinkButton onClick={() => handleArticlesOpen()}>Aktualności</LinkButton>
                </Link>
              </NavItemChevronContainer>
              <MenuDropdown
                categories={articleCategories}
                basePath="/artykuly"
                isDropdownItemActive={isDropdownItemActive}
                isActive={router.pathname.startsWith('/artykuly') && !isAnyArticleCategoryActive}
                isArticlesOpen={isArticlesOpen}
              />
            </NavListItem>
            <NavListItem>
              <NavItemChevronContainer>
                <ChevronWrapper isOpen={isTipsOpen}>
                  <ChevronDown width="16px" height="10px" fill={themeContext.colors.menuArrow} />
                </ChevronWrapper>
                <Link href="/porady">
                  <LinkButton onClick={() => handleTipsOpen()}>Moto porady</LinkButton>
                </Link>
              </NavItemChevronContainer>
              <MenuDropdown
                categories={tipCategories}
                basePath="/porady"
                isDropdownItemActive={isDropdownItemActive}
                isActive={router.pathname.startsWith('/porady') && !isAnyTipCategoryActive}
                isTipsOpen={isTipsOpen}
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
