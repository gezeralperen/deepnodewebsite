import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`snap-start snap-always h-screen py-20 px-4 md:px-8 lg:px-16 flex items-center ${className}`}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-9xl font-bold mb-12">
          {title}
        </h2>
        <div className="text-lg leading-relaxed text-brand-almost-black/80">
          {children}
        </div>
      </div>
    </section>
  );
}
