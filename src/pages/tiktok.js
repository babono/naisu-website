import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import styled, { css, keyframes } from 'styled-components'
import iconBack from "../images/ic-back.svg"
import iconMail from "../images/ic-mail.svg"
import iconPlayCircle from "../images/ic-play-circle.svg"
import imageEllipse from "../images/image-ellipse.png"
import logoNaisuBlack from "../images/logo-naisu-black.svg"
import logoNaisuTiktok from "../images/logo-naisu-tiktok.svg"

const gradientAnimation = keyframes`
	0%{background-position:0% 0%}
	50%{background-position:100% 100%}
	100%{background-position:0% 0%}
`

const Container = styled.div`
  max-width: 992px;  
  margin: 0 auto;
  padding: 0 16px;    
`

const Section = styled.section`
	padding: 60px 0;
	position: relative;
	${props => props.gradient && css`
		background: linear-gradient(135deg, #9e2183 0%, #0918a4 100%);
		background-size: 120% 120%;
		animation: ${gradientAnimation} 5s ease infinite;
	`}
`

const Form = styled.div`
	background: linear-gradient(135deg, #0918A4 0%, #9E2183 100%);
	padding: 60px 0;
`

const Footer = styled.footer`
	padding: 16px 0;
`

const FooterLogo = styled.div`
	padding: 6px 0 0;
`

const FooterText = styled.div`
	font-size: 10px;
`

const Hero = styled.div`		
	background: linear-gradient(135deg, #0918a4 0%, #9e2183 100%);
  background-size: 120% 120%;
	padding: 110px 0;
	margin-top: 64px;
	animation: ${gradientAnimation} 5s ease infinite;
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
	box-shadow: inset 0 -1px 0 rgba(230, 230, 230, 1);
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
	line-height: 1.4;
	${props => props.white && css`
    color: #ffffff;
	`}
	${props => props.twoLine && css`
		max-width: 600px;
  `}
`

const Subtitle = styled.h2`
	font-family: Karla-Bold, sans-serif;
  color: #000000;
	font-size: 24px;
	${props => props.violet && css`
    color: #c10899;
	`}
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
  border: 1px solid #ffffff;
  background-color: #ffffff;
  color: #000000;
  font-family: Moderat-Bold, sans-serif;
  font-size: 14px;
  padding: 10px 40px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
	display: inline-block;
	margin-right: 12px;
	${props => props.outline && css`
		background-color: transparent;
		color: #ffffff;		
  `}  
`

const ListItem = styled.div`
	display:flex;
	align-items: center;
`

const ListImage = styled.div`	
	width: 20%;
	padding-right: 24px;
`

const ListDescription = styled.div`
	
`

const Row = styled.div`
	display: flex;
	margin: 0 -16px;
`

const ColumnItem = styled.div`
	width: 33.33%;
	flex: 0 0 auto;
	padding: 0 16px;
`

const ColumnImage = styled.div`
	
`




const Tiktok = () => (
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
					<Button >Count Me In</Button>
				</HeroAction>
			</Container>
		</Hero>
		<Section>
			<Container>
				<Title twoLine>Grow Your Brand and Be a Winner in TikTok</Title>
				<ListItem>
					<ListImage><img src={imageEllipse} alt="Ellipse" /></ListImage>
					<ListDescription>
						<Subtitle violet>Grow Your Brand and Be a Winner in TikTok</Subtitle>
						<Text>37 million monthly active users (MAU) with 18 million users increase from Q4 2019 until Q1 2020.</Text>
					</ListDescription>
				</ListItem>
				<ListItem>
					<ListImage><img src={imageEllipse} alt="Ellipse" /></ListImage>
					<ListDescription>
						<Subtitle violet>TikTok is Fueled by Young Energy in Indonesia</Subtitle>
						<Text>84% of TikTok users in Indonesia are under 25 years old.</Text>
					</ListDescription>
				</ListItem>
				<ListItem>
					<ListImage><img src={imageEllipse} alt="Ellipse" /></ListImage>
					<ListDescription>
						<Subtitle violet>Significantly Improve Your Brand Image through TikTok</Subtitle>
						<Text>13% of brand owners changed their brand image to be more open, modern, unique, and creative-looking</Text>
					</ListDescription>
				</ListItem>
			</Container>
		</Section>
		<Section gradient>
			<Container>
				<Title twoLine white>Grow Your Brand and Be a Winner in TikTok</Title>
				<Text white>With A-Z services in TikTok, we can help grow your brand in no time, because time is money. So simple!</Text>
				<Row>
					<ColumnItem>
						<ColumnImage><img src={imageEllipse} alt="Ellipse" /></ColumnImage>
						<Text white>I want to know the no. 1 reason here, there, and everywhere. Of course this is the second dummy sentence.</Text>
					</ColumnItem>
					<ColumnItem>
						<ColumnImage><img src={imageEllipse} alt="Ellipse" /></ColumnImage>
						<Text white>I want to know the no. 1 reason here, there, and everywhere. Of course this is the second dummy sentence.</Text>
					</ColumnItem>
					<ColumnItem>
						<ColumnImage><img src={imageEllipse} alt="Ellipse" /></ColumnImage>
						<Text white>I want to know the no. 1 reason here, there, and everywhere. Of course this is the second dummy sentence.</Text>
					</ColumnItem>
				</Row>
			</Container>
		</Section>
		<Section>
			<Container>
				<Title>Our Works</Title>
				<ListItem>
					<ListImage><img src={imageEllipse} alt="Ellipse" /></ListImage>
					<ListDescription>
						<Subtitle violet>Grow Your Brand and Be a Winner in TikTok</Subtitle>
						<Text>37 million monthly active users (MAU) with 18 million users increase from Q4 2019 until Q1 2020.</Text>
					</ListDescription>
				</ListItem>
				<ListItem>
					<ListImage><img src={imageEllipse} alt="Ellipse" /></ListImage>
					<ListDescription>
						<Subtitle violet>TikTok is Fueled by Young Energy in Indonesia</Subtitle>
						<Text>84% of TikTok users in Indonesia are under 25 years old.</Text>
					</ListDescription>
				</ListItem>
				<ListItem>
					<ListImage><img src={imageEllipse} alt="Ellipse" /></ListImage>
					<ListDescription>
						<Subtitle violet>Significantly Improve Your Brand Image through TikTok</Subtitle>
						<Text>13% of brand owners changed their brand image to be more open, modern, unique, and creative-looking</Text>
					</ListDescription>
				</ListItem>
			</Container>
		</Section>
		<Form>
			<Container>
				<Title>Ready to Make Your First Step with TikTok?</Title>
				<Subtitle>We offer a free consultation to find out what your brand needs. Contact us now!</Subtitle>

			</Container>
		</Form>
		<Footer>
			<Container>
				<FooterLogo><img src={logoNaisuBlack} alt="Logo Naisu Black" /></FooterLogo>
				<FooterText>2020 © Naisu Studio</FooterText>
			</Container>
		</Footer>
  </Layout>
)

export default Tiktok
