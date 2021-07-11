import React from "react";
import Heading from './Reusable/Heading';
import educationImg from '../images/self-education.jpg';
import myResume from '../documents/Anusha-Hublikar-Resume.pdf'


const EducationDetails = () => {
    return (
        <div className="section-pad education-theme" id="resume">
             <Heading title="Resume and Education"/>
             <section>
                 <div className="container">
                     <div className="row">
                         <div className="col-md-8 mb-3 education-details">
                           <div className="engineering-info text-white">
                               <h4>Bachelor of Engineering - ISE</h4>
                                <h6 className="text-warning">2013-17</h6>
                                <h5>KLE Institute of technology - Hubli</h5>
                           </div>
                           <div className="puc-info mt-4 text-white">
                                 <h4>Pre-University(11th & 12th)</h4>
                                <h6 className="text-warning">2011-13</h6>
                                <h5>Chetan Pre-University - Hubli</h5>
                           </div>
                           <div className="school-info mt-4 text-white">
                                 <h4>Schooling</h4>
                                <h6 className="text-warning">2011</h6>
                                <h5>Shri Vivekanand English Medium School - Hubli</h5>
                           </div>
                           <div className="mt-3">
                             <a href={myResume} className="btn btn-outline-warning text-white text-uppercase" download>Download Resume</a>
                           </div>
                         </div>
                         <div className="col-md-4 mt-4">
                         <img src={educationImg} className="section-image w-100"/> 
                         </div>
                     </div>
                 </div>
             </section>
        </div>
    )
   }
   
   export default EducationDetails;