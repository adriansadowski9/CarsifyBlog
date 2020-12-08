import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import AdCard from '@components/Cards/AdCard';
import ArticleCard from '@components/Cards/ArticleCard';
import TipCard from '@components/Cards/TipCard';
import Layout from '@components/Layout';
import PageHead from '@components/PageHead';
import SearchResultsContainer from '@components/Sections/SearchResultsContainer';
import SectionName from '@components/Sections/SectionName';
import { attributes } from '@content/pages/ads.md';
import { ArticleCategory } from '@pages/artykuly/[id]';
import { TipCategory } from '@pages/porady/[id]';
import { getArticleCategories, getTipCategories } from '@utils/getCategories';
import IconName from '@utils/iconNames';

interface SearchProps {
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
}

const SearchResults: NextPage<SearchProps> = ({ articleCategories, tipCategories }) => {
  const { pageTitle, pageDescription } = attributes;
  const router = useRouter();
  return (
    <Layout articleCategories={articleCategories} tipCategories={tipCategories}>
      <PageHead
        title={pageTitle}
        description={pageDescription}
        path={router.asPath}
        ogType="website"
      />
      <section>
        <SectionName name="Wyszukiwanie dla: przykladowe-wyszukanie" altTextTag="h1" />
        <SearchResultsContainer>
          <ArticleCard
            image="ferrari-308-gtb.jpg"
            title="Testowy artykuł"
            textSnippet="Amerykańska marka samochodów potwierdziła, że zamierza wprowadzić na rynek nowy model elektryczny oparty na tej samej platformie co Ford Mustang Mach-E. Oba poj..."
            category={{ name: 'Wiadomości', icon: IconName.News }}
            slug="ford-potwierdza-nowy-model-elektryczny-na-platformie-mustanga-mach-e"
          />
          <AdCard
            image="ferrari-308-gtb.jpg"
            title="Testowe ogloszenie"
            textSnippet="308 GTB zadebiutował na pokazach w Paryżu i Londynie w 1975 roku. Zbudowany według projektu Leonardo Fioravanti’ego, zachował V8 z Ferrari 308 GT4, aczkolwiek z..."
            carData={{
              name: 'Lorem ipsum',
              localization: 'Warszawa',
              year: '2004',
              course: '150 000 km',
              body: 'coupe',
              engine: '3.5l',
              hp: '300',
              torque: '400',
              gearbox: 'Manualna',
              doors: '5',
              price: '150 000zł',
            }}
            slug="ferrari-308"
            altTitleTag="h2"
            enlargedCard
          />
          <TipCard
            image="ferrari-308-gtb.jpg"
            title="Testowa porada"
            textSnippet="Dbanie o odpowiedni stan i wymiana klocków hamulcowych we właściwym czasie zapewnia bezpieczeństwo i może uchronić nas przed przykrym w skutkach zdarzeniem drog..."
            category={{ name: 'Auto detailing', icon: IconName.Bucket }}
            slug="czym-sa-klocki-hamulcowe-i-kiedy-nalezy-je-wymieniac"
            smallerCard
          />
          <TipCard
            image="ferrari-308-gtb.jpg"
            title="Testowa porada"
            textSnippet="Dbanie o odpowiedni stan i wymiana klocków hamulcowych we właściwym czasie zapewnia bezpieczeństwo i może uchronić nas przed przykrym w skutkach zdarzeniem drog..."
            category={{ name: 'Auto detailing', icon: IconName.Bucket }}
            slug="czym-sa-klocki-hamulcowe-i-kiedy-nalezy-je-wymieniac"
            smallerCard
          />
          <ArticleCard
            image="ferrari-308-gtb.jpg"
            title="Testowy artykuł"
            textSnippet="Amerykańska marka samochodów potwierdziła, że zamierza wprowadzić na rynek nowy model elektryczny oparty na tej samej platformie co Ford Mustang Mach-E. Oba poj..."
            category={{ name: 'Wiadomości', icon: IconName.News }}
            slug="ford-potwierdza-nowy-model-elektryczny-na-platformie-mustanga-mach-e"
          />
          <AdCard
            image="ferrari-308-gtb.jpg"
            title="Testowe ogloszenie"
            textSnippet="308 GTB zadebiutował na pokazach w Paryżu i Londynie w 1975 roku. Zbudowany według projektu Leonardo Fioravanti’ego, zachował V8 z Ferrari 308 GT4, aczkolwiek z..."
            carData={{
              name: 'Lorem ipsum',
              localization: 'Warszawa',
              year: '2004',
              course: '150 000 km',
              body: 'coupe',
              engine: '3.5l',
              hp: '300',
              torque: '400',
              gearbox: 'Manualna',
              doors: '5',
              price: '150 000zł',
            }}
            slug="ferrari-308"
            altTitleTag="h2"
            enlargedCard
          />
          <AdCard
            image="ferrari-308-gtb.jpg"
            title="Testowe ogloszenie"
            textSnippet="308 GTB zadebiutował na pokazach w Paryżu i Londynie w 1975 roku. Zbudowany według projektu Leonardo Fioravanti’ego, zachował V8 z Ferrari 308 GT4, aczkolwiek z..."
            carData={{
              name: 'Lorem ipsum',
              localization: 'Warszawa',
              year: '2004',
              course: '150 000 km',
              body: 'coupe',
              engine: '3.5l',
              hp: '300',
              torque: '400',
              gearbox: 'Manualna',
              doors: '5',
              price: '150 000zł',
            }}
            slug="ferrari-308"
            altTitleTag="h2"
            enlargedCard
          />
          <TipCard
            image="ferrari-308-gtb.jpg"
            title="Testowa porada"
            textSnippet="Dbanie o odpowiedni stan i wymiana klocków hamulcowych we właściwym czasie zapewnia bezpieczeństwo i może uchronić nas przed przykrym w skutkach zdarzeniem drog..."
            category={{ name: 'Auto detailing', icon: IconName.Bucket }}
            slug="czym-sa-klocki-hamulcowe-i-kiedy-nalezy-je-wymieniac"
            smallerCard
          />
          <ArticleCard
            image="ferrari-308-gtb.jpg"
            title="Testowy artykuł"
            textSnippet="Amerykańska marka samochodów potwierdziła, że zamierza wprowadzić na rynek nowy model elektryczny oparty na tej samej platformie co Ford Mustang Mach-E. Oba poj..."
            category={{ name: 'Wiadomości', icon: IconName.News }}
            slug="ford-potwierdza-nowy-model-elektryczny-na-platformie-mustanga-mach-e"
          />
        </SearchResultsContainer>
      </section>
    </Layout>
  );
};

export default SearchResults;

export const getStaticProps: GetStaticProps = async () => {
  const articleCategories = await getArticleCategories();
  const tipCategories = await getTipCategories();

  return {
    props: {
      articleCategories,
      tipCategories,
    },
  };
};
