import React from 'react';
import dayjs from 'dayjs';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import AdCard from '@components/Cards/AdCard';
import Layout from '@components/Layout';
import PageHead from '@components/PageHead';
import AdsContainer from '@components/Sections/AdsContainer';
import SectionName from '@components/Sections/SectionName';
import { attributes } from '@content/pages/ads.md';
import { ArticleCategory } from '@pages/artykuly/[id]';
import { SocialsSettings } from '@pages/index';
import { Ad } from '@pages/ogloszenia/[id]';
import { TipCategory } from '@pages/porady/[id]';
import { getArticleCategories, getTipCategories } from '@utils/getCategories';
import { getAds } from '@utils/getPosts';
import { getSocialsSettings } from '@utils/getSettings';

interface AdsProps {
  adsList: Ad[];
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
  socialsSettings: SocialsSettings;
}

const Ads: NextPage<AdsProps> = ({
  adsList,
  articleCategories,
  tipCategories,
  socialsSettings,
}) => {
  const { pageTitle, pageDescription } = attributes;
  const router = useRouter();
  adsList.sort((a, b) => dayjs(b.attributes.date).diff(dayjs(a.attributes.date)));
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
        <SectionName name="Perełki z ogłoszeń" altTextTag="h1" />
        <AdsContainer>
          {adsList.map((ad, index) => {
            const { featuredImage, title, highlightedText, carData } = ad.attributes;
            const { slug } = ad;
            return (
              <AdCard
                key={`${title}-${index}`}
                image={featuredImage.substring(featuredImage.lastIndexOf('/') + 1)}
                title={title}
                textSnippet={highlightedText}
                carData={carData}
                slug={slug}
                altTitleTag="h2"
              />
            );
          })}
        </AdsContainer>
      </section>
    </Layout>
  );
};

export default Ads;

export const getStaticProps: GetStaticProps = async () => {
  const adsList = await getAds({ sort: 'desc' });
  const articleCategories = await getArticleCategories();
  const tipCategories = await getTipCategories();
  const socialsSettings = await getSocialsSettings();

  return {
    props: {
      adsList,
      articleCategories,
      tipCategories,
      socialsSettings,
    },
  };
};
