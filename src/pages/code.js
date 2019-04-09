import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts"
import Image from "../components/image"
import SEO from "../components/seo"
import Finder from "../components/Finder";
import Sidebar from "../components/Sidebar";
import Code from '../components/code';
const IndexPage = () => (
  <>
    <Finder sideMenu = {<Sidebar to="code"/>} mainContent = {<Code />}/>
  </>
)

export default IndexPage
