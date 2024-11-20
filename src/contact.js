import React from 'react';

export default function Contact() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbypZ-yg2Z0K_Mrk7oeawOopBzcRj7v5o9CvZbb3WRQfMzQvtHDDCVz1F_wONQJ-dVYBTQ/exec';

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const msg = document.getElementById("msg");

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        msg.innerHTML = "Message sent Successfully";
        setTimeout(function () {
          msg.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p><i class="fa-regular fa-paper-plane"></i> akashdevadiga919@gmail.com</p>
              <p><i class="fa-solid fa-phone"></i> 7899869963</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/akash-sherigar-b7427323a"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/akash_devadiga_01"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/SherigarAkash"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://github.com/Ashhero"><i class="fa-brands fa-github"></i></a>
              </div>
              <div className="btn">
                <a href="https://drive.google.com/file/d/13sAAfVOIDaXWP_WYBP2uypVXpFfrnDT0/view?usp=sharing" download>
                  <button className="cy">View Resume</button>
                </a>
              </div>
            </div>
            <div className="contact-right">
              <form name="submit-to-google-sheet" onSubmit={handleFormSubmit}>
                <input type="text" id="text" name="Name" placeholder="Your Name" required />
                <input type="email" id="text" name="email" placeholder="Your Email" required />
                <textarea name="Message" id="text" rows="6" placeholder="Your Message" required></textarea>
                <button type="submit" id="text" name="submit" className="btn">Submit</button>
              </form>
              <span id="msg"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © Akash.<i class="fa-solid fa-heart"></i> </p>
      </div>
      {/* Additional form (duplicate) - you may remove this */}
      <form name="submit-to-google-sheet"></form>
    </div>
  );
}