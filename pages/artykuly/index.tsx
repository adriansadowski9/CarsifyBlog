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
import { SocialsSettings } from '@pages/index';
import { TipCategory } from '@pages/porady/[id]';
import { getArticleCategories, getTipCategories } from '@utils/getCategories';
import { getArticles } from '@utils/getPosts';
import { getSocialsSettings } from '@utils/getSettings';

interface ArticlesProps {
  articlesList: Article[];
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
  socialsSettings: SocialsSettings;
}

const Articles: NextPage<ArticlesProps> = ({
  articlesList,
  articleCategories,
  tipCategories,
  socialsSettings,
}) => {
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
    <Layout
      articleCategories={articleCategories}
      tipCategories={tipCategories}
      socialsSettings={socialsSettings}
    >
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
                image={featuredImage}
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
  const socialsSettings = await getSocialsSettings();

  return {
    props: {
      articlesList,
      articleCategories,
      tipCategories,
      socialsSettings,
    },
  };
};
