const fs = require('fs');
const withFonts = require('next-fonts');
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages(
  withFonts({
    target: 'serverless',
    webpack: (cfg) => {
      cfg.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
      });
      cfg.module.rules.push({
        test: /\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
        options: {
          adapter: require('responsive-loader/sharp'),
        },
      });
      cfg.module.rules.map((rule) => {
        if (rule.test !== undefined && rule.test.source.includes('|svg|')) {
          rule.test = new RegExp(rule.test.source.replace('|svg|', '|'));
        }
      });
      cfg.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return cfg;
    },
    exportPathMap: async () => {
      const paths = {
        '/': { page: '/' },
        '/artykuly': { page: '/artykuly' },
        '/porady': { page: '/porady' },
        '/ogloszenia': { page: '/ogloszenia' },
        '/kontakt': { page: '/kontakt' },
      };

      const contentFolders = [
        {
          path: 'content/categories/articles/',
          baseUrl: '/artykuly',
          slugName: 'articleParam',
        },
        {
          path: 'content/categories/tips/',
          baseUrl: '/porady',
          slugName: 'tipParam',
        },
        {
          path: 'content/posts/articles/',
          baseUrl: '/artykuly',
          slugName: 'articleParam',
        },
        {
          path: 'content/posts/tips/',
          baseUrl: '/porady',
          slugName: 'tipParam',
        },
        {
          path: 'content/posts/ads/',
          baseUrl: '/ogloszenia',
          slugName: 'adParam',
        },
      ];

      contentFolders.forEach((contentFolder) => {
        fs.readdirSync(contentFolder.path).map((file) => {
          const slug = file.substring(0, file.length - 3);
          paths[`${contentFolder.baseUrl}/${slug}`] = {
            page: `${contentFolder.baseUrl}/[${contentFolder.slugName}]`,
            query: {
              [`${contentFolder.slugName}`]: slug,
            },
          };
        });
      });

      console.log(paths);
      return paths;
    },
  })
);
