'use client';

import React from 'react';
import { CaretUp } from 'phosphor-react';

interface SolutionCardProps {
  id: string;
  title: string;
  description: string;
  takeaway: string;
  className?: string;
}

export default function SolutionCard({ id, title, description, takeaway, className = '' }: SolutionCardProps) {
  return (
    <div className="p-6 rounded-lg bg-transparent">
      <h3 className="font-bold text-2xl mb-3 text-brand-almost-black">
        {title}
      </h3>
      <div className="text-lg leading-relaxed text-brand-almost-black/80 mb-4">
        {description}
      </div>
      <div className="flex items-start gap-2 mt-4">
        <CaretUp size={16} weight="fill" className="text-brand-primary flex-shrink-0 mt-1" />
        <p className="text-lg font-bold italic text-brand-almost-black">
          {takeaway}
        </p>
      </div>
    </div>
  );    
}
