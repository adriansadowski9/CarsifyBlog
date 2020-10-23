const withFonts = require('next-fonts');
const withOptimizedImages = require('next-optimized-images');
const withPWA = require('next-pwa');

module.exports = withPWA(
  withOptimizedImages(
    withFonts({
      imagesName: '[name]-doubled-image-[hash].[ext]',
      target: 'serverless',
      pwa: {
        dest: 'public',
        publicExcludes: ['!-doubled-image-*.*'],
        sw: 'service-worker.js',
      },
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
    })
  )
);
