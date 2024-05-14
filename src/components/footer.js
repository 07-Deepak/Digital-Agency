import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Location: 55 Main Street, New York</p>
          <p>Email: <a href="mailto:example@gmail.com">example@gmail.com</a></p>
          <p>Phone: +012 (345) 678 99</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/our-team">Our Team</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Popular Post</h4>
          <p>Content strategy can help engage customers. October 29, 2023</p>
          <p>Coin strategy can help engage Audience. October 29, 2023</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          {/* Add social media icons here */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2022 Techno. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-conditions">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;