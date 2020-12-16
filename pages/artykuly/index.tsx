import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import ArticleCard from '@components/Cards/ArticleCard';
import Categories from '@components/Categories';
import Layout from '@components/Layout';
import PageHead from '@components/PageHead';
import ArticlesContainer from '@components/Sections/ArticlesContainer';
import SectionName from '@components/Sections/SectionName';
import { attributes } from '@content/pages/articles.md';
import { Article, ArticleCategory } from '@pages/artykuly/[id]';
import { TipCategory } from '@pages/porady/[id]';
import { getArticleCategories, getTipCategories } from '@utils/getCategories';
import { getArticles } from '@utils/getPosts';

interface ArticlesProps {
  articlesList: Article[];
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
}

const Articles: NextPage<ArticlesProps> = ({ articlesList, articleCategories, tipCategories }) => {
  const categories = Array.from(articleCategories, (c: ArticleCategory) => {
    return {
      title: c.attributes.title,
      hrefAs: `/artykuly/${c.slug}`,
      href: '/artykuly/[id]',
    };
  });
  categories.unshift({
    title: 'Wszystkie',
    hrefAs: '/artykuly',
    href: '/artykuly',
  });
  const { pageTitle, pageDescription } = attributes;
  const router = useRouter();
  return (
    <Layout articleCategories={articleCategories} tipCategories={tipCategories}>
      <PageHead
        title={pageTitle}
        description={pageDescription}
        path={router.asPath}
        ogType="website"
      />
      <section>
        <SectionName name="Aktualności" altTextTag="h1" />
        <ArticlesContainer
          notEnoughItems={(articlesList.length + 1) % 3 !== 0}
          hasLongCategories={categories.length > 5}
        >
          <Categories
            items={categories}
            containerHeight={categories.length > 5 ? '811px' : '393px'}
          />
          {articlesList.map((article, index) => {
            const { featuredImage, title, highlightedText, category } = article.attributes;
            const { slug } = article;
            const categoryInfo = articleCategories.find(
              (articleCategory) => articleCategory.attributes.title === category
            );

            return (
              <ArticleCard
                key={`${title}-${index}`}
                image={featuredImage.substring(featuredImage.lastIndexOf('/') + 1)}
                title={title}
                textSnippet={highlightedText}
                category={{
                  name: categoryInfo.attributes.title,
                  icon: categoryInfo.attributes.icon,
                }}
                slug={slug}
                altTitleTag="h2"
              />
            );
          })}
        </ArticlesContainer>
      </section>
    </Layout>
  );
};

export default Articles;

export const getStaticProps: GetStaticProps = async () => {
  const articlesList = await getArticles({ sort: 'desc' });
  const articleCategories = await getArticleCategories();
  const tipCategories = await getTipCategories();

  return {
    props: {
      articlesList,
      articleCategories,
      tipCategories,
    },
  };
};
