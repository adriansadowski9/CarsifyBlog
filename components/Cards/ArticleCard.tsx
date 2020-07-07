import * as React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const IMAGE_HEIGHT = 270

const ArticleContainer = styled.article`
  position: relative;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 400px;
  }
`

const Image = styled.img`
  width: 100%;
  height: ${IMAGE_HEIGHT}px;
`

const InfoContainer = styled.div`
  margin: 0 ${props => props.theme.spaces.l};
  padding: ${props => props.theme.spaces.xs} ${props => props.theme.spaces.xs} 0 ${props => props.theme.spaces.xs};
  position: absolute;
  top: ${props => IMAGE_HEIGHT - props.theme.spaces.l};
  left: 0;
  background: ${props => props.theme.colors.bg};
`

const ArticleTitle = styled.h3`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.m};
  color: ${props => props.theme.colors.text};
`

const ArticleSnippet = styled.p`
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.text};
`

interface ArticleCardProps {
  image: string
  title: string
  textSnippet: string
  category: string
  slug: string
}
const ArticleCard: React.FC<ArticleCardProps> = ({ image, title, textSnippet, category, slug }) => (
  <Link href={`artykuly/${slug}`}>
    <ArticleContainer>
      <Image src={image} alt={title} />
      <InfoContainer>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleSnippet>{textSnippet}</ArticleSnippet>
        <p>{category}</p>
      </InfoContainer>
    </ArticleContainer>
  </Link>
)

export default ArticleCard
