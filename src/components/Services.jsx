import React from 'react';
import { Home, Waves, Building2, Factory, RefreshCw, Hammer, Check } from 'lucide-react';

const SERVICES_DATA = [
  {
    icon: <Home size={32} />,
    title: 'House & Apartment Construction',
    description: 'Custom architectural residential houses, modern luxury villas, multi-story family homes, and multi-unit apartment complexes crafted with structural safety and premium aesthetics.',
    features: [
      'Turnkey House Building Solutions',
      'Structural Concrete & Roofing',
      'Modern Architectural Designs',
      'Quality Material Sourcing'
    ]
  },
  {
    icon: <Waves size={32} />,
    title: 'Swimming Pool Construction',
    description: 'Design and construction of luxury infinity pools, backyard swimming pools, resort-style pools, filtration systems, and custom pool deck tiling for residential and commercial sites.',
    features: [
      'Concrete & Fiber Pool Construction',
      'Waterproofing & Leak Protection',
      'Advanced Pump & Filter Systems',
      'Custom Lighting & Deck Finishes'
    ]
  },
  {
    icon: <Building2 size={32} />,
    title: 'Commercial Buildings',
    description: 'Multi-story commercial office complexes, retail shopping centers, showrooms, hotel structures, and hospitality properties constructed for durability and business functionality.',
    features: [
      'Heavy Concrete & Steel Structures',
      'Glass Curtain Wall Facades',
      'Commercial Interior Layouts',
      'Safety & Council Regulations'
    ]
  },
  {
    icon: <Factory size={32} />,
    title: 'Industrial Structures',
    description: 'Steel frame industrial warehouses, manufacturing plants, storage facilities, and heavy-duty structural enclosures engineered for long-term heavy load utility.',
    features: [
      'Steel Truss & Roofing Framework',
      'Industrial Flooring & Foundations',
      'Drainage & Civil Works',
      'Large Span Structural Engineering'
    ]
  },
  {
    icon: <RefreshCw size={32} />,
    title: 'Renovation & Refurbishment',
    description: 'Comprehensive interior & exterior remodeling, structural upgrades, room extensions, roofing replacements, and property rejuvenation for residential and commercial buildings.',
    features: [
      'Complete Property Facelift',
      'Structural Alterations & Additions',
      'Roofing & Floor Refurbishment',
      'Waterproofing & Plastering'
    ]
  },
  {
    icon: <Hammer size={32} />,
    title: 'Civil Engineering & Allied Works',
    description: 'Expert civil engineering services, specialized masonry, high-end carpentry, custom interior partitioning, tiling, boundary wall construction, and site preparation works.',
    features: [
      'Civil Engineering Supervision',
      'Precision Masonry & Brickwork',
      'Architectural Carpentry & Finishes',
      'Retaining & Boundary Walls'
    ]
  }
];

export default function Services({ onOpenQuoteModal }) {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill badge-blue">What We Do</div>
          <h2 className="section-title">Comprehensive Construction Services</h2>
          <p className="section-subtitle">
            From single-story homes to swimming pools, multi-story commercial buildings, and specialized civil engineering across Sri Lanka.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES_DATA.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
              
              <ul className="service-card-features">
                {service.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <Check size={16} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button 
                className="btn btn-outline" 
                style={{ width: '100%', marginTop: 'auto' }}
                onClick={onOpenQuoteModal}
              >
                Inquire For This Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
