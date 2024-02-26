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
                    <img src={logo1} alt="this is an work1"/>
                    <div className="layer">
                        <h3>Gesture Recognition of Deaf in Machine Learning</h3>
                        <p>It aims to eliminate communication barriers by applying computer vision and Machine Learning </p>
                    </div>
                </div>
                <div className="work">
                    <img src={logo2} alt="this is an work2"/>
                    <div className="layer">
                        <h3>Gesture Recognition of Deaf in Machine Learning</h3>
                        <p>It aims to eliminate communication barriers by applying computer vision and Machine Learning </p>
                    </div>
                </div>
                <div className="work">
                    <img src={logo3} alt="this is an work3"/>
                    <div className="layer">
                        <h3>Gesture Recognition of Deaf in Machine Learning</h3>
                        <p>It aims to eliminate communication barriers by applying computer vision and Machine Learning </p>
                    </div>
                </div>
            </div>

            </div>
        </div>
     </div> 
    
)
}