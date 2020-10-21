import * as React from 'react';
import { GetStaticProps, NextPage } from 'next';

import AdCard from '@components/Cards/AdCard';
import ArticleCard from '@components/Cards/ArticleCard';
import InformationCard from '@components/Cards/InformationCard';
import TipCard from '@components/Cards/TipCard';
import Layout from '@components/Layout';
import Row from '@components/Layout/styled/Row';
import PageHead from '@components/PageHead';
import AdsSection from '@components/Sections/AdsSection';
import ArticlesSection from '@components/Sections/ArticlesSection';
import InformationSection from '@components/Sections/InformationSection';
import SectionName from '@components/Sections/SectionName';
import TipsSection from '@components/Sections/TipsSection';
import StyledCarousel from '@components/StyledCarousel/StyledCarousel';
import { attributes } from '@content/pages/home.md';
import { Article, ArticleCategory } from '@pages/artykuly/[id]';
import { Ad } from '@pages/ogloszenia/[id]';
import { Tip, TipCategory } from '@pages/porady/[id]';
import { getArticleCategories, getTipCategories } from '@utils/getCategories';
import { getAds, getArticles, getTips } from '@utils/getPosts';

interface HomeProps {
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
  articlesList: Article[];
  tipsList: Tip[];
  infosList: Tip[];
  adsList: Ad[];
}

const Home: NextPage<HomeProps> = ({
  articleCategories,
  tipCategories,
  articlesList,
  tipsList,
  infosList,
  adsList,
}) => {
  const { pageTitle, pageDescription } = attributes;
  return (
    <Layout articleCategories={articleCategories} tipCategories={tipCategories}>
      <PageHead title={pageTitle} description={pageDescription} />
      <Row>
        <ArticlesSection withMargin indexPage={true}>
          <SectionName name="Aktualności" gridColumn="1 / 3" />
          {articlesList.map((article, index) => {
            const { featuredImage, title, highlightedText, category } = article.attributes;
            const { slug } = article;
            const categoryInfo = articleCategories.find(
              (articleCategory) => articleCategory.attributes.title === category
            );

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
                category={{
                  name: categoryInfo.attributes.title,
                  icon: categoryInfo.attributes.icon,
                }}
                slug={slug}
              />
            );
          })}
        </ArticlesSection>
        <div>
          <TipsSection>
            <SectionName name="Moto porady" gridColumn="1" />
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
                />
              );
            })}
          </TipsSection>
          <InformationSection>
            <SectionName name="Informacje" />
            <StyledCarousel
              autoplay
              autoplayInterval={3000}
              pauseOnHover
              wrapAround
              dragging
              easing={'easePolyInOut'}
              speed={1000}
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
            </StyledCarousel>
          </InformationSection>
        </div>
      </Row>
      <Row>
        <AdsSection indexPage={true}>
          <SectionName name="Perełki z ogłoszeń" gridColumn="1 / 5" />
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
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const articleCategories = await getArticleCategories();
  const tipCategories = await getTipCategories();
  const articlesList = await getArticles({ sort: 'desc', count: 6 });
  const tipsList = await getTips({ sort: 'desc', count: 2 });
  const infosList = await getTips({
    sort: 'desc',
    count: 5,
    categories: ['Bezpieczeństwo', 'Technika jazdy', 'Eksploatacja', 'Warto wiedzieć'],
  });
  const adsList = await getAds({ sort: 'desc', count: 4 });

  return {
    props: {
      articleCategories,
      tipCategories,
      articlesList,
      tipsList,
      infosList,
      adsList,
    },
  };
};
