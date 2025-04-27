

const FooterSection = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-medium mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a href="#" className="text-slate-300 hover:text-white">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const sections = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Blog']
    },
    {
      title: 'For Freelancers',
      links: ['How It Works', 'Benefits', 'Testimonials', 'Freelancer Guide']
    },
    {
      title: 'Services',
      links: ['Truelancer Prime', 'Enterprise Solutions', 'Managed Projects', 'API Access']
    }
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {sections.map((section, index) => (
            <FooterSection key={index} {...section} />
          ))}
          <div>
            <h3 className="text-lg font-medium mb-4">Mobile Apps</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg">
                <i className="fab fa-apple text-2xl"></i>
              </a>
              <a href="#" className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg">
                <i className="fab fa-google-play text-2xl"></i>
              </a>
            </div>
            <h3 className="text-lg font-medium mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'facebook', 'instagram'].map((platform) => (
                <a key={platform} href="#" className="text-slate-300 hover:text-white">
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-2xl font-bold gradient-text bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Truelancer
              </span>
              <span className="ml-4 text-sm text-slate-400">© 2023 Truelancer. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              {['Terms', 'Privacy', 'Cookies'].map((item) => (
                <a key={item} href="#" className="text-sm text-slate-400 hover:text-white">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
