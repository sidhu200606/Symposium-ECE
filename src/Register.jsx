import React from 'react';
import "./App.css";  // Ensure you import the CSS file

const Register = () => {
  return (
    <div className="register-button">
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSefuWIROOlpz7Yc-aKK5AGNpVCNcbobjhyuZvYuI29kfFIMXQ/viewform" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <button className="register-btn">Register Now</button>
      </a>
    </div>
  );
};

export default Register;