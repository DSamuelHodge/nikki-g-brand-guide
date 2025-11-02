
import React from 'react';
import SectionTitle from './SectionTitle';

const CheckIcon = () => (
  <svg className="w-6 h-6 text-sea-mineral-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
);

const XIcon = () => (
  <svg className="w-6 h-6 text-radiant-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);


const LogoGuide: React.FC = () => {
  const dos = [
    'Maintain clear space around the logo.',
    'Use the primary logo on light, clean backgrounds.',
    'Ensure sufficient contrast for readability.',
  ];

  const donts = [
    'Do not stretch, squash, or distort the logo.',
    'Do not change the logo\'s colors or add effects.',
    'Do not place on busy or low-contrast backgrounds.',
  ];

  return (
    <section id="logo" className="scroll-mt-24">
      <SectionTitle subtitle="Brand Mark">Logo Usage</SectionTitle>
      <div className="mt-12 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        <div className="bg-botanical-cream rounded-xl p-8 flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-xs border-2 border-dashed border-sage-mist p-8">
             <img src="https://iili.io/KLFQKAJ.png" alt="Nikki G Collections Logo" className="w-full h-auto object-contain" />
          </div>
          <p className="mt-6 text-midnight-green/80 italic">Maintain a minimum clear space around the logo, free of other elements. The space should be at least the height of the inner heart symbol.</p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-semibold mb-4">Correct Usage</h3>
            <ul className="space-y-3">
              {dos.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="flex-shrink-0"><CheckIcon /></span>
                  <span className="text-midnight-green/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
           <div>
            <h3 className="text-3xl font-semibold mb-4">Incorrect Usage</h3>
            <ul className="space-y-3">
              {donts.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="flex-shrink-0"><XIcon /></span>
                   <span className="text-midnight-green/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoGuide;