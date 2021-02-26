import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { Link } from 'gatsby-plugin-modal-routing'
import { RichText } from "prismic-reactjs"
import Layout from "../components/layout"
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import styled, { keyframes } from "styled-components"
import SEO from "../components/seo"
import iconClose from "../images/ic-close.svg"

export const query = graphql`
  query tiktokVideoQuery($id: String) {
		allPrismicTiktokVideo(filter: {id: {eq: $id}}) {
		  edges {
				node {
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
  }
`

const VideoMain = styled.div`
	max-width: 450px;
	margin: 0 auto;
`

const VideoWrapper = styled.div`
	position: relative;
	width: 100%;
	padding-bottom: 177.78%;	
	margin: 0 auto;
	&:before {
		content: '';
		position: absolute;
		z-index: 1;
		height: 25%;
		width: 100%;
		background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.5) 50.01%, rgba(0, 0, 0, 0) 100%);
	}
`

const VideoTitle = styled.div`	
	font-size: 20px;
	color: #ffffff;
	font-family: Karla-Bold, sans-serif;
	line-height: 1.5;
`

const VideoClient = styled.div`	
	font-size: 16px;
	color: #ffffff;
	font-family: Karla-Regular, sans-serif;
	line-height: 1.5;
`

const VideoInfo = styled.div`
	flex: 1 1 auto;
`	

const VideoAction = styled.div`
	flex: 0 0 auto;
`		

const VideoHeader = styled.div`
	position: absolute;
	width: 100%;
	padding: 20px;
	top: 0;
	left: 0;
	display: flex;
	z-index: 2;
`

const Video = styled.video`
	position: absolute;
	top: 0;
	left: 0;
    width: 100%;
	height: 100%;
	outline: none;
`

const ButtonClose = styled(Link)`
  width: 24px;
  height: 24px;
  background-position: center;
  background-size: contain;
  background-image: url(${iconClose});
  background-color: transparent;
  background-repeat: no-repeat;  
  border: none;
  outline: none;
  display: block;
  @media (max-width: 768px) {
	
  }
`

const TiktokVideo = props => {

  const doc = props.data.allPrismicTiktokVideo.edges.slice(0, 1).pop()
  if (!doc) return null
	
	const generateVideoSource = (embedUrl) => {
		const split = embedUrl.split("/");
		const videoSourceUrl = "https://drive.google.com/uc?export=download&id=" + split[5];
		
		return videoSourceUrl;
	}

  return (
		<ModalRoutingContext.Consumer>
		{({ modal, closeTo }) => (
			<Layout>
				<SEO title={doc.node.data.title_video.text + " - Works"} />
				
				{modal ? (
					""
				) : (
					<header>
						<h1>
							Website Title
						</h1>
					</header>
				)}
				<VideoMain>
					<VideoWrapper>
						<Video autoPlay loop playsInline controls>
							<source src={generateVideoSource(doc.node.data.embed_video.embed_url)} type="video/mp4" />
						</Video>
						<VideoHeader>
							<VideoInfo>
								<VideoTitle>{doc.node.data.title_video.text}</VideoTitle>
								<VideoClient>{doc.node.data.client}</VideoClient>
							</VideoInfo>
							<VideoAction>
								<ButtonClose to='/tiktok' />
							</VideoAction>
						</VideoHeader>
					</VideoWrapper>
				</VideoMain>
			</Layout>	
		)}
	</ModalRoutingContext.Consumer>	
  )
}

export default TiktokVideo
