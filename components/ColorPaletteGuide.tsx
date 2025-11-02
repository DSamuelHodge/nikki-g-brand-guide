
import React from 'react';
import SectionTitle from './SectionTitle';

interface ColorInfo {
  name: string;
  hex: string;
  token: string;
  textColor: 'text-pearl-white' | 'text-midnight-green';
}

const colors: ColorInfo[] = [
  { name: 'Pearl White', hex: '#F9F8F6', token: 'pearl-white', textColor: 'text-midnight-green' },
  { name: 'Botanical Cream', hex: '#EDE6D9', token: 'botanical-cream', textColor: 'text-midnight-green' },
  { name: 'Midnight Green', hex: '#0D2E26', token: 'midnight-green', textColor: 'text-pearl-white' },
  { name: 'Sea Mineral Green', hex: '#4C8C78', token: 'sea-mineral-green', textColor: 'text-pearl-white' },
  { name: 'Sage Mist', hex: '#C7D6C9', token: 'sage-mist', textColor: 'text-midnight-green' },
  { name: 'Champagne Gold', hex: '#D8C6A0', token: 'champagne-gold', textColor: 'text-midnight-green' },
  { name: 'Radiant Coral', hex: '#E87D72', token: 'radiant-coral', textColor: 'text-pearl-white' },
];

const ColorSwatch: React.FC<{ color: ColorInfo }> = ({ color }) => (
  <div className="flex flex-col">
    <div className={`h-32 md:h-40 w-full rounded-lg bg-${color.token} flex items-end p-4 shadow-sm`}>
      <div className={`backdrop-blur-sm bg-black/10 rounded-md p-2 ${color.textColor}`}>
        <p className="font-bold text-sm">{color.name}</p>
        <p className="font-mono text-xs opacity-80">{color.hex}</p>
      </div>
    </div>
  </div>
);

const ColorPaletteGuide: React.FC = () => {
  return (
    <section id="colors" className="scroll-mt-24">
      <SectionTitle subtitle="Visual Foundation">Color Palette</SectionTitle>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 md:gap-8">
        {colors.map((color) => (
          <ColorSwatch key={color.token} color={color} />
        ))}
      </div>
    </section>
  );
};

export default ColorPaletteGuide;