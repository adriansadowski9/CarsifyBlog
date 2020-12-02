import ChevronWrapper from './styled/ChevronWrapper';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';

import MenuDropdown from '@components/Header/MenuDropdown';
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
import Icon from '@components/Icon';
import DarkModeContext from '@contexts/darkModeContext';
import { ArticleCategory } from '@pages/artykuly/[id]';
import { TipCategory } from '@pages/porady/[id]';
import IconName from '@utils/iconNames';
import { Theme } from '@utils/theme';

interface HeaderProps {
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
}
const Header: React.FC<HeaderProps> = ({ articleCategories, tipCategories }) => {
  const themeContext: Theme = React.useContext(ThemeContext);
  const darkModeContext = React.useContext(DarkModeContext);
  const router = useRouter();

  const [isMobileMenuOpened, setIsMobileMenuOpened] = React.useState(false);
  const [isArticlesOpen, setIsArticlesOpen] = React.useState(false);
  const [isTipsOpen, setIsTipsOpen] = React.useState(false);

  React.useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    if (isMobileMenuOpened) {
      window.scrollTo(0, 0);
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpened]);

  const isAnyArticleCategoryActive = articleCategories.some((articleCategory) =>
    router.asPath.startsWith(`/artykuly/${articleCategory.slug}`)
  );
  const isAnyTipCategoryActive = tipCategories.some((tipCategory) =>
    router.asPath.startsWith(`/porady/${tipCategory.slug}`)
  );
  const isDropdownItemActive = (basePath, itemSlug) =>
    router.asPath.startsWith(`${basePath}/${itemSlug}`);

  const handleArticlesOpen = () => {
    setIsArticlesOpen(!isArticlesOpen);
    setIsTipsOpen(false);
  };
  const handleTipsOpen = () => {
    setIsTipsOpen(!isTipsOpen);
    setIsArticlesOpen(false);
  };
  const toggleMobileMenuCloseDrop = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
    setIsTipsOpen(false);
    setIsArticlesOpen(false);
  };

  const toggleSubMenu = () => {
    setIsTipsOpen(false);
    setIsArticlesOpen(false);
  };
  return (
    <header>
      <Navigation>
        <Link href="/" passHref>
          <LogoWrapper onClick={() => setIsMobileMenuOpened(false)}>
            <LogoText as={router.pathname === '/' ? 'h1' : 'p'}>Carsify</LogoText>
            <LogoIconWrapper>
              <Icon iconName={IconName.CarsifyLogo} variant="color" />
            </LogoIconWrapper>
          </LogoWrapper>
        </Link>
        <Menu isOpen={isMobileMenuOpened}>
          <NavList>
            <NavListItem>
              <Link href="/" passHref>
                <LinkButton
                  isActive={router.pathname === '/'}
                  onClick={() => setIsMobileMenuOpened(false)}
                >
                  Strona główna
                </LinkButton>
              </Link>
            </NavListItem>
            <NavListItem>
              <NavItemChevronContainer>
                {isMobileMenuOpened ? (
                  <LinkButton
                    as="button"
                    onClick={() => handleArticlesOpen()}
                    isActive={
                      (router.pathname === '/artykuly' && !isArticlesOpen) ||
                      (router.pathname === '/artykuly/[id]' && !isAnyArticleCategoryActive)
                    }
                  >
                    Aktualności
                  </LinkButton>
                ) : (
                  <Link href="/artykuly" passHref>
                    <LinkButton isActive={router.pathname.startsWith('/artykuly')}>
                      Aktualności
                    </LinkButton>
                  </Link>
                )}
                <ChevronWrapper onClick={() => handleArticlesOpen()}>
                  <Icon
                    iconName={IconName.ChevronDown}
                    variant="flat"
                    width="16px"
                    height="16px"
                    fill={themeContext.colors.menuArrow}
                  />
                </ChevronWrapper>
              </NavItemChevronContainer>
              <MenuDropdown
                categories={articleCategories}
                basePath="/artykuly"
                pagePath="/artykuly/[id]"
                isDropdownItemActive={isDropdownItemActive}
                isActive={router.pathname === '/artykuly' && !isAnyArticleCategoryActive}
                isOpen={isArticlesOpen}
                closeMobileMenu={() => setIsMobileMenuOpened(false)}
                toggleSubMenu={toggleSubMenu}
              />
            </NavListItem>
            <NavListItem>
              <NavItemChevronContainer>
                {isMobileMenuOpened ? (
                  <LinkButton
                    as="button"
                    onClick={() => handleTipsOpen()}
                    isActive={
                      (router.pathname.startsWith('/porady') && !isTipsOpen) ||
                      (router.pathname === '/porady/[id]' && !isAnyTipCategoryActive)
                    }
                  >
                    Moto porady
                  </LinkButton>
                ) : (
                  <Link href="/porady" passHref>
                    <LinkButton isActive={router.pathname.startsWith('/porady')}>
                      Moto porady
                    </LinkButton>
                  </Link>
                )}
                <ChevronWrapper onClick={() => handleTipsOpen()}>
                  <Icon
                    iconName={IconName.ChevronDown}
                    variant="flat"
                    width="16px"
                    height="10px"
                    fill={themeContext.colors.menuArrow}
                  />
                </ChevronWrapper>
              </NavItemChevronContainer>
              <MenuDropdown
                categories={tipCategories}
                basePath="/porady"
                pagePath="/porady/[id]"
                isDropdownItemActive={isDropdownItemActive}
                isActive={router.pathname === '/porady' && !isAnyTipCategoryActive}
                isOpen={isTipsOpen}
                closeMobileMenu={() => setIsMobileMenuOpened(false)}
                toggleSubMenu={toggleSubMenu}
              />
            </NavListItem>
            <NavListItem>
              <Link href="/ogloszenia" passHref>
                <LinkButton
                  isActive={router.pathname.startsWith('/ogloszenia')}
                  onClick={() => setIsMobileMenuOpened(false)}
                >
                  Ogłoszenia
                </LinkButton>
              </Link>
            </NavListItem>
            <NavListItem>
              <Link href="/kontakt" passHref>
                <LinkButton
                  isActive={router.pathname === '/kontakt'}
                  onClick={() => setIsMobileMenuOpened(false)}
                >
                  Kontakt
                </LinkButton>
              </Link>
            </NavListItem>
          </NavList>
          {darkModeContext.value ? (
            <DarkModeButton type="button" onClick={darkModeContext.disable}>
              <Icon iconName={IconName.Sun} variant="flat" fill={themeContext.colors.text} />
            </DarkModeButton>
          ) : (
            <DarkModeButton type="button" onClick={darkModeContext.enable}>
              <Icon iconName={IconName.Moon} variant="flat" fill={themeContext.colors.text} />
            </DarkModeButton>
          )}
        </Menu>
        <HamburgerContainer onClick={() => toggleMobileMenuCloseDrop()}>
          <Hamburger isMenuOpened={isMobileMenuOpened} />
        </HamburgerContainer>
      </Navigation>
    </header>
  );
};

export default Header;
