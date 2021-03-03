import * as React from 'react';
import parse from 'html-react-parser';
import { GetStaticPaths, GetStaticProps, NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import showdown from 'showdown';

import AdCard from '@components/Cards/AdCard';
import Layout from '@components/Layout';
import PageHead from '@components/PageHead';
import Post from '@components/Post';
import MoreSectionTitle from '@components/Post/styled/MoreSectionTitle';
import AdsContainer from '@components/Sections/AdsContainer';
import { ArticleCategory } from '@pages/artykuly/[id]';
import { SocialsSettings } from '@pages/index';
import { TipCategory } from '@pages/porady/[id]';
import { getPixelsCSS, PixelsCSS } from '@plaiceholder/css';
import { getImage } from '@plaiceholder/next';
import createTextImagesPlaceholders from '@utils/createTextImagesPlaceholders';
import { getArticleCategories, getTipCategories } from '@utils/getCategories';
import { getAds } from '@utils/getPosts';
import { getSocialsSettings } from '@utils/getSettings';

interface AdAttributes {
  pageTitle: string;
  pageDescription: string;
  title: string;
  subtitle: string;
  date: Date;
  featuredImage: string;
  imagePlaceholder: PixelsCSS;
  imageSource?: string;
  carData: {
    name: string;
    localization: string;
    year: string;
    course: string;
    body: string;
    engine: string;
    hp: string;
    torque: string;
    gearbox: string;
    doors: string;
    price: string;
  };
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

export interface Ad {
  attributes: AdAttributes;
  slug: string;
}

interface AdProps extends NextPageContext {
  id: string;
  attributes: AdAttributes;
  textImagesPlaceholders: {
    src: string;
    placeholder: PixelsCSS;
  }[];
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
  adExists: boolean;
  moreAds: Ad[];
  socialsSettings: SocialsSettings;
}

const Ad: NextPage<AdProps> = ({
  id,
  attributes,
  textImagesPlaceholders,
  articleCategories,
  tipCategories,
  adExists,
  moreAds,
  socialsSettings,
}) => {
  const router = useRouter();
  if (adExists) {
    const {
      pageTitle,
      pageDescription,
      title,
      subtitle,
      date,
      featuredImage,
      imagePlaceholder,
      imageSource,
      carData,
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
          breadcrumbs={[
            { name: 'Strona główna', link: { href: '/' } },
            { name: 'Perełki z ogłoszeń', link: { href: '/ogloszenia' } },
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
          carData={carData}
          contents={contents}
          galleryImages={galleryArray}
          postId={`ad-${id}`}
          moreSection={
            <AdsContainer isHorizontal>
              <MoreSectionTitle isMore={moreAds.length}>Więcej perełek z ogłoszeń</MoreSectionTitle>
              {moreAds.map((article, index) => {
                const {
                  featuredImage,
                  imagePlaceholder,
                  title,
                  highlightedText,
                  carData,
                } = article.attributes;
                const { slug } = article;
                return (
                  <AdCard
                    key={`${title}-${index}`}
                    image={featuredImage}
                    imagePlaceholder={imagePlaceholder}
                    carData={carData}
                    title={title}
                    textSnippet={highlightedText}
                    slug={slug}
                  />
                );
              })}
            </AdsContainer>
          }
        />
      </Layout>
    );
  } else {
    router.replace('/404');
  }
};

export default Ad;

export const getStaticProps: GetStaticProps = async ({ ...ctx }) => {
  const { id } = ctx.params;
  const articleCategories = await getArticleCategories();
  const tipCategories = await getTipCategories();
  const socialsSettings = await getSocialsSettings();
  let textImagesPlaceholders;
  let markdownFile;
  let moreAds;
  let adExists;

  try {
    markdownFile = await import(`../../content/posts/ads/${id}.md`);
    moreAds = await getAds({
      sort: 'desc',
      count: 4,
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

    adExists = true;
  } catch {
    adExists = false;
  }

  return {
    props: {
      id,
      ...markdownFile,
      articleCategories,
      tipCategories,
      socialsSettings,
      textImagesPlaceholders: textImagesPlaceholders || [],
      moreAds: moreAds || null,
      adExists: adExists || null,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const adSlugs = ((context) => {
    const keys = context.keys();
    return keys.map((key) => key.substring(2, key.length - 3));
  })(require.context('../../content/posts/ads', true, /\.md$/));

  const paths = adSlugs.map((slug) => `/ogloszenia/${slug}`);

  return {
    paths,
    fallback: false,
  };
};
