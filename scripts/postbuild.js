const fs = require('fs');

const CARSIFY_URL = 'https://carsify.pl';

const robotsTxt = `User-agent: *
Sitemap: ${CARSIFY_URL}/sitemap.xml
Disallow:`;

const paths = ['', '/artykuly', '/porady', '/ogloszenia', '/kontakt'];
const contentFolders = [
  {
    path: 'content/categories/articles/',
    baseUrl: '/artykuly',
  },
  {
    path: 'content/categories/tips/',
    baseUrl: '/porady',
  },
  {
    path: 'content/posts/articles/',
    baseUrl: '/artykuly',
  },
  {
    path: 'content/posts/tips/',
    baseUrl: '/porady',
  },
  {
    path: 'content/posts/ads/',
    baseUrl: '/ogloszenia',
  },
];
contentFolders.forEach((contentFolder) => {
  paths.push(
    ...fs.readdirSync(contentFolder.path).map((file) => {
      return `${contentFolder.baseUrl}/${file.substring(0, file.length - 3)}`;
    })
  );
});

const xmlPaths = [];

paths
  .map(
    (path) => `
  <url>
    <loc>${CARSIFY_URL}${path}</loc>
  </url>`
  )
  .forEach((xmlPath) => {
    xmlPaths.push(xmlPath);
  });

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlPaths.join('')}
</urlset>`;

fs.writeFileSync('out/robots.txt', robotsTxt);
console.log('robots.txt created and saved!');

fs.writeFile('out/sitemap.xml', sitemapXml, () => {
  console.log('sitemap.xml created and saved!');
});
