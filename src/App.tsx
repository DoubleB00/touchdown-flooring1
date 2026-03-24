import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import Showcase from './components/Showcase';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 sm:pt-20">
        <Hero />
        <Trust />
        <Services />
        <Showcase />
        <WhyChooseUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
