const withPlugins = require('next-compose-plugins');
const fonts = require('next-fonts');
const optimizedImages = require('next-optimized-images');
const pwa = require('next-pwa');

module.exports = withPlugins(
  [
    [
      pwa,
      {
        dest: 'public',
      },
    ],
    [
      optimizedImages,
      {
        responsive: {
          adapter: require('responsive-loader/sharp'),
        },
      },
    ],
    [fonts],
  ],
  {
    webpack: (cfg) => {
      cfg.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
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
  }
);
