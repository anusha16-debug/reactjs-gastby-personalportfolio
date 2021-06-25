import * as React from "react"
import { graphql} from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import About from "../components/About"
import Skills from "../components/Skills"
import EducationDetails from "../components/EducationDetails"
import Projects from "../components/Projects"
import Contact from "../components/Contact"



const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection 
     img={data.img.childImageSharp.fluid} title="ANUSHA HUBLIKAR" subtitle="front end developer" heroclass="hero-background"/>
    <About/>
    <Skills/>
    <EducationDetails/>
    <Projects/>
    <Contact/>
  </Layout>
)


export const query = graphql`
 {
  img: file(relativePath: {eq: "heromain.png"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    
  }
}
 `

export default IndexPage
