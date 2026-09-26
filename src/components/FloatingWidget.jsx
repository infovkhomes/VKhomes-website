import React from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function FloatingWidget() {
  return (
    <div className="floating-widget">
      <a 
        href="https://wa.me/94713258259" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn floating-btn-wa"
        aria-label="Chat with VK Homes on WhatsApp"
      >
        <MessageSquare size={26} />
        <span className="floating-tooltip">WhatsApp Quick Chat</span>
      </a>

      <a 
        href="tel:+94713258259" 
        className="floating-btn floating-btn-call"
        aria-label="Call VK Homes Construction"
      >
        <PhoneCall size={24} />
        <span className="floating-tooltip">Call +94 71 325 8259</span>
      </a>
    </div>
  );
}
