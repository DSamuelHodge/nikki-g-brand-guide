
import React from 'react';
import SectionTitle from './SectionTitle';

const BrandVoice: React.FC = () => {
  const voices = [
    { title: 'Confident & Restorative', description: 'Science-meets-nature approach that empowers and renews.' },
    { title: 'Calm Luxury', description: 'Precise, efficacy-first formulas delivering a serene experience.' },
    { title: 'Inclusive & Trustworthy', description: 'Aging-positive messaging that builds confidence and trust.' },
  ];

  return (
    <section id="brand-voice">
      <SectionTitle subtitle="Philosophy">Our Brand Voice</SectionTitle>
      <div className="mt-12 grid md:grid-cols-3 gap-8 md:gap-12 text-center">
        {voices.map((voice) => (
          <div key={voice.title}>
            <h3 className="text-2xl font-semibold">{voice.title}</h3>
            <p className="mt-2 text-base text-midnight-green/80">{voice.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandVoice;
