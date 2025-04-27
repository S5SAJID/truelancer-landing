

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Start Your Next Project With Peace of Mind</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">Join thousands of businesses who've found their perfect talent match on Truelancer</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="gradient-bg hover:opacity-90 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              Find Your Expert
            </a>
            <a href="#" className="bg-white text-blue-600 font-medium py-3 px-8 rounded-lg border border-blue-200 shadow-sm hover:shadow-md transition duration-300 transform hover:scale-105">
              Join as Freelancer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
