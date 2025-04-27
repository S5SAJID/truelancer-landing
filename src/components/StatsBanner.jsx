
import { useState, useEffect } from 'preact/hooks';

/**
 * @param {{end: number, label: string}} props
 */
const StatCounter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // Animation duration in milliseconds
  const steps = 60; // Number of steps in the animation
  const stepDuration = duration / steps;

  useEffect(() => {
    let current = 0;
    const increment = end / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="p-6">
      <div className="text-4xl font-bold mb-2">{count.toLocaleString()}</div>
      <div className="text-lg">{label}</div>
    </div>
  );
};

const StatsBanner = () => {
  const stats = [
    { end: 50000, label: 'Freelancers' },
    { end: 120, label: 'Countries' },
    { end: 1500, label: 'Skills' }
  ];

  return (
    <section className="py-16 gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <StatCounter key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
