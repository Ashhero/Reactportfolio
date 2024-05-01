import React from "react";
import logo1 from "./Machinelearning.jpg"
import logo2 from "./work-2.png"
import logo3 from "./work-3.png"
export default function Work(){
return(
    <div>
        <div id="portfolio">
        <div className="container">
            <h1 className="sub-title">My Work</h1>
            <div className="work-list">
                <div className="work">
                   <a href="https://github.com/Ashhero/Guesture-Recognition-of-deaf"> <img src={logo1} alt="this is an work1"/>
                    <div className="layer">
                        <h3>Gesture Recognition of Deaf in Machine Learning</h3>
                        <p>It aims to eliminate communication barriers by applying computer vision and Machine Learning </p>
                    </div>
                    </a>
                </div>
                
                <div className="work">
                    <a href="https://github.com/Ashhero/Cocoshred-Outlet-System">
                    <img src={logo2} alt="this is an work2"/>
                    <div className="layer">
                        <h3>CocoShred Outlet System </h3>
                        <p>The CocoShred Outlet System is an web application which is based on purchasing the Coconut Products from the suppliers and selling the manufactured coconut products to the customers and generating bill.  </p>
                    </div>
                    </a>
                </div>
                <div className="work">
                    <a href="https://github.com/Ashhero/Cafetaria-Management-using-DSA">
                    <img src={logo3} alt="this is an work3"/>
                    <div className="layer">
                        <h3>Cafeteria Management System with DataStructure</h3>
                        <p>The Cafeteria Management System (CMS) represents a sophisticated solution designed to optimize every aspect of cafeteria operations </p>
                    </div>
                    </a>
                </div>
            </div>

            </div>
        </div>
     </div> 
    
)
}