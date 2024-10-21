import React, { useState } from 'react';
import logo from './profile.png';

export default function About() {
  const [activeTab, setActiveTab] = useState('Skills');

  function opentabs(tabname) {
    setActiveTab(tabname);
  }

  return (
    <div>
      <div id="about">
        <div className="container"> {/* Correct the class attribute to className */}
          <div className="row"> {/* Correct the class attribute to className */}
            <div className="about-col1"> {/* Correct the class attribute to className */}
              <img src={logo} alt="User Logo" /> {/* Add alt attribute to the image */}
            </div>
            <div className="about-col2"> {/* Correct the class attribute to className */}
              <h1 className="subtitle">About Me</h1>
              <p>
                {/* Add relevant information about your skills and knowledge */}
              </p>
              <div className="tab-title">
                {/* Change 'onclick' to 'onClick' */}
                <p className={`tab-links ${activeTab === 'Skills' ? 'active-link' : ''}`} onClick={() => opentabs('Skills')}>Skills</p>
                <p className={`tab-links ${activeTab === 'Certification' ? 'active-link' : ''}`} onClick={() => opentabs('Certification')}>Certification</p>
                <p className={`tab-links ${activeTab === 'Education' ? 'active-link' : ''}`} onClick={() => opentabs('Education')}>Education</p>
              </div>
              <div className={`tab-contents ${activeTab === 'Skills' ? 'active-tab' : ''}`} id="skills">
                <ul>
                  <li><span>Front-End Development</span>
                    <ol>
                      <li id="front">Javascript, React, Redux, Tailwind CSS</li>
                    </ol>
                  </li>
                  <li><span>Back-End Development</span></li>
                  <ol>
                    <li id="front">Express, Node, Monogodb, SQL</li>
                  </ol>
                  {/* <li><span>Time Management</span></li> */}
                </ul>
              </div>
              <div className={`tab-contents ${activeTab === 'Certification' ? 'active-tab' : ''}`} id="Certification">
                <ul>
                <li><span>FrontEnd Development Libraries</span></li>
                  <a href="https://drive.google.com/file/d/1mocp8cjpTeVF-bST_ScZAKdRsRGGRFU_/view?usp=drive_link" download>
                    <button>View Certificate</button>
                  </a>
                  <li><span> The MERN Fullstack-React, NodeJS, Express & MongoDB </span></li>
                  <a href="https://drive.google.com/file/d/1woiV8byOlqx9VBIXIML3gzVay8T73Nmz/view?usp=drive_link" download>
                    <button>View Certificate</button>
                  </a>
                  <li><span>Machine Learning with Python</span></li>
                  <a href="https://drive.google.com/file/d/10qkh2omVqKCNCjV326K6qAIS2Osm8ksP/view?usp=drive_link" download>
                    <button>View Certificate</button>
                  </a>
                  <li><span>Cloud Computing Architecture</span></li>
                  <a href="https://drive.google.com/file/d/1hgyP8DrUNdBrD0_FSxIsaUmOF7y79lha/view?usp=drive_link" download>
                    <button>View Certificate</button>
                  </a>
                  
                  
                </ul>
              </div>
              <div className={`tab-contents ${activeTab === 'Education' ? 'active-tab' : ''}`} id="Education">
                <ul>
                  <li id="study"><span>Master of Computer Application at NMAMIT Nitte(2022-2024) </span></li>
                  <li id="study"><span>Bachelor of Computer Application at Sri Bhuvanendra College(2019-2022)</span></li>
                  <li id="study"><span>EBAC PUC at Jyothi PU College(2019) </span></li>
                  <li id="study"><span>SSLC Church English Medium School Ajekar(2019) </span></li>
                  {/* Add similar lines for other education details */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}