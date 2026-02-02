'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'What is DeepNode?', href: '#what-is-deepnode' },
    { label: 'The Problem', href: '#the-problem' },
    { label: 'The Solution', href: '#the-solution' },
    { label: 'Core Offers', href: '#core-offers' },
    { label: 'Whom We Work With', href: '#whom-we-work-with' },
    { label: 'Why DeepNode?', href: '#why-deepnode' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      // Scroll-snap ile uyumlu smooth scroll
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent`}
    >
      <div className="mx-auto w-full">
        <div className="flex w-full items-center justify-between h-20 px-4 md:px-8 lg:px-16">
          <div className="text-2xl font-bold text-brand-almost-black">
            DeepNode
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-brand-almost-black hover:text-brand-primary transition-colors duration-200 font-medium cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>
          <button className="md:hidden text-brand-almost-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
