import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts"
import SEO from "../components/seo"
import './profilePic.css';
const Me = () => (
  <>
    <section id="profile" className="main-section active">
      <h1 className="mb-5 d-flex align-items-center">
        <Link swipe duration={0.25} direction="right" rel="canonical" to="/me" className="icon-back d-block d-md-none mr-2 fs-16" />
        Harsha Venkatram
      </h1>
      <div className="social-container">
        <div className="social-row">
          <div className="profilecss" />
        </div>
      </div>
    </section>
  </>
)

export default Me
