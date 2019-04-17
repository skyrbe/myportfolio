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
import Header from "../components/header"
import Toolbar from "../components/Toolbar";
import Footer from '../components/Footer';
import ImageLightTheme from "../components/preloadImageFull";
import ImageDarkTheme from "../components/preloadImageFullDark";
import ImageLightThemeMobile from "../components/preloadImageFullMobile";
import Transition from '../components/transition';
import "../assets/fonts/CircularStd/style.css";
import "../assets/global.css";
import "../components/bootstrap.css";
import "../components/customLayout.css";
import '../assets/fonts/icomoon/style.css';
import SEO from '../components/seo';

const Layout = ({ children, location }) => {
  const [state, setState] = useState(false);
  const [theme, setTheme] = useState('light-theme');
  useEffect(() => {
    // Update the document title using the browser API
    window.setTimeout(() => {
      setState(true);
    }, 100);
  });

  const changeTheme = () => {
    setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme');
  }
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
        let description = '';
        switch (location.pathname) {
          case '/designs/':
            description="This page lists some of the designs that I have worked on over the past 8+ years. I have worked on Android, IOS, Webapp designs. Photoshop and Sketch are the tools of my choice."
            break;
          default:

        }
        return (
          <>
            <SEO description={description}/>
            <div className={theme}>
              {state && (
                <>
                  <div className="bg-container d-none d-md-block">
                    {theme === 'light-theme' && <ImageLightTheme />}
                    {theme === 'dark-theme' && <ImageDarkTheme />}
                  </div>
                  <div className="bg-container d-block d-md-none">
                    <ImageLightThemeMobile />
                  </div>
                  <Toolbar siteTitle={data.site.siteMetadata.title} changeTheme={changeTheme} theme={theme}/>
                  <div>
                    <main>
                      <Transition location={location}>{children}</Transition>
                    </main>
                  </div>
                  <Footer />
                </>
              )}
            </div>
          </>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
