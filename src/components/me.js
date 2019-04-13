import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts"
import SEO from "../components/seo"
import './profilePic.css';
const Me = () => (
  <>
    <section id="profile" className="main-section active">
      <h1 className="mb-5 d-flex align-items-center">
        <Link swipe duration={0.25} direction="right" rel="canonical" to="/" className="icon-back d-block d-md-none mr-2 fs-16" />
        Me
      </h1>
      <div className="social-container">
        <div className="social-row">
          <div className="profile-pic-container d-none d-md-block">
            <div className="profilecss" />
          </div>
          <div className="profile-details">
            <h2>Hi, I am Harsha. Nice to meet you.</h2>
            <h3>
              Since beginning my journey as a full time front end dev | UI/UX designer over 8 years ago, I have worked with talented people across different verticals to design and code digital products for both business and consumer use. I am confident, curious, and continuously working on improving my skills, one problem at a time.
            </h3>
          </div>
        </div>
        <div className="social-row other-details d-none d-md-block">
          <h3>
            <span>CSS Generated Image!</span>
          </h3>
        </div>
        <div className="social-row full-width text-center mb-4">
          <span class="seperator">...</span>
        </div>
        <div className="social-row">
          <div className="profile-details p-0">
            <h3>
              Interested in talking? You can get in touch with <a target="_blank" href="mailto:hasha.venkatram@gmail.com">me</a> or you visit my <Link to="/social">Social Links</Link>
            </h3>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Me
