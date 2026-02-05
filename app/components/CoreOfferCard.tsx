'use client';

import React from 'react';

interface CoreOfferCardProps {
  id: string;
  title: string;
  duration: string;
  activities: string;
  bestFor?: string;
  outcome?: string;
  className?: string;
}

export default function CoreOfferCard({ id, title, duration, activities, bestFor, outcome, className = '' }: CoreOfferCardProps) {
  return (
    <div className="p-6 rounded-lg bg-transparent">
      <h3 className="font-bold text-2xl mb-2 text-brand-almost-white">
        {title}
      </h3>
      <p className="text-lg mb-4 text-brand-almost-white/80">
        {duration}
      </p>
      <div className="text-base leading-relaxed text-brand-almost-white/80 mb-4">
        {activities}
      </div>
      {bestFor && (
        <p className="text-base font-bold italic text-brand-almost-white mt-4">
          Best for: {bestFor}
        </p>
      )}
      {outcome && (
        <p className="text-base font-bold italic text-brand-almost-white mt-4">
          Outcome: {outcome}
        </p>
      )}
    </div>
  );    
}
