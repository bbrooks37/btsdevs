// src/App.tsx
import { useState } from 'react';
import PricingSection from './components/PricingSection';
import PortfolioSection from './components/PortfolioSection';

export default function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div 
      className="relative min-h-screen bg-slate-50 font-sans antialiased selection:bg-cyan-500 selection:text-white bg-center bg-no-repeat bg-fixed"
      style={{ 
        backgroundImage: "linear-gradient(rgba(248, 250, 252, 0.97), rgba(248, 250, 252, 0.97)), url('/btslogo.png')",
        backgroundSize: 'auto, min(75vw, 750px)'
      }}
    >
      
      {/* Contact Overlay */}
      {showContact && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" 
          onClick={() => setShowContact(false)}
        >
          <div 
            className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center" 
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-black text-slate-900 mb-4">Contact Us</h3>
            <p className="text-slate-600 mb-6">We'd love to help with your next project.</p>
            <div className="space-y-4">
              <a href="tel:813-503-5735" className="block text-slate-900 font-bold hover:text-cyan-600 hover:underline">
                C: 813-503-5735
              </a>
              <a href="mailto:techbrooks@btsdevs.net" className="block text-cyan-600 font-bold hover:underline">
                Email: techbrooks@btsdevs.net
              </a>
            </div>
            <button 
              onClick={() => setShowContact(false)} 
              className="mt-8 text-slate-400 text-xs uppercase tracking-widest hover:text-slate-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main UI Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Sticky Header */}
        <header className="w-full bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto py-4 px-6 sm:px-12 lg:px-24 flex justify-between items-center">
            
            {/* Logo and Brand Title Group */}
            <div className="flex items-center gap-4">
              <img 
                src="/btslogo.png" 
                alt="Brooks Tech Solutions Logo" 
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-200 hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-slate-900 uppercase leading-none">
                  Brooks
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-widest text-cyan-500 uppercase mt-1">
                  Tech Solutions
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden sm:flex items-center gap-8">
              <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-cyan-500 transition-colors">
                Services
              </a>
              <button 
                onClick={() => setShowContact(true)}
                className="bg-cyan-500 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl hover:bg-cyan-600 transition-colors shadow-sm cursor-pointer"
              >
                Contact Us
              </button>
            </nav>
          </div>
        </header>

        {/* Content Section */}
        <main className="grow">
          <PricingSection onContactClick={() => setShowContact(true)} />
          <PortfolioSection />
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-slate-200/60 py-8 text-center text-xs font-medium text-slate-400">
          &copy; {new Date().getFullYear()} Brooks Tech Solutions LLC. All rights reserved.
        </footer>
      </div>
    </div>
  );
}