import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import styled from "styled-components"

const Container = styled.div`
  max-width: 600px;
  text-align: center;
  margin: 0 auto;
  padding: 0 16px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  background-color: #2200d8;
`

const Title = styled.h1`
  font-family: Moderat-Bold, sans-serif;
  color: #ffffff;
  font-size: 36px;
`

const Subtitle = styled.h2`
  color: #ffffff;
  font-size: 24px;
`

const Button = styled(Link)`
  border: none;
  background-color: #ffffff;
  color: #2200d2;
  font-family: Moderat-Bold, sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.2em;
  padding: 12px 40px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: inline-block;
  &:hover {
    background-color: #e9e9e9;
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }
`

const ButtonWrapper = styled.div`
  text-align: center;
`

const Status = () => (
  <Layout>
    <Helmet title="Deployment Status | Naisu Studio" />
    <Section>
      <Container>
        <Title>Deployment Status</Title>
        <Subtitle>Production Environment.</Subtitle>
        <a
          href="https://app.netlify.com/sites/naisu/deploys"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt=""
            src="https://api.netlify.com/api/v1/badges/615e7c38-42a0-4cbe-a13a-4cd64df5bfd4/deploy-status"
          />
        </a>
        <ButtonWrapper>
          <Button to="/">Back to Home</Button>
        </ButtonWrapper>
      </Container>
    </Section>
  </Layout>
)

export default Status
