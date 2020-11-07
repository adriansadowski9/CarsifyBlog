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
import TipsContainer from '@components/Sections/TipsContainer';
import { ArticleCategory } from '@pages/artykuly/[id]';
import { getArticleCategories, getTipCategories } from '@utils/getCategories';
import { getTips } from '@utils/getPosts';
import IconName from '@utils/iconNames';

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
    icon: IconName;
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
  const router = useRouter();
  if (isCategory) {
    const { title, pageTitle, pageDescription } = attributes;
    const categories = Array.from(tipCategories, (c: TipCategory) => {
      return {
        title: c.attributes.title,
        hrefAs: `/porady/${c.slug}`,
        href: '/porady/[id]',
      };
    });
    categories.unshift({
      title: 'Wszystkie',
      hrefAs: '/porady',
      href: '/porady',
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
        <TipsContainer hasLongCategories={categories.length > 5} isHorizontal>
          <Categories
            items={categories}
            containerHeight={categories.length > 5 ? '911px' : '443px'}
          />
          {tipsList.map((tip, index) => {
            const { featuredImage, title, highlightedText, category } = tip.attributes;
            const { slug } = tip;
            const categoryInfo = tipCategories.find(
              (tipCategory) => tipCategory.attributes.title === category
            );

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
                category={{
                  name: categoryInfo.attributes.title,
                  icon: categoryInfo.attributes.icon,
                }}
                slug={slug}
                altTitleTag="h2"
              />
            );
          })}
        </TipsContainer>
      </Layout>
    );
  } else if (tipExists) {
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
    } = attributes;
    const image = featuredImage.substring(featuredImage.lastIndexOf('/') + 1);
    const responsiveImage = require(`../../public/assets/img/${image}?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=800&sizes[]=820&sizes[]=1200&&sizes[]=1260&sizes[]=1640&sizes[]=2520`);
    const shareUrl = `https://carsify.pl${router.asPath}`;
    const categoryInfo = tipCategories.find(
      (tipCategory) => tipCategory.attributes.title === category
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
            { name: 'Moto porady', link: { href: '/porady' } },
            {
              name: categoryInfo.attributes.title,
              link: { href: '/porady/[id]', as: `/porady/${categoryInfo.slug}` },
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
          moreSection={
            <TipsContainer isHorizontal>
              <MoreSectionTitle>Więcej porad</MoreSectionTitle>
              {moreTips.map((article, index) => {
                const { featuredImage, title, highlightedText, category } = article.attributes;
                const { slug } = article;
                const categoryInfo = tipCategories.find(
                  (tipCategory) => tipCategory.attributes.title === category
                );

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
                    category={{
                      name: categoryInfo.attributes.title,
                      icon: categoryInfo.attributes.icon,
                    }}
                    slug={slug}
                  />
                );
              })}
            </TipsContainer>
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
  let tipsList;
  let isCategory;
  let tipExists;
  let moreTips;

  try {
    markdownFile = await import(`../../content/categories/tips/${id}.md`);
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
      markdownFile = await import(`../../content/posts/tips/${id}.md`);
      moreTips = await getTips({
        sort: 'desc',
        categories: [`${markdownFile.attributes.category}`],
        count: 3,
        excludeSlug: id.toString(),
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
    return keys.map((key) => key.substring(2, key.length - 3));
  })(require.context('../../content/categories/tips', true, /\.md$/));

  const tipSlugs = ((context) => {
    const keys = context.keys();
    return keys.map((key) => key.substring(2, key.length - 3));
  })(require.context('../../content/posts/tips', true, /\.md$/));

  const paths = [...tipSlugs, ...tipCategorySlugs].map((slug) => `/porady/${slug}`);

  return {
    paths,
    fallback: false,
  };
};

export default Tip;
