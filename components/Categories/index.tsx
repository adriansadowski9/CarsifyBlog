import * as React from 'react';
import { useRouter } from 'next/router';

import CategoryItem from '@components/Categories/CategoryItem';
import CategoriesContainer from '@components/Categories/styled/CategoriesContainer';

interface CategoriesProps {
  items: {
    title: string;
    hrefAs: string;
    href: string;
  }[];
  containerHeight: string;
}

const Categories: React.FC<CategoriesProps> = ({ items, containerHeight }) => {
  const router = useRouter();
  return (
    <CategoriesContainer containerHeight={containerHeight}>
      {items.map((item, index) => (
        <CategoryItem
          isEven={items.length % 2}
          key={`${item.title}-${index}`}
          title={item.title}
          hrefAs={item.hrefAs}
          href={item.href}
          isActive={router.asPath === item.hrefAs}
        />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
