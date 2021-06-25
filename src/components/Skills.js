import React, {useState} from 'react';
import Heading from './Reusable/Heading';
import skillsImg from '../images/skills1.jpg'

const Skills = () => {
  const [skills] = useState([
      {
          id: 1,
          labelTitle: "HTML, CSS, Javascript, Bootstrap 4",
          percentage: "90%"
      },
      {
        id: 2,
        labelTitle: "Angular 9, Typescript",
        percentage: "80%"
     },
     {
        id: 3,
        labelTitle: "React js, Gatsby",
        percentage: "70%"
     },
     {
        id: 4,
        labelTitle: "Mongodb, Node.js, Express.js",
        percentage: "50%"
     },
     {
      id: 5,
      labelTitle: "REST APIs, SASS",
      percentage: "50%"
   }
  ]);
  return (
    <div className="section-pad bg-theme" id="skills">
       <Heading title="Skills"/>
       <section className="skills-section">
       <div className="container">
         <div className="row">
         <div className="col-md-4">
         <img src={skillsImg} className="section-image w-100"/> 
          </div>
          <div className="col-md-8">
            <div className="p-2 skills-list">
             {skills.map(skill => {
                 return (
               <div className="mb-2" key={skill.id}>
               <label className="text-white">{skill.labelTitle}</label>
                <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={{'width':`${skill.percentage}`}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{skill.percentage}</div>
                </div>
                </div>
            )
             })}
            </div>
          </div>
         </div>
        </div>
       </section>
      </div>
  )
}

export default Skills;