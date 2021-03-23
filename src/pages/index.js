import React, { useState } from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import Layout from "../components/layout"
import ReactFullpage from "@fullpage/react-fullpage"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import imageIntro from "../images/image-introducing.svg"
import ogNaisu from "../images/og-naisu.png"
import logoNaisuWhite from "../images/logo-naisu-white.svg"
import Helmet from "react-helmet"

const Container = styled.div`
  max-width: 992px;
  margin: 0 auto;
  padding: 60px 16px 32px;
`

const BgStyle = createGlobalStyle`
  html.fp-enabled body:before {
    background-image: url(${props => props.bgImageHome});
  }
  html.fp-enabled body.fp-viewing-intro:before {
    background-image: url(${props => props.bgImageIntro});
  }
  html.fp-enabled body.fp-viewing-about:before {
    background-image: url(${props => props.bgImageAbout});
  }
`

const BgImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.5s linear;
  transition: all 0.5s linear;
`

const IntroImage = styled.img`
  width: 80%;
  max-width: 940px;
  margin: 0 auto;
  display: block;
`

const IntroText1 = styled.div`
  color: #ffffff;
  line-height: 36px;
  font-family: Moderat-Bold, sans-serif;
  font-size: 28px;
  text-align: center;
  padding-top: 85vh;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    padding-top: 70vh;
  }
`

const IntroText2 = styled.div`
  color: #ffffff;
  line-height: 52px;
  font-family: Moderat-Bold, sans-serif;
  font-size: 44px;
  text-align: center;
  margin-top: 48px;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 40px;
  }
`

const IntroText3 = styled.div`
  color: #ffffff;
  line-height: 1.4;
  font-family: Moderat-Light, sans-serif;
  font-size: 26px;
  text-align: center;
  strong {
    font-size: 26px;
    font-family: Moderat-Black, sans-serif;
  }
  em {
    color: #eae441;
    font-family: Moderat-Black, sans-serif;
    font-style: normal;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    strong {
      font-size: 18px;
    }
  }
`

const Header = styled.header`
  position: fixed;
  width: 100%;
  z-index: 2;
  transition: all 300ms ease;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 97%;
  padding: 40px 48px;
  position: relative;
  @media (max-width: 768px) {
    padding: 16px 8px;
  }
`

const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
`

const HeaderMenuLink = styled.a`
  text-decoration: none;
  font-family: Moderat-Regular, sans-serif;
  font-size: 16px;
  color: ${props =>
    props.active ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.75)"};
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: color 0.5s linear;
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const HeaderLogo = styled.h1`
  font-size: 0;
`

const HeaderLogoLink = styled.a`
  position: absolute;
  top: 30px;
  left: 50%;
  width: 114px;
  height: 35px;
  margin-left: -57px;
  background-size: contain;
  background-image: url(${logoNaisuWhite});
  background-repeat: no-repeat;
  background-position: center;
  -webkit-transition: background 0.5s linear;
  transition: background 0.5s linear;
  @media (max-width: 768px) {
    width: 84px;
    margin-left: -42px;
    top: 8px;
  }
`

const AddressTitle = styled.div`
  font-size: 24px;
  font-family: Moderat-Bold, sans-serif;
  color: #ffffff;
  letter-spacing: 0.2em;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const AddressDetail = styled.div`
  font-size: 16px;
  margin: 24px 0;
  color: #ffffff;
  letter-spacing: 0.1em;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const ContactText = styled.div`
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.1em;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const ContactContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const ContactInfo = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 16px;
    padding-top: 20px;
  }
`

const ContactForm = styled.form`
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const FormAction = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`

const FormRow = styled.div`
  display: flex;
  margin-bottom: 24px;
  align-items: ${props => (props.top ? "flex-start" : "center")};
  @media (max-width: 768px) {
    margin-bottom: 16px;
    flex-wrap: wrap;
  }
`

const FormLabel = styled.label`
  width: 100px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  letter-spacing: 0.1em;
  font-family: Moderat-Bold, sans-serif;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 8px;
  }
`

const FormInput = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  @media (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
  }
`

const RadioButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32px;
  @media (max-width: 768px) {
    width: 50%;
    margin-right: 0;
    margin-bottom: 16px;
  }
`

const InputText = styled.input`
  border: 1px solid rgba(255, 255, 255, 0.35);
  width: 100%;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  padding: 4px 16px;
  &:focus {
    outline: auto 2px #fff;
  }
