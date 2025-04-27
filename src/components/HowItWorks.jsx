

const Step = ({ number, icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-slate-100 relative overflow-hidden">
    <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">Step {number}</div>
    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
      <i className={`fas ${icon} text-blue-600 text-2xl`}></i>
    </div>
    <h3 className="text-xl font-semibold text-center mb-3">{title}</h3>
    <p className="text-slate-500 text-center">{description}</p>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: 'fa-pen-fancy',
      title: 'Post Your Need',
      description: 'Describe your project and requirements in detail'
    },
    {
      number: 2,
      icon: 'fa-bullseye',
      title: 'Get Curated Matches',
      description: 'Our AI recommends the top 3-5 perfect freelancers'
    },
    {
      number: 3,
      icon: 'fa-comments',
      title: 'Collaborate Seamlessly',
      description: 'Work together with built-in project management tools'
    },
    {
      number: 4,
      icon: 'fa-hand-holding-usd',
      title: 'Pay When Satisfied',
      description: 'Funds held securely until you approve the work'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">How Truelancer Works</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Simple steps to get your project done right</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map(step => (
            <Step key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
