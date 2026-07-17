import { useState } from 'react';
import { Menu, X, Sparkles, Phone } from 'lucide-react';
import { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  onOpenQuote: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, onOpenQuote }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', id: 'home' as PageType },
    { label: 'About Us', id: 'about' as PageType },
    { label: 'Services', id: 'services' as PageType },
    { label: 'Our Process', id: 'process' as PageType },
    { label: 'Pricing', id: 'pricing' as PageType },
    { label: 'Contact Us', id: 'contact' as PageType },
  ];

  const handleNavClick = (pageId: PageType) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-warm-white/95 backdrop-blur-md border-b border-gold-500/10 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0"
            onClick={() => handleNavClick('home')}
          >
            <img src="/logo.PNG" alt="Laamarix Logo" className="w-10 h-10 sm:w-14 sm:h-14 object-contain transition-transform group-hover:scale-105" />
            <img src="/lt.png" alt="Laamarix Infra" className="h-7 sm:h-12 md:h-14 object-contain transition-transform group-hover:scale-105" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-2 text-[14px] font-semibold tracking-wider uppercase transition-colors ${
                  currentPage === link.id 
                    ? 'text-gold-500 font-bold' 
                    : 'text-luxury-black hover:text-gold-500'
                }`}
              >
                {link.label}
                {currentPage === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:9566953683" 
              className="text-xs font-semibold font-mono flex items-center gap-1.5 text-luxury-black hover:text-gold-500 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-500" /> +91 9566953683
            </a>
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 bg-luxury-black hover:bg-gold-500 text-white hover:text-luxury-black text-xs font-bold tracking-wider uppercase rounded-lg border border-transparent hover:border-gold-600 transition-all duration-300 shadow-md shadow-black/10 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Get a Quote
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center md:hidden gap-3">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 bg-gold-500 text-luxury-black hover:bg-luxury-black hover:text-white text-[10px] font-bold tracking-wider uppercase rounded-md transition-all duration-300"
            >
              Quote
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-luxury-black hover:text-gold-500 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer menu */}
      {isOpen && (
        <div className="md:hidden bg-warm-white border-b border-gold-500/15">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all ${
                  currentPage === link.id
                    ? 'bg-gold-500/10 text-gold-600 border-l-4 border-gold-500 pl-3'
                    : 'text-luxury-black hover:bg-gray-100 hover:text-gold-500'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <div className="pt-4 border-t border-gold-500/10 flex flex-col gap-3 px-4">
              <a 
                href="tel:9566953683" 
                className="flex items-center gap-2 text-sm text-luxury-black font-semibold font-mono"
              >
                <Phone className="w-4 h-4 text-gold-500" /> +91 9566953683 / 9786588466
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 bg-luxury-black text-white hover:bg-gold-500 hover:text-luxury-black font-semibold text-xs tracking-wider uppercase rounded-lg text-center transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-gold-500" /> Request Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
