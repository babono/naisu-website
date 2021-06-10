module.exports = {
  flags: {
    DEV_SSR: false,
  },
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
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'babono',
        accessToken: 'MC5YazY2dnhFQUFDUUFmV3Mx.d--_ve-_ve-_vXJgKe-_vUDvv73vv70O77-977-9Z2kLZjfvv73vv70477-9XSzvv71A77-977-9QO-_ve-_vQ',
        schemas: {
          reach: require('./src/schemas/reach.json'),
          sections: require('./src/schemas/sections.json'),          
          tiktok_video: require('./src/schemas/tiktok_video.json'),
          tiktok: require('./src/schemas/tiktok.json'),
          works: require('./src/schemas/works.json'),
        },     
        shouldDownloadImage: ({ node, key, value }) => {
          // Return true to download the image or false to skip.
          return true
        },   
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        appElement: '#___gatsby',
        modalProps: { 
          overlayClassName: "ReactModal__Overlay",
          className: "ReactModal__Content",
          htmlOpenClassName: "ReactModal__Html--open",            
        }
      }
    },
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
