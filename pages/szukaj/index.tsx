import React from 'react';
import Fuse from 'fuse.js';
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
import { SocialsSettings } from '@pages/index';
import { TipCategory } from '@pages/porady/[id]';
import { getArticleCategories, getTipCategories } from '@utils/getCategories';
import { getAllPosts } from '@utils/getPosts';
import { getSocialsSettings } from '@utils/getSettings';

interface SearchProps {
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
  socialsSettings: SocialsSettings;
  allPosts: any[];
}

const SearchResults: NextPage<SearchProps> = ({
  articleCategories,
  tipCategories,
  socialsSettings,
  allPosts,
}) => {
  const { pageTitle, pageDescription } = attributes;
  const {
    query: { q: searchQuery },
    asPath,
  } = useRouter();

  const searchOptions = {
    minMatchCharLength: searchQuery?.length < 3 ? searchQuery.length : 3,
    keys: ['attributes.title', 'attributes.subtitle', 'attributes.highlightedText'],
  };

  const fuse = new Fuse(allPosts, searchOptions);

  const results = fuse.search(searchQuery?.toString() ?? '');

  return (
    <Layout
      articleCategories={articleCategories}
      tipCategories={tipCategories}
      socialsSettings={socialsSettings}
    >
      <PageHead title={pageTitle} description={pageDescription} path={asPath} ogType="website" />
      <section>
        <SectionName name={`Wyniki wyszukiwania dla: ${searchQuery}`} altTextTag="h1" />
        <SearchResultsContainer>
          {results.map(({ item: post }, index) => {
            if (post.card === 'article') {
              const {
                featuredImage,
                imagePlaceholder,
                title,
                highlightedText,
                category,
              } = post.attributes;
              const categoryInfo = articleCategories.find(
                (articleCategory) => articleCategory.attributes.title === category
              );
              return (
                <ArticleCard
                  key={`${post.slug}-${index}`}
                  image={featuredImage}
                  imagePlaceholder={imagePlaceholder}
                  title={title}
                  textSnippet={highlightedText}
                  category={{
                    name: categoryInfo.attributes.title,
                    icon: categoryInfo.attributes.icon,
                  }}
                  slug={post.slug}
                  altTitleTag="h2"
                  preloadImage={index < 2}
                />
              );
            }
            if (post.card === 'tip') {
              const {
                featuredImage,
                imagePlaceholder,
                title,
                highlightedText,
                category,
              } = post.attributes;
              const categoryInfo = tipCategories.find(
                (tipCategory) => tipCategory.attributes.title === category
              );
              return (
                <TipCard
                  key={`${post.slug}-${index}`}
                  image={featuredImage}
                  imagePlaceholder={imagePlaceholder}
                  title={title}
                  textSnippet={highlightedText}
                  category={{
                    name: categoryInfo.attributes.title,
                    icon: categoryInfo.attributes.icon,
                  }}
                  slug={post.slug}
                  altTitleTag="h2"
                  smallerCard
                  preloadImage={index < 2}
                />
              );
            }
            if (post.card === 'ad') {
              const {
                featuredImage,
                imagePlaceholder,
                title,
                highlightedText,
                carData,
              } = post.attributes;
              return (
                <AdCard
                  key={`${post.slug}-${index}`}
                  image={featuredImage}
                  imagePlaceholder={imagePlaceholder}
                  title={title}
                  textSnippet={highlightedText}
                  carData={carData}
                  slug={post.slug}
                  altTitleTag="h2"
                  enlargedCard
                  preloadImage={index < 2}
                />
              );
            }
          })}
        </SearchResultsContainer>
      </section>
    </Layout>
  );
};

export default SearchResults;

export const getStaticProps: GetStaticProps = async () => {
  const articleCategories = await getArticleCategories();
  const tipCategories = await getTipCategories();
  const socialsSettings = await getSocialsSettings();
  const allPosts = await getAllPosts();

  return {
    props: {
      articleCategories,
      tipCategories,
      socialsSettings,
      allPosts,
    },
  };
};
