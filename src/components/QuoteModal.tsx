import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Phone, Mail, Clock } from 'lucide-react';
import { QuoteRequest } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedService = 'Architectural Design' }: QuoteModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newRequest: QuoteRequest = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      phone,
      service,
      message,
      status: 'Pending',
      createdAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    // Store in localStorage for durable state representation
    const existing = localStorage.getItem('laamarix_quotes');
    const list = existing ? JSON.parse(existing) : [];
    list.unshift(newRequest);
    localStorage.setItem('laamarix_quotes', JSON.stringify(list));

    // Send details to WhatsApp
    const text = `Hi LAAMARIX INFRA, I would like to request a consultation.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`;
    const url = `https://wa.me/919566953683?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');

    setSubmitted(true);
    // Trigger custom event so other components (like dashboard or contact page) can reload if they show requests
    window.dispatchEvent(new Event('laamarix_quotes_updated'));
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setService('Architectural Design');
    setMessage('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div id="quote-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        id="quote-modal-content"
        className="relative w-full max-w-2xl overflow-hidden bg-warm-white rounded-xl shadow-2xl border border-gold-500/20 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Gold top bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-gold-500 via-gold-600 to-gold-700"></div>

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gold-500/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-gold-500 animate-pulse" />
            <h3 className="text-2xl font-serif font-semibold tracking-tight text-luxury-black">
              Request Free Consultation
            </h3>
          </div>
          <button 
            id="close-modal-btn"
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-luxury-black hover:bg-gold-500/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <p className="text-gray-600 text-sm leading-relaxed">
                Fill out the details below, and one of our expert architectural engineers will get back to you within 24 hours with custom recommendations and a structured layout.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-luxury-black uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-luxury-black placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-luxury-black uppercase tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-luxury-black placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-luxury-black uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-luxury-black placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-luxury-black uppercase tracking-wider mb-2">
                    Service Required *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-luxury-black focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-sm"
                  >
                    <option value="Architectural Design">Architectural Design</option>
                    <option value="Structural Design">Structural Design</option>
                    <option value="House Construction">House Construction</option>
                    <option value="Commercial Construction">Commercial Construction</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Floor Plans & Visualization">Floor Plans & Visualization</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-luxury-black uppercase tracking-wider mb-2">
                  Message / Project Details *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your plot size, location, budget, or ideas..."
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-luxury-black placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-sm resize-none"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 p-3 bg-gold-50 rounded-lg border border-gold-500/10">
                <Clock className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <span className="text-xs text-gold-700">
                  <strong>Serving Across Tamilnadu:</strong> Instant WhatsApp and cellular response standard.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-luxury-black hover:bg-gold-500 text-white hover:text-luxury-black font-semibold text-sm rounded-lg border border-transparent hover:border-gold-600 transition-all duration-300 tracking-wide uppercase shadow-lg shadow-black/10"
              >
                Submit Consultation Request
              </button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-6">
              <div className="inline-flex items-center justify-center p-4 bg-gold-100 rounded-full text-gold-600 animate-bounce">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-serif font-semibold text-luxury-black">
                  Request Received Successfully!
                </h4>
                <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you, <strong className="text-luxury-black">{name}</strong>. Our senior engineers have received your inquiry regarding <strong className="text-gold-600">{service}</strong> and are reviewing your details.
                </p>
              </div>

              <div className="p-4 bg-warm-bg rounded-lg border border-gold-500/10 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="font-semibold text-luxury-black text-sm border-b border-gray-200 pb-1">Summary of Details:</div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Contact Number:</span>
                  <span className="font-medium text-luxury-black">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Requested Service:</span>
                  <span className="font-medium text-luxury-black">{service}</span>
                </div>
                {email && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Email Address:</span>
                    <span className="font-medium text-luxury-black">{email}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href={`https://wa.me/919566953683?text=Hi%20LAAMARIX%20INFRA,%20I%20just%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(service)}.%20My%20name%20is%20${encodeURIComponent(name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-sm font-semibold transition-all inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Speak on WhatsApp Now
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-luxury-black text-white hover:bg-gold-500 hover:text-luxury-black rounded-lg text-sm font-semibold transition-all"
                >
                  Close & Return
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
