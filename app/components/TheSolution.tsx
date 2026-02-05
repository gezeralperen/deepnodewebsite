'use client';

import Section from './Section';
import SolutionCard from './SolutionCard';
import CardCarousel from './CardCarousel';

export default function TheSolution() {
  return (
    <Section 
      id="the-solution" 
      title="The Solution" 
      className=""
      textColor="black"
    >
      <div className="mt-8">
        <CardCarousel>
          <SolutionCard 
            id="capital-protection" 
            title="Capital Protection" 
            description="We stress-test assumptions before writing production code."
            takeaway="We save you money by killing bad ideas on paper."
          />
          <SolutionCard 
            id="self-driving-growth" 
            title="Self-Driving Growth" 
            description="We engineer growth mechanisms directly into the product."
            takeaway="Lower CAC. Product-led growth."
          />
          <SolutionCard 
            id="neuro-design-retention" 
            title="Neuro-Design & Retention" 
            description="We visualize user friction and design behavior-aware flows."
            takeaway="Users stay because they want to."
          />
          <SolutionCard 
            id="elastic-infrastructure" 
            title="Elastic Infrastructure" 
            description="Day-1 costs. Year-5 scale. Serverless, modular architecture that scales without rewrites."
            takeaway="You never rebuild from scratch."
          />
        </CardCarousel>
      </div>
    </Section>
  );
}
