import React from 'react';

interface SolutionCardProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function SolutionCard({ id, title, children, className = '' }: SolutionCardProps) {
  return (
      <div className="p-6 rounded-lg bg-brand-primary">
        <h3 className="font-bold text-2xl mb-3 text-brand-almost-black">
          {title}
        </h3>
        <div className="text-lg leading-relaxed text-brand-almost-black/80">
          {children}
        </div>
      </div>
  );    
}
