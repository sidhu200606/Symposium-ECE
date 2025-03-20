import React from 'react'
import blog from "./assets/blog.jpeg";
import ff from "./assets/ff.jpeg";
import photo from "./assets/photo.jpeg";
import "./Online.css"
const Online = () => {
  return (
    <>
          <div className="dom">
        <h1 className='hello'>ONLINE EVENTS</h1>
      </div>
      <div className='Carde'>
        <div className="wrappere">
          <div className="box-areae">
            
            <div className="boxer">
              <img src={blog} alt="Debug" className='blog' />
              <div className="layer">
                <h3>Blogger</h3>
                <p>Unleash your creativity in the Blogger Event! Craft compelling stories, inspire minds, and let your words make an impact! 🚀</p>
                <p className='timings'>Timing: 1:30PM - 2PM</p>
                <p className='Venues'>Smart Classroom,ECE</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeLRl2bFdAYCnKyKSdeV6wabq3EpwZiiF32yaucXfgToti_gg/viewform?usp=dialog">Participate Now</a>
              </div>
            </div>

            <div className="boxer">
              <img src={photo} alt="ppt" />
              <div className="layer">
                <h3>Photography</h3>  
                <p>📸 Capture the moment, tell a story! Join the Photography Contest and let your lens showcase creativity, passion, and unforgettable memories! 📷✨</p>
                <p className='timings'>Timing: 2:30PM - 3PM</p> 
                <p className='Venues'>Venue: Smart Classroom, ECE</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeLRl2bFdAYCnKyKSdeV6wabq3EpwZiiF32yaucXfgToti_gg/viewform?usp=dialog">Participate Now</a>
              </div>
            </div>

            <div className="boxer">
              <img src={ff} alt="Quiz" className='ff' />  
              <div className="layer">
                <h3>FreeFire Event</h3>  
                <p>🔥 Gear up for the ultimate Free Fire room match! Battle fiercely, outplay rivals, dominate the arena, and claim glorious victory! 🎯🏆</p>
                <p className='timings'>Timing: 1PM - 2PM</p>
                <p className='Venues'>Venue: Smart Classroom, ECE</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeLRl2bFdAYCnKyKSdeV6wabq3EpwZiiF32yaucXfgToti_gg/viewform?usp=dialog">Participate Now</a>
              </div>
            </div> 

          </div> 
        </div>
      </div> 

      <div 
              style={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                background: "transparent",
                padding: "10px",
                textAlign: "center",
                zIndex: 1000, 
                marginBottom: "10px"
              }}
            >
              <marquee 
                behavior="scroll" 
                direction="left" 
                scrollamount="6"
                style={{
                  color: "black",
                  fontSize: "18px",
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                  background: "white"
                }}
              >
                The Online-Events(FreeFire,Photography,Blogger) will take place as per the scheduled timing, coordinated by the Student Coordinators, under the guidance of the Faculty Incharge. All the best!
              </marquee>
            </div>
    
    </>
  )
}

export default Online