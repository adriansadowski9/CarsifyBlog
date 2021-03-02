import * as React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { getImage } from '@plaiceholder/next';
import { getPixelsCSS, PixelsCSS } from '@plaiceholder/css';
import showdown from 'showdown';
import parse from 'html-react-parser';

import ArticleCard from '@components/Cards/ArticleCard';
import Categories from '@components/Categories';
import Layout from '@components/Layout';
import PageHead from '@components/PageHead';
import Post from '@components/Post';
import MoreSectionTitle from '@components/Post/styled/MoreSectionTitle';
import ArticlesContainer from '@components/Sections/ArticlesContainer';
import SectionName from '@components/Sections/SectionName';
import { SocialsSettings } from '@pages/index';
import { TipCategory } from '@pages/porady/[id]';
import { getArticleCategories, getTipCategories } from '@utils/getCategories';
import { getArticles } from '@utils/getPosts';
import { getSocialsSettings } from '@utils/getSettings';
import IconName from '@utils/iconNames';
import createTextImagesPlaceholders from '@utils/createTextImagesPlaceholders';

interface ArticleAttributes {
  pageTitle: string;
  pageDescription: string;
  title: string;
  subtitle: string;
  date: Date;
  featuredImage: string;
  imagePlaceholder: PixelsCSS;
  imageSource?: string;
  category: string;
  contents: {
    name: string;
    link: string;
  }[];
  highlightedText: string;
  text: string;
  textImagesPlaceholders: {
    src: string;
    placeholder: PixelsCSS;
  }[];
  gallery?: {
    image: string;
    alt: string;
    source?: string;
    placeholder?: PixelsCSS;
  }[];
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
  id: string;
  attributes: ArticleAttributes;
  textImagesPlaceholders: {
    src: string;
    placeholder: PixelsCSS;
  }[];
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
  articlesList: Article[];
  isCategory: boolean;
  articleExists: boolean;
  moreArticles: Article[];
  socialsSettings: SocialsSettings;
}

const Article: NextPage<ArticleProps> = ({
  id,
  attributes,
  textImagesPlaceholders,
  articleCategories,
  tipCategories,
  articlesList,
  isCategory,
  articleExists,
  moreArticles,
  socialsSettings,
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
      imagePlaceholder,
      imageSource,
      category,
      contents,
      highlightedText,
      text,
      gallery,
    } = attributes;
    const galleryArray = Array.isArray(gallery)
      ? gallery
      : typeof gallery === 'string'
      ? [gallery]
      : [];
    const shareUrl = `https://carsify.pl${router.asPath}`;
    const categoryInfo = articleCategories.find(
      (articleCategory) => articleCategory.attributes.title === category
    );
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
          ogType="article"
          image={featuredImage}
        />
        <Post
          date={date}
          category={{
            name: categoryInfo.attributes.title,
            icon: categoryInfo.attributes.icon,
            href: '/artykuly/[id]',
            slug: `/artykuly/${categoryInfo.slug}`,
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
          image={featuredImage}
          imagePlaceholder={imagePlaceholder}
          imageSource={imageSource}
          shareUrl={shareUrl}
          text={text}
          textImagesPlaceholders={textImagesPlaceholders}
          contents={contents}
          galleryImages={galleryArray}
          postId={`article-${id}`}
          moreSection={
            <ArticlesContainer>
              <MoreSectionTitle isMore={moreArticles.length}>Więcej artykułów</MoreSectionTitle>
              {moreArticles.map((article, index) => {
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
  const socialsSettings = await getSocialsSettings();
  let textImagesPlaceholders;
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
      const featureImagePlaceholder = await getImage(markdownFile.attributes.featuredImage);
      const featureImageCssPlaceholder = await getPixelsCSS(featureImagePlaceholder);
      markdownFile.attributes.imagePlaceholder = featureImageCssPlaceholder;
      if (markdownFile.attributes.gallery) {
        markdownFile.attributes.gallery.forEach(async (galleryItem, index) => {
          const placeholderImage = await getImage(galleryItem.image);
          const placeholderCssImage = await getPixelsCSS(placeholderImage);
          markdownFile.attributes.gallery[index].placeholder = placeholderCssImage;
        });
      }

      const mdConverter = new showdown.Converter({
        ghCompatibleHeaderId: true,
        customizedHeaderId: true,
        simplifiedAutoLink: true,
      });

      const parsedHtml = parse(mdConverter.makeHtml(markdownFile.attributes.text));
      textImagesPlaceholders = await createTextImagesPlaceholders(parsedHtml);
      articleExists = true;
    } catch {
      articleExists = false;
    }
  }
  return {
    props: {
      id,
      ...markdownFile,
      articleCategories,
      tipCategories,
      socialsSettings,
      textImagesPlaceholders: textImagesPlaceholders || [],
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
