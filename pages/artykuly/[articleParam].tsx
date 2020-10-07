import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';

import ArticleCard from '@components/Cards/ArticleCard';
import Categories from '@components/Categories';
import PageHead from '@components/PageHead';
import Post from '@components/Post';
import MoreSectionTitle from '@components/Post/styled/MoreSectionTitle';
import ArticlesSection from '@components/Sections/ArticlesSection';
import SectionName from '@components/Sections/SectionName';
import { getArticleCategories } from '@utils/getCategories';
import { getArticles } from '@utils/getPosts';

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
}

export interface ArticleCategory {
  attributes: {
    title: string;
    pageTitle: string;
    pageDescription: string;
  };
  slug: string;
}

export interface Article {
  attributes: ArticleAttributes;
  slug: string;
}

interface ArticleProps extends NextPageContext {
  attributes: ArticleAttributes;
  articlesList: Article[];
  articleCategories: ArticleCategory[];
  isCategory: boolean;
  articleExists: boolean;
  moreArticles: Article[];
}

const Article: NextPage<ArticleProps> = ({
  attributes,
  articlesList,
  articleCategories,
  isCategory,
  articleExists,
  moreArticles,
}) => {
  if (isCategory) {
    const { title, pageTitle, pageDescription } = attributes;
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

    return (
      <>
        <PageHead title={pageTitle} description={pageDescription} />
        <ArticlesSection notEnoughItems={(articlesList.length + 1) % 3 !== 0}>
          <SectionName name={title} />
          <Categories items={categories} height={categories.length > 5 ? '825px' : '385px'} />
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
  } else if (articleExists) {
    const {
      title,
      subtitle,
      date,
      featuredImage,
      category,
      contents,
      highlightedText,
      text,
    } = attributes;
    const image = featuredImage.substring(featuredImage.lastIndexOf('/') + 1);
    const responsiveImage = require(`../../public/assets/img/${image}?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=800&sizes[]=820&sizes[]=1260&sizes[]=1640&sizes[]=2520`);
    const router = useRouter();
    const shareUrl = `https://carsify.pl${router.asPath}`;

    return (
      <>
        <PageHead title={`Article - ${title}`} description="Article description" />
        <Post
          date={date}
          category={category}
          title={title}
          subtitle={subtitle}
          highlightedText={highlightedText}
          responsiveImage={responsiveImage}
          shareUrl={shareUrl}
          text={text}
          contents={contents}
          moreSection={
            <ArticlesSection>
              <MoreSectionTitle>Więcej artykułów</MoreSectionTitle>
              {moreArticles.map((article, index) => {
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
          }
        />
      </>
    );
  } else {
    return (
      <>
        <PageHead title="Error 404" description="404 description" />
        <div>
          <span>Error</span>
        </div>
      </>
    );
  }
};

Article.getInitialProps = async ({ ...props }: NextPageContext) => {
  console.log(props.query);
  const { articleParam } = props.query;
  let markdownFile;
  let articlesList;
  let articleCategories;
  let isCategory;
  let articleExists;
  let moreArticles;

  try {
    markdownFile = await import(`../../content/categories/articles/${articleParam}.md`);
    articlesList = await getArticles({
      sort: 'desc',
      categories: [`${markdownFile.attributes.title}`],
    });
    articleCategories = await getArticleCategories();
    isCategory = true;
  } catch {
    isCategory = false;
  }

  if (!isCategory) {
    try {
      markdownFile = await import(`../../content/posts/articles/${articleParam}.md`);
      moreArticles = await getArticles({
        sort: 'desc',
        categories: [`${markdownFile.attributes.category}`],
        count: 3,
        excludeSlug: articleParam.toString(),
      });
      articleExists = true;
    } catch {
      articleExists = false;
    }
  }

  return {
    ...markdownFile,
    articlesList,
    articleCategories,
    isCategory,
    articleExists,
    moreArticles,
  };
};

export default Article;
