'use client';

import Image from 'next/image';
import { useActiveSection } from '../contexts/ActiveSectionContext';

export default function Navigation() {
  const { activeSection } = useActiveSection();
  
  // Section renk bilgileri
  const sectionTextColors: Record<string, 'white' | 'black'> = {
    'what-is-deepnode': 'black',
    'the-problem': 'black',
    'the-solution': 'black',
    'core-offers': 'white',
    'whom-we-work-with': 'white',
    'why-deepnode': 'white',
  };

  // Logo seçimi
  const getLogo = () => {
    if (activeSection === 'what-is-deepnode') {
      return '/assets/dnlogoc.svg';
    }
    const textColor = sectionTextColors[activeSection] || 'black';
    return textColor === 'white' ? '/assets/dnlogow.svg' : '/assets/dnlogob.svg';
  };

  const navItems = [
    { id: 'what-is-deepnode', href: '#what-is-deepnode' },
    { id: 'the-problem', href: '#the-problem' },
    { id: 'the-solution', href: '#the-solution' },
    { id: 'core-offers', href: '#core-offers' },
    { id: 'whom-we-work-with', href: '#whom-we-work-with' },
    { id: 'why-deepnode', href: '#why-deepnode' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
    >
      <div className="mx-auto w-full">
        <div className="flex w-full items-center justify-between h-20 px-4 md:px-8 lg:px-16">
          <div className="relative h-8 w-32">
            <Image
              src={getLogo()}
              alt="DeepNode Logo"
              fill
              className="object-contain transition-opacity duration-300"
              priority
            />
          </div>
          <div className="flex items-center space-x-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const textColor = sectionTextColors[activeSection] || 'black';
              const isWhite = textColor === 'white';
              
              return (
                <button
                  key={item.id}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative group focus:outline-none"
                  aria-label={`Go to ${item.id}`}
                >
                  <div
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      isActive
                        ? isWhite
                          ? 'bg-brand-almost-white scale-125'
                          : 'bg-brand-almost-black scale-125'
                        : isWhite
                        ? 'bg-brand-almost-white/30 hover:bg-brand-almost-white/60'
                        : 'bg-brand-almost-black/30 hover:bg-brand-almost-black/60'
                    }`}
                  />
                  {/* Tooltip on hover - sadece desktop'ta */}
                  <div className={`hidden md:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 ${
                    isWhite ? 'bg-brand-almost-white text-brand-almost-black' : 'bg-brand-almost-black text-brand-almost-white'
                  } text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap`}>
                    {item.id.replace(/-/g, ' ')}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
