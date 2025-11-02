import React from 'react';
import SectionTitle from './SectionTitle';

const ComponentGuide: React.FC = () => {
  return (
    <section id="components" className="scroll-mt-24">
      <SectionTitle subtitle="User Interface">Component Guide</SectionTitle>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        {/* Buttons */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Buttons</h3>
          <p className="text-midnight-green/80">Primary actions use our signature Sea Mineral Green. Focus states are crucial for accessibility.</p>
          <div className="p-8 bg-botanical-cream rounded-lg flex flex-col items-start space-y-4">
            <button className="bg-sea-mineral-green text-pearl-white font-bold py-3 px-6 rounded-md shadow-sm hover:bg-midnight-green focus:outline-none focus:ring-4 focus:ring-sea-mineral-green/50 transition-all duration-200">
              Shop Now
            </button>
            <button className="bg-transparent border-2 border-sea-mineral-green text-sea-mineral-green font-bold py-3 px-6 rounded-md hover:bg-sea-mineral-green hover:text-pearl-white focus:outline-none focus:ring-4 focus:ring-sea-mineral-green/50 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Links</h3>
          <p className="text-midnight-green/80">Links are styled to be clean and unobtrusive, with clear hover states.</p>
          <div className="p-8 bg-botanical-cream rounded-lg flex flex-col items-start space-y-4 text-lg">
            <p>This is a paragraph with a <a href="#" className="text-sea-mineral-green font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-sea-mineral-green/50 rounded-sm">text link</a> inside it.</p>
            <a href="#" className="text-sea-mineral-green font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-sea-mineral-green/50 rounded-sm">Standalone link</a>
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Cards</h3>
          <p className="text-midnight-green/80">Cards use soft shadows and generous whitespace for a premium, clean look.</p>
          <div className="bg-pearl-white p-6 rounded-2xl shadow-lg border border-botanical-cream space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden">
              <img src="https://iili.io/KL067Wb.jpg" alt="Product" className="object-cover w-full h-full" />
            </div>
            <h4 className="text-xl font-semibold">Revitalizing Serum</h4>
            <p className="text-base text-midnight-green/80">A potent blend of hyaluronic acid and botanical antioxidants.</p>
            <button className="w-full bg-sea-mineral-green text-pearl-white font-bold py-3 px-6 rounded-md hover:bg-midnight-green focus:outline-none focus:ring-4 focus:ring-sea-mineral-green/50 transition-all duration-200">
              View Product
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ComponentGuide;