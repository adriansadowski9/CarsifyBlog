import DropdownContainer from './styled/DropdownContainer';
import DropdownItem from './styled/DropdownItem';
import DropdownLinkButton from './styled/DropdownLinkButton';

import * as React from 'react';
import Link from 'next/link';

import { ArticleCategory } from '@pages/artykuly/[articleParam]';
import { TipCategory } from '@pages/porady/[tipParam]';
interface DropdownProps {
  categories: ArticleCategory[] | TipCategory[];
  basePath?: string;
  pagePath?: string;
  isDropdownItemActive?: (basePath: string, itemSlug: string) => void;
  isActive?: boolean;
  isOpen?: boolean;
  closeMobileMenu?: () => void;
}
const MenuDropdown: React.FC<DropdownProps> = ({
  categories,
  basePath,
  pagePath,
  isDropdownItemActive,
  isActive,
  isOpen,
  closeMobileMenu,
}) => {
  return (
    <DropdownContainer isOpen={isOpen}>
      <DropdownItem isActive={isActive}>
        <Link href={`${basePath}`} passHref>
          <DropdownLinkButton onClick={closeMobileMenu}>Wszystkie</DropdownLinkButton>
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
            <DropdownLinkButton onClick={closeMobileMenu}>
              {category.attributes.title}
            </DropdownLinkButton>
          </Link>
        </DropdownItem>
      ))}
    </DropdownContainer>
  );
};

export default MenuDropdown;
