const withFonts = require('next-fonts');
const withPWA = require('next-pwa');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = withPWA(
  withFonts({
    target: 'serverless',
    future: { webpack5: true },
    pwa: {
      disable: process.env.NODE_ENV === 'development',
      dest: 'public',
    },
    images: {
      deviceSizes: [
        94,
        110,
        300,
        350,
        400,
        475,
        550,
        625,
        640,
        700,
        750,
        775,
        820,
        850,
        964,
        996,
        1080,
        1260,
        1400,
      ],
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
      cfg.optimization.minimize = true;
      cfg.optimization.minimizer.push(
        new TerserPlugin({
          parallel: true,
        })
      );

      return cfg;
    },
  })
);
