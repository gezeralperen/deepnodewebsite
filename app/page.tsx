import Navigation from './components/Navigation';
import ScrollSnapHandler from './components/ScrollSnapHandler';
import WhatIsDeepNode from './components/WhatIsDeepNode';
import TheProblem from './components/TheProblem';
import TheSolution from './components/TheSolution';
import CoreOffers from './components/CoreOffers';
import WhomWeWorkWith from './components/WhomWeWorkWith';
import WhyDeepNode from './components/WhyDeepNode';
import FloatingEmailButton from './components/FloatingEmailButton';

export default function Home() {
  return (
    <div className="h-screen bg-brand-almost-white overflow-hidden">
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
