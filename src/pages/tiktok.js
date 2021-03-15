import React, { useState, useEffect } from "react"
import { Link } from "gatsby-plugin-modal-routing"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled, { css, keyframes } from "styled-components"
import iconBack from "../images/ic-back.svg"
import iconBackWhite from "../images/ic-back-white.svg"
import iconMail from "../images/ic-mail.svg"
import iconMailWhite from "../images/ic-mail-white.svg"
import iconPlayCircle from "../images/ic-play-circle.svg"
import iconTiktokPink from "../images/ic-tiktok-pink.svg"
import iconCaret from "../images/ic-caret.svg"
import iconIgPink from "../images/ic-ig-pink.svg"
import iconTop1 from "../images/ic-top-1.svg"
import iconTop2 from "../images/ic-top-2.svg"
import iconTop3 from "../images/ic-top-3.svg"
import iconGrow1 from "../images/ic-grow-1.svg"
import iconGrow2 from "../images/ic-grow-2.svg"
import iconGrow3 from "../images/ic-grow-3.svg"
import iconGrow4 from "../images/ic-grow-4.svg"
import iconGrow5 from "../images/ic-grow-5.svg"
import imageTornado from "../images/image-tornado.svg"
import Img from "gatsby-image"
import scrollTo from "gatsby-plugin-smoothscroll"
import tiktokVideo from "../videos/video-tiktok.mp4"
import logoNaisuBlack from "../images/logo-naisu-black.svg"
import logoNaisuTiktok from "../images/logo-naisu-tiktok.svg"
import logoNaisuTiktokWhite from "../images/logo-naisu-tiktok-white.svg"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import OutsideClickHandler from "react-outside-click-handler"

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
  ${props =>
    props.gradient &&
    css`
      background: linear-gradient(135deg, #9e2183 0%, #0918a4 100%);
      background-size: 120% 120%;
      animation: ${gradientAnimation} 5s ease infinite;
    `}
  @media (max-width: 768px) {
    padding: 32px 0;
  }
