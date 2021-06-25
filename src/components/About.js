import React from 'react';
import Heading from './Reusable/Heading';
import aboutImg from '../images/about.jpg'
import linkedInImg from '../images/linkedin.ico'
import githubImg from '../images/github.ico'
import { Link } from 'gatsby';

const About = () => {
    return (
        <div className="section-pad about-theme" id="about">
          <Heading title="About Me"/>
          <section className="about-section">          
            <div className="row">
              <div className="col-lg-7 col-md-12 about-info">
               <ul className="text-white  mb-3">
                 <li>Experienced Software Engineer with a demonstrated history of working in the information technology and services industry for <span className="text-warning font-weight-bold">2+ years</span></li>
                 <li>Skilled in HTML, Angular 8+, React js,  CSS3 , javascript, typescript, Rest api,  Github, Front-end Development, and AJAX.</li>
                 <li>Strong engineering professional with a Bachelor of Engineering - BE focused in Information Science/Studies from KLE Institute of Technology, HUBLI.</li>
                 <li>Currently working as Junior Software Engineer at Centre for Smart Governance</li>
               </ul>
               <div className="row mb-3">
                <div className="col-md-4">
                <div className="support">
               <a href="http://linkedin.com/in/anusha-hublikar-631660126" className="mr-3">
                 <img src={linkedInImg}  alt="linkedin" target="_blank"/>
               </a>
               <a href="https://github.com/anusha16-debug" className="mr-3">
                 <img src={githubImg}  alt="github" target="_blank"/>
               </a>
              </div>
                </div>
              </div>
              </div>
              <div className="col-lg-4 col-md-12">
                 <img src={aboutImg} className="section-image w-100"/> 
              </div>
              </div>
          </section>
        </div>
    )
}

export default About;