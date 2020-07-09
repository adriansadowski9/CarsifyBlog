import * as React from 'react'
import { useRouter } from 'next/router'
import CategoriesContainer from 'components/Categories/styled/CategoriesContainer'
import CategoryItem from 'components/Categories/CategoryItem'

interface CategoriesProps {
  items: {
    title: string
    hrefAs: string
    href: string
  }[]
  height: string
}

const Categories: React.FC<CategoriesProps> = ({ items, height }) => {
  const router = useRouter()
  return (
    <CategoriesContainer height={height}>
      {items.map((item, index) =>
          <CategoryItem
            key={`${item.title}-${index}`}
            title={item.title}
            hrefAs={item.hrefAs}
            href={item.href}
            isActive={router.asPath === item.hrefAs}
          />
        )
      }
    </CategoriesContainer>
  )
}



export default Categories
