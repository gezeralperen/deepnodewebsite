import Section from './Section';
import SolutionCard from './SolutionCard';

export default function TheSolution() {
  return (
    <Section id="the-solution" title="The Solution" className="bg-brand-primary">
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <SolutionCard id="data-analysis" title="Data Analysis" children="We use advanced analytics tools to extract valuable insights from your data." />
        <SolutionCard id="automation" title="Automation" children="We automate repetitive tasks to increase efficiency." />
        <SolutionCard id="ai" title="AI" children="We use AI technologies to develop intelligent solutions." />
      </div>
    </Section>
  );
}
