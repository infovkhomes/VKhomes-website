import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill badge-blue">Get In Touch</div>
          <h2 className="section-title">Contact VK HOMES & CONSTRUCTION</h2>
          <p className="section-subtitle">
            Have questions about house construction, swimming pools, commercial projects, or renovations? Contact our team today!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-card">
            <div>
              <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Contacts & Office Location</h3>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="contact-info-title">Office Address</h4>
                  <p className="contact-info-text">
                    286 Veterinary Surgon Mawatha,<br />
                    Aluthgama Road, Elpitiya,<br />
                    Postcode: 80400, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="contact-info-title">Call Us Directly</h4>
                  <p className="contact-info-text">
                    <a href="tel:+94713258258">+94 71 325 8258</a><br />
                    <a href="tel:+94773555770">+94 77 355 5770</a>
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={22} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <h4 className="contact-info-title">Email Us</h4>
                  <p className="contact-info-text" style={{ wordBreak: 'break-all' }}>
                    <a href="mailto:info.vkhomesconstruction@gmail.com">info.vkhomesconstruction@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="contact-info-title">Working Hours</h4>
                  <p className="contact-info-text">
                    Monday - Saturday: 8:00 AM - 6:00 PM<br />
                    Sunday: Consultation by Appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Box */}
            <div className="contact-map-container" style={{ marginTop: '1.5rem' }}>
              <iframe 
                title="VK Homes Office Location" 
                src="https://maps.google.com/maps?q=Elpitiya%20Sri%20Lanka&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="160" 
                style={{ border: 0, borderRadius: '12px', display: 'block', marginBottom: '1rem' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <a 
                href="https://maps.google.com/?q=Elpitiya,+Sri+Lanka" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-white" 
                style={{ width: '100%', fontSize: '0.875rem', padding: '0.65rem 1rem', whiteSpace: 'normal', textCenter: 'center' }}
              >
                <MapPin size={16} />
                <span>Open Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="contact-form-box">
            <h3 style={{ fontSize: '1.5rem', color: '#0F172A', marginBottom: '0.4rem' }}>Send Us a Message</h3>
            <p style={{ color: '#64748B', fontSize: '0.925rem', marginBottom: '1.75rem' }}>
              Fill in your contact info and message. We respond to all inquiries within 24 hours.
            </p>

            {sent ? (
              <div style={{ background: '#D1FAE5', color: '#065F46', padding: '1.75rem', borderRadius: '12px', textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Thank You!</h4>
                <p style={{ fontSize: '0.9rem' }}>Your message has been received by VK Homes & Construction. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" style={{ color: '#334155' }}>Your Name *</label>
                  <input 
                    type="text" 
                    className="form-input form-input-light" 
                    placeholder="Enter your name" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" style={{ color: '#334155' }}>Phone Number *</label>
                    <input 
                      type="tel" 
                      className="form-input form-input-light" 
                      placeholder="+94 7X XXX XXXX" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ color: '#334155' }}>Email Address</label>
                    <input 
                      type="email" 
                      className="form-input form-input-light" 
                      placeholder="your.email@gmail.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ color: '#334155' }}>Subject</label>
                  <input 
                    type="text" 
                    className="form-input form-input-light" 
                    placeholder="e.g. Swimming Pool Inquiry / House Plan" 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ color: '#334155' }}>Your Message *</label>
                  <textarea 
                    className="form-textarea form-textarea-light" 
                    rows="3" 
                    placeholder="Write your inquiry here..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
