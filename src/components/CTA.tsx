import { Phone, MapPin } from 'lucide-react';

export default function CTA() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to Upgrade Your Space?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Let's bring your vision to life. Schedule a free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
              Call (425) 392-0000
            </a>
            <a
              href="https://maps.google.com/?q=810+Front+St+N,+Issaquah,+WA+98027"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-8 py-4 rounded text-lg font-medium hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Visit Showroom
            </a>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 mb-2">Visit us at</p>
            <p className="text-lg font-medium">810 Front St N, Issaquah, WA 98027</p>
          </div>
        </div>
      </div>
    </section>
  );
}
