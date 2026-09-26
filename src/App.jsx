import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AboutVisionMission from './components/AboutVisionMission';
import ProcessTimeline from './components/ProcessTimeline';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';
import QuotationModal from './components/QuotationModal';
import './App.css';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenQuoteModal = () => setIsQuoteModalOpen(true);
  const handleCloseQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <div className="app-root">
      <TopBar />
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />
      <main>
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />
        <Services onOpenQuoteModal={handleOpenQuoteModal} />
        <Portfolio onOpenQuoteModal={handleOpenQuoteModal} />
        <AboutVisionMission />
        <ProcessTimeline onOpenQuoteModal={handleOpenQuoteModal} />
        <ContactSection />
      </main>
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />
      <FloatingWidget />
      <QuotationModal isOpen={isQuoteModalOpen} onClose={handleCloseQuoteModal} />
    </div>
  );
}
