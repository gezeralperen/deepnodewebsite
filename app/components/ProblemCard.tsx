'use client';

import React from 'react';

interface ProblemCardProps {
  id: string;
  title: string;
  description: string;
  result: string;
  className?: string;
}

export default function ProblemCard({ id, title, description, result, className = '' }: ProblemCardProps) {
  return (
    <div className="p-6 rounded-lg bg-transparent relative">
      <h3 className="font-bold text-2xl mb-3 text-brand-almost-black">
        {title}
      </h3>
      <div className="text-lg leading-relaxed text-brand-almost-black/80 mb-4 italic">
        "{description}"
      </div>
      <div className="text-xl font-bold text-brand-almost-black mt-6">
        {result}
      </div>
    </div>
  );    
}
