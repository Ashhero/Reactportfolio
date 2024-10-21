import React  from "react";

export default  function Experience(){
   return( <div>
    <div id="experience">
        <div className="container">
            <h1 className="subtitle">Experience</h1>
            <div className="experience-list">
                <div>
                    {/* <i className="fa-solid fa-code"></i> */}
                    <h2 >Nicozn Technologies, Mangalore   Internship</h2>
                    <h4 style={{marginBottom:'20px'}}>Jan 2024 – Feb 2024</h4>
                    <p>
                    •   Designed and managed a relational database schema to store data related to detected DDoS attacks, accuracy testing results.Developed frontend elements using HTML and CSS to construct a user interface for engaging with the application.<br/>
                    •   I utilized Figma for web design, incorporating animations and crafting responsive webpages while leveraging Tailwind CSS. Designed and managed a relational database schema to store data related to detected DDoS attacks, accuracy testing results.<br/>
                    •	I managed Firebase for data storage and utilized its hosting capabilities for deploying web applications.</p>

                    <button className="btnex" ><a href="https://nicozn.com/" target="_blank"  rel="noopener noreferrer" style={{marginTop:"-10px"}} >Know More</a></button>
                    {/* <a href="#">Learn more</a> */}
                </div>
                <div>
                <h2 >Accolade Technologies, Mangalore   Internship</h2>
                    <h4 style={{marginBottom:'20px'}}>March 2024 – May 2024</h4>
                    <p>
                    •   Developed a catering system website using React and Tailwind CSS for the frontend and Express.js for the backend.<br/>
                    •	Collaborated with the design team to create a user-friendly and responsive interface.<br/>
                    •	Implemented backend services and APIs using Express.js.<br/>
                    •	Conducted testing and debugging to ensure high performance and user experience.</p>

                    <button className="btnex" ><a href="https://www.accoladetechsolutions.com/" target="_blank"  rel="noopener noreferrer"style={{marginTop:"-10px"}}>Know More</a></button>
                </div>
                {/* <div>
                    <i className="fa-brands fa-dev"></i>
                    <h2>Software Developer</h2>
                    <p>I believe that software has the power to transform the way we live and work, and I am committed to harnessing that power to build cutting-edge applications and solutions. Over the years, I have honed my skills in various programming languages, frameworks, and technologies to deliver efficient and elegant software solutions.</p>
                    <a href="#">Learn more</a>
                </div> */}
            </div>

        </div>

     </div>
</div>)
}