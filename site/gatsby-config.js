module.exports = {
  siteMetadata: {
    title: 'Summer of Code by Hack Club',
    siteUrl: 'https://summer.hackclub.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://summer.hackclub.com'
      }
    },
    {
      resolve: 'gatsby-plugin-segment-js',
      options: {
        prodKey: '35oTlU4UqlhIN8VGYmBxAzyDdfzhcscw',
        trackPage: true
      }
    }
  ]
}
