/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"



import "./layout.css";
import "./bootstrap.min.css";
import Navbar from "./Reusable/Navbar";
import Footer from "./Reusable/Footer";


const Layout = ({ children }) => {

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
