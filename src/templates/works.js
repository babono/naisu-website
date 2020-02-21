import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import get from "lodash/get"

export const query = graphql`
  query PageQuery($uid: String) {
    prismic {
      allWorkss(uid: $uid) {
        edges {
          node {
            title
            project_description
            logo_company
            header_image
            header_imageSharp {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }

            category {
              description
              name
            }
          }
        }
      }
    }
  }
`

const Container = styled.div`
  max-width: 992px;
  margin: 0 auto;
  padding: 0 16px;
`

const CompanyLogo = styled.img``

const ProjectCategory = styled.div``

const ProjectTitle = styled.div``

const ProjectDescription = styled.h2``

const Hero = styled(BackgroundImage)`
  min-height: 100vh;
`

const Works = props => {
  const doc = props.data.prismic.allWorkss.edges.slice(0, 1).pop()
  if (!doc) return null

  return (
    <>
      <Hero
        Tag="div"
        fluid={doc.node.header_imageSharp.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
        <Container>
          <CompanyLogo />
          <ProjectTitle>{RichText.render(doc.node.title)}</ProjectTitle>
          <ProjectCategory>
            {doc.node.category.map(function(category) {
              return {
                categoryDescription: category.category_description,
                categoryName: category.category_name,
              }
            })}
          </ProjectCategory>
          <ProjectDescription>
            {RichText.render(doc.node.project_description)}
          </ProjectDescription>
        </Container>
      </Hero>
    </>
  )
}

export default Works
