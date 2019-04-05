import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts"
import Image from "../components/image"
import SEO from "../components/seo"
import Finder from "../components/Finder";
import Sidebar from "../components/Sidebar";
import Social from '../components/social';
const IndexPage = (props) => {
  // console.log('props ', props);
  const data = [
    {
      "id": 1,
      "title": "Stack Overflow",
      "details": [
        {
          "count": "2k+",
          "descriptor": "Score"
        },
        {
          "count": "70+",
          "descriptor": "Badges"
        },
        {
          "count": "~479k",
          "descriptor": "Reach"
        },
      ],
      "classname": "stack-overflow",
      "link": "https://stackoverflow.com/users/1589540/harsha-venkatram"
    },
    {
      "id": 2,
      "title": "Dribbble",
      "details": [
        {
          "count": "15+",
          "descriptor": "Shots"
        },
        {
          "count": "7k+",
          "descriptor": "Views"
        },
        {
          "count": "3",
          "descriptor": "Invites Sent"
        },
      ],
      "classname": "dribbble",
      "link": "https://dribbble.com/iamHarshaVenkatram"
    },
    {
      "id": 3,
      "title": "Github",
      "details": [
        {
          "count": "3+",
          "descriptor": "Repositories"
        },
        {
          "count": "10+",
          "descriptor": "Forks"
        },
        {
          "count": "∞",
          "descriptor": "Interest"
        },
      ],
      "classname": "github",
      "link": "https://github.com/skyrbe/"
    },
    {
      "id": 4,
      "title": "500px",
      "details": [
        {
          "count": "60+",
          "descriptor": "Photos"
        },
        {
          "count": "2k+",
          "descriptor": "Affection"
        },
        {
          "count": "21k+",
          "descriptor": "Photo Views"
        },
      ],
      "classname": "fivehunderedpx",
      "link": "https://500px.com/harshavenkatram"
    }
  ]
  return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Finder sideMenu = {<Sidebar to="social"/>} mainContent = {<Social list={data} />}/>
    </>
  )
}

export default IndexPage
