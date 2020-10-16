import * as React from 'react';
import Link from 'next/link';
import { ThemeContext } from 'styled-components';

import ArticleCardContainer from '@components/Cards/ArticleCard/styled/ArticleCardContainer';
import ArticleCardImage from '@components/Cards/ArticleCard/styled/ArticleCardImage';
import ArticleCardInfoContainer from '@components/Cards/ArticleCard/styled/ArticleCardInfoContainer';
import ArticleCardSnippet from '@components/Cards/ArticleCard/styled/ArticleCardSnippet';
import ArticleCardTitle from '@components/Cards/ArticleCard/styled/ArticleCardTitle';
import Category from '@components/Cards/Category';
import IconName from '@utils/iconNames';
import { Theme } from '@utils/theme';

interface ArticleCardProps {
  image: string;
  title: string;
  textSnippet: string;
  category: {
    name: string;
    icon: IconName;
  };
  slug: string;
}
const ArticleCard: React.FC<ArticleCardProps> = ({ image, title, textSnippet, category, slug }) => {
  const themeContext: Theme = React.useContext(ThemeContext);
  const responsiveImage = require(`../../../public/assets/img/${image}?resize&sizes[]=400w&sizes[]=800&sizes[]=1200&sizes[]=1600`);
  return (
    <Link href="/artykuly/[id]" as={`/artykuly/${slug}`} passHref>
      <ArticleCardContainer>
        <article>
          <ArticleCardImage
            src={responsiveImage.src}
            srcSet={responsiveImage.srcSet}
            sizes="(min-width: 768px) 400px, 100vw"
            alt={title}
          />
          <ArticleCardInfoContainer>
            <ArticleCardTitle>{title}</ArticleCardTitle>
            <ArticleCardSnippet>{textSnippet}</ArticleCardSnippet>
            <Category
              name={category.name}
              iconName={category.icon}
              nameColor={themeContext.colors.categoryName}
              bgColor={themeContext.colors.iconCircleBg}
              iconColor={themeContext.colors.icon}
            />
          </ArticleCardInfoContainer>
        </article>
      </ArticleCardContainer>
    </Link>
  );
};

export default ArticleCard;
