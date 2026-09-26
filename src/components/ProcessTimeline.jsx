import React from 'react';
import { ArrowRight } from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Consultation & Site Survey',
    description: 'We inspect your land site, evaluate municipal requirements, and discuss your building requirements.'
  },
  {
    step: '02',
    title: 'Detailed BOQ Quotation',
    description: 'Receive a transparent Bill of Quantities (BOQ) with fixed material specifications and timeline guarantees before signing.'
  },
  {
    step: '03',
    title: 'Quality Execution & Build',
    description: 'Our engineering team manages foundation pouring, masonry, carpentry, roofing, and pool construction with regular updates.'
  },
  {
    step: '04',
    title: 'Final Handover & Warranty',
    description: 'Thorough quality assurance inspection, site clearing, key handover, and structural warranty documentation.'
  }
];

export default function ProcessTimeline({ onOpenQuoteModal }) {
  return (
    <section className="process-section" id="process">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill badge-blue">How We Work</div>
          <h2 className="section-title">Our Construction Process</h2>
          <p className="section-subtitle">
            A seamless, stress-free journey from initial consultation to key handover.
          </p>
        </div>

        <div className="process-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {PROCESS_STEPS.map((item, idx) => (
            <div key={idx} className="process-card">
              <div className="process-number">{item.step}</div>
              <h3 className="process-card-title">{item.title}</h3>
              <p className="process-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

        <div style={{ textTransform: 'center', marginTop: '3.5rem', textAlign: 'center' }}>
          <button className="btn btn-primary" onClick={onOpenQuoteModal}>
            <span>Start Your Project Consultation</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
