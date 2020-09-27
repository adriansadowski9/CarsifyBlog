import * as React from 'react';
import Link from 'next/link';

import AdCardLocalization from '@components/Cards/AdCard/AdCardLocalization';
import AdCardCarInfoPrice from '@components/Cards/AdCard/styled/AdCardCarInfoPrice';
import AdCardCarInfoRow from '@components/Cards/AdCard/styled/AdCardCarInfoRow';
import AdCardCarInfoText from '@components/Cards/AdCard/styled/AdCardCarInfoText';
import AdCardContainer from '@components/Cards/AdCard/styled/AdCardContainer';
import AdCardImage from '@components/Cards/AdCard/styled/AdCardImage';
import AdCardInfoContainer from '@components/Cards/AdCard/styled/AdCardInfoContainer';
import AdCardSnippet from '@components/Cards/AdCard/styled/AdCardSnippet';
import AdCardTitle from '@components/Cards/AdCard/styled/AdCardTitle';

interface AdCardProps {
  image: string;
  title: string;
  textSnippet: string;
  carData: {
    name: string;
    localization: string;
    year: string;
    course: string;
    body: string;
    engine: string;
    hp: string;
    torque: string;
    gearbox: string;
    doors: string;
    price: string;
  };
  slug: string;
}
const AdCard: React.FC<AdCardProps> = ({ image, title, textSnippet, carData, slug }) => {
  const responsiveImage = require(`../../../public/assets/img/${image}?resize&sizes[]=300w&sizes[]=400w&sizes[]=600w&sizes[]=800&sizes[]=1200&sizes[]=1600`);
  return (
    <Link href="/ogloszenia/[adParam]" as={`/ogloszenia/${slug}`} passHref>
      <AdCardContainer>
        <article>
          <AdCardImage
            src={responsiveImage.src}
            srcSet={responsiveImage.srcSet}
            sizes="(min-width: 1280px) 300px, (min-width: 768px) 400px, 100vw"
            alt={title}
          />
          <AdCardInfoContainer>
            <AdCardTitle>{carData.name}</AdCardTitle>
            <AdCardLocalization city={carData.localization} />
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
        </article>
      </AdCardContainer>
    </Link>
  );
};

export default AdCard;
