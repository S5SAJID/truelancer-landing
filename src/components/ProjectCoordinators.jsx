

const Feature = ({ title, description }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 mt-1">
      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
        <i className="fas fa-check"></i>
      </div>
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-medium text-slate-800">{title}</h4>
      <p className="text-slate-500">{description}</p>
    </div>
  </div>
);

const ProjectCoordinators = () => {
  const features = [
    {
      title: 'Dedicated Support',
      description: 'Your personal coordinator is available whenever you need assistance.'
    },
    {
      title: 'Conflict Resolution',
      description: 'We mediate any issues to keep your project on track.'
    },
    {
      title: 'Quality Control',
      description: 'We review deliverables to ensure they meet your standards.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Humans Still Matter</h2>
            <p className="text-lg text-slate-600 mb-8">
              While AI helps find the perfect match, our Project Success Partners ensure everything runs smoothly from start to finish.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl transform rotate-2"></div>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <img className="h-16 w-16 rounded-full mx-auto" src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
                      <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1">
                        <i className="fas fa-headset text-white text-xs"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Sarah Johnson</h3>
                      <p className="text-sm text-slate-500">Project Success Partner</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                          <i className="fas fa-quote-left text-xs"></i>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-slate-700">"I'm here to ensure your project runs smoothly. Think of me as your personal guide through the entire process."</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
                      <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/12.jpg" alt="" />
                    </div>
                    <div className="text-xs text-slate-500">
                      Currently assisting 5 projects
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCoordinators;
