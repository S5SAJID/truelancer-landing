

const CategoryCard = ({ icon, title, count }) => (
  <div className="category-card bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center">
    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
      <i className={`fas ${icon} text-blue-600 text-2xl`}></i>
    </div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-sm text-slate-500">{count}+ experts</p>
  </div>
);

const TalentCategories = () => {
  const categories = [
    {
      icon: 'fa-code',
      title: 'Developers',
      count: '5,000'
    },
    {
      icon: 'fa-paint-brush',
      title: 'Designers',
      count: '3,200'
    },
    {
      icon: 'fa-pen-fancy',
      title: 'Writers',
      count: '2,800'
    },
    {
      icon: 'fa-chart-line',
      title: 'Marketers',
      count: '2,500'
    },
    {
      icon: 'fa-mobile-alt',
      title: 'Mobile Experts',
      count: '1,900'
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Find Top Talent Across All Fields</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Browse our most popular categories of experts</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-blue-600 font-medium">
            View all 50+ categories
            <i className="fas fa-chevron-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TalentCategories;
