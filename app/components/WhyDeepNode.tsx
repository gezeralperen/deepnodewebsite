import Section from './Section';

export default function WhyDeepNode() {
  const reasons = [
    {
      title: 'Senior, small team',
    },
    {
      title: 'Startup-native',
    },
    {
      title: 'Strategy, Design, Product & Engineering under one roof',
    },
    {
      title: 'Premium, limited engagements',
    },
  ];

  return (
    <Section id="why-deepnode" title="Why DeepNode?" className="bg-brand-accent-2 text-brand-almost-white">
      <div className="space-y-6">
     
        <div className="grid md:grid-cols-4 gap-8 mt-12">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl bg-brand-almost-accent-2 transition-all duration-300"
            >
              
              <h3 className="font-bold text-2xl mb-4 text-brand-almost-white">
                {reason.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
