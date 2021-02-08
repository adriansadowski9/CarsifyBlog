const withFonts = require('next-fonts');
const withPWA = require('next-pwa');

module.exports = withPWA(
  withFonts({
    target: 'serverless',
    future: { webpack5: true },
    pwa: {
      disable: process.env.NODE_ENV === 'development',
      dest: 'public',
    },
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
  })
);
