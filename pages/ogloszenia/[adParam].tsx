import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';

import AdCard from '@components/Cards/AdCard';
import PageHead from '@components/PageHead';
import Post from '@components/Post';
import MoreSectionTitle from '@components/Post/styled/MoreSectionTitle';
import AdsSection from '@components/Sections/AdsSection';
import { getAds } from '@utils/getPosts';

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
}

export interface Ad {
  attributes: AdAttributes;
  slug: string;
}

interface AdProps extends NextPageContext {
  attributes: AdAttributes;
  adExists: boolean;
  moreAds: Ad[];
}

const Ad: NextPage<AdProps> = ({ attributes, adExists, moreAds }) => {
  if (adExists) {
    const {
      title,
      subtitle,
      date,
      featuredImage,
      carData,
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
        <PageHead title={`Ad - ${title}`} description="Ad description" />
        <Post
          date={date}
          title={title}
          subtitle={subtitle}
          highlightedText={highlightedText}
          responsiveImage={responsiveImage}
          shareUrl={shareUrl}
          text={text}
          carData={carData}
          contents={contents}
          moreSection={
            <AdsSection isHorizontal>
              <MoreSectionTitle>Więcej perełek z ogłoszeń</MoreSectionTitle>
              {moreAds.map((article, index) => {
                const { featuredImage, title, highlightedText, carData } = article.attributes;
                const { slug } = article;
                return (
                  <AdCard
                    key={`${title}-${index}`}
                    image={featuredImage.substring(featuredImage.lastIndexOf('/') + 1)}
                    carData={carData}
                    title={title}
                    textSnippet={
                      highlightedText.length > 160
                        ? `${highlightedText.substring(0, 160)}...`
                        : highlightedText
                    }
                    slug={slug}
                  />
                );
              })}
            </AdsSection>
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

Ad.getInitialProps = async ({ ...props }) => {
  const { adParam } = props.query;
  let markdownFile;
  let moreAds;
  let adExists;

  try {
    markdownFile = await import(`../../content/posts/ads/${adParam}.md`);
    moreAds = await getAds({
      sort: 'desc',
      count: 4,
      excludeSlug: adParam.toString(),
    });
    adExists = true;
  } catch {
    adExists = false;
  }
  return {
    ...markdownFile,
    moreAds,
    adExists,
  };
};

export default Ad;
