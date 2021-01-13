import * as React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import Error from '@components/Error';
import Layout from '@components/Layout';
import PageHead from '@components/PageHead';
import { attributes } from '@content/pages/404.md';
import { ArticleCategory } from '@pages/artykuly/[id]';
import { SocialsSettings } from '@pages/index';
import { TipCategory } from '@pages/porady/[id]';
import { getArticleCategories, getTipCategories } from '@utils/getCategories';
import { getSocialsSettings } from '@utils/getSettings';

interface Custom404Props {
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
  socialsSettings: SocialsSettings;
}

const Custom404: NextPage<Custom404Props> = ({
  articleCategories,
  tipCategories,
  socialsSettings,
}) => {
  const { pageTitle, pageDescription } = attributes;
  const router = useRouter();

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
      <Error
        heading="404 - Ups... coś poszło nie tak :("
        text="Strona, której szukasz została przeniesiona lub nie istnieje."
        buttonText="Powrót do strony głównej"
        buttonAction={() => router.push('/')}
      />
    </Layout>
  );
};

export default Custom404;

export const getStaticProps: GetStaticProps = async () => {
  const articleCategories = await getArticleCategories();
  const tipCategories = await getTipCategories();
  const socialsSettings = await getSocialsSettings();

  return {
    props: {
      articleCategories,
      tipCategories,
      socialsSettings,
    },
  };
};
