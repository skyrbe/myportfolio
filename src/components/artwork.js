import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image";
import Layout from "../components/layout"
import SEO from "../components/seo"
import DesignImage from './designImage';

const ListItem = ({ item }) => {
  return (
    <div className="position-relative mb-5 photo-item">
      {item.frontmatter.cover_image.childImageSharp ? (
        <Img fluid={item.frontmatter.cover_image.childImageSharp.fluid} />
      ) : (
        <img src={item.frontmatter.cover_image.publicURL} />
      )}
      <div className="position-absolute full-width photo-title">
        <span className="details">{item.frontmatter.title}</span>
      </div>
    </div>
  );
}

const Artwork = (props) => {
  return (
    <>
      <SEO title="Artwork" keywords={[`gatsby`, `application`, `react`]} />
      <section id="designs" className="main-section">
        <h1 className="mb-5 d-flex align-items-center">
          <Link to="/"><i className="icon-back d-block d-md-none mr-2 fs-16" /></Link>
          Artwork
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

export default Artwork
