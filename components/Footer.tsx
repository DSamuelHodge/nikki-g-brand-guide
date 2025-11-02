
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-botanical-cream mt-24">
      <div className="container mx-auto px-6 md:px-12 py-8 text-center text-midnight-green/70">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-3">
            <img src="https://iili.io/KLFQKAJ.png" alt="Nikki G Collections Logo" className="h-8 w-8 object-contain rounded-full" />
            <span className="font-serif text-xl font-semibold text-midnight-green">Nikki G Collections</span>
          </div>
          <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Nikki G Collections. All Rights Reserved.</p>
          <p className="text-sm">Brand Guide Maintained by the Design Team.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
