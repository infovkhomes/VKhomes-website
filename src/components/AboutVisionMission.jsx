import React from 'react';
import { Eye, Target, Award, Shield, Users, Clock } from 'lucide-react';

export default function AboutVisionMission() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <div className="badge-pill badge-gold">Company Overview</div>
          <h2 className="section-title" style={{ color: '#FFFFFF' }}>VK HOMES & CONSTRUCTION (PVT) LTD</h2>
          <p className="section-subtitle" style={{ color: '#94A3B8' }}>
            Registered construction contractors headquartered at 286 Veterinary Surgon Mawatha, Aluthgama Road, Elpitiya (Postcode: 80400).
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">
              <Eye size={28} />
            </div>
            <h3 className="about-card-title">Our Vision</h3>
            <p className="about-card-desc">
              "To be a trusted and leading construction company, recognized for building quality homes and structures that create lasting value, comfort, and satisfaction for our clients."
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon" style={{ background: 'rgba(37, 211, 102, 0.2)', color: '#25D366' }}>
              <Target size={28} />
            </div>
            <h3 className="about-card-title">Our Mission</h3>
            <p className="about-card-desc">
              "To turn our clients’ ideas into quality homes and structures through professional workmanship, reliable service, and a commitment to excellence."
            </p>
          </div>
        </div>

        <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.5rem' }}>
            <Award size={32} style={{ color: '#00D2FF', marginBottom: '0.75rem' }} />
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '0.4rem' }}>Professional Workmanship</h4>
            <p style={{ color: '#94A3B8', fontSize: '0.875rem' }}>Skilled engineers, masons, carpenters, and project managers ensuring structural integrity.</p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.5rem' }}>
            <Shield size={32} style={{ color: '#25D366', marginBottom: '0.75rem' }} />
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '0.4rem' }}>Reliable Transparency</h4>
            <p style={{ color: '#94A3B8', fontSize: '0.875rem' }}>No hidden material costs or surprise fees. Clear quotation breakdowns from day one.</p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.5rem' }}>
            <Clock size={32} style={{ color: '#D9A036', marginBottom: '0.75rem' }} />
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '0.4rem' }}>On-Time Handover</h4>
            <p style={{ color: '#94A3B8', fontSize: '0.875rem' }}>Strict milestone scheduling and continuous progress reporting for every construction stage.</p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.5rem' }}>
            <Users size={32} style={{ color: '#A855F7', marginBottom: '0.75rem' }} />
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '0.4rem' }}>Client Centric Approach</h4>
            <p style={{ color: '#94A3B8', fontSize: '0.875rem' }}>Personalized architectural consultation tailored to your budget and aesthetic preferences.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
