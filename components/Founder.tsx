import React from 'react';

const Founder: React.FC = () => {
  return (
    // Add margin top to ensure space from the component above.
    <section id="founder" className="mt-24">
      <div className="bg-botanical-cream rounded-2xl p-8 md:p-0 md:pl-8 lg:pl-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image: Pulled up on mobile, pulled left on desktop */}
          <div className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 -mt-20 md:mt-0 md:-ml-24 lg:-ml-32">
            <img 
              src="https://iili.io/Ks7IV4a.png" 
              alt="Founder Nikki G" 
              className="object-cover w-full h-full rounded-full shadow-2xl ring-8 ring-pearl-white" 
            />
          </div>
          {/* Text */}
          <div className="md:py-12 md:pr-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-center md:text-left">A Note from Our Founder</h2>
            <p className="mt-6 text-lg text-midnight-green/90 leading-relaxed">
              "I started Nikki G Collections with a simple mission: to create skincare that is both a luxurious ritual and a powerful tool for skin health. We believe in the synergy of nature and science, crafting each product with precision, efficacy, and a deep respect for all skin types. Our goal is to empower you to feel confident and radiant in your own skin, at every age."
            </p>
            <p className="mt-6 font-serif text-2xl text-sea-mineral-green">- Nikki G.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;