import * as React from 'react';
import Head from 'next/head';
import { ThemeContext } from 'styled-components';

import { Theme } from '@utils/theme';

const APP_NAME = 'Carsify';

interface PageHeadProps {
  title: string;
  description: string;
  path: string;
  ogType: 'website' | 'article';
  image?: string;
}

const PageHead: React.FC<PageHeadProps> = ({
  title,
  description,
  path,
  ogType,
  image,
}: PageHeadProps) => {
  const themeContext: Theme = React.useContext(ThemeContext);
  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:url" content={`https://carsify.pl${path}`} />
      {image && <meta property="og:image" content={`https://carsify.pl${image}`} />}
      <meta property="og:locale" content="pl-PL" />
      <meta property="og:site_name" content="Carsify" />
      {ogType === 'article' ? (
        <meta property="og:type" content="article" />
      ) : (
        <meta property="og:type" content="website" />
      )}
      <meta name="application-name" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content={themeContext.colors.bg} />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
};

export default PageHead;
