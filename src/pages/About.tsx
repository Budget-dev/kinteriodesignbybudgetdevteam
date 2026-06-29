import React from 'react';
import livingImg from '../assets/images/living_room_1782752059232.jpg';

export default function About() {
  return (
    <div className="pt-32 pb-24 px-8 max-w-[1600px] mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h4 className="text-gold font-sans text-sm tracking-widest uppercase mb-4">About Us</h4>
          <h2 className="font-serif text-4xl lg:text-6xl text-white mb-8">
            Crafting spaces that tell your unique story.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            At KV Interio, we believe that luxury is not just about expensive materials, but about the thoughtful curation of space, light, and texture. Our award-winning team of interior designers and architects works closely with each client to transform their vision into reality.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            With over a decade of experience in high-end residential and commercial projects, we bring unparalleled expertise and an obsessive attention to detail to every space we design.
          </p>
          
          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 mt-8">
            <div>
              <h3 className="text-gold text-4xl font-serif mb-2">10+</h3>
              <p className="text-gray-400 text-sm tracking-widest uppercase">Years Experience</p>
            </div>
            <div>
              <h3 className="text-gold text-4xl font-serif mb-2">250+</h3>
              <p className="text-gray-400 text-sm tracking-widest uppercase">Projects Completed</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={livingImg} alt="About KV Interio" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#111] border border-white/10 flex items-center justify-center p-8 hidden md:flex">
            <p className="text-gold font-serif text-2xl italic text-center leading-snug">
              "Design is intelligence made visible."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
