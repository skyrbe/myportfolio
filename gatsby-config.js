module.exports = {
  siteMetadata: {
    title: `Harsha Venkatram`,
    description: `This is the personal portfolio of Harsha Venkatram - UX Geek | Front End Guy | Photographer | Artist.`,
    author: `Harsha Venkatram`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `harsha-venkatram`,
        short_name: `HV`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `Harsha Venkatram`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
}
