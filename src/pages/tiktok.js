import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled, { css, keyframes } from 'styled-components'
import iconBack from "../images/ic-back.svg"
import iconMail from "../images/ic-mail.svg"
import iconPlayCircle from "../images/ic-play-circle.svg"
import imageTornado from "../images/image-tornado.svg"
import Img from "gatsby-image"
import scrollTo from 'gatsby-plugin-smoothscroll';
import imageThumbTiktok from "../images/image-thumb-tiktok.jpeg"
import tiktokVideo from "../videos/video-tiktok.mp4"
import imageEllipse from "../images/image-ellipse.png"
import logoNaisuBlack from "../images/logo-naisu-black.svg"
import logoNaisuTiktok from "../images/logo-naisu-tiktok.svg"

const gradientAnimation = keyframes`
	0%{background-position:0% 0%}
	50%{background-position:100% 100%}
	100%{background-position:0% 0%}
`

const tornadoAnimation = keyframes`
	0%
	100%,
	 {
		transform: rotateY(0) translate(0,0) translateZ(6px);
	}
	50% {
		transform: rotateY(8deg) translate(-2px,-2px) translateZ(10px);
	}
`

const Container = styled.div`
  max-width: 992px;  
  margin: 0 auto;
	padding: 0 16px;  
	position: relative;
	z-index: 1;  
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

const FormContent = styled.div`
	margin-top: 48px;
	max-width: 100%;
	width: 328px;
`

const FormField = styled.div`
	position: relative;
	margin-bottom: 24px;
`

const FormInput = styled.input`
	border: none;
	border-bottom: 1px solid #ffffff;
	transition: all 0.2s ease-in-out;
	touch-action: manipulation;
	-webkit-appearance: none;
	outline: none;
	font-size: 16px;
	font-family: Karla-Regular, sans-serif;
	color: #ffffff;
	background: none;
	width: 100%;
	&::-webkit-input-placeholder {
		opacity: 0;
		transition: inherit;
	}
	&:focus{
		&::-webkit-input-placeholder {
			opacity: 1;
		}
	}
	&:not(:placeholder-shown) + label,
	&:focus + label {
		font-size: 11px;
		bottom: 75%;
	}
`

const FormTextArea = styled.textarea`
	border: none;
	border-bottom: 1px solid #ffffff;
	transition: all 0.2s ease-in-out;
	touch-action: manipulation;
	-webkit-appearance: none;
	outline: none;
	font-size: 16px;
	font-family: Karla-Regular, sans-serif;
	color: #ffffff;
	background: none;
	width: 100%;
	resize: none;
	padding: 1px 2px;
	&::-webkit-input-placeholder {
		opacity: 0;
		transition: inherit;
	}
	&:focus{
		&::-webkit-input-placeholder {
			opacity: 1;
		}
	}
	&:not(:placeholder-shown) + label,
	&:focus + label {
		font-size: 11px;
		top: -16px;
	}
`

const FormLabel = styled.label`
	color: #ffffff;
	position: absolute;
	left: 2px;
	bottom: 2px;
	font-family: Karla-Regular, sans-serif;
	transition: all 0.2s ease-in-out;
	touch-action: manipulation;
	font-size: 16px;
	${props => props.textarea && css`
		bottom: initial;
		top: 0;
	`}
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
	position: relative;
	overflow: hidden;
	&:after {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: url(${imageTornado});
		background-repeat: no-repeat;
		background-position: 90% center;
		transform-style: preserve-3d;
		top: 0;
		left: 0;
		animation: ${tornadoAnimation} 5s ease infinite;
		@media (max-width: 768px) {
			display: none;
		}
	}
`

const Form = styled.section`
	background: linear-gradient(135deg, #0918A4 0%, #9E2183 100%);
	background-size: 120% 120%;
	animation: ${gradientAnimation} 5s ease infinite;
	padding: 60px 0;
	position: relative;
	&:after {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: url(${imageTornado});
		background-repeat: no-repeat;
		background-position: 90% center;
		background-size: contain;
		transform-style: preserve-3d;
		top: 0;
		left: 0;
		animation: ${tornadoAnimation} 5s ease infinite;
		@media (max-width: 768px) {
			display: none;
		}
	}
`

const HeroAction = styled.div`
	display: flex;
	margin-top: 24px;
`

const Nav = styled.nav`
	background: white;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
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
	transition: all 0.2s ease-in-out;
	&:hover,
	&:active{
		transform: translateX(-3px);
	}
`

const ButtonBackIcon = styled.i`
	width: 16px;
	height: 16px; 
	background-image: url(${iconBack});
	background-size: contain;
`

const ButtonMail = styled.button`
	width: 24px;
	height: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	background:none;
	border: none;
	padding: 0;
	outline: none;
	cursor: pointer;
	&:hover,
	&:active{
		transform: translateX(3px);
	}
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
	margin: 0;
	${props => props.violet && css`
    color: #c10899;
	`}
`

const Text = styled.p`
	font-family: Karla-Regular, sans-serif;
  color: #000000;
	font-size: 16px;
	margin: 0;
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
	outline: none;
	&:hover,
	&:active{
		transform: translatey(-3px);
  	box-shadow:0 5px 5px -5px #742488;
	}
	${props => props.outline && css`
		background-color: transparent;
		color: #ffffff;		
	`}
	${props => props.full && css`
		width: 100%;		
  `}  
`

const ButtonLink = styled.a`
  border: 1px solid #c10899;
  background-color: #c10899;
  color: #ffffff;
  font-family: Moderat-Bold, sans-serif;
  font-size: 14px;
  padding: 6px 40px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
	display: inline-block;
	&:hover,
	&:active{
		transform: translatey(-3px);
  	box-shadow:0 5px 5px -5px #742488;
	}
`

const ListItem = styled.div`
	display:flex;
	align-items: center;
	margin-bottom: 24px;
	&:last-child{
		margin-bottom: 0;
	}
`

const ListImage = styled.div`	
	width: 20%;
	padding-right: 24px;
	line-height: 0;
`

const ListDescription = styled.div`
	
`

const Row = styled.div`
	display: flex;
	margin: 32px -16px 0;
`

const ColumnItem = styled.div`
	width: 33.33%;
	flex: 0 0 auto;
	padding: 0 16px;
`

const ColumnImage = styled.div`
	line-height: 0;
	margin-bottom: 16px;
`

const Works = styled.div`	
`

const WorksFilter = styled.div`	
`

const WorksAction = styled.div`
	margin-top: 26px;
	text-align: center;	
`

const WorksList = styled.div`	
	display: flex;
	flex-wrap: wrap;
	margin: 0 -6px;
`

const WorksGrid = styled.div`	
	flex: 0 0 auto;
	width: 16.6667%;
	padding: 6px;
`

const WorksItem = styled.a`	
	position: relative;
	display: block;
	overflow: hidden;
	&:after{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,0.5);
		width: 100%;
		height: 100%;
		transition: background-color .3s ease;
	}
	&:hover{
		&:after{
			background-color: rgba(0,0,0,0);
		}
		i {
			transform: translate(-21px,350%);
		}
		video {
			display: block;
		}
	}	