`

const TextArea = styled.textarea`
  border: 1px solid rgba(255, 255, 255, 0.35);
  width: 100%;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  padding: 4px 16px;
  resize: none;
  height: 160px;
  &:focus {
    outline: auto 2px #fff;
  }
  @media (max-width: 768px) {
    height: 80px;
  }
`

const ButtonSubmit = styled.button`
  border: none;
  background-color: #ffffff;
  color: #2200d2;
  font-family: Moderat-Bold, sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.2em;
  padding: 12px 40px;
  margin-left: 100px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #e9e9e9;
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }
`

const Social = styled.div`
  margin-top: 32px;
`

const SocialIcon = styled.img`
  width: 24px;
  filter: invert(100%);
  margin: 0;
`

const SocialItem = styled.a`
  display: flex;
  align-items: center;
  color: #ffffff;
  text-decoration: none;
  margin-bottom: 8px;
  &:hover {
    text-decoration: underline;
  }
`

const SocialName = styled.div`
  margin-left: 16px;
`

const SocialTitle = styled.div`
  font-size: 16px;
  font-family: Moderat-Bold, sans-serif;
  color: #ffffff;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const WorksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -4px;
  margin-right: -4px;
  @media (max-width: 768px) {
    margin-left: -8px;
    margin-right: -8px;
  }
`

const WorksInfo = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transform: translateY(100%);
  background-color: #2200d2;
  color: #ffffff;
  transition: all 0.2s ease-in-out;
  font-family: Moderat-Bold, sans-serif;
`

const WorksItem = styled(Link)`
  flex: 0 0 auto;
  width: 25%;
  padding: 0 4px;
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  &:hover ${WorksInfo} {
    transform: translateY(0);
  }
  @media (max-width: 768px) {
    width: 50%;
    padding: 0 8px;
    margin-bottom: 16px;
  }
`

