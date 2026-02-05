'use client';

import Section from './Section';
import ProblemCard from './ProblemCard';
import CardCarousel from './CardCarousel';

export default function TheProblem() {
  return (
    <Section 
      id="the-problem" 
      title="The Problem" 
      className=""
      textColor="black"
    >
      <div className="mt-8">
        <CardCarousel>
          <ProblemCard 
            id="feature-trap" 
            title="The Feature Trap" 
            description="You're guessing at the roadmap."
            result="Building something nobody wants."
          />
          <ProblemCard 
            id="leaky-bucket" 
            title="The Leaky Bucket" 
            description="You're buying traffic, but users aren't sticking."
            result="High churn & unrecoverable CAC."
          />
          <ProblemCard 
            id="scale-wall" 
            title="The Scale Wall" 
            description="Your MVP works for 100 users, breaks at 10,000."
            result="System failure & stalled growth."
          />
        </CardCarousel>
      </div>
    </Section>
  );
}
