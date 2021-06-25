import React, { useState } from "react";
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby';

const HeroSection = ({img, title, subtitle, heroclass}) => {
  return (
      <BackgroundImage
      className={heroclass}
      fluid={img}>
        <div  className="profile-info">
          <h3 className="text-white text-uppercase display-4">{title}</h3>
          <h4 className="text-warning mt-3">{subtitle}</h4>
          <h5 className="text-white mt-3">Angular | React js</h5>
          <Link to="/#about">
            <button type="button" className="btn btn-outline-warning text-white btn-lg mt-3 text-uppercase">
             know more
            </button>
          </Link>
        </div>
          
      </BackgroundImage>
  )
}

export default HeroSection;