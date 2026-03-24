import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-serif mb-4">Interiors by Touchdown Flooring</h3>
            <p className="text-sm mb-4">
              Premium flooring and interior remodeling services in Issaquah, Washington since 1995.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  Flooring Installation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  Hardwood & LVP
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  Cabinetry
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  Countertops
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  Interior Remodeling
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+14253920000" className="hover:text-amber-500 transition-colors">
                  (425) 392-0000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@touchdownflooring.com" className="hover:text-amber-500 transition-colors">
                  info@touchdownflooring.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.google.com/?q=810+Front+St+N,+Issaquah,+WA+98027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500 transition-colors"
                >
                  810 Front St N<br />Issaquah, WA 98027
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Monday - Friday: 8am - 5pm</li>
              <li>Saturday: 9am - 3pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Interiors by Touchdown Flooring. All rights reserved.</p>
          <p className="mt-2">Licensed • Bonded • Insured</p>
        </div>
      </div>
    </footer>
  );
}
