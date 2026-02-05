'use client';

import Section from './Section';
import CardCarousel from './CardCarousel';

export default function WhyDeepNode() {
  const reasons = [
    {
      title: 'Senior, Startup-native team',
    },
    {
      title: 'Strategy, Design, Product & Engineering under one roof',
    },
    {
      title: 'Premium, limited engagements',
    },
  ];

  return (
    <Section 
      id="why-deepnode" 
      title="Why DeepNode?" 
      className="text-brand-almost-white"
      textColor="white"
    >
      <div className="mt-8">
        <CardCarousel>
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl bg-transparent transition-all duration-300"
            >
              <h3 className="font-bold text-2xl mb-4 text-brand-almost-white">
                {reason.title}
              </h3>
            </div>
          ))}
        </CardCarousel>
      </div>
    </Section>
  );
}
