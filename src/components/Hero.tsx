import { Phone, Shield, Award, CheckCircle } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
            Premium Flooring & Interior Remodeling in Issaquah
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
            Flooring, cabinetry, countertops & more — trusted since 1995
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={scrollToContact}
              className="bg-amber-600 text-white px-8 py-4 rounded text-lg font-medium hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Free Estimate
            </button>
            <a
              href="tel:+14253920000"
              className="bg-white text-gray-900 px-8 py-4 rounded text-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-amber-500" />
              <span>Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-amber-500" />
              <span>Bonded</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
