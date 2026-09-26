import React, { useState } from 'react';
import { MapPin, Globe2, Truck, CheckCircle } from 'lucide-react';

const SRI_LANKA_DISTRICTS = [
  'Colombo', 'Galle (Headquarters)', 'Gampaha', 'Kalutara', 'Kandy', 'Matara', 
  'Kurunegala', 'Ratnapura', 'Hambantota', 'Nuwara Eliya', 'Badulla', 'Anuradhapura', 
  'Polonnaruwa', 'Puttalam', 'Kegalle', 'Jaffna', 'Trincomalee', 'Batticaloa', 'Matale'
];

export default function IslandwideCoverage() {
  const [activeDistrict, setActiveDistrict] = useState('Galle (Headquarters)');

  return (
    <section className="islandwide-banner" id="coverage">
      <div className="container">
        <div className="coverage-box">
          <div className="coverage-text" style={{ maxWidth: '650px' }}>
            <div className="badge-pill badge-gold" style={{ marginBottom: '0.75rem' }}>
              <Globe2 size={14} />
              <span>100% Nationwide Service</span>
            </div>
            <h3>We Build Anywhere in Sri Lanka!</h3>
            <p>
              Based in Elpitiya (Galle District), our specialized engineering teams and mobile equipment units deploy smoothly to carry out house construction, swimming pool installations, and commercial projects across all 25 districts of Sri Lanka.
            </p>

            <div className="districts-pill-container">
              {SRI_LANKA_DISTRICTS.map((district) => (
                <button
                  key={district}
                  className={`district-pill ${activeDistrict === district ? 'active' : ''}`}
                  onClick={() => setActiveDistrict(district)}
                >
                  <MapPin size={12} style={{ display: 'inline', marginRight: '4px' }} />
                  {district}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-panel-dark" style={{ padding: '2rem', borderRadius: '16px', maxWidth: '440px', width: '100%' }}>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Truck style={{ color: '#00D2FF' }} />
              <span>Seamless Remote Site Management</span>
            </h4>
            <ul style={{ listStyle: 'none', color: '#94A3B8', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <CheckCircle size={16} style={{ color: '#25D366' }} />
                <span>On-site supervision & weekly video updates for clients</span>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <CheckCircle size={16} style={{ color: '#25D366' }} />
                <span>Direct material sourcing & strict quality control standards</span>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <CheckCircle size={16} style={{ color: '#25D366' }} />
                <span>Full municipal council & pradeshiya sabha plan approvals</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
