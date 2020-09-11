import * as React from 'react';
import { NextPage } from 'next';

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
      <div>
        <h3>Kontakt:</h3>
        <div>
          <p>{contactEmail}</p>
          <p>{facebookUrl}</p>
          <p>{twitterUrl}</p>
          <p>{instagramUrl}</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
