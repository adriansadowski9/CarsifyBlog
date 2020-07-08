import * as React from 'react'
import { ThemeContext } from 'styled-components'
import Link from 'next/link'
import Category from 'components/Cards/Category'
import TipCardContainer from 'components/Cards/TipCard/styled/TipCardContainer'
import TipCardImage from 'components/Cards/TipCard/styled/TipCardImage'
import TipCardInfoContainer from 'components/Cards/TipCard/styled/TipCardInfoContainer'
import TipCardTitle from 'components/Cards/TipCard/styled/TipCardTitle'
import TipCardSnippet from 'components/Cards/TipCard/styled/TipCardSnippet'

interface TipCardProps {
  image: string
  title: string
  textSnippet: string
  category: string
  slug: string
}
const TipCard: React.FC<TipCardProps> = ({ image, title, textSnippet, category, slug }) => {
  const themeContext: any = React.useContext(ThemeContext)
  const responsiveImage = require(`../../../public/assets/img/${image}?resize&sizes[]=400&sizes[]=768&sizes[]=1024`)
  return (
    <Link href="/porady/[tipParam]" as={`/porady/${slug}`}>
      <TipCardContainer>
        <TipCardImage {...responsiveImage} alt={title} />
        <TipCardInfoContainer>
          <TipCardTitle>{title}</TipCardTitle>
          <TipCardSnippet>{textSnippet}</TipCardSnippet>
          <Category name={category} iconName="i" nameColor={themeContext.colors.tipCategoryName} bgColor={themeContext.colors.tipIconCircleBg} iconColor={themeContext.colors.tipIcon} />
        </TipCardInfoContainer>
      </TipCardContainer>
    </Link>
)}

export default TipCard