export const query = graphql`
  query HomeQuery {
    allPrismicSections {
      edges {
        node {
          data {
            background_image_section_1 {
              url
            }
            text_section_1 {
              text
            }
            background_image_section_2 {
              url
            }
            image_text_section_2 {
              url
            }
            text_section_2 {
              text
            }
            background_image_section_3 {
              url
            }
            text_section_3 {
              raw
            }
          }
        }
      }
    }
    allPrismicReach {
      edges {
        node {
          data {
            title {
              text
            }
            address {
              raw
            }
            email {
              raw
            }
            phone {
              raw
            }
            social {
              name {
                text
              }
              icon {
                url
              }
              link {
                url
              }
            }
          }
        }
      }
    }
    allPrismicWorks(sort: { fields: data___order }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            image_thumbnail {
              alt
              copyright
              url
              thumbnails
              localFile {
                childImageSharp {
                  fluid(maxWidth: 835, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const RenderWorkList = ({ works }) => {
  return works.map(item => (
    <WorksItem key={item.node.uid} to={"/w/" + item.node.uid}>
      <Img
        fluid={item.node.data.image_thumbnail.localFile.childImageSharp.fluid}
      />
      <WorksInfo>{item.node.data.title.text}</WorksInfo>
    </WorksItem>
  ))
}

const linkResolver = doc => {
  // Pretty URLs for known types
  if (doc.type === "blog") return `/post/${doc.uid}`
  if (doc.type === "page") return `/${doc.uid}`
  // Fallback for other types, in case new custom types get created
  return `/doc/${doc.id}`
}

export default ({ data }) => {
  const doc = data.allPrismicWorks.edges.slice(0, 1).pop()
  const doc2 = data.allPrismicSections.edges.slice(0, 1).pop()
  const doc3 = data.allPrismicReach.edges.slice(0, 1).pop()
  if (!doc || !doc2 || !doc3) return null

  const [contactTopic, setContactTopic] = useState("Business")

  return (
    <Layout>
      <Helmet>
        <title>Hello There | Naisu Studio</title>
        <meta property="og:title" content="Beef Up Your Brand with Naisu" />
        <meta
          property="og:description"
          content="Advertise better and earn more with the most effective-yet-efficient way!"
        />
        <meta property="og:image" content={ogNaisu} />
      </Helmet>
      <BgStyle
        bgImageHome={doc2.node.data.background_image_section_1.url}
        bgImageIntro={doc2.node.data.background_image_section_2.url}
        bgImageAbout={doc2.node.data.background_image_section_3.url}
      />
      <Header>
        <HeaderContainer>
          <HeaderMenu id="menu">
            <HeaderMenuLink href="#works">works</HeaderMenuLink>
            <HeaderMenuLink href="#reach">reach us</HeaderMenuLink>
          </HeaderMenu>
          <HeaderLogoLink href="#home">
            <HeaderLogo>NAISU Studio</HeaderLogo>
          </HeaderLogoLink>
        </HeaderContainer>
      </Header>

      <ReactFullpage
        //fullpage options
        licenseKey={"9B29255F-E1964991-AD6B9214-8C392F88"}
        scrollingSpeed={1000} /* Options here */
        scrollOverflow={true}
        anchors={["home", "intro", "about", "works", "reach"]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <section className="section">
                <Container>
                  <IntroText1>{doc2.node.data.text_section_1.text}</IntroText1>
                </Container>
              </section>
              <section className="section">
                <Container>
                  <IntroImage
                    src={doc2.node.data.image_text_section_2.url}
                    alt="image introducing"
                  />
                  <IntroText2>{doc2.node.data.text_section_2.text}</IntroText2>
                </Container>
              </section>
              <section className="section">
                <Container>
                  <IntroText3>
                    {RichText.render(doc2.node.data.text_section_3.raw)}
                  </IntroText3>
                </Container>
              </section>
              <section className="section bgBlue">
                <Container>
                  <WorksWrapper>
                    <RenderWorkList works={data.allPrismicWorks.edges} />
                  </WorksWrapper>
                </Container>
              </section>
              <section className="section bgBlue fp-auto-height-responsive">
                <Container>
                  <ContactContainer>
                    <ContactInfo>
                      <AddressTitle>{doc3.node.data.title.text}</AddressTitle>
                      <AddressDetail>
                        <RichText render={doc3.node.data.address.raw} />
                      </AddressDetail>
                      <ContactText>
                        {RichText.asText(doc3.node.data.email.raw)}
                      </ContactText>
                      <ContactText>
                        {RichText.asText(doc3.node.data.phone.raw)}
                      </ContactText>
                      <Social>
                        <SocialTitle>Our Social</SocialTitle>
                        {doc3.node.data.social.map(social => (
                          <SocialItem href={social.link.url}>
                            <SocialIcon src={social.icon.url} />
                            <SocialName>{social.name.text}</SocialName>
                          </SocialItem>
                        ))}
                      </Social>
                    </ContactInfo>

                    <ContactForm
                      name="contact-us-form"
                      method="post"
                      data-netlify="true"
                      action="/success"
                    >
                      <input
                        type="hidden"
                        name="form-name"
                        value="contact-us-form"
                      />
                      <FormRow>
                        <FormLabel>Matter</FormLabel>
                        <FormInput>
                          <RadioButton>
                            <input
                              type="radio"
                              id="business"
                              name="contactTopic"
                              value="Business"
                              checked={contactTopic === "Business"}
                              onChange={() => {}}
                              onClick={() => setContactTopic("Business")}
                            />
                            <label htmlFor="business">Business</label>
                          </RadioButton>
                          <RadioButton>
                            <input
                              type="radio"
                              id="jobs"
                              name="contactTopic"
                              value="Jobs"
                              checked={contactTopic === "Jobs"}
                              onChange={() => {}}
                              onClick={() => setContactTopic("Jobs")}
                            />
                            <label htmlFor="jobs">Jobs &amp; Internship</label>
                          </RadioButton>
                        </FormInput>
                      </FormRow>
                      <FormRow>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <FormInput>
                          <InputText
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            name="name"
                          />
                        </FormInput>
                      </FormRow>
                      <FormRow>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormInput>
                          <InputText
                            id="email"
                            type="text"
                            placeholder="john@email.com"
                            name="email"
                          />
                        </FormInput>
                      </FormRow>
                      <FormRow>
                        <FormLabel htmlFor="phone">Phone </FormLabel>
                        <FormInput>
                          <InputText
                            id="phone"
                            type="text"
                            placeholder="081234567890"
                            name="phone"
                          />
                        </FormInput>
                      </FormRow>
                      <FormRow top>
                        <FormLabel htmlFor="message">Message </FormLabel>
                        <FormInput>
                          <TextArea
                            id="message"
                            placeholder="Hello, Naisu!"
                            name="message"
                          />
                        </FormInput>
                      </FormRow>
                      <FormAction>
                        <ButtonSubmit type="submit">Submit</ButtonSubmit>
                      </FormAction>
                    </ContactForm>
                  </ContactContainer>
                </Container>
              </section>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </Layout>
  )
}
