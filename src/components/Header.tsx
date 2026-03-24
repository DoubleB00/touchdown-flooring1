import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-serif text-gray-900">
              Interiors by Touchdown Flooring
            </h1>
            <p className="text-xs text-gray-600 hidden sm:block">Serving Issaquah Since 1995</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+14253920000"
              className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">(425) 392-0000</span>
            </a>
            <button
              onClick={scrollToContact}
              className="bg-gray-900 text-white px-4 md:px-6 py-2 md:py-2.5 rounded hover:bg-gray-800 transition-all text-sm md:text-base font-medium"
            >
              Free Estimate
            </button>
          </div>
        </div>
      </header>

      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-gray-200 shadow-lg">
        <div className="grid grid-cols-2 gap-2 p-3">
          <a
            href="tel:+14253920000"
            className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-3 rounded font-medium hover:bg-gray-800 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <button
            onClick={scrollToContact}
            className="bg-amber-600 text-white px-4 py-3 rounded font-medium hover:bg-amber-700 transition-colors"
          >
            Get Free Estimate
          </button>
        </div>
      </div>
    </>
  );
}
