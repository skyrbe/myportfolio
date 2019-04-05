import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layouts"
import Image from "../components/image"
import SEO from "../components/seo"
import Finder from "../components/Finder";
import Sidebar from "../components/Sidebar";
import Photography from '../components/photography';
const IndexPage = (props) => {
  // console.log('props ', props);
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Finder sideMenu = {<Sidebar to="photography"/>} mainContent = {<Photography list={props.data.allMarkdownRemark.edges} />}/>
    </Layout>
  )
}

export const query = graphql`
  query PhotographyQuery {
    allMarkdownRemark(
      filter:{frontmatter:{section:{eq: "photography"}}}
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
