import React from "react"
import { Link, graphql } from "gatsby"

import Img from "gatsby-image";
import Layout from "../layouts"
import SEO from "../components/seo"
import DesignImage from './designImage';

const ListItem = ({ item }) => {
  return (
    <div className="gallery-item-wrapper" data-id="gubbi-details">
      <div className="gallery-item">
        {item.frontmatter.cover_image.childImageSharp ? (
          <Img fluid={item.frontmatter.cover_image.childImageSharp.fluid} />
        ) : (
          <img src={item.frontmatter.cover_image.publicURL} />
        )}
      </div>
      <h3 className="details">{item.frontmatter.title}</h3>
    </div>
  );
}

const Designs = (props) => {
  return (
    <>
      <SEO title="Designs" keywords={[`gatsby`, `application`, `react`]} />
      <section id="designs" className="main-section">
        <h1 className="mb-5 d-flex align-items-center">
          <Link swipe duration={0.25} direction="right" rel="canonical" to="/" className="icon-back d-block d-md-none mr-2 fs-16" />
          Designs
        </h1>
        <div className="details">
          {
            props.list.map((item) => {
              return (
                <ListItem item={item.node}  key={item.node.frontmatter.id}/>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Designs
