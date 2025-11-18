import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="hero-badge">Support</div>
        <h1>Get in Touch</h1>
        <p>We're here to help with any questions about your cruise booking, sustainability initiatives, or travel planning</p>
      </section>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📧</div>
            <h3>Email</h3>
            <p>support@ecovoyage.com</p>
            <p>bookings@ecovoyage.com</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Phone</h3>
            <p>+358 9 1234 5678</p>
            <p>Mon-Fri: 9:00-18:00 EET</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Office</h3>
            <p>EcoVoyage Headquarters</p>
            <p>Helsinki, Finland</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send us a Message</h2>
          {submitted ? (
            <div className="form-success">
              <div className="success-icon">✓</div>
              <p>Thank you! We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary btn-large">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

