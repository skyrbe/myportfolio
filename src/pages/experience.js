import React from "react"
import { Link, graphql } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions';
import Layout from "../layouts"
import Image from "../components/image"
import SEO from "../components/seo"
import Finder from "../components/Finder";
import Sidebar from "../components/Sidebar";
import Experience from '../components/experience';
const IndexPage = (props) => {
  // console.log('props ', props);
  return (
    <>
      <Finder sideMenu = {<Sidebar to="experience"/>} mainContent = {<Experience />}/>
    </>
  )
}

export default IndexPage;
