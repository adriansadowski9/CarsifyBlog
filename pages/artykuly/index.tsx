import React from 'react';
import { NextPage } from 'next';

import ArticleCard from '@components/Cards/ArticleCard';
import Categories from '@components/Categories';
import PageHead from '@components/PageHead';
import ArticlesSection from '@components/Sections/ArticlesSection';
import SectionName from '@components/Sections/SectionName';
import { attributes } from '@content/pages/articles.md';
import { Article, ArticleCategory } from '@pages/artykuly/[articleParam]';
import { getArticleCategories } from '@utils/getCategories';
import { getArticles } from '@utils/getPosts';

interface ArticlesProps {
  articlesList: Article[];
  articleCategories: ArticleCategory[];
}

const Articles: NextPage<ArticlesProps> = ({ articlesList, articleCategories }) => {
  const categories = Array.from(articleCategories, (c: ArticleCategory) => {
    return {
      title: c.attributes.title,
      hrefAs: `/artykuly/${c.slug}`,
      href: '/artykuly/[articleParam]',
    };
  });
  categories.unshift({
    title: 'Wszystkie',
    hrefAs: '/artykuly',
    href: '/artykuly',
  });
  const { pageTitle, pageDescription } = attributes;
  return (
    <>
      <PageHead title={pageTitle} description={pageDescription} />
      <ArticlesSection notEnoughItems={(articlesList.length + 1) % 3 !== 0}>
        <SectionName name="Aktualności" />
        <Categories items={categories} height="385px" />
        {articlesList.map((article, index) => {
          const { featuredImage, title, highlightedText, category } = article.attributes;
          const { slug } = article;
          return (
            <ArticleCard
              key={`${title}-${index}`}
              image={featuredImage.substring(featuredImage.lastIndexOf('/') + 1)}
              title={title}
              textSnippet={
                highlightedText.length > 160
                  ? `${highlightedText.substring(0, 160)}...`
                  : highlightedText
              }
              category={category}
              slug={slug}
            />
          );
        })}
      </ArticlesSection>
    </>
  );
};

Articles.getInitialProps = async () => {
  const articlesList = await getArticles({ sort: 'desc' });
  const articleCategories = await getArticleCategories();
  return { articlesList, articleCategories };
};

export default Articles;
