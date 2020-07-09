import * as React from 'react'
import Link from 'next/link';
import CategoryItemContainer from 'components/Categories/styled/CategoryItemContainer';
import CategoryItemText from 'components/Categories/styled/CategoryItemText';

interface CategoryItemProps {
  title: string
  hrefAs: string
  href: string
  isActive: boolean
}

const CategoryItem: React.FC<CategoryItemProps> = ({ title, href, hrefAs, isActive }) => {
  return (
    <CategoryItemContainer isActive={isActive}>
      <Link href={href} as={hrefAs}>
        <CategoryItemText isActive={isActive}>{title}</CategoryItemText>
      </Link>
    </CategoryItemContainer>
  )
}



export default CategoryItem
