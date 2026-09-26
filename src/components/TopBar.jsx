import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar-content">
        <div className="top-bar-info">
          <a href="tel:+94713258258" className="top-bar-item">
            <Phone size={14} />
            <span>+94 71 325 8258</span>
          </a>
          <a href="tel:+94773555770" className="top-bar-item">
            <Phone size={14} />
            <span>+94 77 355 5770</span>
          </a>
          <a href="mailto:info.vkhomesconstruction@gmail.com" className="top-bar-item">
            <Mail size={14} />
            <span>info.vkhomesconstruction@gmail.com</span>
          </a>
          <span className="top-bar-item">
            <MapPin size={14} />
            <span>Elpitiya, Sri Lanka</span>
          </span>
        </div>
      </div>
    </div>
  );
}
