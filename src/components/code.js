import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts"
import SEO from "../components/seo"

const Code = () => (
  <>
    <SEO title="Code" keywords={[`gatsby`, `application`, `react`]} />
    <section id="code" className="main-section">
      <h1 className="mb-5 d-flex align-items-center">
        <Link swipe duration={0.25} direction="right" rel="canonical" to="/" className="icon-back d-block d-md-none mr-2 fs-16" />
        Code
      </h1>
      <div className="social-container">
        <div className="social-row">
          <div className="social-item">
            <h3>
              <a target="_blank" className="title-link" href="https://github.com/skyrbe/use-battery-hook">
                Use Battery Hook
              </a>
            </h3>
            <div className="social-details">
              <span className="mt-2 fs-14 text-left">
                A React Hook to get the battery status on Chrome.
              </span>
            </div>
          </div>

          <div className="social-item">
            <h3>
              <a target="_blank" className="title-link" href="https://atom.io/packages/snippy">
                React Redux Boilerplate
              </a>
            </h3>
            <div className="social-details">
              <span className="mt-2 fs-14 text-left">
                A full fledged React and Redux Seeder to bootstrap an application.
              </span>
            </div>
          </div>
        </div>
        <div className="social-row">
          <div className="social-item">
            <h3>
              <a target="_blank" className="title-link" href="https://github.com/skyrbe/imagetocss">
                ImageToCSS
              </a>
            </h3>
            <div className="social-details">
              <span className="mt-2 fs-14 text-left">
                A Utility that can convert an image to CSS using box-shadow.
              </span>
            </div>
          </div>

          <div className="social-item">
            <h3>
              <a target="_blank" className="title-link" href="https://atom.io/packages/snippy">
                Snippy
              </a>
            </h3>
            <div className="social-details">
              <span className="mt-2 fs-14 text-left">
                An atom package to make life easy for react-redux developers.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Code
