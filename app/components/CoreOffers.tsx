import Section from './Section';
import CoreOfferCard from './CoreOfferCard';


export default function CoreOffers() {
  return (
    <Section id="core-offers" title="The Core Offers" className="bg-brand-accent-3 text-brand-almost-white">
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <CoreOfferCard id="data-analysis" title="Data Analysis" children="We use advanced analytics tools to extract valuable insights from your data." />
        <CoreOfferCard id="automation" title="Automation" children="We automate repetitive tasks to increase efficiency." />
        <CoreOfferCard id="ai" title="AI" children="We use AI technologies to develop intelligent solutions." />
      </div>
    </Section>
  );
}
