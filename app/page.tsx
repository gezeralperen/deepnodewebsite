'use client';

import Navigation from './components/Navigation';
import ScrollSnapHandler from './components/ScrollSnapHandler';
import WhatIsDeepNode from './components/WhatIsDeepNode';
import TheProblem from './components/TheProblem';
import TheSolution from './components/TheSolution';
import CoreOffers from './components/CoreOffers';
import WhomWeWorkWith from './components/WhomWeWorkWith';
import WhyDeepNode from './components/WhyDeepNode';
import FloatingEmailButton from './components/FloatingEmailButton';
import { ActiveSectionProvider, useActiveSection } from './contexts/ActiveSectionContext';

function HomeContent() {
  const { activeSection } = useActiveSection();

  // Section renkleri
  const sectionColors: Record<string, string> = {
    'what-is-deepnode': 'bg-brand-almost-white',
    'the-problem': 'bg-brand-accent-1',
    'the-solution': 'bg-brand-primary',
    'core-offers': 'bg-brand-accent-3',
    'whom-we-work-with': 'bg-brand-accent-4',
    'why-deepnode': 'bg-brand-accent-2',
  };

  const currentBgColor = sectionColors[activeSection] || 'bg-brand-almost-white';

  return (
    <div className={`h-screen ${currentBgColor} overflow-hidden transition-colors duration-500`}>
      <ScrollSnapHandler />
      <Navigation />
      <main className="h-full overflow-y-scroll snap-y snap-mandatory pt-20">
        <WhatIsDeepNode />
        <TheProblem />
        <TheSolution />
        <CoreOffers />
        <WhomWeWorkWith />
        <WhyDeepNode />
      </main>
      <FloatingEmailButton />
    </div>
  );
}

export default function Home() {
  return (
    <ActiveSectionProvider>
      <HomeContent />
    </ActiveSectionProvider>
  );
}
