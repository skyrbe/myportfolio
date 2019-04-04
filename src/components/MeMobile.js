import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProfilePic from '../components/profileImage';
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
          <div className="row">
            <div className="col-4 d-flex flex-column align-items-center">
              <Link to="/designs" className="d-flex flex-column align-items-center">
                <div className="mobicon mobicon-designs"></div>
                <span className="mobicon-title">Designs</span>
              </Link>
            </div>
            <div className="col-4 d-flex flex-column align-items-center">
              <Link to="/code" className="d-flex flex-column align-items-center">
                <div className="mobicon mobicon-code"></div>
                <span className="mobicon-title">Code</span>
              </Link>
            </div>
            <div className="col-4 d-flex flex-column align-items-center">
              <div className="mobicon mobicon-experience"></div>
              <span className="mobicon-title">Experience</span>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-4 d-flex flex-column align-items-center">
              <div className="mobicon mobicon-links"></div>
              <span className="mobicon-title">Links</span>
            </div>
            <div className="col-4 d-flex flex-column align-items-center">
              <Link to="/artwork" className="d-flex flex-column align-items-center">
                <div className="mobicon mobicon-artwork"></div>
                <span className="mobicon-title">Artwork</span>
              </Link>
            </div>
            <div className="col-4 d-flex flex-column align-items-center">
              <Link to="/photography" className="d-flex flex-column align-items-center">
                <div className="mobicon mobicon-photography"></div>
                <span className="mobicon-title">Photography</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
  </>
)

export default MeMobile
