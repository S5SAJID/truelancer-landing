import { useState, useEffect } from 'preact/hooks';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuClass, setMenuClass] = useState('menu-exit');

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      // Start enter animation
      setMenuClass('menu-enter');
      setTimeout(() => setMenuClass('menu-enter-active'), 10);
    } else {
      // Start exit animation
      setMenuClass('menu-exit');
      setTimeout(() => setMenuClass('menu-exit-active'), 10);
      // Wait for animation to finish before hiding
      setTimeout(() => setIsMenuOpen(false), 200);
    }
  };

  return (
    <header>
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-2 text-sm">
        <span className="font-medium text-center">🎉 Special offer!</span> Get 20% off on your first hire.
        <a href="#" className="underline ml-2">Learn more →</a>
      </div>
      
      <nav className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex w-full justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold gradient-text bg-gradient-to-r from-blue-600 to-blue-400">Truelancer</a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-600 hover:text-blue-600">For Clients</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">For Freelancers</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">How It Works</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">Prime Services</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">Log In</a>
              <a href="#" className="gradient-bg text-white px-4 py-2 rounded-lg hover:opacity-90">Sign Up</a>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-blue-600">
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${menuClass}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-100">
              <a href="#" className="block px-3 py-2 text-slate-600 hover:text-blue-600">For Clients</a>
              <a href="#" className="block px-3 py-2 text-slate-600 hover:text-blue-600">For Freelancers</a>
              <a href="#" className="block px-3 py-2 text-slate-600 hover:text-blue-600">How It Works</a>
              <a href="#" className="block px-3 py-2 text-slate-600 hover:text-blue-600">Prime Services</a>
              <a href="#" className="block px-3 py-2 text-slate-600 hover:text-blue-600">Log In</a>
              <a href="#" className="block px-3 py-2 gradient-bg text-white rounded-lg hover:opacity-90">Sign Up</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
