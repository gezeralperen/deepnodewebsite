import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`snap-start snap-always h-screen py-20 px-4 md:px-8 lg:px-16 flex items-start overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto w-full pt-8">
        <h2 className="font-bold mb-12 text-[clamp(1.5rem,8vw,12rem)] leading-[1.1] break-words">
          {title}
        </h2>
        <div className="text-lg leading-relaxed text-brand-almost-black/80">
          {children}
        </div>
      </div>
    </section>
  );
}
