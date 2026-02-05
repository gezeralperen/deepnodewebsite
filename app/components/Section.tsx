'use client';

import React, { useRef } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  textColor?: 'white' | 'black';
}

export default function Section({ id, title, children, className = '', textColor = 'black' }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={sectionRef}
      id={id} 
      className={`snap-start snap-always h-screen py-20 px-4 md:px-8 lg:px-16 flex items-center overflow-hidden relative bg-transparent ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full pt-8 relative z-10">
        <h2 className="font-bold mb-12 text-[clamp(3rem,5vw,4rem)] md:text-[clamp(1.5rem,5vw,4rem)] leading-[1.1] break-words">
          {title}
        </h2>
        <div className="text-lg leading-relaxed text-brand-almost-black/80">
          {children}
        </div>
      </div>
    </section>
  );
}
