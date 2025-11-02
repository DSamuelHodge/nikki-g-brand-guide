import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Brand Voice', href: '#brand-voice' },
    { name: 'Colors', href: '#colors' },
    { name: 'Typography', href: '#typography' },
    { name: 'Imagery', href: '#imagery' },
    { name: 'Logo', href: '#logo' },
    { name: 'Components', href: '#components' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-pearl-white/80 shadow-md backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          <a href="#" onClick={handleLogoClick} className="flex items-center space-x-3 cursor-pointer">
            <img src="https://iili.io/KLFQKAJ.png" alt="Nikki G Collections Logo" className="h-10 w-10 object-contain" />
            <span className="font-serif text-2xl font-semibold text-midnight-green">Nikki G Collections</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-midnight-green font-medium hover:text-sea-mineral-green transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
