import React from 'react';
import dayjs from 'dayjs';
import { GetStaticProps, NextPage } from 'next';

import AdCard from '@components/Cards/AdCard';
import Layout from '@components/Layout';
import PageHead from '@components/PageHead';
import AdsSection from '@components/Sections/AdsSection';
import SectionName from '@components/Sections/SectionName';
import { attributes } from '@content/pages/ads.md';
import { ArticleCategory } from '@pages/artykuly/[id]';
import { Ad } from '@pages/ogloszenia/[id]';
import { TipCategory } from '@pages/porady/[id]';
import { getArticleCategories, getTipCategories } from '@utils/getCategories';
import { getAds } from '@utils/getPosts';

interface AdsProps {
  adsList: Ad[];
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
}

const Ads: NextPage<AdsProps> = ({ adsList, articleCategories, tipCategories }) => {
  const { pageTitle, pageDescription } = attributes;
  adsList.sort((a, b) => dayjs(b.attributes.date).diff(dayjs(a.attributes.date)));
  return (
    <Layout articleCategories={articleCategories} tipCategories={tipCategories}>
      <PageHead title={pageTitle} description={pageDescription} />
      <AdsSection>
        <SectionName name="Perełki z ogłoszeń" />
        {adsList.map((ad, index) => {
          const { featuredImage, title, highlightedText, carData } = ad.attributes;
          const { slug } = ad;
          return (
            <AdCard
              key={`${title}-${index}`}
              image={featuredImage.substring(featuredImage.lastIndexOf('/') + 1)}
              title={title}
              textSnippet={
                highlightedText.length > 160
                  ? `${highlightedText.substring(0, 160)}...`
                  : highlightedText
              }
              carData={carData}
              slug={slug}
            />
          );
        })}
      </AdsSection>
    </Layout>
  );
};

export default Ads;

export const getStaticProps: GetStaticProps = async () => {
  const adsList = await getAds({ sort: 'desc' });
  const articleCategories = await getArticleCategories();
  const tipCategories = await getTipCategories();

  return {
    props: {
      adsList,
      articleCategories,
      tipCategories,
    },
  };
};
