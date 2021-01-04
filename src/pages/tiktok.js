import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import styled, { css } from 'styled-components'
import iconBack from "../images/icon-back.svg"
import iconMail from "../images/icon-mail.svg"
import logoNaisuTiktok from "../images/logo-naisu-tiktok.svg"

const Container = styled.div`
  max-width: 992px;  
  margin: 0 auto;
  padding: 0 16px;    
`

const Section = styled.section`
	padding: 60px 0;
  position: relative;
`

const Form = styled.div`
	background: linear-gradient(135deg, #0918A4 0%, #9E2183 100%);
	padding: 60px 0;
`

const Footer = styled.footer`
	padding: 16px 0;
`

const FooterLogo = styled.div`
	padding: 16px 0;
`

const FooterText = styled.div`
	font-size: 10px;
`

const Hero = styled.div`
	background: linear-gradient(135deg, #0918A4 0%, #9E2183 100%);
	padding: 110px 0;
	margin-top: 64px;
`

const HeroAction = styled.div`
	display: flex;
`

const Nav = styled.nav`
	background: white;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1;
`

const NavContent = styled.div`
	align-items: center;
	height: 64px;
	display: flex;
	justify-content: space-between;
`

const NavLogo = styled.div`
  position: absolute;
  top: 24px;
  left: 50%;
  width: 144px;
  height: 18px;
  margin-left: -72px;
  background-size: contain;
  background-image: url(${logoNaisuTiktok});
  background-repeat: no-repeat;
  background-position: center;  
`

const ButtonBack = styled(Link)`
	width: 24px;
	height: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
`

const ButtonBackIcon = styled.i`
	width: 16px;
	height: 16px; 
	background-image: url(${iconBack});
	background-size: contain;
`

const ButtonMail = styled(Link)`
	width: 24px;
	height: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
`

const ButtonMailIcon = styled.i`
	width: 20px;
	height: 16px; 
	background-image: url(${iconMail});
	background-size: contain;
`
const Title = styled.h1`
  font-family: Merriweather-Bold, sans-serif;
  color: #000000;
	font-size: 36px;
	${props => props.white && css`
    color: #ffffff;
  `}
`

const Subtitle = styled.h2`
	font-family: Karla-Bold, sans-serif;
  color: #000000;
  font-size: 24px;
`

const Text = styled.p`
	font-family: Karla-Regular, sans-serif;
  color: #000000;
	font-size: 16px;
	${props => props.white && css`
    color: #ffffff;
  `}
`

const Button = styled.button`
  border: none;
  background-color: #ffffff;
  color: #2200d2;
  font-family: Moderat-Bold, sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.2em;
  padding: 12px 32px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: inline-block;  
`




const Status = () => (
  <Layout>
    <Helmet title="Supercharge your TikTok with Us | Naisu Studio" />
		<Nav>
			<Container>
				<NavContent>
					<ButtonBack to="/"><ButtonBackIcon /></ButtonBack>
					<ButtonMail to="/"><ButtonMailIcon /></ButtonMail>
					<NavLogo />
				</NavContent>
			</Container>
		</Nav>
		<Hero>
			<Container>
				<Title white>Supercharge Your TikTok with Us</Title>
				<Text white>Let us do our magic and watch as you make more money through TikTok and beyond!</Text>
				<HeroAction>
					<Button outline>See Our Works</Button>
					<Button >See Our Works</Button>
				</HeroAction>
			</Container>
		</Hero>
		<Section></Section>
		<Form>

		</Form>
		<Footer>
			<Container>
				<FooterLogo />
				<FooterText>2020 © Naisu Studio</FooterText>
			</Container>
		</Footer>
  </Layout>
)

export default Status
