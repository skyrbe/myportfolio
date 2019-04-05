import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts"
import Image from "../components/image"
import SEO from "../components/seo"
import Finder from "../components/Finder";
import Sidebar from "../components/Sidebar";
import Code from '../components/code';
const IndexPage = () => (
  <Layout>
    <SEO title="Code" description="check desc" keywords={[`Open Source`, `Github`, `react`, `ES2016`, `Javascript`, `Animations`, `CSS`, `HTML5`, `transitions`]} />
    <Finder sideMenu = {<Sidebar to="code"/>} mainContent = {<Code />}/>
  </Layout>
)

export default IndexPage
