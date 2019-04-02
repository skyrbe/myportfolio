import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Finder from "../components/Finder";
import Sidebar from "../components/Sidebar";
import Designs from '../components/designs';
const IndexPage = (props) => {
  // console.log('props ', props);
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Finder sideMenu = {<Sidebar to="designs"/>} mainContent = {<Designs list={props.data.allMarkdownRemark.edges} />}/>
    </Layout>
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
