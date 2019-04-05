import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image";
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from "../components/layout"
import SEO from "../components/seo"
import DesignImage from './designImage';
import cn from 'classnames';

const ListItem = ({ item }) => {
  return (
    <div className={cn('social-item', item.classname)}>
      <h3>
        <a target="_blank" className="title-link" href={item.link}>
          {item.title}
        </a>
      </h3>
      <div className="social-details">
        {item.details.map(detail => {
          return (
            <span key={detail.descriptor}>
              {detail.count}
              <p>
                {detail.descriptor}
              </p>
            </span>
          )
        })}
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
          <AniLink swipe duration={0.25} direction="right" rel="canonical" to="/" className="icon-back d-block d-md-none mr-2 fs-16" />
          Social
        </h1>
        <div className="social-container">
          <div className="social-row">
            {
              props.list.map((item) => {
                return (
                  <ListItem item={item}  key={item.id}/>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Artwork
