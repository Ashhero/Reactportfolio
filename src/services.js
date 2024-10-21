import React  from "react";

export default  function Services (){
   return( <div>
    <div id="services">
        <div className="container">
            <h1 className="subtitle">Services</h1>
            <div className="services-list">
                <div>
                    <i className="fa-solid fa-code"></i>
                    <h2>FrontEnd Developer</h2>
                    <p>Welcome to my  portfolio! I'm a passionate web developer with a strong background in creating dynamic and visually appealing websites. As a frontend developer with expertise in React, Tailwind CSS, and other modern technologies, you are skilled at building dynamic and responsive user interfaces. React allows you to create efficient, component-based UIs, ensuring seamless user experiences through reusable elements and efficient state management. With Tailwind CSS, you can quickly style applications using utility-first classes, enabling rapid design and customization.</p>
                </div>
                <div>
                    <i className="fa-brands fa-dev"></i>
                    <h2>Backend Developer</h2>
                    <p>As a backend developer with experience in Express.js, Node.js, and MongoDB, you possess the essential skills to build robust and scalable server-side applications. Express.js, a flexible web application framework for Node.js, enables you to design APIs and handle HTTP requests efficiently. Using Node.js, you manage server-side logic with asynchronous, event-driven architecture, ensuring high performance and scalability for real-time applications. With MongoDB, a NoSQL database, you handle large volumes of data, enabling dynamic schema designs and easy integration with the server.</p>
                    {/* <a href="#">Learn more</a> */}
                </div>
                <div>
                    <i className="fa-solid fa-mobile"></i>
                    <h2>React Native Developer (App Developer)</h2>
                    <p>As a React Native app developer, with expertise in React, Tailwind CSS, and other relevant technologies, I have well-equipped to build cross-platform mobile applications with a seamless and native-like user experience. React Native allows you to use a single codebase to develop apps for both iOS and Android, while maintaining excellent performance and smooth navigation. By leveraging Tailwind CSS (or similar libraries for React Native) for styling, you can create clean, responsive layouts that enhance user experience across various devices.</p>
                    {/* <a href="#">Learn more</a> */}
                </div>
                
            </div>

        </div>

     </div>
</div>)
}