import React from 'react';
import Heading from './Reusable/Heading';
import projectImg from '../images/project1.jpg'

const Projects = () => {
    return (
        <div className="section-pad projects-theme" id="projects">
            <Heading title="Hobby Projects" />
            <section className="projects-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 projects-info">
                            <div className="row">
                                <div className="col-md-4 col-lg-6">
                                    <div className="card text-white card-box mb-3" style={{ 'maxWidth': '18rem'}}>
                                        <div className="card-header">MEAN</div>
                                        <div className="card-body">
                                            <h6 className="card-title text-warning">Student Information Management System</h6>
                                            <p className="card-text font-15">A simple hobby project developed using mean stack where students basic information can be stored , perform crud operations</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-6">
                                    <div className="card text-white card-box mb-3" style={{ 'maxWidth': '18rem'}}>
                                        <div className="card-header">Angular 10, Firebase Authentication</div>
                                        <div className="card-body">
                                            <h6 className="card-title text-warning">Travelgram</h6>
                                            <p className="card-text font-15">A hobby project similar to instagram where the user can post his pictures, also with likes and dislikes functionalities</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-6">
                                    <div className="card text-white card-box mb-3" style={{ 'maxWidth': '18rem'}}>
                                        <div className="card-header">React js</div>
                                        <div className="card-body">
                                            <h6 className="card-title text-warning">Tutorials info store</h6>
                                            <p className="card-text font-15">A project developed using react js with <span className="text-warning">firebase authentication</span> where person can store his all completed tutorials information</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-6">
                                    <div className="card text-white card-box mb-3" style={{ 'maxWidth': '18rem'}}>
                                        <div className="card-header">React js</div>
                                        <div className="card-body">
                                            <h6 className="card-title text-warning">Simple React js E-Commerce site</h6>
                                            <p className="card-text font-15">A simple E-Commerce react js application for purchasing courses with different categories for filtering courses using <span className="text-warning"
                                            >gatsby, netlify</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <img src={projectImg} className="section-image w-100" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects;