import dayjs from 'dayjs';
import { Article } from 'pages/artykuly/[id]';
import { Ad } from 'pages/ogloszenia/[id]';
import { Tip } from 'pages/porady/[id]';

import generateImagePlaceholder from '@utils/generateImagePlaceholder';

const importArticles = async () => {
  const markdownFiles = require
    .context('../content/posts/articles', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/posts/articles/${path}`);
      markdown.attributes.imagePlaceholder = await generateImagePlaceholder(
        markdown.attributes.featuredImage
      );
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

const importTips = async () => {
  const markdownFiles = require
    .context('../content/posts/tips', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/posts/tips/${path}`);
      markdown.attributes.imagePlaceholder = await generateImagePlaceholder(
        markdown.attributes.featuredImage
      );
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

const importAds = async () => {
  const markdownFiles = require
    .context('../content/posts/ads', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/posts/ads/${path}`);
      markdown.attributes.imagePlaceholder = await generateImagePlaceholder(
        markdown.attributes.featuredImage
      );
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

interface getArticlesArgs {
  sort: string;
  categories?: string[];
  count?: number;
  excludeSlug?: string;
}

export const getArticles: (args: getArticlesArgs) => Promise<Article[]> = async ({
  sort,
  categories,
  count,
  excludeSlug,
}: getArticlesArgs) => {
  let importedArticles = await importArticles();
  if (categories) {
    importedArticles = importedArticles.filter((article) =>
      categories.includes(article.attributes.category)
    );
  }
  if (excludeSlug) {
    importedArticles = importedArticles.filter((article) => article.slug !== excludeSlug);
  }
  if (sort === 'asc') {
    importedArticles.sort((a, b) => dayjs(a.attributes.date).diff(dayjs(b.attributes.date)));
  } else {
    importedArticles.sort((a, b) => dayjs(b.attributes.date).diff(dayjs(a.attributes.date)));
  }

  return count ? importedArticles.slice(0, count) : importedArticles;
};

interface getTipsArgs {
  sort: string;
  categories?: string[];
  count?: number;
  excludeSlug?: string;
}

export const getTips: (args: getTipsArgs) => Promise<Tip[]> = async ({
  sort,
  categories,
  count,
  excludeSlug,
}: getTipsArgs) => {
  let importedTips = await importTips();
  if (categories) {
    importedTips = importedTips.filter((tip) => categories.includes(tip.attributes.category));
  }
  if (excludeSlug) {
    importedTips = importedTips.filter((tip) => tip.slug !== excludeSlug);
  }
  if (!importedTips.length && excludeSlug) {
    importedTips = await importTips();
    importedTips = importedTips.filter((tip) => tip.slug !== excludeSlug);
  }
  if (sort === 'asc') {
    importedTips.sort((a, b) => dayjs(a.attributes.date).diff(dayjs(b.attributes.date)));
  } else {
    importedTips.sort((a, b) => dayjs(b.attributes.date).diff(dayjs(a.attributes.date)));
  }

  return count ? importedTips.slice(0, count) : importedTips;
};

interface getAdsArgs {
  sort: string;
  count?: number;
  excludeSlug?: string;
}

export const getAds: (args: getAdsArgs) => Promise<Ad[]> = async ({
  sort,
  count,
  excludeSlug,
}: getAdsArgs) => {
  let importedAds = await importAds();

  if (excludeSlug) {
    importedAds = importedAds.filter((ad) => ad.slug !== excludeSlug);
  }
  if (sort === 'asc') {
    importedAds.sort((a, b) => dayjs(a.attributes.date).diff(dayjs(b.attributes.date)));
  } else {
    importedAds.sort((a, b) => dayjs(b.attributes.date).diff(dayjs(a.attributes.date)));
  }

  return count ? importedAds.slice(0, count) : importedAds;
};

export const getAllPosts = async () => {
  const articles = await importArticles();
  const tips = await importTips();
  const ads = await importAds();

  articles.map((article) => (article.card = 'article'));
  tips.map((tip) => (tip.card = 'tip'));
  ads.map((ad) => (ad.card = 'ad'));

  return [...articles, ...tips, ...ads];
};
