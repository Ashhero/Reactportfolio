import React  from "react";

export default  function Services (){
   return( <div>
    <div id="services">
        <div className="container">
            <h1 className="subtitle">Services</h1>
            <div className="services-list">
                <div>
                    <i className="fa-solid fa-code"></i>
                    <h2>Web Development</h2>
                    <p>Welcome to my web development portfolio! I'm a passionate web developer with a strong background in creating dynamic and visually appealing websites. With a keen eye for design and a deep understanding of programming languages and frameworks, I bring your digital ideas to life. Explore my projects below to get a glimpse of my expertise.</p>
                    {/* <a href="#">Learn more</a> */}
                </div>
                <div>
                    <i className="fa-solid fa-mobile"></i>
                    <h2>Application Development</h2>
                    <p>A passionate app developer with a keen eye for creating functional and user-friendly applications. Over the years, I've had the privilege of working on a diverse range of app projects, each with its unique set of challenges and opportunities. My goal has always been to craft solutions that not only meet user needs but also push the boundaries of what technology can achieve.</p>
                    {/* <a href="#">Learn more</a> */}
                </div>
                <div>
                    <i className="fa-brands fa-dev"></i>
                    <h2>Software Developer</h2>
                    <p>I believe that software has the power to transform the way we live and work, and I am committed to harnessing that power to build cutting-edge applications and solutions. Over the years, I have honed my skills in various programming languages, frameworks, and technologies to deliver efficient and elegant software solutions.</p>
                    {/* <a href="#">Learn more</a> */}
                </div>
            </div>

        </div>

     </div>
</div>)
}