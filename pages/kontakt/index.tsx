import * as React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import ContactPage from '@components/Contact';
import Layout from '@components/Layout';
import PageHead from '@components/PageHead';
import { attributes } from '@content/pages/contact.md';
import { ArticleCategory } from '@pages/artykuly/[id]';
import { SocialsSettings } from '@pages/index';
import { TipCategory } from '@pages/porady/[id]';
import { getArticleCategories, getContactCategories, getTipCategories } from '@utils/getCategories';
import { getContactSettings, getSocialsSettings } from '@utils/getSettings';

export interface ContactCategory {
  slug: string;
  attributes: {
    title: string;
    position: number;
  };
}

export interface ContactSettings {
  attributes: {
    contactEmail: string;
  };
}

interface ContactProps {
  articleCategories: ArticleCategory[];
  tipCategories: TipCategory[];
  contactCategories: ContactCategory[];
  contactSettings: ContactSettings;
  socialsSettings: SocialsSettings;
}

const Contact: NextPage<ContactProps> = ({
  articleCategories,
  tipCategories,
  contactCategories,
  contactSettings,
  socialsSettings,
}) => {
  const { pageTitle, pageDescription } = attributes;
  const router = useRouter();
  const categoriesArray = contactCategories
    .map((category) => category.attributes)
    .sort((a, b) => a.position - b.position)
    .map((a) => a.title);
  const { contactEmail } = contactSettings.attributes;
  const { facebookUrl, instagramUrl, twitterUrl } = socialsSettings.attributes;

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
  const contactSettings = await getContactSettings();
  const socialsSettings = await getSocialsSettings();

  return {
    props: {
      articleCategories,
      tipCategories,
      contactCategories,
      contactSettings,
      socialsSettings,
    },
  };
};
