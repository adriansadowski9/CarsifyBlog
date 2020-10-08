import * as React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';

import TipCard from '@components/Cards/TipCard';
import Categories from '@components/Categories';
import Layout from '@components/Layout';
import PageHead from '@components/PageHead';
import Post from '@components/Post';
import MoreSectionTitle from '@components/Post/styled/MoreSectionTitle';
import SectionName from '@components/Sections/SectionName';
import TipsSection from '@components/Sections/TipsSection';
import { ArticleCategory } from '@pages/artykuly/[articleParam]';
import { getArticleCategories, getTipCategories } from '@utils/getCategories';
import { getTips } from '@utils/getPosts';

interface TipAttributes {
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

export interface TipCategory {
  attributes: {
    title: string;
    pageTitle: string;
    pageDescription: string;
  };
  slug: string;
}

export interface Tip {
  attributes: TipAttributes;
  slug: string;
}

interface TipProps extends NextPageContext {
  attributes: TipAttributes;
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
  tipsList: Tip[];
  isCategory: boolean;
  tipExists: boolean;
  moreTips: Tip[];
}

const Tip: NextPage<TipProps> = ({
  attributes,
  articleCategories,
  tipCategories,
  tipsList,
  isCategory,
  tipExists,
  moreTips,
}) => {
  if (isCategory) {
    const { title, pageTitle, pageDescription } = attributes;
    const categories = Array.from(tipCategories, (c: TipCategory) => {
      return {
        title: c.attributes.title,
        hrefAs: `/porady/${c.slug}`,
        href: '/porady/[tipParam]',
      };
    });
    categories.unshift({
      title: 'Wszystkie',
      hrefAs: '/porady',
      href: '/porady',
    });
    return (
      <Layout articleCategories={articleCategories} tipCategories={tipCategories}>
        <PageHead title={pageTitle} description={pageDescription} />
        <SectionName name={title} />
        <TipsSection hasCategories isHorizontal>
          <Categories items={categories} height={categories.length > 5 ? '895px' : '385px'} />
          {tipsList.map((tip, index) => {
            const { featuredImage, title, highlightedText, category } = tip.attributes;
            const { slug } = tip;
            return (
              <TipCard
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
        </TipsSection>
      </Layout>
    );
  } else if (tipExists) {
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
      <Layout articleCategories={articleCategories} tipCategories={tipCategories}>
        <PageHead title={`Tip - ${title}`} description="Tip description" />
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
            <TipsSection isHorizontal>
              <MoreSectionTitle>Więcej porad</MoreSectionTitle>
              {moreTips.map((article, index) => {
                const { featuredImage, title, highlightedText, category } = article.attributes;
                const { slug } = article;
                return (
                  <TipCard
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
            </TipsSection>
          }
        />
      </Layout>
    );
  } else {
    return (
      <Layout articleCategories={articleCategories} tipCategories={tipCategories}>
        <PageHead title="Error 404" description="404 description" />
        <div>
          <span>Error</span>
        </div>
      </Layout>
    );
  }
};

export const getStaticProps: GetStaticProps = async ({ ...ctx }) => {
  const { tipParam } = ctx.params;
  const articleCategories = await getArticleCategories();
  const tipCategories = await getTipCategories();
  let markdownFile;
  let tipsList;
  let isCategory;
  let tipExists;
  let moreTips;

  try {
    markdownFile = await import(`../../content/categories/tips/${tipParam}.md`);
    tipsList = await getTips({
      sort: 'desc',
      categories: [`${markdownFile.attributes.title}`],
    });
    isCategory = true;
  } catch {
    isCategory = false;
  }

  if (!isCategory) {
    try {
      markdownFile = await import(`../../content/posts/tips/${tipParam}.md`);
      moreTips = await getTips({
        sort: 'desc',
        categories: [`${markdownFile.attributes.category}`],
        count: 3,
        excludeSlug: tipParam.toString(),
      });
      tipExists = true;
    } catch {
      tipExists = false;
    }
  }

  return {
    props: {
      ...markdownFile,
      articleCategories,
      tipCategories,
      tipsList: tipsList || null,
      isCategory: isCategory || null,
      tipExists: tipExists || null,
      moreTips: moreTips || null,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tipCategorySlugs = ((context) => {
    const keys = context.keys();
    return keys.map((key) => key.slice(0, -3));
  })(require.context('../../content/categories/tips', true, /\.md$/));

  const tipSlugs = ((context) => {
    const keys = context.keys();
    return keys.map((key) => key.slice(0, -3));
  })(require.context('../../content/posts/tips', true, /\.md$/));

  const paths = [...tipSlugs, ...tipCategorySlugs].map((slug) => `/porady/${slug}`);

  return {
    paths,
    fallback: false,
  };
};

export default Tip;
