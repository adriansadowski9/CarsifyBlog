const withFonts = require('next-fonts');
const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages(
  withFonts({
    target: 'serverless',
    webpack: (cfg) => {
      cfg.module.rules.push(
        {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          options: { mode: ['react-component'] }
        }
      )
      cfg.module.rules.push(
        {
          test: /\.(jpe?g|png)$/i,
          loader: 'responsive-loader',
          options: {
            adapter: require('responsive-loader/sharp')
          }
        }
      )
      return cfg;
    }
  })
)
