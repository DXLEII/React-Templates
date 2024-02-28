import React from 'react';
import './styles/contactform.css';

const ContactForm = ({ header, headerInfo, contactHeader, location, address, email, phoneNumber, mapSrc }) => {
  return (
    <div className="contact-form">
      <div className="contact-header">
        <h2>{header}</h2>
        <p>{headerInfo}</p>
      </div>

      <div className="contact-details">
        <h2>{location}</h2>
        <p>{address}</p>
      </div>

      <div className="contact-info">
        <h2>{contactHeader}</h2>
        <p>Email: {email}</p>
        <p>Phone: {phoneNumber}</p>
      </div>

      <div className="map-container">
        <iframe
          title="map"
          src={mapSrc}
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>

      <div className="form-container">
        <form action="https://formspree.io/your-formspree-endpoint" method="POST" className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4" required></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

//change the endpoint to your formspree endpoint next to form action