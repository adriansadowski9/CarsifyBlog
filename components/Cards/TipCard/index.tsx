import * as React from 'react';
import Link from 'next/link';
import { ThemeContext } from 'styled-components';

import Category from '@components/Cards/Category';
import TipCardContainer from '@components/Cards/TipCard/styled/TipCardContainer';
import TipCardImage from '@components/Cards/TipCard/styled/TipCardImage';
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
}
const TipCard: React.FC<TipCardProps> = ({
  image,
  title,
  textSnippet,
  category,
  slug,
  altTitleTag,
}) => {
  const themeContext: Theme = React.useContext(ThemeContext);
  const responsiveImage = require(`../../../public/assets/img/${image}?resize&sizes[]=400w&sizes[]=800&sizes[]=1200&sizes[]=1600`);
  return (
    <Link href="/porady/[id]" as={`/porady/${slug}`} passHref>
      <TipCardContainer>
        <article>
          <TipCardImage
            src={responsiveImage.src}
            srcSet={responsiveImage.srcSet}
            sizes="(min-width: 768px) 400px, 100vw"
            alt={title}
          />
          <TipCardInfoContainer>
            <TipCardTitle as={altTitleTag}>{title}</TipCardTitle>
            <TipCardSnippet>{textSnippet}</TipCardSnippet>
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
