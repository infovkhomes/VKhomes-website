import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, PhoneCall, Send } from 'lucide-react';

export default function Hero({ onOpenQuoteModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'Residential House',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const text = `Hi VK Homes! My name is ${formData.name}. Phone: ${formData.phone}. Service Needed: ${formData.projectType}. Details: ${formData.message}`;
      const url = `https://wa.me/94713258258?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    }, 800);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-overlay-glow"></div>

      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            Turning Ideas Into <span>Quality Homes</span> & Structures
          </h1>

          <p className="hero-description">
            VK HOMES & CONSTRUCTION (PVT) LTD delivers premium residential houses, commercial buildings, swimming pools, civil engineering, and structural renovations with professional workmanship.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={onOpenQuoteModal}>
              <span>Get Free Quotation</span>
              <ArrowRight size={18} />
            </button>

            <a href="https://wa.me/94713258258" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageSquare size={18} />
              <span>WhatsApp Us</span>
            </a>

            <a href="tel:+94713258258" className="btn btn-outline-white">
              <PhoneCall size={18} />
              <span>+94 71 325 8258</span>
            </a>
          </div>

          <div className="hero-stats-row" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="stat-item">
              <h4>100%</h4>
              <p>Quality Guaranteed</p>
            </div>
            <div className="stat-item">
              <h4>Turnkey</h4>
              <p>Engineering & Build</p>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <h3 className="hero-card-title">Request a Quick Quote</h3>
          <p className="hero-card-subtitle">Tell us about your project requirements.</p>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0', color: '#10B981' }}>
              <CheckCircle2 size={52} style={{ margin: '0 auto 1rem' }} />
              <h4 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>Quotation Request Received!</h4>
              <p style={{ fontSize: '0.9rem', color: '#CBD5E1' }}>Connecting you to our engineering team via WhatsApp...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Full Name</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. Nalin Perera" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone / WhatsApp Number</label>
                <input 
                  type="tel" 
                  className="form-input" 
                  placeholder="e.g. 071 325 8258" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Service Required</label>
                <select 
                  className="form-select"
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                >
                  <option value="Residential House">House Construction</option>
                  <option value="Swimming Pool">Swimming Pool</option>
                  <option value="Commercial Building">Commercial Structure</option>
                  <option value="Renovation & Remodeling">Renovation / Refurbishment</option>
                  <option value="Civil Engineering">Civil & Interior Works</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Project Details (Optional)</label>
                <textarea 
                  className="form-textarea" 
                  rows="2" 
                  placeholder="Briefly describe land size, number of floors, or specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <Send size={18} />
                <span>Submit Quotation Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
