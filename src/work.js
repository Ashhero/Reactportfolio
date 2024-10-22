import React from "react";
import logo1 from "./Machinelearning.jpg";
import logo2 from "./work-2.png";
import logo3 from "./work-3.png";
export default function Work(){
return(
    <div>
        <div id="portfolio">
        <div className="container">
            <h1 className="sub-title">My Work</h1>
            <div className="work-list">
            <div className="work">
                    
                    <img src={logo2} alt="this is an work2"/>
                    <div className="layer">
                        <h2 style={{marginBottom:'20px'}}>Mern Notes App </h2>
                        <p >The MERN stack notes app is a full-stack web application that allows users to create, view, update, and delete notes efficiently. Built using MongoDB for the database, Express.js for the backend server, React for the frontend interface, and Node.js for server-side execution, the app offers a seamless user experience for managing notes.</p><br/>
                        <a href="https://github.com/Ashhero/Mern-Notes-App" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}><h3 style={{marginTop:"20px",position:'relative',paddingTop:'100px'}}>View <i class="fa-brands fa-github" style={{fontSize:'25px'}}></i></h3></a>
                    </div>
                </div>
                <div className="work">
                   
                    <img src={logo3} alt="this is an work3"/>
                    <div className="layer">
                        <h2 style={{marginBottom:'20px'}}>Gourmet Genius</h2>
                        <p>
                        Gourmet Genius is a web application designed to streamline meal planning and enhance the culinary experience. The app allows users to discover and create personalized recipes, save their favorites, and organize them into custom meal plans. </p>
                        <a href="https://github.com/Ashhero/Gourmet-Genius/tree/main" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}><h3 style={{marginTop:"20px",paddingTop:'100px'}}>View <i class="fa-brands fa-github" style={{fontSize:'25px'}}></i></h3></a>
                    </div>
                </div>
                <div className="work">
                   
                   <img src={logo1} alt="this is an work1"/>
                    <div className="layer">
                        <h2 style={{marginBottom:'20px'}}>Food Classification Using CNN</h2>
                        <p>Food Classification Using Convolutional Neural Networks (CNNs) is a machine learning technique that identifies and categorizes various food items based on images. This process starts with gathering a substantial dataset, such as the Food-101 dataset, which features over 101,000 images across 101 food categories.</p>
                        <a href="https://github.com/Ashhero/Food-Classification-using-CNN" target="_blank" rel="noopener noreferrer "style={{textDecoration:'none'}} ><h3 style={{marginTop:"20px", paddingTop:'100px'}} >View <i class="fa-brands fa-github" style={{fontSize:'25px'}}></i></h3></a>
                    </div>
                    
                </div>

            </div>

            </div>
        </div>
     </div> 
    
)
}