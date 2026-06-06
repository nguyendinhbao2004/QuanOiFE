import Header from '../components/Header';
import Hero from '../components/Hero';
import AISection from '../components/AISection';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Hardware from '../components/Hardware';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <AISection />
        <Features />
        <HowItWorks />
        <Hardware />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
