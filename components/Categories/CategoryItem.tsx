import * as React from 'react';
import Link from 'next/link';

import CategoryItemContainer from '@components/Categories/styled/CategoryItemContainer';
import CategoryItemText from '@components/Categories/styled/CategoryItemText';

interface CategoryItemProps {
  title: string;
  hrefAs: string;
  href: string;
  isActive: boolean;
  isEven: number;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ title, href, hrefAs, isActive, isEven }) => {
  return (
    <CategoryItemContainer isActive={isActive} isEven={isEven}>
      <Link href={href} as={hrefAs} passHref>
        <CategoryItemText isActive={isActive}>{title}</CategoryItemText>
      </Link>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
