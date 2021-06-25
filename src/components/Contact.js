import React from 'react';
import Heading from './Reusable/Heading';
import ContactImg from '../images/contact.jpg'

const Contact = () => {

   const phoneNumberValidation = (event) => {
    const pattern = /^(0|[1-9][0-9]*)$/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
   }
    return (
        <div className="section-pad contact-theme mx-auto" id="contact">
        <Heading title="Contact"/>
        <section className="about-section"> 
        <div className="container">
        <div className="row">
        <div className="col-md-5 mt-5">
        <img src={ContactImg} className="section-image w-100"/>      
         </div>
         <div className="col-md-6 contact-info"> 
           <form action="https://formspree.io/f/mnqlzqnn" method="POST">
           <div className="form-group">
           <label  className="text-white">Name</label>
           <input type="text" className="form-control" name="name" id="name" placeholder="Your name" required/>
           </div>
           <div className="form-group">
           <label  className="text-white">Email Address</label>
           <input type="email" className="form-control" name="email" id="email" placeholder="Your email" required/>
           </div>
           <div className="form-group">
           <label  className="text-white">Mobile Number</label>
           <input type="text" className="form-control" name="mobile" id="mobile" maxLength="10" onKeyPress={phoneNumberValidation} placeholder="Your mobile number" required/>
           </div>
           <div className="form-group">
           <label  className="text-white">Message</label>
           <textarea type="text" className="form-control" name="mobile" id="mobile" placeholder="Your message" required/>
           </div>
           <button  type="submit" className="btn btn-warning btn-lg text-white">Submit</button>
           </form>
         </div>
         </div>
        </div>
        </section>
        </div>
    )
}

export default Contact;