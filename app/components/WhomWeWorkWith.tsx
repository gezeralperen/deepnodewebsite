'use client';

import Section from './Section';
import WhomWeWorkWithCard from './WhomWeWorkWithCard';
import CardCarousel from './CardCarousel';

export default function WhomWeWorkWith() {
  
  return (
    <Section 
      id="whom-we-work-with" 
      title="Whom We Work With" 
      className="text-brand-almost-white"
      textColor="white"
    >
      <div className="mt-8">
        <CardCarousel>
          <WhomWeWorkWithCard 
            id="visionary-founders" 
            title="Visionary Non-Technical Founders" 
            stage="Pre-Seed / Seed"
            description="You have domain expertise & funding. You need a product team."
          />
          <WhomWeWorkWithCard 
            id="stalled-startups" 
            title="Stalled Growth-Stage Startups" 
            stage="Post-Seed / Series A"
            description="You have traction. Growth plateaued."
          />
          <WhomWeWorkWithCard 
            id="corporate-innovation" 
            title="Corporate Innovation Leads" 
            stage="Enterprise"
            description="You're tasked to launch. Internal IT is too slow."
          />
        </CardCarousel>
      </div>
    </Section>
  );
}
