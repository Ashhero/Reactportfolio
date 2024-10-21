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
                    <a href="https://github.com/Ashhero/Mern-Notes-App" target="_blank" rel="noopener noreferrer">
                    <img src={logo2} alt="this is an work2"/>
                    <div className="layer">
                        <h2 style={{marginBottom:'20px'}}>Mern Notes App </h2>
                        <p >The MERN stack notes app is a full-stack web application that allows users to create, view, update, and delete notes efficiently. Built using MongoDB for the database, Express.js for the backend server, React for the frontend interface, and Node.js for server-side execution, the app offers a seamless user experience for managing notes. It features user authentication, CRUD functionality, and a responsive UI, making it an ideal tool for organizing personal or professional notes in a structured way.</p><br/>
                        <h3 style={{marginTop:"20px"}}>Click Here</h3>
                    </div>
                    </a>
                </div>
                <div className="work">
                    <a href="https://github.com/Ashhero/Gourmet-Genius/tree/main" target="_blank" rel="noopener noreferrer">
                    <img src={logo3} alt="this is an work3"/>
                    <div className="layer">
                        <h2 style={{marginBottom:'20px'}}>Gourmet Genius(Online Catering System)</h2>
                        <p>
                        Gourmet Genius is a web application designed to streamline meal planning and enhance the culinary experience. The app allows users to discover and create personalized recipes, save their favorites, and organize them into custom meal plans. With a focus on simplicity and user-friendly design, Gourmet Genius integrates dynamic search functionality, intuitive navigation, and a seamless interface for users to explore new dishes and manage their culinary preferences. </p>
                        <h3 style={{marginTop:"20px"}}>Click Here</h3>
                    </div>
                    </a>
                </div>
                <div className="work">
                   <a href="https://github.com/Ashhero/Food-Classification-using-CNN" target="_blank" rel="noopener noreferrer"> 
                   <img src={logo1} alt="this is an work1"/>
                    <div className="layer">
                        <h2 style={{marginBottom:'20px'}}>Food Classification Using CNN</h2>
                        <p>Food Classification Using Convolutional Neural Networks (CNNs) is a machine learning technique that identifies and categorizes various food items based on images. This process starts with gathering a substantial dataset, such as the Food-101 dataset, which features over 101,000 images across 101 food categories. Data preprocessing is critical and includes resizing images, normalizing pixel values, and employing data augmentation techniques to enhance the training set. The CNN architecture consists of convolutional layers for feature extraction and pooling layers to reduce dimensionality.</p>
                        <h3 style={{marginTop:"20px"}}>Click Here</h3>
                    </div>
                    </a>
                </div>

            </div>

            </div>
        </div>
     </div> 
    
)
}