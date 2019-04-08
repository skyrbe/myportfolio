import React from "react"
import { Link, graphql } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions';
import Layout from "../layouts"
import Image from "../components/image"
import SEO from "../components/seo"
import Finder from "../components/Finder";
import Sidebar from "../components/Sidebar";
import Designs from '../components/designs';
const IndexPage = (props) => {
  // console.log('props ', props);
  return (
    <>
      <SEO title="Designs" keywords={[`Designs`, `UX`, `UI`, `Android`, `IOS`, `Native`, `Mobile`, `Web Application`]} description="This page lists some of the designs that I have worked on over the past 8+ years. I have worked on Android, IOS, Webapp designs. Photoshop and Sketch are the tools of my choice." />
      <Finder sideMenu = {<Sidebar to="designs"/>} mainContent = {<Designs list={props.data.allMarkdownRemark.edges} />}/>
    </>
  )
}

export const query = graphql`
  query DesignsQuery {
    allMarkdownRemark(
      filter:{frontmatter:{section:{eq: "designs"}}}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            id
            cover_image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 640) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage
