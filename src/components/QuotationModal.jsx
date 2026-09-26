import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

export default function QuotationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'House & Apartment Construction',
    areaSqFt: '',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const msg = `*VK HOMES QUOTATION INQUIRY*\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'N/A'}\nService: ${formData.service}\nApprox. Sq Ft: ${formData.areaSqFt || 'Not specified'}\nDetails: ${formData.details || 'None'}`;
      const url = `https://wa.me/94713258258?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    }, 600);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close quote modal">
          <X size={20} />
        </button>

        <div className="modal-body">
          <div className="badge-pill badge-blue" style={{ marginBottom: '0.6rem' }}>
            Get Quotation
          </div>
          <h2 style={{ fontSize: '1.6rem', color: '#0F172A', marginBottom: '0.4rem' }}>
            Request Free Estimate
          </h2>
          <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
            Fill out your details below. Our team will get back to you promptly.
          </p>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0', color: '#10B981' }}>
              <CheckCircle2 size={54} style={{ margin: '0 auto 0.75rem' }} />
              <h3 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '0.4rem' }}>Quotation Request Sent!</h3>
              <p style={{ color: '#64748B', marginBottom: '1.25rem', fontSize: '0.9rem' }}>Redirecting to WhatsApp to chat directly with our engineering team...</p>
              <button className="btn btn-outline" onClick={onClose}>Done</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label" style={{ color: '#334155' }}>Full Name *</label>
                  <input 
                    type="text" 
                    className="form-input form-input-light" 
                    placeholder="e.g. John Perera" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ color: '#334155' }}>Phone Number *</label>
                  <input 
                    type="tel" 
                    className="form-input form-input-light" 
                    placeholder="+94 71 325 8258" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label" style={{ color: '#334155' }}>Service Category</label>
                  <select 
                    className="form-select form-select-light"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="House & Apartment Construction">House Construction</option>
                    <option value="Swimming Pool Construction">Swimming Pool</option>
                    <option value="Commercial Buildings">Commercial Building</option>
                    <option value="Industrial Structures">Industrial Structure</option>
                    <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                    <option value="Civil & Interior Works">Civil Engineering & Masonry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ color: '#334155' }}>Estimated Area (Sq. Ft)</label>
                  <input 
                    type="text" 
                    className="form-input form-input-light" 
                    placeholder="e.g. 2,500 sq ft"
                    value={formData.areaSqFt}
                    onChange={(e) => setFormData({...formData, areaSqFt: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" style={{ color: '#334155' }}>Project Details (Optional)</label>
                <textarea 
                  className="form-textarea form-textarea-light" 
                  rows="2" 
                  placeholder="Tell us about your building requirements or timeline..."
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                ></textarea>
              </div>

              <div style={{ marginTop: '1.25rem', marginBottom: '0.5rem' }}>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <Send size={18} />
                  <span>Submit Quotation Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
