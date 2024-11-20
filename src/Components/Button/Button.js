import React from 'react';
import './Button.css'; // Ensure the CSS file is properly linked

function Button({ child, link }) {
  const handleClick = () => {
    window.location.href = link; // Navigate to the link
  };

  return (
    <div className="container1">
      <button className="button1" onClick={handleClick}>
        {child}
      </button>
    </div>
  );
}

export default Button;
