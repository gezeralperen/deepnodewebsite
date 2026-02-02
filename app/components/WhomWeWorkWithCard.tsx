import React from 'react';

interface WhomWeWorkWithCardProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function WhomWeWorkWithCard({ id, title, children, className = '' }: WhomWeWorkWithCardProps) {
  return (
      <div className="p-6 rounded-lg bg-brand-accent-4">
        <h3 className="font-bold text-2xl mb-3 text-brand-almost-white">
          {title}
        </h3>
        <div className="text-lg leading-relaxed text-brand-almost-white">
          {children}
        </div>
      </div>
  );    
}
