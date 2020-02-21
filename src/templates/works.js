import React from "react"
import { graphql } from "gatsby"

function Works({ data }) {
  const { title, content } = data.prismicBlogPost.data

  return (
    <>
      <h1>{title.text}</h1>
      <article dangerouslySetInnerHTML={{ __html: content.html }} />
    </>
  )
}

// export const pageQuery = graphql`
//   query Works($id: String!) {
//     prismicBlogPost(id: { eq: $id }) {
//       data {
//         title {
//           text
//         }
//         content {
//           html
//         }
//       }
//     }
//   }
// `

export default Works
