import * as React from 'react'
import Link from 'next/link'
import AdCardContainer from 'components/Cards/AdCard/styled/AdCardContainer';
import AdCardImage from 'components/Cards/AdCard/styled/AdCardImage';
import AdCardInfoContainer from 'components/Cards/AdCard/styled/AdCardInfoContainer';
import AdCardTitle from 'components/Cards/AdCard/styled/AdCardTitle';
import AdCardSnippet from 'components/Cards/AdCard/styled/AdCardSnippet';
import AdCardLocalization from 'components/Cards/AdCard/AdCardLocalization';
import AdCardCarInfoRow from 'components/Cards/AdCard/styled/AdCardCarInfoRow';
import AdCardCarInfoText from 'components/Cards/AdCard/styled/AdCardCarInfoText';
import AdCardCarInfoPrice from 'components/Cards/AdCard/styled/AdCardCarInfoPrice';

interface AdCardProps {
  image: string
  title: string
  textSnippet: string
  carData: {
    name: string
    localization: string
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
  const responsiveImage = require(`../../../public/assets/img/${image}?resize&sizes[]=300w&sizes[]=400w&sizes[]=600w&sizes[]=800&sizes[]=1200&sizes[]=1600`)
  return (
    <Link href="/ogloszenia/[adParam]" as={`/ogloszenia/${slug}`}>
      <AdCardContainer>
        <AdCardImage
          src={responsiveImage.src}
          srcSet={responsiveImage.srcSet}
          sizes="(min-width: 1280px) 300px, (min-width: 768px) 400px, 100vw"
          alt={title}
        />
        <AdCardInfoContainer>
          <AdCardTitle>{carData.name}</AdCardTitle>
          <AdCardLocalization city={carData.localization}/>
          <AdCardCarInfoRow>
            <AdCardCarInfoText>Rok produkcji</AdCardCarInfoText>
            <AdCardCarInfoText>{carData.year}</AdCardCarInfoText>
          </AdCardCarInfoRow>
          <AdCardCarInfoRow>
            <AdCardCarInfoText>Silnik</AdCardCarInfoText>
            <AdCardCarInfoText>{carData.engine}</AdCardCarInfoText>
          </AdCardCarInfoRow>
          <AdCardCarInfoRow>
            <AdCardCarInfoText>Moc</AdCardCarInfoText>
            <AdCardCarInfoText>{carData.hp} km</AdCardCarInfoText>
          </AdCardCarInfoRow>
          <AdCardCarInfoPrice>{carData.price}zł</AdCardCarInfoPrice>
          <AdCardSnippet>{textSnippet}</AdCardSnippet>
        </AdCardInfoContainer>
      </AdCardContainer>
    </Link>
)}

export default AdCard
