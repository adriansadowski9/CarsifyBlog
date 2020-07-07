import * as React from 'react'
import Link from 'next/link'
import AdCardContainer from 'components/Cards/AdCard/styled/AdCardContainer';
import AdCardImage from 'components/Cards/AdCard/styled/AdCardImage';
import AdCardInfoContainer from 'components/Cards/AdCard/styled/AdCardInfoContainer';
import AdCardTitle from 'components/Cards/AdCard/styled/AdCardTitle';
import AdCardSnippet from 'components/Cards/AdCard/styled/AdCardSnippet';

interface AdCardProps {
  image: string
  title: string
  textSnippet: string
  carData: {
    name: string
    year: number
    body: string
    engine: string
    gearbox: string
    hp: number
    torque: number
    doors: number
    course: number
    price: number
  }
  slug: string
}
const AdCard: React.FC<AdCardProps> = ({ image, title, textSnippet, carData, slug }) => {
  return (
    <Link href={`ogloszenia/${slug}`}>
      <AdCardContainer>
        <AdCardImage src={image} alt={title} />
        <AdCardInfoContainer>
          <AdCardTitle>{title}</AdCardTitle>
          <AdCardSnippet>{textSnippet}</AdCardSnippet>
        </AdCardInfoContainer>
      </AdCardContainer>
    </Link>
)}

export default AdCard
