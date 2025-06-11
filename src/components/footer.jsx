import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const ContactForm = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    requirement: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_qpt3nn7", "template_me4jszg", form.current, {
        publicKey: "htKSNJxubCEBIpVIc",
      })
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            website: "",
            requirement: "",
          });
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className='contact-container'>
      <div className='contact-wrapper'>
        <div className='contact-info'>
          <h2>Interested in working with us?</h2>
          <p>LET’S TALK AND GET STARTED</p>

          <div className='info-box'>
            <div className='icon'>
              <i className='bi bi-envelope-fill'></i>
            </div>
            <div>
              <p>SHOOT US A MAIL</p>
              <p className='bold-text'>sales@brandingnuts.com</p>
            </div>
          </div>

          <div className='info-box'>
            <div className='icon'>
              <i className='bi bi-telephone-fill'></i>
            </div>
            <div>
              <p>OUR CONTACT NUMBER</p>
              <p className='bold-text'>(+91) 83413 92803</p>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={handleSubmit} className='contact-form'>
          <div className='form-row'>
            <input
              name='name'
              type='text'
              placeholder='Enter your name *'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              name='email'
              type='email'
              placeholder='Enter your email *'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-row'>
            <input
              name='phone'
              type='text'
              placeholder='Enter phone no.*'
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              name='website'
              type='text'
              placeholder='Enter your website'
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <textarea
            name='requirement'
            placeholder='Requirement *'
            value={formData.requirement}
            onChange={handleChange}
            required
          />

          <div class='checkbox-container'>
            <input type='checkbox' id='agree' name='agreed' required />
            <label for='agree'>
              I agree to the <a href='#'>Terms & Conditions</a> of Business
              Name.
            </label>
          </div>

          <button type='submit'>Submit</button>

          <p className='privacy-note'>
            🔒 We hate spam, and we respect your privacy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
