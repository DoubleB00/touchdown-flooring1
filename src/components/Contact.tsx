import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@touchdownflooring.com?subject=Quote Request from ${formData.name}&body=Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0AProject Type: ${formData.projectType}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Get Your Free Estimate</h2>
            <p className="text-xl text-gray-600">
              Tell us about your project and we'll get back to you promptly
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="(425) 555-0123"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="Flooring Installation">Flooring Installation</option>
                      <option value="Hardwood & LVP">Hardwood & LVP</option>
                      <option value="Cabinetry">Cabinetry</option>
                      <option value="Countertops">Countertops</option>
                      <option value="Full Remodeling">Full Remodeling</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Describe your project, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white px-8 py-4 rounded text-lg font-medium hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Request
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
                    <a href="tel:+14253920000" className="text-gray-600 hover:text-amber-600 transition-colors">
                      (425) 392-0000
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
                    <a
                      href="mailto:info@touchdownflooring.com"
                      className="text-gray-600 hover:text-amber-600 transition-colors break-all"
                    >
                      info@touchdownflooring.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Visit Our Showroom</h3>
                    <p className="text-gray-600 mb-2">810 Front St N<br />Issaquah, WA 98027</p>
                    <a
                      href="https://maps.google.com/?q=810+Front+St+N,+Issaquah,+WA+98027"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 font-medium text-sm"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
