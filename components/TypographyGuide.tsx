
import React from 'react';
import SectionTitle from './SectionTitle';

const TypographyGuide: React.FC = () => {
  return (
    <section id="typography" className="scroll-mt-24">
      <SectionTitle subtitle="Voice & Tone">Typography</SectionTitle>
      <div className="mt-12 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold border-b border-sage-mist pb-2">Headings (Cormorant Garamond)</h3>
          <div>
            <p className="text-sm uppercase tracking-widest text-sea-mineral-green">H1 - 64px</p>
            <h1 className="text-7xl">Efficacy First</h1>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-sea-mineral-green">H2 - 36px</p>
            <h2 className="text-4xl">Science Meets Nature</h2>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-sea-mineral-green">H3 - 28px</p>
            <h3 className="text-3xl">Restorative Formulas</h3>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold border-b border-sage-mist pb-2">Body (Inter)</h3>
          <div>
            <p className="text-sm uppercase tracking-widest text-sea-mineral-green">Body Large - 18px</p>
            <p className="text-lg">
              Our philosophy is rooted in the belief that skincare should be a restorative ritual. We blend potent, scientifically-proven ingredients with nourishing botanicals to create formulas that are both gentle and effective.
            </p>
          </div>
           <div>
            <p className="text-sm uppercase tracking-widest text-sea-mineral-green">Body Base - 16px</p>
            <p className="text-base">
              We champion an aging-positive perspective, creating products that support skin health at every stage of life. Trust and transparency are at the core of everything we do, from sourcing to formulation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypographyGuide;