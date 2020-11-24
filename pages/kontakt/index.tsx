import * as React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import ContactPage from '@components/Contact';
import Layout from '@components/Layout';
import PageHead from '@components/PageHead';
import { attributes } from '@content/pages/contact.md';
import { ArticleCategory } from '@pages/artykuly/[id]';
import { TipCategory } from '@pages/porady/[id]';
import { getArticleCategories, getContactCategories, getTipCategories } from '@utils/getCategories';

export interface ContactCategory {
  slug: string;
  attributes: {
    title: string;
    position: number;
  };
}

interface ContactProps {
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
  contactCategories: ContactCategory[];
}

const Contact: NextPage<ContactProps> = ({
  articleCategories,
  tipCategories,
  contactCategories,
}) => {
  const {
    pageTitle,
    pageDescription,
    contactEmail,
    facebookUrl,
    twitterUrl,
    instagramUrl,
  } = attributes;
  const router = useRouter();
  const categoriesArray = contactCategories
    .map((category) => category.attributes)
    .sort((a, b) => a.position - b.position)
    .map((a) => a.title);

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
        contactCategories={categoriesArray}
      />
    </Layout>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async () => {
  const articleCategories = await getArticleCategories();
  const tipCategories = await getTipCategories();
  const contactCategories = await getContactCategories();
  return {
    props: {
      articleCategories,
      tipCategories,
      contactCategories,
    },
  };
};
