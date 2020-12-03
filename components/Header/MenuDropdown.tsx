import BackParagraph from './styled/BackParagraph';
import DropdownCategoryName from './styled/DropdownCategoryName';
import DropdownContainer from './styled/DropdownContainer';
import DropdownItem from './styled/DropdownItem';
import DropdownWrapper from './styled/DropdownWrapper';
import LinkButton from './styled/LinkButton';

import * as React from 'react';
import Link from 'next/link';
import { ThemeContext } from 'styled-components';

import Icon from '@components/Icon';
import { ArticleCategory } from '@pages/artykuly/[id]';
import { TipCategory } from '@pages/porady/[id]';
import IconName from '@utils/iconNames';
import { Theme } from '@utils/theme';
interface DropdownProps {
  categories: ArticleCategory[] | TipCategory[];
  basePath?: string;
  pagePath?: string;
  isDropdownItemActive?: (basePath: string, itemSlug: string) => void;
  isActive?: boolean;
  isOpen?: boolean;
  closeMobileMenu?: () => void;
  isMobileMenuOpened: boolean;
  toggleSubMenu: () => void;
}
const MenuDropdown: React.FC<DropdownProps> = ({
  categories,
  basePath,
  pagePath,
  isDropdownItemActive,
  isActive,
  isOpen,
  closeMobileMenu,
  toggleSubMenu,
  isMobileMenuOpened,
}) => {
  const themeContext: Theme = React.useContext(ThemeContext);
  return (
    <DropdownWrapper isOpen={isOpen && isMobileMenuOpened}>
      <DropdownContainer>
        {isMobileMenuOpened ? (
          <>
            <DropdownItem>
              <LinkButton onClick={toggleSubMenu}>
                <Icon
                  iconName={IconName.ChevronDown}
                  variant="flat"
                  width="16px"
                  height="16px"
                  fill={themeContext.colors.menuArrow}
                />
                <BackParagraph>Cofnij</BackParagraph>
              </LinkButton>
            </DropdownItem>

            <DropdownItem isActive={isActive}>
              <Link href={`${basePath}`} passHref>
                <LinkButton onClick={closeMobileMenu} isActive={isActive}>
                  Wszystkie
                </LinkButton>
              </Link>
            </DropdownItem>
          </>
        ) : (
          <DropdownCategoryName>
            {basePath === '/artykuly' ? 'Aktualności' : 'Moto Porady'}
          </DropdownCategoryName>
        )}
        {categories.map((category, index) => (
          <DropdownItem
            key={index}
            isActive={
              basePath && isDropdownItemActive && isDropdownItemActive(basePath, category.slug)
            }
          >
            <Link as={`${basePath}/${category.slug}`} href={pagePath} passHref>
              <LinkButton
                onClick={closeMobileMenu}
                isActive={
                  basePath && isDropdownItemActive && isDropdownItemActive(basePath, category.slug)
                }
              >
                {category.attributes.title}
                {!isMobileMenuOpened ? (
                  <Icon
                    iconName={IconName.ThinChevronRight}
                    variant="flat"
                    width="16px"
                    height="16px"
                    fill={themeContext.colors.menuArrow}
                  />
                ) : (
                  ''
                )}
              </LinkButton>
            </Link>
          </DropdownItem>
        ))}
      </DropdownContainer>
    </DropdownWrapper>
  );
};

export default MenuDropdown;
