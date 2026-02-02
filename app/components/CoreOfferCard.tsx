import React from 'react';

interface CoreOfferCardProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function CoreOfferCard({ id, title, children, className = '' }: CoreOfferCardProps) {
  return (
      <div className="p-6 rounded-lg bg-brand-accent-3">
        <h3 className="font-bold text-2xl mb-3 text-brand-almost-white">
          {title}
        </h3>
        <div className="text-lg leading-relaxed text-brand-almost-white">
          {children}
        </div>
      </div>
  );    
}
