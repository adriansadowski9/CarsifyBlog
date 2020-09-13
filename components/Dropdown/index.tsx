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
  isDropdownItemActive?: (basePath: string, itemSlug: string) => void;
}
const Dropdown: React.FC<DropdownProps> = ({ categories, basePath, isDropdownItemActive }) => {
  return (
    <DropdownContainer>
      {categories.map((category, index) => (
        <DropdownItem
          key={index}
          isActive={
            basePath && isDropdownItemActive && isDropdownItemActive(basePath, category.slug)
          }
        >
          <Link href={`${basePath}/${category.slug}`} passHref>
            <DropdownLinkButton>{category.attributes.title}</DropdownLinkButton>
          </Link>
        </DropdownItem>
      ))}
    </DropdownContainer>
  );
};

export default Dropdown;
