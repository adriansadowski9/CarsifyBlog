const importArticleCategories = async () => {
  const markdownFiles = require
    .context('../content/categories/articles', false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../content/categories/articles/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

const importTipCategories = async () => {
  const markdownFiles = require
    .context('../content/categories/tips', false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../content/categories/tips/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};


export const getArticleCategories = async () => {
  let importedArticleCategories = await importArticleCategories()
  return importedArticleCategories
}

export const getTipCategories = async () => {
  let importedTipCategories = await importTipCategories()
  return importedTipCategories
}
