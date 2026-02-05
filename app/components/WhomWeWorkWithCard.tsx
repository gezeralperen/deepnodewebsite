'use client';

import React from 'react';

interface WhomWeWorkWithCardProps {
  id: string;
  title: string;
  stage: string;
  description: string;
  className?: string;
}

export default function WhomWeWorkWithCard({ id, title, stage, description, className = '' }: WhomWeWorkWithCardProps) {
  return (
    <div className="p-6 rounded-lg bg-transparent">
      <h3 className="font-bold text-2xl mb-2 text-brand-almost-white">
        {title}
      </h3>
      <p className="text-base mb-3 text-brand-almost-white/70 mt-2">
        {stage}
      </p>
      <p className="text-base leading-relaxed text-brand-almost-white/80">
        {description}
      </p>
    </div>
  );    
}
