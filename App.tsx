
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandVoice from './components/BrandVoice';
import ColorPaletteGuide from './components/ColorPaletteGuide';
import TypographyGuide from './components/TypographyGuide';
import ImageryGuide from './components/ImageryGuide';
import LogoGuide from './components/LogoGuide';
import ComponentGuide from './components/ComponentGuide';
import Founder from './components/Founder';
import Footer from './components/Footer';





const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-pearl-white text-midnight-green antialiased">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-6 md:px-12 py-16 md:py-24 space-y-24 md:space-y-32">
          <BrandVoice />
          <ColorPaletteGuide />
          <TypographyGuide />
          <ImageryGuide />
          <LogoGuide />
          <ComponentGuide />
          <Founder />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;