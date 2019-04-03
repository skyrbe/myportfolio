/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, {useEffect, useState} from "react"
import cn from 'classnames';
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Toolbar from "./Toolbar";
import ImageLightTheme from "./preloadImageFull";
import ImageLightThemeMobile from "./preloadImageFullMobile";
import "../assets/fonts/CircularStd/style.css";
import "../assets/global.css";
import "./bootstrap.css";
import "./customLayout.css";
import '../assets/fonts/icomoon/style.css';

const Layout = ({ children }) => {
  const [state, setState] = useState(false);
  useEffect(() => {
    // Update the document title using the browser API
    window.setTimeout(() => {
      setState(true);
    }, 100);
  });
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        return (
          <div className="light-theme">
            <div className="bg-container d-none d-md-block">
              <ImageLightTheme />
            </div>
            <div className="bg-container d-block d-md-none">
              <ImageLightThemeMobile />
            </div>
            <Toolbar siteTitle={data.site.siteMetadata.title} />
            <div>
              {state && <main>{children}</main>}
            </div>
          </div>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
