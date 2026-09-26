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
      const url = `https://wa.me/94713258259?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    }, 600);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ padding: '2.5rem' }}>
          <div className="badge-pill badge-blue" style={{ marginBottom: '0.75rem' }}>
            Get Quotation
          </div>
          <h2 style={{ fontSize: '1.75rem', color: '#0F172A', marginBottom: '0.5rem' }}>
            Request Your Free Project Estimate
          </h2>
          <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
            Fill out your project details below. Our engineering team will contact you within 24 hours.
          </p>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0', color: '#10B981' }}>
              <CheckCircle2 size={60} style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.5rem', color: '#0F172A', marginBottom: '0.5rem' }}>Quotation Request Sent!</h3>
              <p style={{ color: '#64748B', marginBottom: '1.5rem' }}>Redirecting to WhatsApp to chat directly with our team...</p>
              <button className="btn btn-outline" onClick={onClose}>Done</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" style={{ color: '#334155' }}>Full Name *</label>
                  <input 
                    type="text" 
                    className="form-input form-input-light" 
                    placeholder="John Perera" 
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
                    placeholder="+94 71 325 8259" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
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
                <label className="form-label" style={{ color: '#334155' }}>Project Details / Specific Notes</label>
                <textarea 
                  className="form-textarea form-textarea-light" 
                  rows="3" 
                  placeholder="Tell us about land condition, number of bedrooms, pool dimensions, or timeline..."
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <Send size={18} />
                <span>Submit Quotation Request</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
