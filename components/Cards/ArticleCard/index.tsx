import * as React from 'react';
import clamp from 'clamp-js';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeContext } from 'styled-components';

import ArticleCardContainer from '@components/Cards/ArticleCard/styled/ArticleCardContainer';
import ArticleCardImageContainer from '@components/Cards/ArticleCard/styled/ArticleCardImageContainer';
import ArticleCardInfoContainer from '@components/Cards/ArticleCard/styled/ArticleCardInfoContainer';
import ArticleCardSnippet from '@components/Cards/ArticleCard/styled/ArticleCardSnippet';
import ArticleCardTitle from '@components/Cards/ArticleCard/styled/ArticleCardTitle';
import Category from '@components/Cards/Category';
import { PixelsCSS } from '@plaiceholder/css';
import IconName from '@utils/iconNames';
import { Theme } from '@utils/theme';

interface ArticleCardProps {
  image: string;
  imagePlaceholder: PixelsCSS;
  title: string;
  textSnippet: string;
  category: {
    name: string;
    icon: IconName;
  };
  slug: string;
  altTitleTag?: string;
  preloadImage?: boolean;
}
const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  imagePlaceholder,
  title,
  textSnippet,
  category,
  slug,
  altTitleTag,
  preloadImage = false,
}) => {
  const snippetRef = React.useRef(null);
  const themeContext: Theme = React.useContext(ThemeContext);

  React.useEffect(() => {
    if (snippetRef && snippetRef.current) {
      clamp(snippetRef.current, { clamp: 'auto' });
    }
  }, [snippetRef]);

  return (
    <Link href="/artykuly/[id]" as={`/artykuly/${slug}`} passHref>
      <ArticleCardContainer>
        <article>
          <ArticleCardImageContainer>
            {imagePlaceholder && (
              <div
                style={{
                  ...themeContext.imagePlaceholder,
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
              priority={preloadImage}
            />
          </ArticleCardImageContainer>
          <ArticleCardInfoContainer>
            <ArticleCardTitle as={altTitleTag}>{title}</ArticleCardTitle>
            <ArticleCardSnippet ref={snippetRef}>{textSnippet}</ArticleCardSnippet>
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
