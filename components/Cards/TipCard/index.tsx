import * as React from 'react';
import clamp from 'clamp-js';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeContext } from 'styled-components';

import Category from '@components/Cards/Category';
import TipCardContainer from '@components/Cards/TipCard/styled/TipCardContainer';
import TipCardImageContainer from '@components/Cards/TipCard/styled/TipCardImageContainer';
import TipCardInfoContainer from '@components/Cards/TipCard/styled/TipCardInfoContainer';
import TipCardSnippet from '@components/Cards/TipCard/styled/TipCardSnippet';
import TipCardTitle from '@components/Cards/TipCard/styled/TipCardTitle';
import IconName from '@utils/iconNames';
import { Theme } from '@utils/theme';

interface TipCardProps {
  image: string;
  title: string;
  textSnippet: string;
  category: {
    name: string;
    icon: IconName;
  };
  slug: string;
  altTitleTag?: string;
  smallerCard?: boolean;
}
const TipCard: React.FC<TipCardProps> = ({
  image,
  title,
  textSnippet,
  category,
  slug,
  altTitleTag,
  smallerCard,
}) => {
  const snippetRef = React.useRef(null);
  const themeContext: Theme = React.useContext(ThemeContext);

  React.useEffect(() => {
    if (snippetRef && snippetRef.current) {
      clamp(snippetRef.current, { clamp: 'auto' });
    }
  }, [snippetRef]);

  return (
    <Link href="/porady/[id]" as={`/porady/${slug}`} passHref>
      <TipCardContainer smallerCard={smallerCard}>
        <article>
          <TipCardImageContainer smallerCard={smallerCard}>
            <Image
              src={image}
              alt={title}
              layout="fill"
              sizes="(min-width: 768px) 400px, 100vw"
              objectFit="cover"
              loading="eager"
            />
          </TipCardImageContainer>
          <TipCardInfoContainer>
            <TipCardTitle as={altTitleTag}>{title}</TipCardTitle>
            <TipCardSnippet ref={snippetRef}>{textSnippet}</TipCardSnippet>
            <Category
              name={category.name}
              iconName={category.icon}
              nameColor={themeContext.colors.tipCategoryName}
              bgColor={themeContext.colors.tipIconCircleBg}
              iconColor={themeContext.colors.tipIcon}
            />
          </TipCardInfoContainer>
        </article>
      </TipCardContainer>
    </Link>
  );
};

export default TipCard;
