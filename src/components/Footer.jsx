import React from 'react';
import { MapPin, Phone, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenQuoteModal }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid" style={{ gridTemplateColumns: '1.5fr 1.2fr 1.3fr' }}>
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img src="/logo.png" alt="VK Homes Logo" style={{ height: '48px', width: 'auto', background: '#FFFFFF', padding: '4px', borderRadius: '8px' }} />
              <div>
                <h3 style={{ color: '#FFFFFF', margin: 0, fontSize: '1.3rem' }}>VK HOMES</h3>
                <span style={{ color: '#0060E6', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>& CONSTRUCTIONS (PVT) LTD</span>
              </div>
            </div>
            <p>
              Leading trusted construction company. Turning clients' ideas into quality homes, swimming pools, commercial structures, and civil works through professional workmanship and reliable service.
            </p>
            <div className="badge-pill badge-white">
              <ShieldCheck size={14} />
              <span>We Build Your House</span>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links">
              <li><a href="#services">House & Villa Construction</a></li>
              <li><a href="#services">Swimming Pool Construction</a></li>
              <li><a href="#services">Commercial Buildings</a></li>
              <li><a href="#services">Industrial Warehouses & Steel Frameworks</a></li>
              <li><a href="#services">Renovation & Refurbishment</a></li>
              <li><a href="#services">Civil Engineering, Masonry & Carpentry</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Office Location</h4>
            <p style={{ fontSize: '0.9rem', color: '#CBD5E1', marginBottom: '1rem', lineHeight: '1.6' }}>
              <MapPin size={16} style={{ color: '#00D2FF', display: 'inline', marginRight: '6px' }} />
              286 Veterinary Surgon Mawatha, Aluthgama Road, Elpitiya, 80400, Sri Lanka.
            </p>
            <p style={{ fontSize: '0.9rem', color: '#CBD5E1', marginBottom: '0.5rem' }}>
              <Phone size={16} style={{ color: '#00D2FF', display: 'inline', marginRight: '6px' }} />
              <a href="tel:+94713258259" style={{ color: '#FFFFFF', textDecoration: 'none' }}>+94 71 325 8259</a>
            </p>
            <p style={{ fontSize: '0.9rem', color: '#CBD5E1', marginBottom: '1.25rem' }}>
              <Phone size={16} style={{ color: '#00D2FF', display: 'inline', marginRight: '6px' }} />
              <a href="tel:+94773555770" style={{ color: '#FFFFFF', textDecoration: 'none' }}>+94 77 355 5770</a>
            </p>

            <button className="btn btn-primary" style={{ width: '100%' }} onClick={onOpenQuoteModal}>
              Request Official Quote
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} VK HOMES & CONSTRUCTION (PVT) LTD. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
