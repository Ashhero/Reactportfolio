import React from 'react';
import './Resume.css'; // Ensure the CSS file is linked
import image1 from './Resume.jpg'

const Resume = () => {
  return (
    <div className="card1">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <img 
              src={image1} // Replace with your image URL
              alt="Resume Preview"
              className="hover-image"
            />
            <strong>View Resume</strong>
          </div>
        </div>
        <div className="front">
          <div className="img">
            <div className="circle"></div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
          </div>
          <div className="front-content">
            <small className="badge">Resume</small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>Frontend Developer</strong>
                </p>
              </div>
              <p className="card-footer">Download &nbsp; | &nbsp; View Online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
