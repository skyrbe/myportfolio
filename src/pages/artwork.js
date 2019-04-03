import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Finder from "../components/Finder";
import Sidebar from "../components/Sidebar";
import Artwork from '../components/artwork';
const IndexPage = (props) => {
  // console.log('props ', props);
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Finder sideMenu = {<Sidebar to="artwork"/>} mainContent = {<Artwork list={props.data.allMarkdownRemark.edges} />}/>
    </Layout>
  )
}

export const query = graphql`
  query ArtworkQuery {
    allMarkdownRemark(
      filter:{frontmatter:{section:{eq: "artwork"}}}
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
                fluid(maxWidth: 200) {
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
