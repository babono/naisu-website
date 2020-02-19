import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactFullpage from "@fullpage/react-fullpage"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import imageIntro from "../images/image-introducing.svg"
import logoNaisuWhite from "../images/logo-naisu-white.svg"

const Container = styled.div`
  max-width: 992px;
  margin: 0 auto;
  padding: 0 16px;
`

const Section = styled.section`
  background-color: #2200d2;
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
`

const IntroText3 = styled.div`
  color: #ffffff;
  line-height: 52px;
  font-family: Moderat-Bold, sans-serif;
  font-size: 44px;
  text-align: center;
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
`

const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
`

const HeaderMenuLink = styled.div`
  font-family: Moderat-Regular, sans-serif;
  font-size: 16px;
  color: ${props =>
    props.active ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)"};
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: color 0.5s linear;
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 1);
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
`

const AddressTitle = styled.div`
  font-size: 24px;
  font-family: Moderat-Bold, sans-serif;
  color: #ffffff;
  letter-spacing: 0.2em;
`

const AddressDetail = styled.div`
  font-size: 16px;
  margin: 24px 0;
  color: #ffffff;
  letter-spacing: 0.1em;
`

const ContactText = styled.div`
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.1em;
`

const ContactContainer = styled.div`
  display: flex;
`

const ContactInfo = styled.div`
  width: 40%;
`

const ContactForm = styled.div`
  width: 60%;
`

const FormRow = styled.div`
  display: flex;
  margin-bottom: 24px;
  align-items: ${props => (props.top ? "flex-start" : "center")};
`

const FormLabel = styled.div`
  width: 100px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  letter-spacing: 0.1em;
  font-family: Moderat-Bold, sans-serif;
`

const FormInput = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
`

const RadioButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32px;
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
`

const WorksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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

const WorksItem = styled.div`
  flex: 0 0 auto;
  width: 24.375%;
  position: relative;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  &:hover ${WorksInfo} {
    transform: translateY(0);
  }
`

const WorksImage = styled.img``

const IndexPage = () => {
  const [contactTopic, setContactTopic] = useState("Business")

  const data = useStaticQuery(graphql`
    query {
      imageAccenture: file(relativePath: { eq: "image-banner-accenture.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageHanamasa: file(relativePath: { eq: "image-banner-hanamasa.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageMandiriUpdate: file(
        relativePath: { eq: "image-banner-mandiri-update.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imagePronto: file(relativePath: { eq: "image-banner-pronto.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Naisu Studio The New Future" />
      <Header>
        <HeaderContainer>
          <HeaderMenu>
            <HeaderMenuLink>works</HeaderMenuLink>
            <HeaderMenuLink>reach us</HeaderMenuLink>
          </HeaderMenu>
          <HeaderLogoLink>
            <HeaderLogo>NAISU Studio</HeaderLogo>
          </HeaderLogoLink>
        </HeaderContainer>
      </Header>
      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <section className="section" id="intro-1">
                <Container>
                  <IntroText1>
                    Feeling misguided? Take a step closes to us.
                  </IntroText1>
                </Container>
              </section>
              <section className="section" id="intro-2">
                <Container>
                  <IntroImage src={imageIntro} alt="image introducing" />
                </Container>
              </section>
              <section className="section" id="intro-3">
                <Container>
                  <IntroText3>
                    Bespoke creative and digital solutions with
                    integrated-yet-unique savvy for anyone from distinguished
                    global brands to niche local businesses.
                  </IntroText3>
                </Container>
              </section>
              <section className="section" id="works">
                <Container>
                  <WorksWrapper>
                    <WorksItem>
                      <Img fluid={data.imageAccenture.childImageSharp.fluid} />
                      <WorksInfo>Accenture</WorksInfo>
                    </WorksItem>
                    <WorksItem>
                      <Img fluid={data.imageHanamasa.childImageSharp.fluid} />
                      <WorksInfo>Hanamasa</WorksInfo>
                    </WorksItem>
                    <WorksItem>
                      <Img
                        fluid={data.imageMandiriUpdate.childImageSharp.fluid}
                      />
                      <WorksInfo>BUMN</WorksInfo>
                    </WorksItem>
                    <WorksItem>
                      <Img fluid={data.imagePronto.childImageSharp.fluid} />
                      <WorksInfo>Pronto</WorksInfo>
                    </WorksItem>
                  </WorksWrapper>
                </Container>
              </section>
              <section className="section" id="contact">
                <Container>
                  <ContactContainer>
                    <ContactInfo>
                      <AddressTitle>NAISU</AddressTitle>
                      <AddressDetail>
                        Jl. Damai Raya No. 22B, <br />
                        Cipete Utara, Jakarta Selatan <br />
                        DKI Jakarta, Indonesia
                      </AddressDetail>
                      <ContactText>contact@naisu.id</ContactText>
                      <ContactText>021-2345678910</ContactText>
                    </ContactInfo>
                    <ContactForm>
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
                              onClick={() => setContactTopic("Business")}
                            />
                            <label for="business">Business</label>
                          </RadioButton>
                          <RadioButton>
                            <input
                              type="radio"
                              id="jobs"
                              name="contactTopic"
                              value="Jobs"
                              checked={contactTopic === "Jobs"}
                              onClick={() => setContactTopic("Jobs")}
                            />
                            <label for="jobs">Jobs &amp; Internship</label>
                          </RadioButton>
                          <RadioButton>
                            <input
                              type="radio"
                              id="other"
                              name="contactTopic"
                              value="Others"
                              checked={contactTopic === "Others"}
                              onClick={() => setContactTopic("Others")}
                            />
                            <label for="other">Others</label>
                          </RadioButton>
                        </FormInput>
                      </FormRow>
                      <FormRow>
                        <FormLabel>Name</FormLabel>
                        <FormInput>
                          <InputText type="text" placeholder="John Doe" />
                        </FormInput>
                      </FormRow>
                      <FormRow>
                        <FormLabel>Email</FormLabel>
                        <FormInput>
                          <InputText type="text" placeholder="john@email.com" />
                        </FormInput>
                      </FormRow>
                      <FormRow>
                        <FormLabel>Phone </FormLabel>
                        <FormInput>
                          <InputText type="text" placeholder="081234567890" />
                        </FormInput>
                      </FormRow>
                      <FormRow top>
                        <FormLabel>Message </FormLabel>
                        <FormInput>
                          <TextArea placeholder="Hello, Naisu!" />
                        </FormInput>
                      </FormRow>
                      <ButtonSubmit type="submit">Submit</ButtonSubmit>
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

export default IndexPage
