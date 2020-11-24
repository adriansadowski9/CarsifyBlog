import * as React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import ContactPage from '@components/Contact';
import Layout from '@components/Layout';
import PageHead from '@components/PageHead';
import { attributes } from '@content/pages/contact.md';
import { ArticleCategory } from '@pages/artykuly/[id]';
import { TipCategory } from '@pages/porady/[id]';
import { getArticleCategories, getTipCategories } from '@utils/getCategories';

interface ContactProps {
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
}

const Contact: NextPage<ContactProps> = ({ articleCategories, tipCategories }) => {
  const {
    pageTitle,
    pageDescription,
    contactEmail,
    facebookUrl,
    twitterUrl,
    instagramUrl,
    contactCategories,
  } = attributes;
  const router = useRouter();
  return (
    <Layout articleCategories={articleCategories} tipCategories={tipCategories}>
      <PageHead
        title={pageTitle}
        description={pageDescription}
        path={router.asPath}
        ogType="website"
      />
      <ContactPage
        contactEmail={contactEmail}
        facebookUrl={facebookUrl}
        twitterUrl={twitterUrl}
        instagramUrl={instagramUrl}
        contactCategories={contactCategories.split(' ')}
      />
    </Layout>
  );
};

export default Contact;

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
