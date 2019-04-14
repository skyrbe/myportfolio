import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts"
const Me = () => (
  <>
    <section id="profile" className="main-section">
      <h1 className="mb-5 d-flex align-items-center">
        <Link swipe duration={0.25} direction="right" rel="canonical" to="/" className="icon-back d-block d-md-none mr-2 fs-16" />
        Contact
      </h1>
      <div className="social-container">
        <div className="social-row">
          <form
            name="contact"
            method="post"
            netlify
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input name="name" placeholder="Your Name" type="text" />
            <button>Send</button>
          </form>
        </div>
      </div>
    </section>
  </>
)

export default Me
