import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-wrapper">
        {/* Left Side - Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have a question or want to work with us?  
            Fill out the form and we’ll get back to you.
          </p>

          <div className="info-item">
            📍 <span>Chennai, India</span>
          </div>
          <div className="info-item">
            📞 <span>+91 9940663288</span>
          </div>
          <div className="info-item">
            ✉ <span>info@artwarehouse.com</span>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
