import * as React from 'react';
import parse from 'html-react-parser';
import { GetStaticPaths, GetStaticProps, NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import showdown from 'showdown';

import TipCard from '@components/Cards/TipCard';
import Categories from '@components/Categories';
import Layout from '@components/Layout';
import PageHead from '@components/PageHead';
import Post from '@components/Post';
import MoreSectionTitle from '@components/Post/styled/MoreSectionTitle';
import SectionName from '@components/Sections/SectionName';
import TipsContainer from '@components/Sections/TipsContainer';
import { ArticleCategory } from '@pages/artykuly/[id]';
import { SocialsSettings } from '@pages/index';
import { getPixelsCSS, PixelsCSS } from '@plaiceholder/css';
import { getImage } from '@plaiceholder/next';
import createTextImagesPlaceholders from '@utils/createTextImagesPlaceholders';
import { getArticleCategories, getTipCategories } from '@utils/getCategories';
import { getTips } from '@utils/getPosts';
import { getSocialsSettings } from '@utils/getSettings';
import IconName from '@utils/iconNames';

interface TipAttributes {
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
  gallery?: {
    image: string;
    alt: string;
    source?: string;
    placeholder?: PixelsCSS;
  }[];
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
  id: string;
  attributes: TipAttributes;
  textImagesPlaceholders: {
    src: string;
    placeholder: PixelsCSS;
  }[];
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
  tipsList: Tip[];
  isCategory: boolean;
  tipExists: boolean;
  moreTips: Tip[];
  socialsSettings: SocialsSettings;
}

const Tip: NextPage<TipProps> = ({
  id,
  attributes,
  textImagesPlaceholders,
  articleCategories,
  tipCategories,
  tipsList,
  isCategory,
  tipExists,
  moreTips,
  socialsSettings,
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
        <TipsContainer hasLongCategories={categories.length > 5} isHorizontal>
          <Categories
            items={categories}
            containerHeight={categories.length > 5 ? '911px' : '443px'}
          />
          {tipsList.map((tip, index) => {
            const {
              featuredImage,
              imagePlaceholder,
              title,
              highlightedText,
              category,
            } = tip.attributes;
            const { slug } = tip;
            const categoryInfo = tipCategories.find(
              (tipCategory) => tipCategory.attributes.title === category
            );

            return (
              <TipCard
                key={`${title}-${index}`}
                image={featuredImage}
                imagePlaceholder={imagePlaceholder}
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
    const categoryInfo = tipCategories.find(
      (tipCategory) => tipCategory.attributes.title === category
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
            href: '/porady/[id]',
            slug: `/porady/${categoryInfo.slug}`,
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
          image={featuredImage}
          imagePlaceholder={imagePlaceholder}
          imageSource={imageSource}
          shareUrl={shareUrl}
          text={text}
          textImagesPlaceholders={textImagesPlaceholders}
          contents={contents}
          galleryImages={galleryArray}
          postId={`tip-${id}`}
          moreSection={
            <TipsContainer isHorizontal>
              <MoreSectionTitle isMore={moreTips.length}>Więcej porad</MoreSectionTitle>
              {moreTips.map((article, index) => {
                const {
                  featuredImage,
                  imagePlaceholder,
                  title,
                  highlightedText,
                  category,
                } = article.attributes;
                const { slug } = article;
                const categoryInfo = tipCategories.find(
                  (tipCategory) => tipCategory.attributes.title === category
                );

                return (
                  <TipCard
                    key={`${title}-${index}`}
                    image={featuredImage}
                    imagePlaceholder={imagePlaceholder}
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
  const socialsSettings = await getSocialsSettings();
  let textImagesPlaceholders;
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
      tipExists = true;
    } catch {
      tipExists = false;
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
