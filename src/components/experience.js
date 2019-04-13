import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts"
import SEO from "../components/seo"
import './profilePic.css';
const Me = () => (
  <>
    <section id="experience" className="main-section active">
      <h1 className="mb-5 d-flex align-items-center">
        <Link swipe duration={0.25} direction="right" rel="canonical" to="/" className="icon-back d-block d-md-none mr-2 fs-16" />
        Experience
      </h1>
      <div className="social-container">
        <div className="social-row">
          <div className="experience-item">
            <h5>
              Front-End Developer
            </h5>
            <div className="experience-details">
              <span className="mt-2 fs-14 text-left">
                I like to code things from scratch, and enjoy bringing ideas to life in the browser.
              </span>
              <h6 className="mt-3 fs-14 text-left mb-0">
                Languages of Choice
              </h6>
              <span className="mt-2 fs-14 text-left">
                HTML5, CSS3, Javascript
              </span>
              <h6 className="mt-3 fs-14 text-left mb-0">
                Libaries and Technologies
              </h6>
              <span className="mt-2 fs-14 text-left">
                JQuery, React, Redux, Redux-Thunk, Webpack, Grunt, PWA, SSR
              </span>
            </div>
          </div>
        </div>
        <div className="social-row">
          <hr/>
          <div className="experience-item">
            <h5>
              UX Designer
            </h5>
            <div className="experience-details">
              <span className="mt-2 fs-14 text-left">
                I value simple content structure, clean design patterns, and thoughtful interactions.
              </span>
              <h6 className="mt-3 fs-14 text-left mb-0">
                I enjoy Designing
              </h6>
              <span className="mt-2 fs-14 text-left">
                UI, UX, Web applications, Mobile Applications
              </span>
              <h6 className="mt-3 fs-14 text-left mb-0">
                Tools of Trade
              </h6>
              <span className="mt-2 fs-14 text-left">
                Blasmiq, Marvel, Pen & Paper, Sketch, Invision
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Me
