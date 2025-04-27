

const Feature = ({  title, description }) => (
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

const AIRecruiter = () => {
  const features = [
    {
      title: 'Precision Matching',
      description: 'We match based on skills, experience, work style, and even personality fit.'
    },
    {
      title: 'Quality Assurance',
      description: 'Every freelancer is vetted through our rigorous 5-step verification process.'
    },
    {
      title: 'Continuous Learning',
      description: 'Our AI gets smarter with every project, improving recommendations over time.'
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Let AI Hunt While You Chill</h2>
            <p className="text-lg text-slate-600 mb-8">
              Our proprietary AI analyzes thousands of data points to find you the perfect match, saving you hours of searching and vetting.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl transform -rotate-2"></div>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-medium text-slate-700">Traditional Platform</h3>
                    <h3 className="font-medium text-blue-600">Truelancer</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-1/2 pr-4">
                        <div className="bg-slate-100 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                            <div className="h-2 bg-slate-300 rounded-full w-full"></div>
                          </div>
                          <div className="flex items-center mb-2">
                            <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                            <div className="h-2 bg-slate-300 rounded-full w-full"></div>
                          </div>
                          <div className="flex items-center mb-2">
                            <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                            <div className="h-2 bg-slate-300 rounded-full w-full"></div>
                          </div>
                          <div className="text-xs text-slate-500 mt-2">100+ profiles to review</div>
                        </div>
                      </div>
                      <div className="w-1/2 pl-4">
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                          <div className="flex items-center mb-2">
                            <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                            <div className="h-2 bg-blue-200 rounded-full w-3/4"></div>
                          </div>
                          <div className="flex items-center mb-2">
                            <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                            <div className="h-2 bg-blue-200 rounded-full w-2/3"></div>
                          </div>
                          <div className="flex items-center mb-2">
                            <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                            <div className="h-2 bg-blue-200 rounded-full w-1/2"></div>
                          </div>
                          <div className="text-xs text-blue-600 mt-2">3-5 perfect matches</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1/2 pr-4">
                        <div className="bg-slate-100 rounded-lg p-4">
                          <div className="flex items-center justify-center">
                            <i className="fas fa-frown text-red-500 text-2xl mr-2"></i>
                            <span className="text-sm font-medium">Hours wasted</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2 pl-4">
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                          <div className="flex items-center justify-center">
                            <i className="fas fa-smile text-green-500 text-2xl mr-2"></i>
                            <span className="text-sm font-medium">Time saved</span>
                          </div>
                        </div>
                      </div>
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

export default AIRecruiter;
