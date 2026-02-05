'use client';

import Section from './Section';
import { CaretDoubleDown } from 'phosphor-react';

export default function WhatIsDeepNode() {
  return (
    <Section 
      id="what-is-deepnode" 
      title="As deepnode, we specialize in killing bad ideas early and scaling good ones fast." 
      className=""
      textColor="black"
    >
      <div className="space-y-6">
        <div className="flex justify-center mt-8">
          <CaretDoubleDown 
            size={32} 
            weight="bold"
            className="text-brand-almost-black animate-bounce-vertical"
          />
        </div>
      </div>
    </Section>
  )}
