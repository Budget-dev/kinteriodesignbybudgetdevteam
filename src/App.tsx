import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Search, Heart, User, ShoppingBag } from 'lucide-react';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import WhatsappButton from './components/WhatsappButton';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-gold selection:text-black">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-50 px-6 lg:px-8 py-6 flex items-center justify-between border-b border-white/20 lg:bg-transparent">
        
        {/* Left: Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-sans tracking-wide text-white/90">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Portfolio</a>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Center: Desktop Logo */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-2">
          <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
            <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
              <span className="text-white font-serif text-lg leading-none italic">KV</span>
            </div>
            <h1 className="text-white font-serif tracking-wide text-2xl leading-none">KV Interio</h1>
          </Link>
        </div>

        {/* Mobile Left: Logo */}
        <div className="flex lg:hidden items-center gap-2">
          <Link to="/" className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
            <span className="text-white font-serif text-lg leading-none italic">KV</span>
          </Link>
          <Link to="/">
            <h1 className="text-white font-serif tracking-widest text-xl leading-none">KV INTERIO</h1>
          </Link>
        </div>

        {/* Right: Desktop Icons */}
        <div className="hidden lg:flex items-center gap-6 text-white/90">
          <button className="hover:text-white transition-colors"><Search className="w-5 h-5 font-light" strokeWidth={1.5} /></button>
          <button className="hover:text-white transition-colors"><Heart className="w-5 h-5 font-light" strokeWidth={1.5} /></button>
          <button className="hover:text-white transition-colors"><User className="w-5 h-5 font-light" strokeWidth={1.5} /></button>
          <button className="hover:text-white transition-colors relative">
            <ShoppingBag className="w-5 h-5 font-light" strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-1.5 bg-white/20 backdrop-blur-sm text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </button>
        </div>
        
        {/* Mobile Menu Icon */}
        <button 
          className="lg:hidden text-white z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-40 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="flex flex-col items-center gap-8 text-lg font-serif tracking-widest text-white">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold transition-colors">HOME</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold transition-colors">ABOUT US</Link>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold transition-colors">SERVICES</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold transition-colors">PORTFOLIO</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold transition-colors">TESTIMONIALS</a>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold transition-colors">CONTACT</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-8">
            <button className="border border-gold text-gold px-8 py-3 text-sm font-sans font-bold tracking-widest transition-colors hover:bg-gold hover:text-black">
              GET A QUOTE
            </button>
          </Link>
        </div>
      </div>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 text-center text-gray-500 text-sm tracking-wider relative z-10">
        <p>&copy; 2026 KV INTERIO. All rights reserved.</p>
      </footer>

      {/* Floating Whatsapp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsappButton />
      </div>
    </div>
  );
}
