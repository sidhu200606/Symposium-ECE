import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import './Events.css';
import Debug from "./assets/Debug.webp";
import code from "./assets/code.jpeg";
import ppt from "./assets/ppt.jpg";
import images from "./assets/images.jpeg";

const Techevents = () => {
  return (
    <>
      <div className='Header'>
        <h1 className='glowing'>
           TECHNICAL EVENTS
        </h1>
      </div>

      <div className='Cards'>
        <div className="wrapper">
          <div className="box-area">
            
            <div className="box">
              <img src={Debug} alt="Debug" className='Debug' />
              <div className="overlay">
                <h3>Circuit Debugging</h3>
                <p>Join the ultimate circuit debugging showdown—test your skills, crack complex faults, race against time, and claim the champion’s title!</p>
                <p className='timing'>Timing:9:30AM-10AM</p>
                <p className='Venue'>Venue : LIC LAB</p>
                <a href="https://forms.gle/rKBeJrTA54Ahtsj79">Participate Now</a>
              </div>
            </div>

            <div className="box">
              <img src={ppt} alt="ppt" />
              <div className="overlay">
                <h3>Paper Presentation</h3>  
                <p>Unleash your research brilliance! Present groundbreaking ideas, captivate minds, and make an impact at our thrilling paper presentation competition!</p>
                <p className='timing'>Timing:11:15AM-12:15AM</p>
                <p className='Venue'>Venue : SEMINOR HALL-1</p>
                <a href="https://forms.gle/rKBeJrTA54Ahtsj79">Participate Now</a>
              </div>
            </div>

            <div className="box">
              <img src={images} alt="Quiz" className='images' />  
              <div className="overlay">
                <h3>Technical Quiz</h3>  
                <p>Think fast, solve smart! Challenge your knowledge, outsmart the competition, and prove your expertise in our electrifying technical quiz!</p>
                <p className='timing'>Timing:10AM-10:30AM</p>
                <p className='Venue'>DSP LAB</p>
                <a href="https://forms.gle/rKBeJrTA54Ahtsj79">Participate Now</a>
              </div>
            </div> 

            <div className="box">
              <img src={code} alt="code" className='code' />  
              <div className="overlay">
                <h3>Cool Code</h3>  
                <p>Debug, decode, dominate! Crack the toughest code errors, race against time, and prove your coding mastery in our thrilling bug-fix battle!</p>
                <p className='timing'>Timing:10:30AM-10:50AM</p>
                <p className='Venue'>Venue : DSP Lab</p>
                <a href="https://forms.gle/rKBeJrTA54Ahtsj79">Participate Now</a>
              </div>
            </div> 

            
            </div>
          </div>
        </div>
      

    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>ELECTRO SPARKS 2K25</h2>
          <p >
          Join us at the Unnamalai Institute of Technology Symposium !
          </p>
        </div>
        <div className="footer-section">
          <h3>Via Mobile</h3>
          <ul>
            <li><a href="#about">Muthu Selvamani.A</a></li>
            <li><a href="#events">9976012258</a></li>
            <li><a href="#contact">750076406</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Unnamalai institute of technology</p>
          <p>Subha nagar,Kovilpatti</p>
          <p>Email: Electrosparks2025@gmail.com</p>
        </div>
        <div className="social-icons">
         <h5 >Developer:7530076406</h5>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 UIT ECE SYMPOSIUM. All rights reserved.</p>
       
      </div>
    </footer>



    </>
  );
}

export default Techevents;
