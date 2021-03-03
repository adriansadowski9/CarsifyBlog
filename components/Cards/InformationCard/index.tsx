import * as React from 'react';
import clamp from 'clamp-js';
import Image from 'next/image';
import Link from 'next/link';

import InformationCardContainer from '@components/Cards/InformationCard/styled/InformationCardContainer';
import InformationCardImageContainer from '@components/Cards/InformationCard/styled/InformationCardImageContainer';
import InformationCardImageOverlay from '@components/Cards/InformationCard/styled/InformationCardImageOverlay';
import InformationCardInfoContainer from '@components/Cards/InformationCard/styled/InformationCardInfoContainer';
import InformationCardSnippet from '@components/Cards/InformationCard/styled/InformationCardSnippet';
import InformationCardTitle from '@components/Cards/InformationCard/styled/InformationCardTitle';
import { PixelsCSS } from '@plaiceholder/css';

interface InformationCardProps {
  image: string;
  imagePlaceholder: PixelsCSS;
  title: string;
  textSnippet: string;
  slug: string;
}
const InformationCard: React.FC<InformationCardProps> = ({
  image,
  imagePlaceholder,
  title,
  textSnippet,
  slug,
}) => {
  const snippetRef = React.useRef(null);

  const placeholderStyle = {
    filter: 'blur(24px)',
    position: 'absolute' as const,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  React.useEffect(() => {
    if (snippetRef && snippetRef.current) {
      clamp(snippetRef.current, { clamp: 2 });
    }
  }, [snippetRef]);

  return (
    <Link href="/porady/[id]" as={`/porady/${slug}`}>
      <a>
        <InformationCardContainer>
          <InformationCardImageContainer>
            {imagePlaceholder && (
              <div
                style={{
                  ...placeholderStyle,
                  ...imagePlaceholder,
                }}
              />
            )}
            <Image
              src={image}
              alt={title}
              layout="fill"
              sizes="(min-width: 768px) 400px, 100vw"
              objectFit="cover"
            />
          </InformationCardImageContainer>
          <InformationCardImageOverlay />
          <InformationCardInfoContainer>
            <InformationCardTitle>{title}</InformationCardTitle>
            <InformationCardSnippet ref={snippetRef}>{textSnippet}</InformationCardSnippet>
          </InformationCardInfoContainer>
        </InformationCardContainer>
      </a>
    </Link>
  );
};

export default InformationCard;
