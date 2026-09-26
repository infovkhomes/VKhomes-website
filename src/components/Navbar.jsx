import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';

export default function Navbar({ onOpenQuoteModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="brand-logo-container">
          <img src="/logo.png" alt="VK Homes Logo" className="brand-logo-img" />
          <div className="brand-text">
            <span className="brand-name">VK HOMES</span>
            <span className="brand-tagline">& CONSTRUCTIONS</span>
          </div>
        </a>

        <ul className={`nav-menu ${mobileOpen ? 'open' : ''}`}>
          <li><a href="#services" className="nav-link" onClick={() => setMobileOpen(false)}>Services</a></li>
          <li><a href="#portfolio" className="nav-link" onClick={() => setMobileOpen(false)}>Portfolio</a></li>
          <li><a href="#about" className="nav-link" onClick={() => setMobileOpen(false)}>About & Vision</a></li>
          <li><a href="#process" className="nav-link" onClick={() => setMobileOpen(false)}>Process</a></li>
          <li><a href="#contact" className="nav-link" onClick={() => setMobileOpen(false)}>Contact Us</a></li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            className="btn btn-primary"
            onClick={onOpenQuoteModal}
            id="nav-get-quote-btn"
          >
            <FileText size={18} />
            <span>Get Quotation</span>
          </button>

          <button 
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
}
