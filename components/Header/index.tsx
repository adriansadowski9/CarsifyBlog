import ChevronWrapper from './styled/ChevronWrapper';
import IconsContainer from './styled/IconsContainer';
import SingleIconWrapper from './styled/SingleIconWrapper';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';

import MenuDropdown from '@components/Header/MenuDropdown';
import ActionButtonsContainer from '@components/Header/styled/ActionButtonsContainer';
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
import SearchActionButton from '@components/Header/styled/SearchActionButton';
import SearchButton from '@components/Header/styled/SearchButton';
import SearchButtonsContainer from '@components/Header/styled/SearchButtonsContainer';
import SearchContainer from '@components/Header/styled/SearchContainer';
import SearchInput from '@components/Header/styled/SearchInput';
import SocialsButton from '@components/Header/styled/SocialsButton';
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
  const [isSearchOpened, setIsSearchOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [isSocialIconsVisible, setIsSocialIconsVisible] = React.useState(false);
  const socialButtonRef = React.useRef<HTMLButtonElement>(null!);

  React.useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    if (isMobileMenuOpened) {
      window.scrollTo(0, 0);
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpened]);

  const handleIconsVisible = (e) => {
    if (socialButtonRef && socialButtonRef.current) {
      isSocialIconsVisible && !socialButtonRef.current.contains(e.target)
        ? setIsSocialIconsVisible(false)
        : '';
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', handleIconsVisible);
    return () => window.removeEventListener('click', handleIconsVisible);
  }, [isSocialIconsVisible]);
  React.useEffect(() => {
    window.addEventListener('resize', handleCloseMobileMenuOnResize);

    return () => window.removeEventListener('listener', handleCloseMobileMenuOnResize);
  }, []);

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

  const handleCloseMobileMenuOnResize = () => {
    setIsMobileMenuOpened(false);
  };

  return (
    <header>
      <Navigation>
        <Link href="/" passHref>
          <LogoWrapper onClick={() => setIsMobileMenuOpened(false)} isSearchOpened={isSearchOpened}>
            <LogoText as={router.pathname === '/' ? 'h1' : 'p'}>Carsify</LogoText>
            <LogoIconWrapper>
              <Icon iconName={IconName.CarsifyLogo} variant="color" />
            </LogoIconWrapper>
          </LogoWrapper>
        </Link>
        <SearchContainer isSearchOpened={isSearchOpened}>
          <SearchInput
            value={searchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
              setSearchValue(e.target.value)
            }
          />
          <SearchButtonsContainer>
            <SearchActionButton onClick={() => setIsSearchOpened(false)}>
              <Icon
                iconName={IconName.Search}
                variant="flat"
                fill={themeContext.colors.actionButton}
              />
            </SearchActionButton>
            <SearchActionButton onClick={() => setIsSearchOpened(false)}>
              <Icon
                iconName={IconName.Close}
                variant="flat"
                fill={themeContext.colors.actionButton}
              />
            </SearchActionButton>
          </SearchButtonsContainer>
        </SearchContainer>
        <Menu isOpen={isMobileMenuOpened} isSearchOpened={isSearchOpened}>
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
              {isMobileMenuOpened ? (
                <NavItemChevronContainer>
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
              ) : (
                <Link href="/artykuly" passHref>
                  <LinkButton isActive={router.pathname.startsWith('/artykuly')}>
                    Aktualności
                  </LinkButton>
                </Link>
              )}

              <MenuDropdown
                categories={articleCategories}
                basePath="/artykuly"
                pagePath="/artykuly/[id]"
                isDropdownItemActive={isDropdownItemActive}
                isActive={router.pathname === '/artykuly' && !isAnyArticleCategoryActive}
                isOpen={isArticlesOpen}
                closeMobileMenu={() => setIsMobileMenuOpened(false)}
                isMobileMenuOpened={isMobileMenuOpened}
                toggleSubMenu={toggleSubMenu}
              />
            </NavListItem>
            <NavListItem>
              {isMobileMenuOpened ? (
                <NavItemChevronContainer>
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
              ) : (
                <Link href="/porady" passHref>
                  <LinkButton isActive={router.pathname.startsWith('/porady')}>
                    Moto porady
                  </LinkButton>
                </Link>
              )}

              <MenuDropdown
                categories={tipCategories}
                basePath="/porady"
                pagePath="/porady/[id]"
                isDropdownItemActive={isDropdownItemActive}
                isActive={router.pathname === '/porady' && !isAnyTipCategoryActive}
                isOpen={isTipsOpen}
                closeMobileMenu={() => setIsMobileMenuOpened(false)}
                isMobileMenuOpened={isMobileMenuOpened}
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
          <IconsContainer isIconsVisible={isSocialIconsVisible}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <SingleIconWrapper backgroundColorProps="#4267B2" isDark={darkModeContext.value}>
                <Icon
                  iconName={IconName.FacebookFlat}
                  variant="flat"
                  width="32px"
                  height="32px"
                  fill="#fff"
                />
              </SingleIconWrapper>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <SingleIconWrapper backgroundColorProps="#1DA1F2" isDark={darkModeContext.value}>
                <Icon
                  iconName={IconName.TwitterFlat}
                  variant="flat"
                  width="32px"
                  height="32px"
                  fill="#fff"
                />
              </SingleIconWrapper>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <SingleIconWrapper
                backgroundColorProps="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
                isDark={darkModeContext.value}
              >
                <Icon
                  iconName={IconName.InstagramOutline}
                  variant="flat"
                  width="32px"
                  height="32px"
                  fill="#fff"
                />
              </SingleIconWrapper>
            </a>
          </IconsContainer>
        </Menu>
        <ActionButtonsContainer>
          {!isMobileMenuOpened && !isSearchOpened && (
            <SearchButton onClick={() => setIsSearchOpened(true)}>
              <Icon
                iconName={IconName.Search}
                variant="flat"
                fill={themeContext.colors.actionButton}
              />
            </SearchButton>
          )}
          <SocialsButton
            onClick={() => setIsSocialIconsVisible((isVisible) => !isVisible)}
            ref={socialButtonRef}
          >
            <Icon
              iconName={IconName.Socials}
              variant="flat"
              fill={themeContext.colors.actionButton}
            />
          </SocialsButton>
          <HamburgerContainer
            onClick={() => toggleMobileMenuCloseDrop()}
            isSearchOpened={isSearchOpened}
          >
            <Hamburger isMenuOpened={isMobileMenuOpened} />
          </HamburgerContainer>
          {darkModeContext.value ? (
            <DarkModeButton
              type="button"
              onClick={darkModeContext.disable}
              isSearchOpened={isSearchOpened}
            >
              <Icon
                iconName={IconName.Sun}
                variant="flat"
                fill={themeContext.colors.themeButtonIcon}
              />
            </DarkModeButton>
          ) : (
            <DarkModeButton
              type="button"
              onClick={darkModeContext.enable}
              isSearchOpened={isSearchOpened}
            >
              <Icon
                iconName={IconName.Moon}
                variant="flat"
                fill={themeContext.colors.themeButtonIcon}
              />
            </DarkModeButton>
          )}
        </ActionButtonsContainer>
      </Navigation>
    </header>
  );
};

export default Header;
