import React from 'react';
import logo from './AKASHlogo.png';
import video1 from './BackgroundVideo2.mp4';
export default function Navbar() {
  function openmenu() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0px";
  }

  function closemenu() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
  }
  

  return (
    <div> 
      <div id="header">
        <div id="container">
          <video src={video1} type="video/mp4" autoPlay loop muted />
          <nav>
            <img src={logo} id="logo" alt="this is logo" />
            
            <ul id="sidemenu">
              <li><a href="#header">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#services">SERVICES</a></li>
              <li><a href="#portfolio">PORTFOLIO</a></li>
              <li><a href="#contact">CONTACT</a></li>
              <i id="close"className="fa-solid fa-xmark"  onClick={() => closemenu()} />
            </ul>
            <i  id="open" className="fa-solid fa-bars" onClick={() => openmenu()} />
          </nav>
          <div id="header-text">
            <p>Software Developer</p>
            <h1>Hi, I'm <span>Sherigar Akash Shankar</span></h1>
          </div>
        </div>
      </div>
    </div>
  );
}