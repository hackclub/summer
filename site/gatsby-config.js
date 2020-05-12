module.exports = {
  siteMetadata: {
    title: 'Summer of Making (a Hack Club Community Initiative)',
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
    }
  ]
}
