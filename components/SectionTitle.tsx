
import React from 'react';

interface SectionTitleProps {
  subtitle: string;
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, children }) => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <span className="text-sea-mineral-green font-semibold tracking-wider uppercase text-sm">
        {subtitle}
      </span>
      <h2 className="text-4xl md:text-5xl font-semibold mt-2">
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
