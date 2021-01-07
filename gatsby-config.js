module.exports = {
  siteMetadata: {
    title: `NAISU Studio`,
    description: `Bespoke creative and digital solutions with
    integrated-yet-unique savvy for anyone from distinguished
    global brands to niche local businesses.`,
    author: `@naisustudio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
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
        name: `videos`,
        path: `${__dirname}/src/videos`,
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
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "386207062795039",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "G-CYK48Y06FH",
        includeInDevelopment: false,        
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
        name: `NAISU Studio`,
        short_name: `NAISU`,
        start_url: `/`,
        background_color: `#2200d8`,
        theme_color: `#2200d8`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
