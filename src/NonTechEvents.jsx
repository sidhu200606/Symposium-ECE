import React from 'react';
import "./nontech.css";
import fun from "./assets/fun.png";
import flick from "./assets/flick.jpeg";
import stove from "./assets/stove.jpeg";


const NonTechEvents = () => {
  return (
    <>
      <div className="nt-header">
        <h1 className='shine'>NON-TECH EVENTS</h1>
      </div>
      <div className='Cardss'>
        <div className="wrappers">
          <div className="box-areas">
            
            <div className="boxe">
              <img src={fun} alt="Debug" className='Debug' />
              <div className="lay">
                <h3>Non-Flame Cook</h3>
                <p>Participants in the Non-Flame Cook event will showcase their culinary creativity by preparing delicious dishes without using direct flames or fire.</p>
                <p className='timings'>Timing: 1:30PM - 2PM</p>
                <p className='Venues'>Venue: Seminar Hall-2</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeLRl2bFdAYCnKyKSdeV6wabq3EpwZiiF32yaucXfgToti_gg/viewform?usp=dialog">Participate Now</a>
              </div>
            </div>

            <div className="boxe">
              <img src={stove} alt="ppt" />
              <div className="lay">
                <h3>Tamilodu Vilaiyadu</h3>  
                <p>"Tamilodu Velayadu" is an event that celebrates the beauty of the Tamil language through fun games, puzzles, and interactive activities.</p>
                <p className='timings'>Timing: 2:30PM - 3PM</p> 
                <p className='Venues'>Venue: Smart Classroom, ECE</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeLRl2bFdAYCnKyKSdeV6wabq3EpwZiiF32yaucXfgToti_gg/viewform?usp=dialog">Participate Now</a>
              </div>
            </div>

            <div className="boxe">
              <img src={flick} alt="Quiz" className='images' />  
              <div className="lay">
                <h3>Cine Quiz</h3>  
                <p>"Cine Quiz" is an exciting event where participants test their knowledge of movies, actors, dialogues, and film industry trivia.</p>
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
                The Non-Technical Events(Stove mela Kadai,Frame the flick,Purinjavan Pistha) will take place as per the scheduled timing, coordinated by the Student Coordinators, under the guidance of the Faculty Incharge. All the best!
              </marquee>
            </div>
    </>
  );
}

export default NonTechEvents;
