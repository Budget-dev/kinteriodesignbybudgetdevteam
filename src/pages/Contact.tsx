import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-8 max-w-[1600px] mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h4 className="text-gold font-sans text-sm tracking-widest uppercase mb-4">Contact Us</h4>
          <h2 className="font-serif text-4xl lg:text-6xl text-white mb-8">
            Let's discuss your dream space.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-lg">
            Ready to transform your home or office? Get in touch with our team of expert designers to start your journey towards a more beautiful living space.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="text-white text-lg font-semibold mb-2">Our Studio</h4>
                <p className="text-gray-400">123 Luxury Avenue, Design District<br />New York, NY 10001</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="text-white text-lg font-semibold mb-2">Call Us</h4>
                <p className="text-gray-400">+1 (555) 123-4567<br />Mon-Fri, 9am to 6pm</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="text-white text-lg font-semibold mb-2">Email Us</h4>
                <p className="text-gray-400">hello@kvinterio.com<br />support@kvinterio.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#111] p-10 lg:p-12 border border-white/5">
          <h3 className="font-serif text-3xl text-white mb-8">Send us a message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-gray-400 tracking-widest uppercase">First Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:border-gold outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-gray-400 tracking-widest uppercase">Last Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:border-gold outline-none transition-colors" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs text-gray-400 tracking-widest uppercase">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:border-gold outline-none transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-400 tracking-widest uppercase">Your Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:border-gold outline-none transition-colors resize-none"></textarea>
            </div>

            <button type="button" className="bg-gold hover:bg-gold-hover text-black px-8 py-4 text-sm font-bold tracking-widest transition-colors w-full mt-4">
              SEND INQUIRY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
