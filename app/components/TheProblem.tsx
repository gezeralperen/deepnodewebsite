import Section from './Section';
import ProblemCard from './ProblemCard';

export default function TheProblem() {
  return (
    <Section id="the-problem" title="The Problem" className="bg-brand-accent-1">
      <div className="grid md:grid-cols-3 gap-6 mt-8">  
      <ProblemCard id="data-complexity" title="The Feature Trap" children="You're guessing at the roadmap. Building something nobody wants." />
      <ProblemCard id="legacy-systems" title="The Leaky Bucket" children="You’re buying traffic, but users aren’t sticking." />
      <ProblemCard id="competition" title="The Scale Wall" children="Your MVP works for 100 users, breaks at 10,000." />
      </div>
    </Section>
  );
}
