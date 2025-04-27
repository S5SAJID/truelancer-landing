
import Navbar from './Navbar';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import AIRecruiter from './AIRecruiter';
import PrimeServices from './PrimeServices';
import TalentCategories from './TalentCategories';
import ProjectCoordinators from './ProjectCoordinators';
import StatsBanner from './StatsBanner';
import ClientLogos from './ClientLogos';
import CTA from './CTA';
import Footer from './Footer';
import ChatButton from './ChatButton';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <HowItWorks />
      <AIRecruiter />
      <PrimeServices />
      <TalentCategories />
      <ProjectCoordinators />
      <StatsBanner />
      <ClientLogos />
      <CTA />
      <Footer />
      <ChatButton />
    </div>
  );
};

export default App;
