import * as React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';

import ArticleCard from '@components/Cards/ArticleCard';
import Categories from '@components/Categories';
import Layout from '@components/Layout';
import PageHead from '@components/PageHead';
import Post from '@components/Post';
import MoreSectionTitle from '@components/Post/styled/MoreSectionTitle';
import ArticlesContainer from '@components/Sections/ArticlesContainer';
import SectionName from '@components/Sections/SectionName';
import { TipCategory } from '@pages/porady/[id]';
import { getArticleCategories, getTipCategories } from '@utils/getCategories';
import { getArticles } from '@utils/getPosts';
import IconName from '@utils/iconNames';

interface ArticleAttributes {
  pageTitle: string;
  pageDescription: string;
  title: string;
  subtitle: string;
  date: Date;
  featuredImage: string;
  category: string;
  contents: {
    name: string;
    link: string;
  }[];
  highlightedText: string;
  text: string;
  gallery: string[];
}

export interface ArticleCategory {
  attributes: {
    title: string;
    pageTitle: string;
    pageDescription: string;
    icon: IconName;
  };
  slug: string;
}

export interface Article {
  attributes: ArticleAttributes;
  slug: string;
}

interface ArticleProps extends NextPageContext {
  attributes: ArticleAttributes;
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
  articlesList: Article[];
  isCategory: boolean;
  articleExists: boolean;
  moreArticles: Article[];
}

const Article: NextPage<ArticleProps> = ({
  attributes,
  articleCategories,
  tipCategories,
  articlesList,
  isCategory,
  articleExists,
  moreArticles,
}) => {
  const router = useRouter();
  if (isCategory) {
    const { title, pageTitle, pageDescription } = attributes;
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

    return (
      <Layout articleCategories={articleCategories} tipCategories={tipCategories}>
        <PageHead
          title={pageTitle}
          description={pageDescription}
          path={router.asPath}
          ogType="website"
        />
        <SectionName name={title} altTextTag="h1" />
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
                textSnippet={
                  highlightedText.length > 160
                    ? `${highlightedText.substring(0, 160)}...`
                    : highlightedText
                }
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
      </Layout>
    );
  } else if (articleExists) {
    const {
      pageTitle,
      pageDescription,
      title,
      subtitle,
      date,
      featuredImage,
      category,
      contents,
      highlightedText,
      text,
      gallery,
    } = attributes;
    const image = featuredImage.substring(featuredImage.lastIndexOf('/') + 1);
    const responsiveImage = require(`../../public/assets/img/${image}?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=800&sizes[]=820&sizes[]=1200&sizes[]=1260&sizes[]=1640&sizes[]=2520`);
    const galleryImages = gallery
      ? gallery.map((image) => image.substring(image.lastIndexOf('/') + 1))
      : [];
    const galleryResponsiveImages = galleryImages.map((image) =>
      require(`../../public/assets/img/${image}?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=800&sizes[]=820&sizes[]=1200&sizes[]=1260&sizes[]=1640&sizes[]=2520`)
    );
    const shareUrl = `https://carsify.pl${router.asPath}`;
    const categoryInfo = articleCategories.find(
      (articleCategory) => articleCategory.attributes.title === category
    );

    return (
      <Layout articleCategories={articleCategories} tipCategories={tipCategories}>
        <PageHead
          title={pageTitle}
          description={pageDescription}
          path={router.asPath}
          ogType="article"
          image={
            responsiveImage.images.find((image) => image.width === 1200)?.path ??
            responsiveImage.src
          }
        />
        <Post
          date={date}
          category={{
            name: categoryInfo.attributes.title,
            icon: categoryInfo.attributes.icon,
          }}
          breadcrumbs={[
            { name: 'Strona główna', link: { href: '/' } },
            { name: 'Artykuły', link: { href: '/artykuly' } },
            {
              name: categoryInfo.attributes.title,
              link: { href: '/artykuly/[id]', as: `/artykuly/${categoryInfo.slug}` },
            },
            { name: title },
          ]}
          title={title}
          subtitle={subtitle}
          highlightedText={highlightedText}
          responsiveImage={responsiveImage}
          shareUrl={shareUrl}
          text={text}
          contents={contents}
          galleryImages={galleryResponsiveImages}
          moreSection={
            <ArticlesContainer>
              <MoreSectionTitle>Więcej artykułów</MoreSectionTitle>
              {moreArticles.map((article, index) => {
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
                    textSnippet={
                      highlightedText.length > 160
                        ? `${highlightedText.substring(0, 160)}...`
                        : highlightedText
                    }
                    category={{
                      name: categoryInfo.attributes.title,
                      icon: categoryInfo.attributes.icon,
                    }}
                    slug={slug}
                  />
                );
              })}
            </ArticlesContainer>
          }
        />
      </Layout>
    );
  } else {
    router.replace('/404');
  }
};

export const getStaticProps: GetStaticProps = async ({ ...ctx }) => {
  const { id } = ctx.params;
  const articleCategories = await getArticleCategories();
  const tipCategories = await getTipCategories();
  let markdownFile;
  let articlesList;
  let isCategory;
  let articleExists;
  let moreArticles;

  try {
    markdownFile = await import(`../../content/categories/articles/${id}.md`);
    articlesList = await getArticles({
      sort: 'desc',
      categories: [`${markdownFile.attributes.title}`],
    });
    isCategory = true;
  } catch {
    isCategory = false;
  }

  if (!isCategory) {
    try {
      markdownFile = await import(`../../content/posts/articles/${id}.md`);
      moreArticles = await getArticles({
        sort: 'desc',
        categories: [`${markdownFile.attributes.category}`],
        count: 3,
        excludeSlug: id.toString(),
      });
      articleExists = true;
    } catch {
      articleExists = false;
    }
  }

  return {
    props: {
      ...markdownFile,
      articleCategories,
      tipCategories,
      articlesList: articlesList || null,
      isCategory: isCategory || null,
      articleExists: articleExists || null,
      moreArticles: moreArticles || null,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articleCategorySlugs = ((context) => {
    const keys = context.keys();
    return keys.map((key) => key.substring(2, key.length - 3));
  })(require.context('../../content/categories/articles', true, /\.md$/));

  const articleSlugs = ((context) => {
    const keys = context.keys();
    return keys.map((key) => key.substring(2, key.length - 3));
  })(require.context('../../content/posts/articles', true, /\.md$/));

  const paths = [...articleSlugs, ...articleCategorySlugs].map((slug) => `/artykuly/${slug}`);

  return {
    paths,
    fallback: false,
  };
};

export default Article;
