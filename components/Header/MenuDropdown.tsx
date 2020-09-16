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
  isArticlesOpen?: boolean;
  isTipsOpen?: boolean;
}
const MenuDropdown: React.FC<DropdownProps> = ({
  categories,
  basePath,
  pagePath,
  isDropdownItemActive,
  isActive,
  isArticlesOpen,
  isTipsOpen,
}) => {
  return (
    <DropdownContainer isOpen={isArticlesOpen || isTipsOpen}>
      <DropdownItem isActive={isActive}>
        <Link href={`${basePath}`} passHref>
          <DropdownLinkButton>Wszystkie</DropdownLinkButton>
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
            <DropdownLinkButton>{category.attributes.title}</DropdownLinkButton>
          </Link>
        </DropdownItem>
      ))}
    </DropdownContainer>
  );
};

export default MenuDropdown;
