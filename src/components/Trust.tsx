import { Star, MapPin } from 'lucide-react';

export default function Trust() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      text: 'Outstanding craftsmanship! They transformed our entire main floor with beautiful hardwood. The team was professional, punctual, and the quality exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'David Chen',
      text: 'We had our kitchen and bathrooms remodeled. The attention to detail was impressive. They helped us select the perfect countertops and cabinetry. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Jennifer Martinez',
      text: 'Been working with Touchdown Flooring for over 10 years on multiple projects. Always reliable, fair pricing, and beautiful results. True professionals.',
      rating: 5,
    },
    {
      name: 'Robert Williams',
      text: 'Their showroom made the selection process easy. The installation was flawless and completed on time. Our new luxury vinyl plank floors look amazing!',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Trusted by Issaquah Homeowners</h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-500 text-amber-500" />
            ))}
            <span className="ml-2 text-lg text-gray-700">5.0 Rating</span>
          </div>
          <p className="text-xl text-gray-600">Over 30 years of excellence in the Greater Issaquah area</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
              <p className="font-medium text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto border-l-4 border-amber-600">
          <div className="flex items-start gap-4">
            <MapPin className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-serif mb-2">Visit Our Showroom</h3>
              <p className="text-gray-600 mb-3">
                See and feel our premium materials in person. Browse hundreds of flooring, cabinetry, and countertop options.
              </p>
              <p className="font-medium text-gray-900">810 Front St N, Issaquah, WA 98027</p>
              <a
                href="https://maps.google.com/?q=810+Front+St+N,+Issaquah,+WA+98027"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-700 font-medium inline-block mt-2"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
