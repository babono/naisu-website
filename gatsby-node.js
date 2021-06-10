/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query all Pages with their IDs and template data.
  const works = await graphql(`
    {
      allPrismicWorks {
        nodes {
          uid
        }
      }   
    }
  `)

  // Create pages for each Page in Prismic using the selected template.
  works.data.allPrismicWorks.nodes.forEach((node) => {
    createPage({
      path: `/w/${node.uid}`,
      component: path.resolve(__dirname, 'src/templates/works.js'),
      context: {
        uid: node.uid,
      },
    })
  })
  
  // Query all Pages with their IDs and template data.
  const tiktokVideo = await graphql(`
    {
      allPrismicTiktokVideo {
        nodes {
          id
        }
      }
    }
  `)

  // Create pages for each Page in Prismic using the selected template.
  tiktokVideo.data.allPrismicTiktokVideo.nodes.forEach((node) => {
    createPage({
      path: `/tv/${node.id}`,
      component: path.resolve(__dirname, 'src/templates/tiktok-video.js'),
      context: {
        id: node.id,
      },
    })
  })
}