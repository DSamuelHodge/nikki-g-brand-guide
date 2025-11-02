
import React from 'react';
import SectionTitle from './SectionTitle';

const ImageryGuide: React.FC = () => {
  const images = [
    { src: 'https://iili.io/KL0Sfku.png', alt: 'Woman with glowing facial skin', style: 'col-span-2 row-span-2' },
    { src: 'https://iili.io/KsRdIKF.jpg', alt: 'Serum droplet on arm skin', style: '' },
    { src: 'https://iili.io/KsRjX7p.jpg', alt: 'Formulated Lip Balm', style: '' },
  ];

  return (
    <section id="imagery" className="scroll-mt-24">
      <SectionTitle subtitle="Art Direction">Imagery & Mood</SectionTitle>
      <div className="mt-12">
        <p className="text-center text-lg max-w-3xl mx-auto text-midnight-green/80 mb-12">
          Our visual language is defined by natural light, clean compositions, and a focus on texture. We aim for a mood that is calm, scientific, and deeply connected to nature.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 h-[70vh]">
          {images.map((image, index) => (
            <div key={index} className={`relative rounded-xl overflow-hidden shadow-lg ${image.style}`}>
              <img src={image.src} alt={image.alt} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageryGuide;