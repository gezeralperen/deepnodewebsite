import Section from './Section';
import WhomWeWorkWithCard from './WhomWeWorkWithCard';

export default function WhomWeWorkWith() {
  
  return (
    <Section id="whom-we-work-with" title="Whom We Work With" className="bg-brand-accent-4 text-brand-almost-white">
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <WhomWeWorkWithCard id="founders" title="Founders" children="We work with founders who are building innovative products and services." />
        <WhomWeWorkWithCard id="innovation-teams" title="Innovation Teams" children="We work with innovation teams who are building innovative products and services." />
        <WhomWeWorkWithCard id="investors" title="Investors" children="We work with investors who are investing in innovative products and services." />
      </div>
    </Section>
  );
}
