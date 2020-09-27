import * as React from 'react';
import { NextPage } from 'next';

import ContactPage from '@components/Contact';
import PageHead from '@components/PageHead';
import { attributes } from '@content/pages/contact.md';

const Contact: NextPage = () => {
  const {
    pageTitle,
    pageDescription,
    contactEmail,
    facebookUrl,
    twitterUrl,
    instagramUrl,
  } = attributes;
  return (
    <>
      <PageHead title={pageTitle} description={pageDescription} />
      <ContactPage
        contactEmail={contactEmail}
        facebookUrl={facebookUrl}
        twitterUrl={twitterUrl}
        instagramUrl={instagramUrl}
      />
    </>
  );
};

export default Contact;
