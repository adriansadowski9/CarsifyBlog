import * as React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { DotGroup, Slide, Slider } from 'pure-react-carousel';

import AdCard from '@components/Cards/AdCard';
import ArticleCard from '@components/Cards/ArticleCard';
import InformationCard from '@components/Cards/InformationCard';
import MFindWidgetCard from '@components/Cards/MFindWidgetCard';
import TipCard from '@components/Cards/TipCard';
import Layout from '@components/Layout';
import Row from '@components/Layout/styled/Row';
import PageHead from '@components/PageHead';
import AdsContainer from '@components/Sections/AdsContainer';
import AdsSection from '@components/Sections/AdsSection';
import ArticlesContainer from '@components/Sections/ArticlesContainer';
import InformationSection from '@components/Sections/InformationSection';
import SectionName from '@components/Sections/SectionName';
import TipsContainer from '@components/Sections/TipsContainer';
import StyledCarousel from '@components/StyledCarousel/StyledCarousel';
import { attributes } from '@content/pages/home.md';
import { Article, ArticleCategory } from '@pages/artykuly/[id]';
import { Ad } from '@pages/ogloszenia/[id]';
import { Tip, TipCategory } from '@pages/porady/[id]';
import { getArticleCategories, getTipCategories } from '@utils/getCategories';
import { getAds, getArticles, getTips } from '@utils/getPosts';
import { getSocialsSettings } from '@utils/getSettings';

export interface SocialsSettings {
  attributes: {
    facebookUrl: string;
    instagramUrl: string;
    twitterUrl: string;
  };
}

interface HomeProps {
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
  articlesList: Article[];
  tipsList: Tip[];
  infosList: Tip[];
  adsList: Ad[];
  socialsSettings: SocialsSettings;
}

const Home: NextPage<HomeProps> = ({
  articleCategories,
  tipCategories,
  articlesList,
  tipsList,
  infosList,
  adsList,
  socialsSettings,
}) => {
  const { pageTitle, pageDescription } = attributes;
  const router = useRouter();
  const MFIND_WIDGET_POSITION = 3;

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
      <Row>
        <section>
          <SectionName name="Aktualności" />
          <ArticlesContainer withMargin indexPage={true}>
            {articlesList.map((article, index) => {
              const { featuredImage, title, highlightedText, category } = article.attributes;
              const { slug } = article;
              const categoryInfo = articleCategories.find(
                (articleCategory) => articleCategory.attributes.title === category
              );

              return (
                <React.Fragment
                  key={`${title}-${index}${
                    index === MFIND_WIDGET_POSITION ? '-with-mfind-widget' : ''
                  }`}
                >
                  {index === MFIND_WIDGET_POSITION ? (
                    <MFindWidgetCard key={`mfind-widget-${index}`} />
                  ) : (
                    ''
                  )}
                  <ArticleCard
                    key={`${title}-${index}`}
                    image={featuredImage.substring(featuredImage.lastIndexOf('/') + 1)}
                    title={title}
                    textSnippet={highlightedText}
                    category={{
                      name: categoryInfo.attributes.title,
                      icon: categoryInfo.attributes.icon,
                    }}
                    slug={slug}
                  />
                </React.Fragment>
              );
            })}
          </ArticlesContainer>
        </section>
        <div>
          <section>
            <SectionName name="Moto porady" />
            <TipsContainer>
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
          </section>
          <InformationSection>
            <SectionName name="Informacje" />
            <StyledCarousel
              naturalSlideHeight={239}
              naturalSlideWidth={400}
              interval={3000}
              totalSlides={infosList.length}
              isPlaying={true}
              infinite={true}
            >
              <Slider moveThreshold={0.2}>
                {infosList.map((information, index) => {
                  const { featuredImage, title, highlightedText } = information.attributes;
                  const { slug } = information;
                  return (
                    <Slide index={index} key={`${title}-${index}`}>
                      <InformationCard
                        image={featuredImage.substring(featuredImage.lastIndexOf('/') + 1)}
                        title={title}
                        textSnippet={highlightedText}
                        slug={slug}
                      />
                    </Slide>
                  );
                })}
              </Slider>
              <DotGroup className="dots" />
            </StyledCarousel>
          </InformationSection>
        </div>
      </Row>
      <Row>
        <AdsSection>
          <SectionName name="Perełki z ogłoszeń" />
          <AdsContainer indexPage={true}>
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
                />
              );
            })}
          </AdsContainer>
        </AdsSection>
      </Row>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const articleCategories = await getArticleCategories();
  const tipCategories = await getTipCategories();
  const articlesList = await getArticles({ sort: 'desc', count: 5 });
  const tipsList = await getTips({ sort: 'desc', count: 2 });
  const infosList = await getTips({
    sort: 'desc',
    count: 5,
    categories: ['Bezpieczeństwo', 'Technika jazdy', 'Eksploatacja', 'Warto wiedzieć'],
  });
  const adsList = await getAds({ sort: 'desc', count: 4 });
  const socialsSettings = await getSocialsSettings();

  return {
    props: {
      articleCategories,
      tipCategories,
      articlesList,
      tipsList,
      infosList,
      adsList,
      socialsSettings,
    },
  };
};