`

const WorksThumb = styled.div`	
`

const WorksVideo = styled.video`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: none;
	z-index: 1;	
`

const PlayIcon = styled.i`
	position: absolute;	
	top: 50%;
	left: 50%;
	width: 42px;
	height: 42px;
	background-image: url(${iconPlayCircle});
	background-size: contain;
	transform: translate(-21px,-21px);
	transition: transform .3s ease;
	z-index: 1;
`

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "image-thumb-tiktok.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const LoopWorks = ({ file }) => {
	var rows = [];
	for (var i = 0; i < 12; i++) {
			rows.push(<WorksGrid key={i}>
				<WorksItem target="_blank" href="https://www.tiktok.com/@naisutikitoku/video/6844478080329846017">
					<WorksThumb>
						<Img fluid={file} alt="Thumbnail asoy" />
						<WorksVideo autoPlay muted loop playsInline>
							<source src={tiktokVideo} type="video/mp4" />
						</WorksVideo>
					</WorksThumb>
					<PlayIcon />
				</WorksItem>
			</WorksGrid>);
	}
  return rows;
}



const Tiktok = ({ data }) => {
	const [fullname, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const contactWhatsapp = (fullname, email, message) => {
		const templateMessage = 'Hi Naisu, my name is ' + fullname + '. I have sent you this message: ' + message + '. You can reach me through this number or via this email: ' + email + '. Cheers!';
		const intent = 'https://api.whatsapp.com/send?phone=' 
			 + '0809894444' 
			 + '&text=' 
			 + encodeURIComponent(templateMessage);
		
		setFullName("");
		setEmail("");
		setMessage("");
	
		window.open(intent);  
	}

	return (
  <Layout>
    <Helmet title="Supercharge your TikTok with Us | Naisu Studio" />
		<Nav>
			<Container>
				<NavContent>
					<ButtonBack to="/"><ButtonBackIcon /></ButtonBack>
					<ButtonMail onClick={() => scrollTo('#formSection')}><ButtonMailIcon /></ButtonMail>
					<NavLogo />
				</NavContent>
			</Container>
		</Nav>
		<Hero>
			<Container>
				<Title white>Supercharge Your TikTok with Us</Title>
				<Text white>Let us do our magic and watch as you make more money through TikTok and beyond!</Text>
				<HeroAction>
					<Button outline onClick={() => scrollTo('#worksSection')}>See Our Works</Button>
					<Button onClick={() => scrollTo('#formSection')}>Count Me In</Button>
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
		<Section id="worksSection">
			<Container>
				<Title>Our Works</Title>
				<Works>
					<WorksFilter>

					</WorksFilter>
					<WorksList>
						<LoopWorks file={data.file.childImageSharp.fluid}/>						
					</WorksList>
					<WorksAction>
						<ButtonLink href="https://www.tiktok.com/@naisutikitoku" target="_blank">See More</ButtonLink>
					</WorksAction>
				</Works>
			</Container>
		</Section>
		<Form id="formSection">
			<Container>
				<Title white twoLine>Ready to Make Your First Step with TikTok?</Title>
				<Text white>We offer a free consultation to find out what your brand needs. Contact us now!</Text>				
				<FormContent>
					<FormField>
						<FormInput type="text" name="fullname" id="fullname" placeholder="Jane Appleseed" value={fullname} onChange={e => setFullName(e.target.value)} />
						<FormLabel htmlFor="fullname">Full Name</FormLabel>
					</FormField>
					<FormField>
						<FormInput type="email" name="email" id="email" placeholder="jane.appleseed@example.com" value={email} onChange={e => setEmail(e.target.value)} />
						<FormLabel htmlFor="email">Email</FormLabel>
					</FormField>
					<FormField>
						<FormTextArea id="message" placeholder="Hello, Naisu!" name="message" value={message} onChange={e => setMessage(e.target.value)}/>
						<FormLabel textarea htmlFor="message">Message</FormLabel>
					</FormField>										
					<Button outline full onClick={() => contactWhatsapp(fullname,email,message)}>Connect Now</Button>
  			</FormContent>									
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
}

export default Tiktok