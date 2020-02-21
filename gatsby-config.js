module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`,
      },
    },
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "babono", // (REQUIRED, replace with your own)
        accessToken:
          "MC5YazY2dnhFQUFDUUFmV3Mx.d--_ve-_ve-_vXJgKe-_vUDvv73vv70O77-977-9Z2kLZjfvv73vv70477-9XSzvv71A77-977-9QO-_ve-_vQ", // (optional API access token)
        pages: [
          {
            // (optional, builds pages dynamically)
            type: "Works", // TypeName from prismic
            match: "/w/:uid", // Pages will be generated under this pattern
            path: "/w", // Placeholder page for unpublished documents
            component: require.resolve("./src/templates/works.js"),
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
