import { Hammer, Box, Sparkles, Home } from 'lucide-react';

export default function Services() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Hammer,
      title: 'Flooring Installation',
      description: 'Expert installation of hardwood, luxury vinyl plank, tile, and carpet. Precision craftsmanship that stands the test of time.',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Home,
      title: 'Hardwood & LVP',
      description: 'Premium hardwood refinishing and luxury vinyl plank options. Beautiful, durable floors that add value to your home.',
      image: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Box,
      title: 'Cabinetry',
      description: 'Custom and semi-custom cabinetry for kitchens, bathrooms, and beyond. Quality construction with timeless design.',
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Sparkles,
      title: 'Countertops',
      description: 'Granite, quartz, and solid surface countertops. Transform your kitchen or bath with stunning, durable surfaces.',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Home,
      title: 'Remodeling',
      description: 'Complete interior remodeling services. From concept to completion, we bring your vision to life with precision and care.',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive interior solutions for your home or business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <button
                    onClick={scrollToContact}
                    className="text-amber-600 font-medium hover:text-amber-700 transition-colors inline-flex items-center group"
                  >
                    Get Quote
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
