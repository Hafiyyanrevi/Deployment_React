import React from "react";
import "./organism.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-container">
        <div className="form">
          <h3>Join Our Newsletter</h3>
          <p>
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
          <form>
            <div>
              <input
                type="text"
                className="username"
                name="username"
                id="username"
              />
              <button type="submit" className="subscribe" value="subscribe">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="card">
          <div className="Identity">
            <h2>ARSHA</h2>
            <div className="Identity-list" />
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p>United States </p>
            <br />
            <p>
              <b>Phone:</b> +1 5589 55488 55
            </p>
            <p>
              <b>Email:</b> info@example.com
            </p>
          </div>
          <div className="Links">
            <h4>Useful Links</h4>
            <div className="links-list">
              <p>Home</p>
              <p>About Us</p>
              <p>Services</p>
              <p>Terms of Services</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="Services">
            <h4>Our Services</h4>
            <div className="services-list">
              <p>Web Design</p>
              <p>Web Development</p>
              <p>Product Management</p>
              <p>Marketing</p>
              <p>Graphic Design</p>
            </div>
          </div>
          <div className="Social">
            <h4>Our Social Networks</h4>
            <p>Cras fermentum odio eu feugiat lide par</p>
            <p>naso tierra videa magna derita valies</p>
            <span className="socials-dot" />
            <span className="socials-dot" />
            <span className="socials-dot" />
            <span className="socials-dot" />
            <span className="socials-dot" />
          </div>
        </div>
        <div className="footer">
          <p>
            © Copyright <b>Arsha.</b> All Rights Reserved
          </p>
          <p>Designed by BootstrapMade</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
