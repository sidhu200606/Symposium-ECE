import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import logo from "./assets/logo.jpg";
import Events from "./Events";
import Contacts from "./Contacts";
import TechEvents from "./TechEvents";
import NonTechEvents from "./NonTechEvents";
import Online from "./Online";

const taglines = [
  "Innovate. Inspire. Ignite. Dream Big!",
  "Unleash the Future with New Ideas!",
  "Ideas Meet Innovation, Shape Tomorrow!",
  "Innovate, inspire, and shape the future today!",
  "Technology meets creativity to build tomorrow!",
  "Unlock ideas, ignite minds, and create change!",
  "Engineering breakthroughs for a smarter world!",
  "Electronics and innovation drive the future!",
  "Empowering young minds to lead with tech!",
  "Breaking limits, building a world of progress!",
  "Smart solutions for a fast-evolving future!",
  "Bridging imagination and reality with tech!",
  "Transforming ideas into groundbreaking success!",
  "Advancing technology to power a new era!",
  "Shaping a better world through digital vision!",
];

const Home = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      
      <div className={`tagline ${fade ? "fade-in" : "fade-out"}`}>
        <h2>{taglines[currentTagline]}</h2>
      </div>

     
      <img src={logo} alt="Logo" className="logo" />
      <div className="center-text">
        <h1>ELECTRO STARKS 2K25</h1>
      </div>

      
      <div className="center-paragraph">
        <p>
          We cordially invite you to Electro Starks 2K25,
          <br /> an electrifying symposium of innovation and technology!
        </p>
      </div>

      
      <div className="register-button">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeLRl2bFdAYCnKyKSdeV6wabq3EpwZiiF32yaucXfgToti_gg/viewform?usp=dialog"
        >
          <button className="register-btn">Register Now</button>
        </a>
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
          marginBottom: "30px",
        }} className="mark"
      >
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="6"
          style={{
            color: "black",
            fontSize: "14px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            background:"white"
          }}
        >
          🎉 Unnamalai Institute of Technology - Department of ECE presents an amazing opportunity! Participate and win exciting prizes! 🚀 Student Coordinators:Muthu SelvaMani.A,Sankara Raman.S,Hari hara sudhan.A, Convenor:<strong>Dr.S.Parvathi.ME.,PHD</strong>, Faculty-Coordinators:<strong>P.Sumathi.M.E,M.Kowsalya.M.E,N.Nivetha.M.E,J.Varsha.M.E,R.Ganesh.M.E</strong>
        </marquee>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <Sidebar />

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/techevents" element={<TechEvents />} />
        <Route path="/nontechevents" element={<NonTechEvents />} />
        <Route path="/online" element={<Online />} />
      </Routes>

      
      <div className="bubbles">
        {Array.from({ length: 45 }).map((_, index) => (
          <span
            key={index}
            style={{ "--i": Math.floor(Math.random() * 30) + 10 }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default App;
