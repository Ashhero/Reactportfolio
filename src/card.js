import React from 'react';
import './Card.css'; // Ensure the CSS file is correctly linked
import image1 from "./images/image8.jpg"
import image2 from "./images/image2.jpg"
import image3 from "./images/image7.jpg"
import image4 from "./images/image9.jpg"
import image5 from "./images/image6.jpg"
// import Resume from './Components/Resume/Resume';

export default function Card() {
  const colors = [
    '142, 249, 252',
    '142, 252, 204',
    '142, 252, 157',
    '215, 252, 142',
    '252, 252, 142',
  ];

  const images = [
 // Replace with actual image URLs or paths
    image1,
    image2,
    image3,
    image4,
    image5,
  ];

  return (
    <div className="wrapper">
        <div style={{position:"relative" ,top: '-300px'}}>
        <h1 className="subtitle">Certificates</h1>
        </div>
      <div className="inner" style={{ '--quantity': colors.length }}>
        {colors.map((color, index) => (
          <div
            key={index}
            className="card"
            style={{
              '--index': index,
              '--color-card': color,
            }}
          >
            <div
              className="img"
              style={{
                backgroundImage: `url(${images[index]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        ))}
      </div>
      {/* <Resume/> */}
    </div>

  );
}
