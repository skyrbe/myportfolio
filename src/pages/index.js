import React from "react"
import { Link } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions';
import Layout from "../layouts"
import Image from "../components/image"
import SEO from "../components/seo"
import Finder from "../components/Finder";
import Sidebar from "../components/Sidebar";
import MeMobile from "../components/MeMobile";
import Me from '../components/me';
const IndexPage = () => (
  <Layout>
    <PageTransition>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="d-block d-md-none">
        <MeMobile />
      </div>
      <div className="d-none d-md-block">
        <Finder sideMenu = {<Sidebar to="me"/>} mainContent = {<Me />}/>
      </div>
    </PageTransition>
  </Layout>
)

export default IndexPage
