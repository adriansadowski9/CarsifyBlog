import dayjs from 'dayjs';

const importArticles = async () => {
  const markdownFiles = require
    .context('../content/posts/articles', false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../content/posts/articles/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

const importTips = async () => {
  const markdownFiles = require
    .context('../content/posts/tips', false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../content/posts/tips/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

const importAds = async () => {
  const markdownFiles = require
    .context('../content/posts/ads', false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../content/posts/ads/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

interface getArticlesArgs {
  sort: string
  categories?: string[]
  count?: number
  excludeSlug?: string
}

export const getArticles = async ({ sort, categories, count, excludeSlug }: getArticlesArgs) => {
  let importedArticles = await importArticles()
  if (categories) {
    importedArticles = importedArticles.filter(article => categories.includes(article.attributes.category))
  }
  if (excludeSlug) {
    importedArticles = importedArticles.filter(article => article.slug !== excludeSlug)
  }
  if(sort === 'asc') {
    importedArticles.sort((a, b) => dayjs(a.attributes.date).diff(dayjs(b.attributes.date)))
  } else {
    importedArticles.sort((a, b) => dayjs(b.attributes.date).diff(dayjs(a.attributes.date)))
  }

  return count ? importedArticles.slice(0, count) : importedArticles
}

interface getTipsArgs {
  sort: string
  categories?: string[]
  count?: number
  excludeSlug?: string
}

export const getTips = async ({ sort, categories, count, excludeSlug }: getTipsArgs) => {
  let importedTips = await importTips()
  if (categories) {
    importedTips = importedTips.filter(tip => categories.includes(tip.attributes.category))
  }
  if (excludeSlug) {
    importedTips = importedTips.filter(tip => tip.slug !== excludeSlug)
  }
  if (!importedTips.length && excludeSlug) {
    importedTips = await importTips()
    importedTips = importedTips.filter(tip => tip.slug !== excludeSlug)
  }
  if(sort === 'asc') {
    importedTips.sort((a, b) => dayjs(a.attributes.date).diff(dayjs(b.attributes.date)))
  } else {
    importedTips.sort((a, b) => dayjs(b.attributes.date).diff(dayjs(a.attributes.date)))
  }

  return count ? importedTips.slice(0, count) : importedTips
}

interface getAdsArgs {
  sort: string
  count?: number
  excludeSlug?: string
}

export const getAds = async ({ sort, count, excludeSlug }: getAdsArgs) => {
  let importedAds = await importAds()

  if (excludeSlug) {
    importedAds = importedAds.filter(ad => ad.slug !== excludeSlug)
  }
  if(sort === 'asc') {
    importedAds.sort((a, b) => dayjs(a.attributes.date).diff(dayjs(b.attributes.date)))
  } else {
    importedAds.sort((a, b) => dayjs(b.attributes.date).diff(dayjs(a.attributes.date)))
  }

  return count ? importedAds.slice(0, count) : importedAds
}
