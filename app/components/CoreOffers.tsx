'use client';

import Section from './Section';
import CoreOfferCard from './CoreOfferCard';
import CardCarousel from './CardCarousel';

export default function CoreOffers() {
  return (
    <Section 
      id="core-offers" 
      title="The Core Offers" 
      className="text-brand-almost-white"
      textColor="white"
    >
      <div className="mt-8">
        <CardCarousel>
          <CoreOfferCard 
            id="feasibility-stress-test" 
            title="Feasibility Stress Test" 
            duration="(1 Week)"
            activities="Problem framing | ICP definition | Solution sketch | Rough GTM | Build / Kill / Pivot decision"
            bestFor="Early-stage founders & corporate innovation leads"
          />
          <CoreOfferCard 
            id="mvp-to-first-revenue" 
            title="MVP to First Revenue" 
            duration="(4-6 Weeks)"
            activities="Product design | Full-stack development | Admin panel & core infrastructure"
            outcome="Working MVP + real users"
          />
          <CoreOfferCard 
            id="retention-scale-sprint" 
            title="Retention & Scale Sprint" 
            duration="(4 Weeks)"
            activities="Instrumentation (Mixpanel / Amplitude) | Funnel analysis | UX optimization | Architecture refactor"
            outcome="Measurable retention & performance lift"
          />
        </CardCarousel>
      </div>
    </Section>
  );
}
