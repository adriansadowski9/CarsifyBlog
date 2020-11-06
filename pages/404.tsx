import * as React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import Error from '@components/Error';
import Layout from '@components/Layout';
import PageHead from '@components/PageHead';
import { ArticleCategory } from '@pages/artykuly/[id]';
import { TipCategory } from '@pages/porady/[id]';
import { getArticleCategories, getTipCategories } from '@utils/getCategories';

interface Custom404Props {
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
}

const Custom404: NextPage<Custom404Props> = ({ articleCategories, tipCategories }) => {
  const router = useRouter();
  return (
    <Layout articleCategories={articleCategories} tipCategories={tipCategories}>
      <PageHead title="404 - Strona nie istnieje" description="Strona nie istnieje" />
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

  return {
    props: {
      articleCategories,
      tipCategories,
    },
  };
};
