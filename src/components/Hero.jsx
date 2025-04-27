import { useEffect, useState } from "preact/hooks";

const Hero = () => {
  const phrases = [
    "You.",
    "Startups.",
    "Remote Teams.",
    "Creators.",
    "Agencies.",
    "Dreamers.",
    "Professionals.",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  const speed = deleting ? 50 : 100;

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1200);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(phrases[index].substring(0, subIndex));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting]);

  // Cursor blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              The Freelance Revolution, Curated for{" "}
              <span className="gradient-text bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                {text}
                <span className={`ml-1 ${blink ? "opacity-100" : "opacity-0"}`}>
                  |
                </span>
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Hire vetted experts. Work in peace. Powered by AI. Managed by
              humans.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="gradient-bg hover:opacity-90 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
              >
                Find Talent
              </a>
              <a
                href="#"
                className="bg-white text-blue-600 font-medium py-3 px-6 rounded-lg border border-blue-200 shadow-sm hover:shadow-md transition duration-300 transform hover:scale-105"
              >
                Start Earning
              </a>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt=""
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt=""
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt=""
                />
              </div>
              <div className="text-sm text-slate-500">
                <span className="font-medium text-slate-700">4,000+</span>{" "}
                projects completed this week
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-2xl transform rotate-6"></div>
            <div className="relative glass-card rounded-2xl p-6 shadow-xl">
              <div className="flex justify-center items-center h-full min-h-[400px]">
                <div className="text-center">
                  <div className="floating inline-block mb-6">
                    <div className="bg-blue-100 p-6 rounded-full">
                      <i className="fas fa-network-wired text-blue-600 text-4xl"></i>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white p-3 rounded-lg shadow">
                        <i className="fas fa-user-tie text-blue-600"></i>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow">
                        <i className="fas fa-project-diagram text-blue-600"></i>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow">
                        <i className="fas fa-handshake text-blue-600"></i>
                      </div>
                    </div>
                    <div className="text-sm text-slate-500">
                      Connecting the right talent with the right projects
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

export default Hero;
