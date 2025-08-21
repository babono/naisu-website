import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { RichText } from "prismic-reactjs"
import Layout from "../components/layout"
import styled, { keyframes } from "styled-components"
import iconClose from "../images/ic-close.svg"
import iconArrowDown from "../images/ic-arrow-down.svg"
import iconArrowUp from "../images/ic-arrow-up.svg"
import scrollTo from "gatsby-plugin-smoothscroll"
import SEO from "../components/seo"

export const query = graphql`
  query PageQuery($uid: String) {
    allPrismicWorks(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          data {
            title {
              text
            }
            project_description {
              text
            }
            logo_company {
              url
            }
            header_image {
              url
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 2660
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
            link_website {
              url
            }
            category {
              category_description {
                raw
              }
              category_name {
                text
              }
            }
          }
        }
      }
    }
  }
`

const ActionWrapper = styled.div`
  margin-bottom: 6vh;
`

const ButtonClose = styled.a`
  width: 48px;
  height: 48px;
  background-position: center;
  background-size: contain;
  background-image: url(${iconClose});
  background-color: transparent;
  background-repeat: no-repeat;
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`

const blinkingDown = keyframes`
  0% {
    transform: translateY(8px);
    opacity: 0.35;
  }

  50% {
    transform: translateY(-8px);
    opacity: 0.65;
  }

  100% {
    transform: translateY(8px);
    opacity: 0.35;
  }
`

const ButtonScrollDown = styled.button`
  width: 48px;
  height: 48px;
  background-position: center;
  background-size: contain;
  background-image: url(${iconArrowDown});
  background-color: transparent;
  background-repeat: no-repeat;
  opacity: 0.35;
  border: none;
  margin: 0 auto;
  outline: none;
  cursor: pointer;

  animation: ${blinkingDown} 1.75s ease-out infinite;
`

const ButtonScrollUp = styled.button`
  width: 48px;
  height: 48px;
  background-position: center;
  background-size: contain;
  background-image: url(${iconArrowUp});
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  cursor: pointer;
  position: fixed;
  bottom: 32px;
  right: 32px;
  transition: all 0.5s ease-in;
  transform: ${props =>
    props.scrolled ? "translateY(0)" : "translateY(200px)"};
`

const ButtonLink = styled.a`
  display: inline-block;
  text-transform: uppercase;
  color: #2200d2;
  font-size: 16px;
  letter-spacing: 0.2em;
  padding: 12px 48px;
  background-color: #ffffff;
  font-family: Moderat-Bold, sans-serif;
  text-decoration: none;
  position: relative;
  transition: all 0.15s ease-in;
  &:hover {
    background-color: #e9e9e9;
    transform: translateY(-8px);
  }
`

const Container = styled.div`
  max-width: 600px;
  text-align: center;
  margin: 0 auto;
  padding: 0 16px;
`

const ContainerHero = styled.div`
  max-width: 600px;
  text-align: center;
  margin: 0 auto;
  padding: 0 16px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const CompanyLogo = styled.img`
  margin: 5vh auto;
  height: 25vh;
`

const Copyright = styled.div`
  font-size: 14px;
  text-align: center;
`

const Detail = styled.div`
  padding: 80px 0 32px;
  position: relative;
`

const Hero = styled(BackgroundImage)`
  min-height: 100vh;
  position: relative;
`

const ProjectCategory = styled.div`
  margin-bottom: 3vh;
`

const ProjectCategoryItem = styled.span`
  font-family: Moderat-Bold, sans-serif;
  font-size: 20px;
  color: #ffffff;
  &:after {
    content: ", ";
  }
  &:last-child:after {
    display: none;
  }
`

const ProjectCategoryDetail = styled.div`
  font-size: 16px;
  letter-spacing: 0.1em;
`

const ProjectCategoryTitle = styled.div`
  font-family: Moderat-Bold, sans-serif;
  font-size: 28px;
  letter-spacing: 0.04em;
  margin-bottom: 32px;
