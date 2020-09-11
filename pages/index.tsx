import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { NextPage } from 'next';

import AdCard from '@components/Cards/AdCard';
import ArticleCard from '@components/Cards/ArticleCard';
import InformationCard from '@components/Cards/InformationCard';
import TipCard from '@components/Cards/TipCard';
import Row from '@components/Layout/styled/Row';
import PageHead from '@components/PageHead';
import AdsSection from '@components/Sections/AdsSection';
import ArticlesSection from '@components/Sections/ArticlesSection';
import InformationSection from '@components/Sections/InformationSection';
import SectionName from '@components/Sections/SectionName';
import TipsSection from '@components/Sections/TipsSection';
import { attributes } from '@content/pages/home.md';
import { Article } from '@pages/artykuly/[articleParam]';
import { Ad } from '@pages/ogloszenia/[adParam]';
import { Tip } from '@pages/porady/[tipParam]';
import { getAds, getArticles, getTips } from '@utils/getPosts';

interface HomeProps {
  articlesList: Article[];
  tipsList: Tip[];
  infosList: Tip[];
  adsList: Ad[];
}

const Home: NextPage<HomeProps> = ({ articlesList, tipsList, infosList, adsList }) => {
  const { pageTitle, pageDescription } = attributes;
  return (
    <>
      <PageHead title={pageTitle} description={pageDescription} />
      <Row>
        <ArticlesSection withMargin>
          <SectionName name="Aktualności" />
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
        <div>
          <TipsSection>
            <SectionName name="Moto porady" />
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
          <InformationSection>
            <SectionName name="Informacje" />
            <Carousel
              infiniteLoop
              autoPlay
              swipeable
              stopOnHover
              emulateTouch
              showThumbs={false}
              renderArrowNext={() => null}
              renderArrowPrev={() => null}
              statusFormatter={() => null}
            >
              {infosList.map((information, index) => {
                const { featuredImage, title, highlightedText } = information.attributes;
                const { slug } = information;
                return (
                  <InformationCard
                    key={`${title}-${index}`}
                    image={featuredImage.substring(featuredImage.lastIndexOf('/') + 1)}
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
            </Carousel>
          </InformationSection>
        </div>
      </Row>
      <Row>
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
      </Row>
    </>
  );
};

Home.getInitialProps = async () => {
  const articlesList = await getArticles({ sort: 'desc', count: 6 });
  const tipsList = await getTips({ sort: 'desc', count: 2 });
  const infosList = await getTips({
    sort: 'desc',
    count: 5,
    categories: ['Bezpieczeństwo', 'Technika jazdy', 'Eksploatacja', 'Warto wiedzieć'],
  });
  const adsList = await getAds({ sort: 'desc', count: 4 });
  return { articlesList, tipsList, infosList, adsList };
};

export default Home;
