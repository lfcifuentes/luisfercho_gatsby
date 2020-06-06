/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:"Luis Fernando Cifuentes CV",
    autor:"@Luisfer1097"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        lang: "en",
        name: "Luis Fernando Cifuentes CV",
        short_name: "CV",
        description:"Personal Site",
        start_url: "/",
        background_color: "#f7fafc",
        theme_color: "#81e6d9",
        display: "standalone",
        icon: "src/img/favicon.png",
        crossOrigin: `use-credentials`
      },
    },
  ],
}
