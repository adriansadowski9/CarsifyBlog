import BackParagraph from './styled/BackParagraph';
import DropdownContainer from './styled/DropdownContainer';
import DropdownInnerWrapper from './styled/DropdownInnerWrapper';
import DropdownItem from './styled/DropdownItem';
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
}) => {
  const themeContext: Theme = React.useContext(ThemeContext);
  return (
    <DropdownContainer isOpen={isOpen}>
      <DropdownInnerWrapper>
        <DropdownItem>
          <Link href={`${basePath}`} passHref>
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
          </Link>
        </DropdownItem>
        <DropdownItem isActive={isActive}>
          <Link href={`${basePath}`} passHref>
            <LinkButton onClick={closeMobileMenu} isActive={isActive}>
              Wszystkie
            </LinkButton>
          </Link>
        </DropdownItem>
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
              </LinkButton>
            </Link>
          </DropdownItem>
        ))}
      </DropdownInnerWrapper>
    </DropdownContainer>
  );
};

export default MenuDropdown;