`

const FormContent = styled.div`
  margin-top: 48px;
  max-width: 100%;
  width: 328px;
  @media (max-width: 768px) {
    width: 100%;
  }
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
  &:focus {
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
  min-height: 64px;
  &::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }
  &:focus {
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
  ${props =>
    props.textarea &&
    css`
      bottom: initial;
      top: 0;
    `}
`

const Footer = styled.footer`
  padding: 16px 0;
  ${Container} {
    display: flex;
    align-items: center;
  }
`

const FooterLogo = styled.div`
  padding: 6px 0 0;
`

const FooterText = styled.div`
  font-size: 10px;
`

const FooterLeft = styled.div`
  flex: 1 1 auto;
`

const FooterRight = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
`

const FooterSocialLink = styled.a`
  margin-left: 25px;
`

const FooterSocialIcon = styled.img``

const Hero = styled.div`
  background: linear-gradient(135deg, #0918a4 0%, #9e2183 100%);
  background-size: 120% 120%;
  padding: 200px 0 108px;
  animation: ${gradientAnimation} 5s ease infinite;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 128px 0 32px;
  }
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
    mix-blend-mode: soft-light;
    @media (max-width: 768px) {
      display: none;
    }
  }
`

const Form = styled.section`
  background: linear-gradient(135deg, #0918a4 0%, #9e2183 100%);
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
    mix-blend-mode: soft-light;
    @media (max-width: 768px) {
      display: none;
    }
  }
`

const HeroAction = styled.div`
  display: flex;
  margin-top: 24px;
  @media (max-width: 768px) {
    justify-content: space-between;
    button {
      flex: 0 0 auto;
      width: calc(50% - 6px);
      margin-right: 0;
      padding: 6px;
    }
  }
`

const NavLogo = styled.div`
  position: absolute;
  top: 24px;
  left: 50%;
  width: 164px;
  height: 24px;
  margin-left: -72px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const ButtonBackIcon = styled.i`
  width: 24px;
  height: 24px;
  background-size: contain;
`

const ButtonMailIcon = styled.i`
  width: 24px;
  height: 24px;
  background-size: contain;
`

const Nav = styled.nav`
  background: ${props => (props.white ? "white" : "transparent")};
  position: ${props => (props.white ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  box-shadow: ${props =>
    props.white ? "inset 0 -1px 0 rgba(230, 230, 230, 1)" : "none"};
  transition: all 0.3s ease-in;
  ${ButtonBackIcon} {
    background-image: ${props =>
      props.white ? `url(${iconBack})` : `url(${iconBackWhite})`};
  }
  ${ButtonMailIcon} {
    background-image: ${props =>
      props.white ? `url(${iconMail})` : `url(${iconMailWhite})`};
  }
  ${NavLogo} {
    background-image: ${props =>
      props.white ? `url(${logoNaisuTiktok})` : `url(${logoNaisuTiktokWhite})`};
  }
  ${props => {
    if (props.white && props.scrolled) {
      return `
				transform: translateY(0);				
		`
    } else if (props.white) {
      return `
				transform: translateY(-64px);				
				
		`
    } else {
      return `
				transform: none;
		`
    }
  }}
`

const NavContent = styled.div`
  align-items: center;
  height: 64px;
  display: flex;
  justify-content: space-between;
`

const ButtonBack = styled(Link)`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover,
  &:active {
    transform: translateX(-3px);
  }
`

const ButtonMail = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  background: none;
  border: none;
  padding: 0;
  outline: none;
  cursor: pointer;
  &:hover,
  &:active {
    transform: translateX(3px);
  }
`

const Title = styled.h1`
  font-family: Merriweather-Bold, sans-serif;
  color: #000000;
  font-size: 36px;
  line-height: 1.4;
  margin: 0 0 12px;
  ${props =>
    props.white &&
    css`
      color: #ffffff;
    `}
  ${props =>
    props.twoLine &&
    css`
      max-width: 600px;
    `}
	@media (max-width: 768px) {
    font-size: 24px;
  }
`

const Subtitle = styled.h2`
  font-family: Karla-Bold, sans-serif;
  color: #000000;
  font-size: 24px;
  line-height: 1.4;
  margin: 0;
  ${props =>
    props.violet &&
    css`
      color: #c10899;
    `}
  ${props =>
    props.white &&
    css`
      color: #ffffff;
    `}
	@media (max-width: 768px) {
    font-size: 16px;
  }
`

const Text = styled.p`
  font-family: Karla-Regular, sans-serif;
  color: #000000;
  font-size: 16px;
  line-height: 1.4;
  margin: 0;
  ${props =>
    props.white &&
    css`
      color: #ffffff;
    `}
  @media (max-width: 768px) {
    font-size: 12px;
  }
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
  &:active {
    transform: translatey(-3px);
    box-shadow: 0 5px 5px -5px #742488;
  }
  @media (max-width: 768px) {
    padding: 6px 32px;
  }
  ${props =>
    props.outline &&
    css`
      background-color: transparent;
      color: #ffffff;
    `}
  ${props =>
    props.full &&
    css`
      width: 100%;
    `}
`

const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`

const ListImage = styled.div`
  width: 120px;
  margin-right: 24px;
  line-height: 0;
  flex: 0 0 auto;
  @media (max-width: 768px) {
    width: 60px;
    margin-right: 16px;
  }
`

const ListDescription = styled.div`
  flex: 1 1 auto;
`

const Row = styled.div`
  display: flex;
  margin: 32px -16px 0;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const ColumnItem = styled.div`
  width: 33.33%;
  flex: 0 0 auto;
  padding: 0 16px;
  &:nth-child(-n + 3) {
    margin-bottom: 48px;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 24px;
    &:nth-child(-n + 3) {
      margin-bottom: 24px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const ColumnImage = styled.div`
  line-height: 0;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    width: 80px;
  }
`

const Works = styled.div``

const WorksFilter = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    margin-top: 15px;
    min-width: calc(100vw - 52px);
  }
`

const HeadSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const WorksAction = styled.div`
  margin-top: 26px;
  text-align: center;
`

const WorksListWrapper = styled.div``

const WorksList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -6px;
`

const WorksGrid = styled.div`
  flex: 0 0 auto;
  width: 16.6667%;
  padding: 6px;
  @media (max-width: 768px) {
    width: 33.333%;
  }
`

const WorksInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  transform: translateY(-100%);
  z-index: 2;
  justify-content: center;
  align-items: center;
`

const WorksItem = styled(Link)`
  position: relative;
  display: block;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: 100%;
    transition: background-color 0.3s ease;
    z-index: 1;
  }
  &:hover {
    &:after {
      background-color: rgba(0, 0, 0, 0.6);
    }
    i {
      transform: translate(-21px, 350%);
    }
    video {
      display: block;
    }
    ${WorksInfo} {
      transform: translateY(0);
    }
  }
`

const WorksThumb = styled.div``

const WorksTitle = styled.div`
  font-size: 12px;
  color: #ffffff;
  font-family: Karla-Bold, sans-serif;
  line-height: 1.5;
  margin-bottom: 4px;
  text-align: center;
`

const WorksClient = styled.div`
  font-size: 10px;
  color: #ffffff;
  font-family: Karla-Regular, sans-serif;
  line-height: 1.5;
  text-align: center;
`

const WorksImageContainer = styled.div`
  position: relative;
  height: 0;
  width: 100%;
  padding-bottom: 177.78%;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding-bottom: 100%;
  }
`

const WorksImage = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  transform: translate(-21px, -21px);
  transition: transform 0.3s ease;
  z-index: 1;
`

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const PaginationText = styled.div`
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  font-family: Karla-Bold, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: ${props => (props.disabled ? "#bdbdbd" : "#c10899")};
  margin: 0 32px;
`

const PaginationInfo = styled.div`
  display: none;
  font-family: Karla-Bold, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  @media (max-width: 768px) {
    display: block;
  }
`

const PaginationNumber = styled.div`
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  margin-right: ${props => (props.last ? "0" : "12px")};
  font-family: Karla-Bold, sans-serif;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  width: 24px;
  height: 24px;
  background: ${props => (props.disabled ? "#f2f2f2" : "transparent")};
  color: ${props => (props.disabled ? "#000000" : "#c10899")};
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`

const DropdownFilter = styled.div`
  position: relative;
  width: 150px;
  margin-left: 12px;
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    &:first-child {
      padding-right: 10px;
    }
    &:last-child {
      padding-left: 10px;
    }
  }
`

const DropdownLabel = styled.div`
  font-family: Karla-Bold, sans-serif;
  color: ${props => (props.default ? "#bdbdbd" : "#000000")};
  font-size: 14px;
  line-height: 20px;
  border-bottom: 1px solid #000000;
  background-image: url(${iconCaret});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center right;
  cursor: pointer;
  user-select: none;
`

const DropdownList = styled.div`
  border: 1px solid #bdbdbd;
  background: #ffffff;
  position: absolute;
  width: 130%;
  z-index: 3;
  top: calc(100% + 8px);
  @media (max-width: 768px) {
    width: 100%;
  }
`

const DropdownItem = styled.div`
  font-family: Karla-Bold, sans-serif;
  color: #000000;
  font-size: 14px;
  padding: 8px;
  &:hover {
    cursor: pointer;
    background: #f2f2f2;
  }
`

export const query = graphql`
  query TikTokQuery {
    file(relativePath: { eq: "image-thumb-tiktok.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allPrismicTiktokVideo {
      totalCount
      edges {
        node {
          id
          data {
            client
            embed_video {
              embed_url
              thumbnail_url
            }
            thumbnail_video {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 540, webpQuality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            title_video {
              text
            }
          }
        }
      }
    }
    allPrismicTiktok {
      edges {
        node {
          data {
            hero_title {
              text
            }
          }
        }
      }
    }
  }
`

const Tiktok = ({ data }) => {
  const [fullname, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [isScrolled, setIsScrolled] = useState(false)

  const [isDropdownSortOpen, setIsDropdownSortOpen] = useState(false)
  const [dropdownSort, setDropdownSort] = useState("Newest")
  const [isDropdownCompanyOpen, setIsDropdownCompanyOpen] = useState(false)
  const [dropdownCompany, setDropdownCompany] = useState("All")

  const [videosData, setVideosData] = useState(data.allPrismicTiktokVideo.edges)
  const [videosCount, setVideosCount] = useState(
    data.allPrismicTiktokVideo.totalCount
  )
  const [videosPerPage] = useState(12)
  const [videosList, setVideosList] = useState([])

  const [totalPage, setTotalPage] = useState(
    Math.ceil(videosCount / videosPerPage)
  )
  const [currentPage, setCurrentPage] = useState(1)

  const [listClient, setListClient] = useState([])

  useEffect(() => {
    const clients = ["All"]
    videosData.forEach(function(video) {
      if (
        !clients.includes(video.node.data.client) &&
        video.node.data.client !== null
      ) {
        clients.push(video.node.data.client)
      }
    })
    setListClient(clients)
  }, [])

  useEffect(() => {
    if (dropdownCompany !== "All") {
      const filteredVideos = data.allPrismicTiktokVideo.edges.filter(function(
        video
      ) {
        return video.node.data.client === dropdownCompany
      })
      if (dropdownSort !== "Newest") {
        console.log("masuk")
        filteredVideos.reverse()
      }
      setVideosData(filteredVideos)
    } else {
      console.log("mucik")
      const filteredVideos = data.allPrismicTiktokVideo.edges.filter(function(
        video
      ) {
        return video
      })
      if (dropdownSort !== "Newest") {
        filteredVideos.reverse()
      }
      setVideosData(filteredVideos)
    }
  }, [dropdownCompany, dropdownSort])

  useEffect(() => {
    setCurrentPage(1)
    setVideosCount(videosData.length)
  }, [videosData])

  useEffect(() => {
    setTotalPage(Math.ceil(videosCount / videosPerPage))
  }, [videosCount])

  useEffect(() => {
    const currentIndexNumber = currentPage * videosPerPage - videosPerPage
    setVideosList(
      videosData.slice(currentIndexNumber, currentPage * videosPerPage)
    )
  }, [videosData, currentPage])

  const handlePrev = () => {
    if (currentPage === 1) return
    setCurrentPage(currentPage - 1)
  }

  const handleNext = () => {
    if (currentPage === totalPage) return
    setCurrentPage(currentPage + 1)
  }

  const goToPage = pageNumber => {
    setCurrentPage(pageNumber)
  }

  const closeDropdowns = () => {
    setIsDropdownSortOpen(false)
    setIsDropdownCompanyOpen(false)
  }

  const handleDropdownSort = () => {
    if (!isDropdownSortOpen) {
      closeDropdowns()
      setIsDropdownSortOpen(true)
    } else {
      setIsDropdownSortOpen(false)
    }
  }

  const handleDropdownCompany = () => {
    if (!isDropdownCompanyOpen) {
      closeDropdowns()
      setIsDropdownCompanyOpen(true)
    } else {
      setIsDropdownCompanyOpen(false)
    }
  }

  const handleDropdownSortItem = value => {
    setDropdownSort(value)
    closeDropdowns()
  }

  const handleDropdownCompanyItem = value => {
    setDropdownCompany(value)
    closeDropdowns()
  }

  const contactWhatsapp = (fullname, email, message) => {
    const templateMessage =
      "Hi Naisu, my name is " +
      fullname +
      ". I have sent you this message: " +
      message +
      ". You can reach me through this number or via this email: " +
      email +
      ". Cheers!"
    const intent =
      "https://api.whatsapp.com/send?phone=" +
      "0809894444" +
      "&text=" +
      encodeURIComponent(templateMessage)

    setFullName("")
    setEmail("")
    setMessage("")

    window.open(intent)
  }

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -64) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })

  const generateVideoSource = embedUrl => {
    if (embedUrl) {
      const split = embedUrl.split("/")
      const videoSourceUrl =
        "https://drive.google.com/uc?export=download&id=" + split[5]

      return videoSourceUrl
    }
  }

  return (
    <Layout>
      <Helmet title="Supercharge your TikTok with Us | Naisu Studio" />
      <Nav>
        <Container>
          <NavContent>
            <ButtonBack to="/">
              <ButtonBackIcon />
            </ButtonBack>
            <ButtonMail onClick={() => scrollTo("#formSection")}>
              <ButtonMailIcon />
            </ButtonMail>
            <NavLogo />
          </NavContent>
        </Container>
      </Nav>
      <Nav white scrolled={isScrolled}>
        <Container>
          <NavContent>
            <ButtonBack to="/">
              <ButtonBackIcon />
            </ButtonBack>
            <ButtonMail onClick={() => scrollTo("#formSection")}>
              <ButtonMailIcon />
            </ButtonMail>
            <NavLogo />
          </NavContent>
        </Container>
      </Nav>
      <Hero>
        <Container>
          <Title white>Beef Up Your TikTok with Naisu</Title>
          <Text white>
            Advertise better and earn more with the most effective-yet-efficient
            way!
          </Text>
          <HeroAction>
            <Button outline onClick={() => scrollTo("#worksSection")}>
              See Our Works
            </Button>
            <Button onClick={() => scrollTo("#formSection")}>
              Count Me In
            </Button>
          </HeroAction>
        </Container>
      </Hero>
      <Section>
        <Container>
          <Title>Take Your Brand to The Top on TikTok</Title>
          <br />
          <ListItem>
            <ListImage>
              <img src={iconTop1} alt="Ellipse" />
            </ListImage>
            <ListDescription>
              <Subtitle violet>
                Skyrocketing Amount of Users in Indonesia
              </Subtitle>
              <Text>53.4 million monthly active users (MAU) by Q4 2020.</Text>
            </ListDescription>
          </ListItem>
          <ListItem>
            <ListImage>
              <img src={iconTop2} alt="Ellipse" />
            </ListImage>
            <ListDescription>
              <Subtitle violet>Viewed and Recognized by Bunch of Eyes</Subtitle>
              <Text>212.7 billion monthly video views by Q4 2020.</Text>
            </ListDescription>
          </ListItem>
          <ListItem>
            <ListImage>
              <img src={iconTop3} alt="Ellipse" />
            </ListImage>
            <ListDescription>
              <Subtitle violet>Significant Improvement of Brand Image</Subtitle>
              <Text>
                87% of users see ads on TikTok shift brand image to be more
                open, modern, unique, creative, and interesting.
              </Text>
            </ListDescription>
          </ListItem>
        </Container>
      </Section>
      <Section gradient>
        <Container>
          <Title twoLine white>
            More Than Just Being Viral, Grow Your Brand on TikTok!
          </Title>
          <Subtitle white>
            With A-to-Z services, let us show you how to make your marketing
            budget more efficient through the unique algorithm of TikTok.
          </Subtitle>
          <Row>
            <ColumnItem>
              <ColumnImage>
                <img src={iconGrow1} alt="Ellipse" />
              </ColumnImage>
              <Subtitle white>Campaign Strategy</Subtitle>
              <Text white>
                Suggesting the most effective strategy, adjusted with the
                brand’s needs, including timeline distribution along with
                campaign objective and message.{" "}
              </Text>
            </ColumnItem>
            <ColumnItem>
              <ColumnImage>
                <img src={iconGrow2} alt="Ellipse" />
              </ColumnImage>
              <Subtitle white>Creative Brief</Subtitle>
              <Text white>
                Creating the concept with many references, varied from the
                trending content to the organic ones, as well as the creative
                brief and guidance for KOL to do the video production.
              </Text>
            </ColumnItem>
            <ColumnItem>
              <ColumnImage>
                <img src={iconGrow3} alt="Ellipse" />
              </ColumnImage>
              <Subtitle white>Content Production</Subtitle>
              <Text white>
                Executing the content production with the finest recording tools
                and equipment in a bid to visualize the creative brief.
              </Text>
            </ColumnItem>
            <ColumnItem>
              <ColumnImage>
                <img src={iconGrow4} alt="Ellipse" />
              </ColumnImage>
              <Subtitle white>KOL Marketing</Subtitle>
              <Text white>
                Directing and supervising KOLs or influencers in making videos
                based on the creative brief, as well as handling the dealing
                process with legal work agreement.
              </Text>
            </ColumnItem>
            <ColumnItem>
              <ColumnImage>
                <img src={iconGrow5} alt="Ellipse" />
              </ColumnImage>
              <Subtitle white>Media Buying</Subtitle>
              <Text white>
                Selecting the best channel of distribution on TikTok to meet the
                needs of the brand.{" "}
              </Text>
            </ColumnItem>
          </Row>
        </Container>
      </Section>
      <Section id="worksSection">
        <Container>
          <HeadSection>
            <Title>Our Works</Title>
            <OutsideClickHandler
              onOutsideClick={() => {
                closeDropdowns()
              }}
            >
              <WorksFilter>
                <DropdownFilter>
                  <DropdownLabel
                    default={dropdownSort === "Newest"}
                    onClick={() => handleDropdownSort()}
                  >
                    {dropdownSort}
                  </DropdownLabel>
                  {isDropdownSortOpen && (
                    <DropdownList>
                      <DropdownItem
                        onClick={() => handleDropdownSortItem("Newest")}
                      >
                        Newest
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => handleDropdownSortItem("Oldest")}
                      >
                        Oldest
                      </DropdownItem>
                    </DropdownList>
                  )}
                </DropdownFilter>
                <DropdownFilter>
                  <DropdownLabel
                    default={dropdownCompany === "All"}
                    onClick={() => handleDropdownCompany()}
                  >
                    {dropdownCompany}
                  </DropdownLabel>
                  {isDropdownCompanyOpen && (
                    <DropdownList>
                      {listClient.map((client, index) => (
                        <DropdownItem
                          key={index}
                          onClick={() => handleDropdownCompanyItem(client)}
                        >
                          {client}
                        </DropdownItem>
                      ))}
                    </DropdownList>
                  )}
                </DropdownFilter>
              </WorksFilter>
            </OutsideClickHandler>
          </HeadSection>
          <Works>
            <WorksListWrapper>
              <WorksList>
                {videosList.map((tiktokVideo, index) => (
                  <WorksGrid key={index}>
                    <WorksItem to={"/tv/" + tiktokVideo.node.id} asModal>
                      <WorksThumb>
                        <WorksImageContainer>
                          {tiktokVideo.node.data.thumbnail_video.localFile !==
                          null ? (
                            <Img
                              fluid={
                                tiktokVideo.node.data.thumbnail_video.localFile
                                  .childImageSharp.fluid
                              }
                            />
                          ) : (
                            <WorksImage
                              src={
                                tiktokVideo.node.data.embed_video.thumbnail_url
                              }
                            />
                          )}
                        </WorksImageContainer>
                        <WorksVideo autoPlay muted loop playsInline>
                          <source
                            src={generateVideoSource(
                              tiktokVideo.node.data.embed_video.embed_url
                            )}
                            type="video/mp4"
                          />
                        </WorksVideo>
                      </WorksThumb>
                      <PlayIcon />
                      <WorksInfo>
                        <WorksTitle>
                          {tiktokVideo.node.data.title_video.text}
                        </WorksTitle>
                        <WorksClient>
                          {tiktokVideo.node.data.client}
                        </WorksClient>
                      </WorksInfo>
                    </WorksItem>
                  </WorksGrid>
                ))}
              </WorksList>
            </WorksListWrapper>
            <WorksAction>
              <Pagination>
                <PaginationText
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                >
                  Prev
                </PaginationText>
                <PaginationInfo>
                  Page {currentPage} of {totalPage}
                </PaginationInfo>
                {[...Array(totalPage)].map((e, index) => (
                  <PaginationNumber
                    onClick={() => goToPage(index + 1)}
                    key={index + 1}
                    disabled={index + 1 === currentPage}
                    last={index + 1 === totalPage}
                  >
                    {index + 1}
                  </PaginationNumber>
                ))}
                <PaginationText
                  onClick={handleNext}
                  disabled={currentPage === totalPage}
                >
                  Next
                </PaginationText>
              </Pagination>
            </WorksAction>
          </Works>
        </Container>
      </Section>
      <Form id="formSection">
        <Container>
          <Title white twoLine>
            Ready to Make Your First Step on TikTok with Naisu?
          </Title>
          <Text white>
            Find out what the needs of your brand as consultation is free. Ping
            us now!
          </Text>
          <FormContent>
            <FormField>
              <FormInput
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Jane Appleseed"
                value={fullname}
                onChange={e => setFullName(e.target.value)}
              />
              <FormLabel htmlFor="fullname">Full Name</FormLabel>
            </FormField>
            <FormField>
              <FormInput
                type="email"
                name="email"
                id="email"
                placeholder="jane.appleseed@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <FormLabel htmlFor="email">Email</FormLabel>
            </FormField>
            <FormField>
              <FormTextArea
                id="message"
                placeholder="Hello, Naisu!"
                name="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <FormLabel textarea htmlFor="message">
                Message
              </FormLabel>
            </FormField>
            <Button
              outline
              full
              onClick={() => contactWhatsapp(fullname, email, message)}
            >
              Ping Now
            </Button>
          </FormContent>
        </Container>
      </Form>
      <Footer>
        <Container>
          <FooterLeft>
            <FooterLogo>
              <img src={logoNaisuBlack} alt="Logo Naisu Black" />
            </FooterLogo>
            <FooterText>2020 © Naisu Studio</FooterText>
          </FooterLeft>
          <FooterRight>
            <FooterSocialLink href="https://www.tiktok.com/@naisutikitoku">
              <FooterSocialIcon src={iconTiktokPink} />
            </FooterSocialLink>
            <FooterSocialLink href="https://www.instagram.com/naisustudio">
              <FooterSocialIcon src={iconIgPink} />
            </FooterSocialLink>
          </FooterRight>
        </Container>
      </Footer>
    </Layout>
  )
}

export default Tiktok
