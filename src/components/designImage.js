import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const DesignImage = ({ path }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter:{extension:{regex:"/(jpeg|jpg|gif|png)/"},  sourceInstanceName:{eq:"portfolioPath"}}) {
          edges {
            node {
              childImageSharp {
                sizes(maxWidth: 2000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={(datum) => {
      console.log('datum ', datum);
      const images = datum.allFile.edges.map(data => {
        console.log('data ', data.node);
        return (
          <Img title="Photo image" alt="Photo" sizes={data.node.childImageSharp.sizes} />
        )
      });
      console.log('images ', images);
      return images;
    }}
  />
)
export default DesignImage
