

const Logo = ({ name }) => (
  <div className="flex justify-center">
    <img 
      src={`https://via.placeholder.com/160x60?text=${name}`} 
      alt={name} 
      className="h-12 opacity-70 hover:opacity-100 transition duration-300"
    />
  </div>
);

const CaseStudy = ({ image, name, role, company, title, description, teamImages }) => (
  <div className="bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300">
    <div className="flex items-center mb-6">
      <img className="h-12 w-12 rounded-full" src={image} alt={name} />
      <div className="ml-4">
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-slate-500">{role} at {company}</p>
      </div>
    </div>
    <div className="mb-6">
      <h4 className="text-lg font-medium mb-2">{title}</h4>
      <p className="text-slate-600">{description}</p>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex -space-x-1">
          {teamImages.map((img, index) => (
            <img key={index} className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={img} alt="" />
          ))}
        </div>
        <span className="ml-2 text-sm text-slate-500">Team</span>
      </div>
      <div className="text-sm text-blue-600 font-medium">
        Read Full Story →
      </div>
    </div>
  </div>
);

const ClientLogos = () => {
  const logos = ['TechCorp', 'DesignHub', 'GlobalSoft', 'NextWave'];
  
  const caseStudies = [
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'TechStart',
      title: 'Mobile App Development',
      description: '"Truelancer connected us with an exceptional developer who built our flagship app in half the estimated time. The quality was outstanding and the process was seamless."',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      teamImages: [
        'https://randomuser.me/api/portraits/women/44.jpg',
        'https://randomuser.me/api/portraits/men/22.jpg'
      ]
    },
    {
      name: 'Jessica Williams',
      role: 'Marketing Director',
      company: 'BrandHouse',
      title: 'Complete Brand Redesign',
      description: '"Our Truelancer Prime manager assembled a dream team of designers and copywriters who transformed our brand identity. The results exceeded all expectations."',
      image: 'https://randomuser.me/api/portraits/women/28.jpg',
      teamImages: [
        'https://randomuser.me/api/portraits/women/33.jpg',
        'https://randomuser.me/api/portraits/men/45.jpg',
        'https://randomuser.me/api/portraits/women/51.jpg'
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Trusted by Leading Brands</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Companies of all sizes rely on Truelancer for their talent needs</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-16">
          {logos.map((name, index) => (
            <Logo key={index} name={name} />
          ))}
        </div>
        
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Success Stories</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudy key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
