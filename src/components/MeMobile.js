import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProfilePic from '../components/profileImage';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
const MeMobile = () => (
  <>
    <SEO title="Me" keywords={[`gatsby`, `application`, `react`]} />
      <section className="main-section-card active">
        <div className="section-card">
          <div className="section-body">
            <div className="mb-3"><ProfilePic /></div>
            <div>
              <h1 className="mb-2">Harsha Venkatram</h1>
              <h3>
                UX Geek | Front End Architect
              </h3>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 mt-4">
          <div className="row m-0">
            <div className="col-4 d-flex flex-column align-items-center pl-0">
              <AniLink swipe duration={0.25} direction="left" rel="canonical" to="/designs" className="d-flex flex-column align-items-center">
                <div className="mobicon mobicon-designs">
                  <i className="icon-design" />
                </div>
                <span className="mobicon-title">Designs</span>
              </AniLink>
            </div>
            <div className="col-4 d-flex flex-column align-items-center">
              <AniLink swipe duration={0.25} direction="left" rel="canonical" to="/code" className="d-flex flex-column align-items-center">
                <div className="mobicon mobicon-code">
                  <i className="icon-code" />
                </div>
                <span className="mobicon-title">Code</span>
              </AniLink>
            </div>
            <div className="col-4 d-flex flex-column align-items-center pr-0">
              <div className="mobicon mobicon-experience">
                <i className="icon-experience" />
              </div>
              <span className="mobicon-title">Experience</span>
            </div>
          </div>

          <div className="row mx-0 mt-4">
            <div className="col-4 d-flex flex-column align-items-center pl-0">
              <AniLink swipe duration={0.25} direction="left" rel="canonical" to="/social" className="d-flex flex-column align-items-center">
                <div className="mobicon mobicon-links">
                  <i className="icon-links" />
                </div>
                <span className="mobicon-title">Links</span>
              </AniLink>
            </div>
            <div className="col-4 d-flex flex-column align-items-center">
              <AniLink swipe duration={0.25} direction="left" rel="canonical" to="/artwork" className="d-flex flex-column align-items-center">
                <div className="mobicon mobicon-artwork">
                  <i className="icon-art" />
                </div>
                <span className="mobicon-title">Artwork</span>
              </AniLink>
            </div>
            <div className="col-4 d-flex flex-column align-items-center pr-0">
              <AniLink swipe duration={0.25} direction="left" rel="canonical" to="/photography" className="d-flex flex-column align-items-center">
                <div className="mobicon mobicon-photography">
                  <i className="icon-camera" />
                </div>
                <span className="mobicon-title">Photography</span>
              </AniLink>
            </div>
          </div>
        </div>
      </section>
  </>
)

export default MeMobile
