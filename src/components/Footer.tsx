import { MapPin, Phone, Mail, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
  onOpenQuote: () => void;
}

export default function Footer({ setCurrentPage, onOpenQuote }: FooterProps) {
  const handlePageLink = (pageId: PageType) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-luxury-black text-gray-300 border-t border-gold-500/10">
      
      {/* Upper CTA bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
              Ready to construct your masterpiece?
            </h4>
            <p className="text-gray-400 text-sm mt-2 font-sans">
              Schedule your completely free spatial consultation with senior engineers today.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3.5 bg-gold-500 hover:bg-gold-600 text-luxury-black font-bold text-sm uppercase tracking-wider rounded-lg transition-all duration-300 inline-flex items-center gap-2 group shrink-0 shadow-lg shadow-gold-500/10"
          >
            Request Call Back
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Slogan */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 bg-white/10 p-2 rounded-xl w-max">
              <img src="/logo.PNG" alt="Laamarix Logo" className="w-12 h-12 object-contain bg-white rounded-lg p-1" />
            </div>
            
            <p className="font-serif text-gold-500 italic text-base leading-relaxed">
              "Building Dreams. Creating Reality."
            </p>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving Coimbatore & Across Tamilnadu with unparalleled engineering precision, transparent billing structure, and premium interior finishings.
            </p>
          </div>

          {/* Quick Links / Services */}
          <div>
            <h5 className="font-serif text-lg font-semibold text-white tracking-wide mb-6 relative pb-2 before:absolute before:bottom-0 before:left-0 before:w-12 before:h-0.5 before:bg-gold-500">
              Our Expertise
            </h5>
            <ul className="space-y-3.5 text-sm">
              {[
                { label: 'Residential Construction', page: 'services' as PageType },
                { label: 'Commercial Projects', page: 'services' as PageType },
                { label: 'Architectural Designs', page: 'services' as PageType },
                { label: 'Structural Engineering', page: 'services' as PageType },
                { label: 'Interior Design Solutions', page: 'services' as PageType },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handlePageLink(link.page)}
                    className="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-1.5 text-left group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40 group-hover:bg-gold-500 transition-colors"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Company Links */}
          <div>
            <h5 className="font-serif text-lg font-semibold text-white tracking-wide mb-6 relative pb-2 before:absolute before:bottom-0 before:left-0 before:w-12 before:h-0.5 before:bg-gold-500">
              Quick Links
            </h5>
            <ul className="space-y-3.5 text-sm">
              {[
                { label: 'About Company', page: 'about' as PageType },
                { label: 'Our Special Services', page: 'services' as PageType },
                { label: '6-Step Process', page: 'process' as PageType },
                { label: 'Contact Details', page: 'contact' as PageType },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handlePageLink(link.page)}
                    className="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-gold-500 rounded-full opacity-50"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h5 className="font-serif text-lg font-semibold text-white tracking-wide mb-6 relative pb-2 before:absolute before:bottom-0 before:left-0 before:w-12 before:h-0.5 before:bg-gold-500">
              Get in Touch
            </h5>
            
            <div className="flex items-start gap-3 text-sm text-gray-400">
              <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
              <span>
                7/110, Ruby School Road,<br />
                Saravanampatti, Coimbatore,<br />
                Tamilnadu - 641035
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Phone className="w-4 h-4 text-gold-500 shrink-0" />
              <div>
                <a href="tel:9566953683" className="hover:text-gold-500 transition-colors block">9566953683</a>
                <a href="tel:9786588466" className="hover:text-gold-500 transition-colors block">9786588466</a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Mail className="w-4 h-4 text-gold-500 shrink-0" />
              <a href="mailto:laamarixinfra@gmail.com" className="hover:text-gold-500 transition-colors break-all">
                laamarixinfra@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Clock className="w-4 h-4 text-gold-500 shrink-0" />
              <span>Mon - Sat: 9:00 AM - 6:30 PM</span>
            </div>
          </div>

        </div>

        {/* Serving Location Tagline */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-gold-500 animate-pulse"></span>
            <span>📍 Serving <strong>Coimbatore, Tiruppur, Erode, Salem</strong> & Across Tamilnadu</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} LAAMARIX INFRA. All Rights Reserved.
          </div>
        </div>

      </div>

    </footer>
  );
}
