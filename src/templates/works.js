import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled, { keyframes } from "styled-components"
import BackgroundImage from "gatsby-background-image"
import iconClose from "../images/ic-close.svg"
import iconArrowDown from "../images/ic-arrow-down.svg"
import iconArrowUp from "../images/ic-arrow-up.svg"
import scrollTo from "gatsby-plugin-smoothscroll"

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
            link_website {
              _linkType
              ... on PRISMIC__ExternalLink {
                _linkType
                url
              }
            }
            category {
              category_description
              category_name
            }
          }
        }
      }
    }
  }
`

const ActionWrapper = styled.div`
  margin-bottom: 120px;
`

const ButtonClose = styled(Link)`
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

const CompanyLogo = styled.img``

const Copyright = styled.div`
  font-size: 14px;
  text-align: center;
`

const Detail = styled.div`
  padding: 100px 0 32px;
  position: relative;
`

const Hero = styled(BackgroundImage)`
  min-height: 100vh;
  position: relative;
`

const ProjectCategory = styled.div`
  margin-bottom: 48px;
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
  margin-bottom: 64px;
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
      console.log("waadaw")
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", scrolled)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", scrolled)
    }
  })

  const doc = props.data.prismic.allWorkss.edges.slice(0, 1).pop()
  if (!doc) return null

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <>
      <Helmet title={RichText.asText(doc.node.title)} />
      <Hero
        id="top"
        Tag="div"
        fluid={doc.node.header_imageSharp.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
        <ContainerHero>
          <CompanyLogo src={doc.node.logo_company.url} />
          <ProjectTitle>{RichText.asText(doc.node.title)}</ProjectTitle>
          <ProjectCategory>
            {doc.node.category.map(category => (
              <ProjectCategoryItem>
                {RichText.asText(category.category_name)}
              </ProjectCategoryItem>
            ))}
          </ProjectCategory>
          <ProjectDescription>
            {RichText.asText(doc.node.project_description)}
          </ProjectDescription>
          <ActionWrapper>
            <ButtonLink href={doc.node.link_website.url}>
              Go To Website
            </ButtonLink>
          </ActionWrapper>
          <ButtonScrollDown
            onClick={() => scrollTo("#content")}
          ></ButtonScrollDown>
          <ButtonClose to="/#works"></ButtonClose>
        </ContainerHero>
      </Hero>
      <Detail id="content">
        <Container>
          {doc.node.category.map(category => (
            <>
              <ProjectCategoryTitle>
                {RichText.asText(category.category_name)}
              </ProjectCategoryTitle>
              <ProjectCategoryDetail>
                {RichText.render(category.category_description)}
              </ProjectCategoryDetail>
            </>
          ))}
          <Copyright>2020 © Naisu Studio</Copyright>
        </Container>
        <ButtonScrollUp
          scrolled={isScrolled}
          onClick={() => scrollTo("#top")}
        ></ButtonScrollUp>
      </Detail>
    </>
  )
}

export default Works
