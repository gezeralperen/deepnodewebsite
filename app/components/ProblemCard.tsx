import React from 'react';

interface ProblemCardProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function ProblemCard({ id, title, children, className = '' }: ProblemCardProps) {
  return (
      <div className="p-6 rounded-lg bg-brand-accent-1">
        <h3 className="font-bold text-2xl mb-3 text-brand-almost-black">
          {title}
        </h3>
        <div className="text-lg leading-relaxed text-brand-almost-black/80">
          {children} 
        </div>
      </div>
  );    
}
