import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Finder from "../components/Finder";
import Sidebar from "../components/Sidebar";
import MeMobile from "../components/MeMobile";
import Me from '../components/me';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="d-block d-md-none">
      <MeMobile />
    </div>
    <div className="d-none d-md-block">
      <Finder sideMenu = {<Sidebar to="me"/>} mainContent = {<Me />}/>
    </div>
  </Layout>
)

export default IndexPage
