import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    category: 'residential',
    title: 'House Construction Site',
    imgSrc: '/hero-bg.jpg',
    specs: 'Two-story luxury concrete & timber residential framework under construction.'
  },
  {
    id: 2,
    category: 'residential',
    title: 'Completed Modern House',
    imgSrc: '/luxury-house.jpg',
    specs: 'Completed modern home featuring warm lighting, glass facades, and garden landscaping.'
  },
  {
    id: 3,
    category: 'pools',
    title: 'Swimming Pool Construction',
    imgSrc: '/swimming-pool.jpg',
    specs: 'Dual-phase showcase displaying structural pool formwork alongside finished pool deck.'
  },
  {
    id: 4,
    category: 'renovation',
    title: 'Interior Renovation & Remodeling',
    imgSrc: '/renovation-project.jpg',
    specs: 'Interior plastering, timber beam reinforcement, modern tile flooring, and carpentry installations.'
  }
];

export default function Portfolio({ onOpenQuoteModal }) {
  const [filter, setFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = filter === 'all' 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === filter);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill badge-gold">Our Work</div>
          <h2 className="section-title">Featured Construction Showcase</h2>
          <p className="section-subtitle">
            Explore recent construction site work, completed modern homes, swimming pools, and structural renovation projects.
          </p>
        </div>

        <div className="portfolio-filter-bar">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'residential' ? 'active' : ''}`}
            onClick={() => setFilter('residential')}
          >
            Houses & Villas
          </button>
          <button 
            className={`filter-btn ${filter === 'pools' ? 'active' : ''}`}
            onClick={() => setFilter('pools')}
          >
            Swimming Pools
          </button>
          <button 
            className={`filter-btn ${filter === 'renovation' ? 'active' : ''}`}
            onClick={() => setFilter('renovation')}
          >
            Renovations
          </button>
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="portfolio-card"
              onClick={() => setActiveModalProject(project)}
            >
              <div className="portfolio-img-wrapper">
                <img src={project.imgSrc} alt={project.title} className="portfolio-img" />
                <div className="portfolio-overlay">
                  <span className="portfolio-tag">{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Details Modal */}
        {activeModalProject && (
          <div className="modal-backdrop" onClick={() => setActiveModalProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setActiveModalProject(null)}>
                <X size={20} />
              </button>
              
              <img 
                src={activeModalProject.imgSrc} 
                alt={activeModalProject.title} 
                style={{ width: '100%', maxHeight: '420px', objectFit: 'cover' }} 
              />
              
              <div style={{ padding: '2rem' }}>
                <span className="badge-pill badge-blue" style={{ marginBottom: '0.75rem' }}>
                  {activeModalProject.category}
                </span>
                <p style={{ color: '#334155', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
                  {activeModalProject.specs}
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button className="btn btn-primary" onClick={() => { setActiveModalProject(null); onOpenQuoteModal(); }}>
                    <span>Build Something Similar</span>
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn btn-outline" onClick={() => setActiveModalProject(null)}>
                    Close Showcase
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
