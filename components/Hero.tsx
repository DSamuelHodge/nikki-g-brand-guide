
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-pearl-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://iili.io/KLFmTTg.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-midnight-green/50"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
          Nikki G Collections
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-sans font-light max-w-3xl mx-auto text-pearl-white/90">
          An interactive guide to our visual identity and brand philosophy.
        </p>
      </div>
    </div>
  );
};

export default Hero;
