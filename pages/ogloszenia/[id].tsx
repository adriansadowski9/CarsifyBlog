import * as React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';

import AdCard from '@components/Cards/AdCard';
import Layout from '@components/Layout';
import PageHead from '@components/PageHead';
import Post from '@components/Post';
import MoreSectionTitle from '@components/Post/styled/MoreSectionTitle';
import AdsContainer from '@components/Sections/AdsContainer';
import { ArticleCategory } from '@pages/artykuly/[id]';
import { SocialsSettings } from '@pages/index';
import { TipCategory } from '@pages/porady/[id]';
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
  }[];
}

export interface Ad {
  attributes: AdAttributes;
  slug: string;
}

interface AdProps extends NextPageContext {
  attributes: AdAttributes;
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
  adExists: boolean;
  moreAds: Ad[];
  socialsSettings: SocialsSettings;
}

const Ad: NextPage<AdProps> = ({
  attributes,
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
      : undefined;
    const image = featuredImage.substring(featuredImage.lastIndexOf('/') + 1);
    const responsiveImage = require(`../../public/assets/img/${image}?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=800&sizes[]=820&sizes[]=1200&&sizes[]=1260&sizes[]=1640&sizes[]=2520`);

    const galleryImages = galleryArray
      ? galleryArray.map((galleryItem) => ({
          image: galleryItem.image.substring(galleryItem.image.lastIndexOf('/') + 1),
          alt: galleryItem.alt,
        }))
      : [];
    const galleryResponsiveImages = galleryImages.map((galleryItem) => ({
      image: require(`../../public/assets/img/${galleryItem.image}?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=800&sizes[]=820&sizes[]=1200&sizes[]=1260&sizes[]=1640&sizes[]=2520`),
      alt: galleryItem.alt,
    }));
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
          image={
            responsiveImage.images.find((image) => image.width === 1200)?.path ??
            responsiveImage.src
          }
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
          responsiveImage={responsiveImage}
          shareUrl={shareUrl}
          text={text}
          carData={carData}
          contents={contents}
          galleryImages={galleryResponsiveImages}
          moreSection={
            <AdsContainer isHorizontal>
              <MoreSectionTitle isMore={moreAds.length}>Więcej perełek z ogłoszeń</MoreSectionTitle>
              {moreAds.map((article, index) => {
                const { featuredImage, title, highlightedText, carData } = article.attributes;
                const { slug } = article;
                return (
                  <AdCard
                    key={`${title}-${index}`}
                    image={featuredImage.substring(featuredImage.lastIndexOf('/') + 1)}
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
    adExists = true;
  } catch {
    adExists = false;
  }

  return {
    props: {
      ...markdownFile,
      articleCategories,
      tipCategories,
      socialsSettings,
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
