import * as React from 'react';
import dayjs from 'dayjs';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import TipCard from '@components/Cards/TipCard';
import Categories from '@components/Categories';
import Layout from '@components/Layout';
import PageHead from '@components/PageHead';
import SectionName from '@components/Sections/SectionName';
import TipsContainer from '@components/Sections/TipsContainer';
import { attributes } from '@content/pages/ads.md';
import { ArticleCategory } from '@pages/artykuly/[id]';
import { SocialsSettings } from '@pages/index';
import { Tip, TipCategory } from '@pages/porady/[id]';
import { getArticleCategories, getTipCategories } from '@utils/getCategories';
import { getTips } from '@utils/getPosts';
import { getSocialsSettings } from '@utils/getSettings';

interface TipsProps {
  tipsList: Tip[];
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
  socialsSettings: SocialsSettings;
}

const Tips: NextPage<TipsProps> = ({
  tipsList,
  articleCategories,
  tipCategories,
  socialsSettings,
}) => {
  const { pageTitle, pageDescription } = attributes;
  const router = useRouter();
  const categories = Array.from(tipCategories, (c: TipCategory) => {
    return {
      title: c.attributes.title,
      hrefAs: `/porady/${c.slug}`,
      href: '/porady/[id]',
    };
  });
  categories.unshift({
    title: 'Wszystkie',
    hrefAs: '/porady',
    href: '/porady',
  });
  tipsList.sort((a, b) => dayjs(b.attributes.date).diff(dayjs(a.attributes.date)));
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
        <SectionName name="Moto porady" altTextTag="h1" />
        <TipsContainer hasLongCategories={categories.length > 5} isHorizontal>
          <Categories
            items={categories}
            containerHeight={categories.length > 5 ? '911px' : '443px'}
          />
          {tipsList.map((tip, index) => {
            const {
              featuredImage,
              imagePlaceholder,
              title,
              highlightedText,
              category,
            } = tip.attributes;
            const { slug } = tip;
            const categoryInfo = tipCategories.find(
              (tipCategory) => tipCategory.attributes.title === category
            );

            return (
              <TipCard
                key={`${title}-${index}`}
                image={featuredImage}
                imagePlaceholder={imagePlaceholder}
                title={title}
                textSnippet={highlightedText}
                category={{
                  name: categoryInfo.attributes.title,
                  icon: categoryInfo.attributes.icon,
                }}
                slug={slug}
                altTitleTag="h2"
              />
            );
          })}
        </TipsContainer>
      </section>
    </Layout>
  );
};

export default Tips;

export const getStaticProps: GetStaticProps = async () => {
  const tipsList = await getTips({ sort: 'desc' });
  const articleCategories = await getArticleCategories();
  const tipCategories = await getTipCategories();
  const socialsSettings = await getSocialsSettings();

  return { props: { tipsList, articleCategories, tipCategories, socialsSettings } };
};
