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
              <h3 style={{ fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '2rem' }}>Contacts</h3>

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
                    <a href="tel:+94713258259">+94 71 325 8259</a><br />
                    <a href="tel:+94773555770">+94 77 355 5770</a>
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="contact-info-title">Email Us</h4>
                  <p className="contact-info-text">
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

            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <a 
                href="https://maps.google.com/?q=Elpitiya,+Sri+Lanka" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-white" 
                style={{ width: '100%' }}
              >
                <MapPin size={16} />
                <span>Open Google Maps Directions</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div style={{ background: '#F8FAFC', padding: '2.5rem', borderRadius: '24px', border: '1px solid #E2E8F0' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#0F172A', marginBottom: '0.5rem' }}>Send Us a Message</h3>
            <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '2rem' }}>
              Fill in your contact info and message. We respond to all inquiries within 24 hours.
            </p>

            {sent ? (
              <div style={{ background: '#D1FAE5', color: '#065F46', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Thank You!</h4>
                <p>Your message has been received by VK Homes & Construction. We will get back to you shortly.</p>
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

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
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
                    rows="4" 
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
