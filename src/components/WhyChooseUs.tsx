import { Award, Users, Gem, Wrench, Store, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: '30+ Years Experience',
      description: 'Serving the Issaquah community with excellence since 1995',
    },
    {
      icon: Users,
      title: 'Local & Trusted',
      description: 'Family-owned business deeply rooted in the Greater Issaquah area',
    },
    {
      icon: Gem,
      title: 'Premium Materials',
      description: 'Only the highest quality products from trusted manufacturers',
    },
    {
      icon: Wrench,
      title: 'Expert Installation',
      description: 'Skilled craftsmen dedicated to perfection in every detail',
    },
    {
      icon: Store,
      title: 'Full Showroom',
      description: 'Visit our showroom to see and feel samples before you buy',
    },
    {
      icon: Award,
      title: 'Licensed & Insured',
      description: 'Fully bonded, licensed, and insured for your peace of mind',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Commitment to quality, integrity, and exceptional service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-serif mb-2">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
