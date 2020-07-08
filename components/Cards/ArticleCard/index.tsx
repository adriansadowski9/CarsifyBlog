import * as React from 'react'
import { ThemeContext } from 'styled-components'
import Link from 'next/link'
import Category from 'components/Cards/Category'
import ArticleCardContainer from 'components/Cards/ArticleCard/styled/ArticleCardContainer'
import ArticleCardImage from 'components/Cards/ArticleCard/styled/ArticleCardImage'
import ArticleCardInfoContainer from 'components/Cards/ArticleCard/styled/ArticleCardInfoContainer'
import ArticleCardTitle from 'components/Cards/ArticleCard/styled/ArticleCardTitle'
import ArticleCardSnippet from 'components/Cards/ArticleCard/styled/ArticleCardSnippet'

interface ArticleCardProps {
  image: string
  title: string
  textSnippet: string
  category: string
  slug: string
}
const ArticleCard: React.FC<ArticleCardProps> = ({ image, title, textSnippet, category, slug }) => {
  const themeContext: any = React.useContext(ThemeContext)
  const responsiveImage = require(`../../../public/assets/img/${image}?resize&sizes[]=400w&sizes[]=800&sizes[]=1200&sizes[]=1600`)
  return (
    <Link href="/artykuly/[articleParam]" as={`/artykuly/${slug}`}>
      <ArticleCardContainer>
          <ArticleCardImage
            src={responsiveImage.src}
            srcSet={responsiveImage.srcSet}
            sizes="(min-width: 768px) 400px, 100vw"
            alt={title}
          />
        <ArticleCardInfoContainer>
          <ArticleCardTitle>{title}</ArticleCardTitle>
          <ArticleCardSnippet>{textSnippet}</ArticleCardSnippet>
          <Category name={category} iconName="i" nameColor={themeContext.colors.categoryName} bgColor={themeContext.colors.iconCircleBg} iconColor={themeContext.colors.icon} />
        </ArticleCardInfoContainer>
      </ArticleCardContainer>
    </Link>
)}

export default ArticleCard
