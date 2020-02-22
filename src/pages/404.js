import React from "react"

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

const NotFoundPage = () => (
  <Layout>
    <Helmet title="404 Not Found" />
    <Section>
      <Container>
        <Title>NOT FOUND</Title>
        <Subtitle>
          You just hit a route that doesn&#39;t exist... the sadness.
        </Subtitle>
      </Container>
    </Section>
  </Layout>
)

export default NotFoundPage