`

const ProjectTitle = styled.h1`
  font-family: Moderat-Bold, sans-serif;
  color: #ffffff;
  font-size: 36px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 8px;
`

const ProjectDescription = styled.div`
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 5vh;
`

const Works = props => {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  function scrolled() {
    setScrollY(window.pageYOffset)
    if (
      scrollY >
      Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    ) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", scrolled, { passive: true })
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", scrolled, { passive: true })
    }
  })

  const doc = props.data.allPrismicWorks.edges.slice(0, 1).pop()
  if (!doc || !doc.node || !doc.node.data) return null

  const workData = doc.node.data

  // Get the image using getImage and convert it for BackgroundImage
  const image = workData.header_image?.localFile ? getImage(workData.header_image.localFile) : null
  const bgImage = image ? convertToBgImage(image) : null

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <Layout>
      <SEO title={(workData.title?.text || "Untitled") + " - Works"} />
      
      {bgImage ? (
        <Hero
          id="top"
          Tag="section"
          {...bgImage}
          preserveStackingContext
        >
          <ContainerHero>
              {workData.logo_company?.url && (
                <CompanyLogo src={workData.logo_company.url} alt="Company Logo" />
              )}
              <ProjectTitle>{workData.title?.text || "Untitled Project"}</ProjectTitle>
              {workData.category && workData.category.length > 0 && (
                <ProjectCategory>
                  {workData.category.map((category, index) => (
                    <ProjectCategoryItem key={index}>
                      {category.category_name?.text || ""}
                    </ProjectCategoryItem>
                  ))}
                </ProjectCategory>
              )}
              <ProjectDescription>
                {workData.project_description?.text || ""}
              </ProjectDescription>
              <ActionWrapper>
                {workData.link_website?.url && (
                  <ButtonLink href={workData.link_website.url}>
                    Go To Website
                  </ButtonLink>
                )}
              </ActionWrapper>
              <ButtonScrollDown
                onClick={() => scrollTo("#content")}
              ></ButtonScrollDown>
              <ButtonClose href="/#works"></ButtonClose>
          </ContainerHero>
        </Hero>
      ) : (
        <div 
          id="top"
          style={{
            minHeight: '100vh',
            position: 'relative',
            backgroundColor: '#040e18',
            backgroundImage: workData.header_image?.url ? `url(${workData.header_image.url})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <ContainerHero>
            {workData.logo_company?.url && (
              <CompanyLogo src={workData.logo_company.url} alt="Company Logo" />
            )}
            <ProjectTitle>{workData.title?.text || "Untitled Project"}</ProjectTitle>
            {workData.category && workData.category.length > 0 && (
              <ProjectCategory>
                {workData.category.map((category, index) => (
                  <ProjectCategoryItem key={index}>
                    {category.category_name?.text || ""}
                  </ProjectCategoryItem>
                ))}
              </ProjectCategory>
            )}
            <ProjectDescription>
              {workData.project_description?.text || ""}
            </ProjectDescription>
            <ActionWrapper>
              {workData.link_website?.url && (
                <ButtonLink href={workData.link_website.url}>
                  Go To Website
                </ButtonLink>
              )}
            </ActionWrapper>
            <ButtonScrollDown
              onClick={() => scrollTo("#content")}
            ></ButtonScrollDown>
            <ButtonClose href="/#works"></ButtonClose>
          </ContainerHero>
        </div>
      )}
      
      <Detail id="content">
        <Container>
          {workData.category && workData.category.map((category, index) => (
            <div key={index}>
              <ProjectCategoryTitle>
                {category.category_name?.text || ""}
              </ProjectCategoryTitle>
              <ProjectCategoryDetail>
                {category.category_description?.raw && RichText.render(category.category_description.raw)}
              </ProjectCategoryDetail>
            </div>
          ))}
          <Copyright>2020 © Naisu Studio</Copyright>
        </Container>
        <ButtonScrollUp
          scrolled={isScrolled}
          onClick={() => scrollTo("#top")}
        ></ButtonScrollUp>
      </Detail>
    </Layout>
  )
}

export default Works
