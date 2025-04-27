import { h } from 'preact';

const ServiceCard = ({ icon, title, description, tag, features }) => (
  <div className="flip-card h-full">
    <div className="flip-card-inner h-full">
      <div className="flip-card-front bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-slate-100 overflow-hidden h-full">
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
            <i className={`fas ${icon} text-blue-600 text-2xl`}></i>
          </div>
          <h3 className="text-xl font-semibold text-center mb-3">{title}</h3>
          <p className="text-slate-500 text-center mb-6">{description}</p>
          <div className="mt-auto text-center">
            <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">{tag}</span>
          </div>
        </div>
      </div>
      <div className="flip-card-back bg-blue-600 rounded-xl shadow-lg overflow-hidden h-full">
        <div className="p-6 h-full flex flex-col text-white">
          <h3 className="text-xl font-semibold text-center mb-3">{title}</h3>
          <ul className="space-y-2 text-sm mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <i className="fas fa-check-circle mt-1 mr-2"></i>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto text-center">
            <a href="#" className="inline-block bg-white text-blue-600 font-medium py-2 px-4 rounded-lg">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PrimeServices = () => {
  const services = [
    {
      icon: 'fa-user-shield',
      title: 'Prime Managers',
      description: 'Your dedicated success manager handles everything from vetting to delivery',
      tag: 'Most Popular',
      features: [
        'Dedicated account manager',
        'Priority talent matching',
        'Weekly progress reports',
        'Quality assurance checks'
      ]
    },
    {
      icon: 'fa-crown',
      title: 'Elite Talent',
      description: 'Access our top 3% of freelancers with proven track records',
      tag: 'Exclusive',
      features: [
        'Top 3% of freelancers',
        '5+ years experience',
        '95%+ satisfaction rate',
        'Exclusive to Prime'
      ]
    },
    {
      icon: 'fa-tasks',
      title: 'Managed Projects',
      description: 'We handle the entire project from start to finish',
      tag: 'Hands-off',
      features: [
        'End-to-end management',
        'Dedicated project team',
        'Regular milestone updates',
        'Guaranteed satisfaction'
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Truelancer Prime Services</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Premium solutions for your most important projects</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-block gradient-bg hover:opacity-90 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            Try Prime Free for 14 Days
          </a>
        </div>
      </div>
    </section>
  );
};

export default PrimeServices;
