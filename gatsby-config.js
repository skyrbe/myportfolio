module.exports = {
  siteMetadata: {
    title: `Harsha Venkatram`,
    description: `Hey There! Harsha Venkatram is a UX Geek with the heart of an artist. He also happens to be a front end architect, amateur photographer and artist. You will find most his designs and Open Source contribution here. Have fun!`,
    author: `Harsha Venkatram`,
    siteUrl: `https://www.harsha.pro/`,
    logo: `https://www.harsha.pro/logo.jpg`
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.harsha.pro/',
        sitemap: 'https://www.harsha.pro/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
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
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.js`),
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `harsha-venkatram`,
        description: `Hey There! Harsha Venkatram is a UX Geek with the heart of an artist. He also happens to be a front end architect, amateur photographer and artist. You will find most his designs and Open Source contribution here. Have fun!`,
        author: `Harsha Venkatram`,
        siteUrl: `https://www.harsha.pro/`,
        logo: `https://www.harsha.pro/logo.jpg`,
        short_name: `HV`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
}
