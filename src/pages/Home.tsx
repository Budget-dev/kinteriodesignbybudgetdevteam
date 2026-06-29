import React, { useState } from 'react';
import { Play, ArrowRight, PenTool, CheckSquare, Clock, Users, ChevronsDown, ChevronLeft, ChevronRight } from 'lucide-react';

import livingImg from '../assets/images/living_room_1782752059232.jpg';
import kitchenImg from '../assets/images/kitchen_1782752072939.jpg';
import bedroomImg from '../assets/images/bedroom_1782752087207.jpg';
import bathroomImg from '../assets/images/bathroom_1782752145659.jpg';
import wardrobesImg from '../assets/images/wardrobes_1782752102044.jpg';
import balconyImg from '../assets/images/balcony_1782752112964.jpg';

export default function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[100dvh] lg:h-[95vh] lg:min-h-[700px] flex items-center justify-center lg:justify-start">
        {/* Loading Screen */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]">
            <div className="w-16 h-16 rounded-full flex items-center justify-center relative">
              <span className="text-white font-serif text-2xl leading-none italic z-10">KV</span>
              <div className="absolute inset-0 border-2 border-white/10 border-t-gold rounded-full animate-spin"></div>
            </div>
          </div>
        )}

        {/* Background Image & Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
            className={`w-full h-full object-cover object-center lg:object-right transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
            src="https://vennky.sirv.com/Firefly%20Create%20an%208-second%20ultra-realistic%204K%20cinematic%20interior%20video%20using%20the%20provided%20image%20as%20t.mp4"
          />
          {/* Mobile specific gradient overlay */}
          {/* Desktop specific gradient overlays */}
        </div>

        {/* Desktop Hero Content */}
        <div className="relative w-full max-w-[1600px] mx-auto px-8 hidden lg:flex justify-between items-center mt-12">
          <div className="max-w-xl">
            <h2 className="font-serif text-6xl md:text-7xl lg:text-[80px] leading-[1.1] text-white">
              WE DESIGN <br />
              <span className="text-white/90">YOUR DREAM</span>
            </h2>
            <h2 className="font-serif text-7xl md:text-8xl lg:text-[100px] text-gold tracking-wider mt-2">
              INTERIO
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl mt-8 max-w-md leading-relaxed">
              Transforming spaces with elegance, functionality, and timeless design.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-12">
              <button className="bg-gold hover:bg-gold-hover text-black px-8 py-3.5 text-sm font-bold tracking-widest transition-colors">
                EXPLORE OUR WORK
              </button>
              <button className="border border-gray-400 hover:border-white text-white px-8 py-3.5 text-sm font-bold tracking-widest transition-colors">
                GET IN TOUCH
              </button>
            </div>
          </div>


        </div>

        {/* Mobile Hero Content */}
        <div className="relative w-full px-6 flex flex-col items-center text-center lg:hidden z-10 pt-24 h-full pb-12">
          <div className="flex-1 flex items-center justify-center w-full mt-10">
            <div className="font-serif text-[#e4f08e] mix-blend-overlay opacity-90 drop-shadow-md flex items-center justify-center -space-x-2 lg:-space-x-4">
              <span className="text-[32vw] leading-none transform translate-y-3">L</span>
              <span className="text-[20vw] leading-none transform -translate-y-6">U</span>
              <span className="text-[23vw] leading-none transform -translate-y-2">X</span>
              <span className="text-[20vw] leading-none transform -translate-y-5">U</span>
              <span className="text-[22vw] leading-none transform -translate-y-1">R</span>
              <span className="text-[32vw] leading-none transform translate-y-2">Y</span>
            </div>
          </div>
          
          <div className="mt-auto flex flex-col items-center">
            <p className="text-white text-base max-w-sm leading-snug font-medium mb-12">
              Discover beautifully designed luxury interiors made to elevate every corner of your home.
            </p>
            <ChevronsDown className="w-8 h-8 text-white animate-bounce" />
          </div>
        </div>

        {/* Features Bar (Desktop Only) */}
        <div className="hidden lg:block absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-md border-t border-white/5 z-10">
          <div className="max-w-[1600px] mx-auto px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              <FeatureItem 
                icon={<PenTool className="w-8 h-8 text-gold" />}
                title="BESPOKE DESIGNS"
                desc="Tailored to reflect your personality and lifestyle."
              />
              <FeatureItem 
                icon={<CheckSquare className="w-8 h-8 text-gold" />}
                title="QUALITY & DETAIL"
                desc="Precision in every detail, quality in every finish."
              />
              <FeatureItem 
                icon={<Clock className="w-8 h-8 text-gold" />}
                title="ON-TIME DELIVERY"
                desc="Delivering stunning spaces, right on schedule."
              />
              <FeatureItem 
                icon={<Users className="w-8 h-8 text-gold" />}
                title="CLIENT FOCUSED"
                desc="Your vision, our mission complete satisfaction."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Categories Section */}
      <section className="bg-white text-black pt-20 pb-12 lg:py-24">
        <div className="px-6 lg:px-24 flex flex-col items-center text-center max-w-[1600px] mx-auto">
          <h4 className="hidden lg:block text-gray-500 font-sans text-sm tracking-widest uppercase mb-8">Our Philosophy</h4>
          <h3 className="font-serif text-[32px] leading-[1.1] md:text-5xl lg:text-6xl text-black max-w-4xl">
            KV Interio creates thoughtfully crafted interiors designed to shape warm, meaningful, and beautifully lived spaces.
          </h3>
        </div>

        {/* Categories Carousel */}
        <div className="mt-20 px-6 lg:px-24 max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-2xl lg:text-3xl text-black">Shop By Categories</h3>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 md:w-10 md:h-10 border border-gray-200 flex items-center justify-center text-black hover:bg-gray-50 transition-colors">
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button className="w-8 h-8 md:w-10 md:h-10 border border-gray-200 flex items-center justify-center text-black hover:bg-gray-50 transition-colors">
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-200 mb-6"></div>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            <CategoryItem imgSrc={livingImg} title="Living Room" />
            <CategoryItem imgSrc={kitchenImg} title="Kitchen" />
            <CategoryItem imgSrc={bedroomImg} title="Bedroom" />
            <CategoryItem imgSrc={wardrobesImg} title="Wardrobes" />
            <CategoryItem imgSrc={bathroomImg} title="Bathroom" />
            <CategoryItem imgSrc={balconyImg} title="Balcony" />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-white text-black py-24 px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div className="flex items-center gap-6">
              <h2 className="text-gold font-sans font-medium uppercase tracking-[0.2em] text-2xl md:text-3xl">OUR PORTFOLIO</h2>
              <div className="hidden md:block w-32 h-[1px] bg-black/10"></div>
            </div>
            <a href="#" className="text-gold flex items-center gap-2 hover:text-black transition-colors text-sm tracking-wider">
              View All Projects <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            <PortfolioItem 
              imgSrc={livingImg}
              title="LIVING ROOM"
              subtitle="Modern & Elegant"
            />
            <PortfolioItem 
              imgSrc={kitchenImg}
              title="KITCHEN"
              subtitle="Sleek & Functional"
            />
            <PortfolioItem 
              imgSrc={bedroomImg}
              title="BEDROOM"
              subtitle="Comfort & Style"
            />
            <PortfolioItem 
              imgSrc={bathroomImg}
              title="BATHROOM"
              subtitle="Luxury & Spa"
            />
            <PortfolioItem 
              imgSrc={wardrobesImg}
              title="WARDROBES"
              subtitle="Smart & Stylish"
            />
            <PortfolioItem 
              imgSrc={balconyImg}
              title="BALCONY"
              subtitle="Relax & Unwind"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-5 items-start">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-2">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function PortfolioItem({ imgSrc, title, subtitle }: { imgSrc: string, title: string, subtitle: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden bg-gray-100 aspect-[4/3] relative">
        <img 
          src={imgSrc} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
      </div>
      <div className="mt-5">
        <h3 className="text-black font-semibold uppercase tracking-widest text-sm mb-1">{title}</h3>
        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>
    </div>
  );
}

function CategoryItem({ imgSrc, title }: { imgSrc: string, title: string }) {
  return (
    <div className="min-w-[200px] md:min-w-[280px] snap-start border border-gray-200 flex flex-col bg-[#f8f8f8]">
      <div className="aspect-square w-full relative overflow-hidden">
        <img src={imgSrc} alt={title} className="w-full h-full object-cover p-3" />
      </div>
      <div className="bg-white py-3 text-center border-t border-gray-200 mx-3 mb-3 shadow-sm">
        <span className="text-black font-sans text-sm">{title}</span>
      </div>
    </div>
  );
}
