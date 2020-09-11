import React from 'react';
import dayjs from 'dayjs';
import { NextPage } from 'next';

import AdCard from '@components/Cards/AdCard';
import PageHead from '@components/PageHead';
import AdsSection from '@components/Sections/AdsSection';
import SectionName from '@components/Sections/SectionName';
import { attributes } from '@content/pages/ads.md';
import { Ad } from '@pages/ogloszenia/[adParam]';
import { getAds } from '@utils/getPosts';

interface AdsProps {
  adsList: Ad[];
}

const Ads: NextPage<AdsProps> = ({ adsList }) => {
  const { pageTitle, pageDescription } = attributes;
  adsList.sort((a, b) => dayjs(b.attributes.date).diff(dayjs(a.attributes.date)));
  return (
    <>
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
    </>
  );
};

Ads.getInitialProps = async () => {
  const adsList = await getAds({ sort: 'desc' });
  return { adsList };
};

export default Ads;
