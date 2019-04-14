import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts"
import Image from "../components/image"
import SEO from "../components/seo"
import Finder from "../components/Finder";
import Sidebar from "../components/Sidebar";
import MeMobile from "../components/MeMobile";
import Contact from '../components/contact';
const IndexPage = () => (
  <>
    <Finder sideMenu = {<Sidebar to="contact"/>} mainContent = {<Contact />}/>
  </>
)

export default IndexPage
