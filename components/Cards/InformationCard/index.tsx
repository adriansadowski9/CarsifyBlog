import * as React from 'react';
import Link from 'next/link';

import InformationCardContainer from '@components/Cards/InformationCard/styled/InformationCardContainer';
import InformationCardImage from '@components/Cards/InformationCard/styled/InformationCardImage';
import InformationCardImageOverlay from '@components/Cards/InformationCard/styled/InformationCardImageOverlay';
import InformationCardInfoContainer from '@components/Cards/InformationCard/styled/InformationCardInfoContainer';
import InformationCardSnippet from '@components/Cards/InformationCard/styled/InformationCardSnippet';
import InformationCardTitle from '@components/Cards/InformationCard/styled/InformationCardTitle';

interface InformationCardProps {
  image: string;
  title: string;
  textSnippet: string;
  slug: string;
}
const InformationCard: React.FC<InformationCardProps> = ({ image, title, textSnippet, slug }) => {
  const responsiveImage = require(`../../../public/assets/img/${image}?resize&sizes[]=400w&sizes[]=800&sizes[]=1200&sizes[]=1600`);
  return (
    <Link href="/porady/[tipParam]" as={`/porady/${slug}`}>
      <a>
        <InformationCardContainer>
          <InformationCardImage
            src={responsiveImage.src}
            srcSet={responsiveImage.srcSet}
            sizes="(min-width: 768px) 400px, 100vw"
            alt={title}
          />
          <InformationCardImageOverlay />
          <InformationCardInfoContainer>
            <InformationCardTitle>{title}</InformationCardTitle>
            <InformationCardSnippet>{textSnippet}</InformationCardSnippet>
          </InformationCardInfoContainer>
        </InformationCardContainer>
      </a>
    </Link>
  );
};

export default InformationCard;
