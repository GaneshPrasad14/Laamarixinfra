import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, CheckCircle2, ClipboardList, Send, Trash2 } from 'lucide-react';
import { QuoteRequest } from '../types';

export default function ContactView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Architectural Design');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [recentQuotes, setRecentQuotes] = useState<QuoteRequest[]>([]);

  // Load recent quotes on mount
  const loadQuotes = () => {
    const existing = localStorage.getItem('laamarix_quotes');
    if (existing) {
      setRecentQuotes(JSON.parse(existing));
    } else {
      setRecentQuotes([]);
    }
  };

  useEffect(() => {
    loadQuotes();

    // Listen to custom updates from other modals
    window.addEventListener('laamarix_quotes_updated', loadQuotes);
    return () => {
      window.removeEventListener('laamarix_quotes_updated', loadQuotes);
    };
  }, []);

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

    const existing = localStorage.getItem('laamarix_quotes');
    const list = existing ? JSON.parse(existing) : [];
    list.unshift(newRequest);
    localStorage.setItem('laamarix_quotes', JSON.stringify(list));

    // Send details to WhatsApp
    const text = `Hi LAAMARIX INFRA, I would like to request a consultation.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`;
    const url = `https://wa.me/919566953683?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');

    setSubmitted(true);
    loadQuotes();

    // Reset fields
    setName('');
    setEmail('');
    setPhone('');
    setService('Architectural Design');
    setMessage('');

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  const handleDeleteQuote = (id: string) => {
    const existing = localStorage.getItem('laamarix_quotes');
    if (existing) {
      const list = JSON.parse(existing) as QuoteRequest[];
      const filtered = list.filter(item => item.id !== id);
      localStorage.setItem('laamarix_quotes', JSON.stringify(filtered));
      loadQuotes();
    }
  };

  return (
    <div className="space-y-20 pb-24">
      
      {/* 1. Hero Header */}
      <section className="relative py-20 bg-warm-white border-b border-gold-500/10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C59B4B 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-gold-500 tracking-[0.3em] uppercase">Let's Connect</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-luxury-black">
            Contact LAAMARIX INFRA
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Get in touch with our engineering office in Coimbatore. We serve clients with premium turnkey projects across all districts of Tamilnadu.
          </p>
        </div>
      </section>

      {/* 2. Main Two Column Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-gold-500 tracking-[0.2em] uppercase">Office Directory</span>
              <h2 className="font-serif text-3xl font-semibold text-luxury-black">
                Our Corporate Office
              </h2>
              <div className="w-16 h-1 bg-gold-500"></div>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                Visit our headquarters to review active 3D elevations, check premium granite/tile catalogs, and finalize structural blueprints under cozy lighting and friendly hospitality.
              </p>
            </div>

            {/* Address, Phone, Email, Hours cards */}
            <div className="space-y-6">
              
              {/* Address */}
              <div className="p-5 bg-white border border-gold-500/10 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gold-50 text-gold-500 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-semibold text-luxury-black">Office Address</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    LAAMARIX INFRA - Construction & Builders,<br />
                    7/110, Ruby School Road, Saravanampatti,<br />
                    Coimbatore, Tamilnadu - 641035
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="p-5 bg-white border border-gold-500/10 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gold-50 text-gold-500 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-semibold text-luxury-black">Phone Numbers</h4>
                  <div className="space-y-0.5 text-xs sm:text-sm text-gray-600 font-mono">
                    <a href="tel:9566953683" className="hover:text-gold-500 transition-colors block">+91 9566953683 (Director)</a>
                    <a href="tel:9786588466" className="hover:text-gold-500 transition-colors block">+91 9786588466 (Support)</a>
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div className="p-5 bg-white border border-gold-500/10 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gold-50 text-gold-500 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-semibold text-luxury-black">Email Address</h4>
                  <a href="mailto:laamarixinfra@gmail.com" className="text-gray-600 text-xs sm:text-sm font-mono hover:text-gold-500 transition-colors break-all block">
                    laamarixinfra@gmail.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-5 bg-white border border-gold-500/10 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gold-50 text-gold-500 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-semibold text-luxury-black">Working Hours</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Monday - Saturday: 9:00 AM - 6:30 PM <br />
                    <span className="text-gold-600 font-medium">Sunday: by Appointment Only</span>
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Sleek Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gold-500/10 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden">
              
              {/* Gold Top Border line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-500 via-gold-600 to-gold-700"></div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-luxury-black">Send a Message</h3>
                  <p className="text-gray-500 text-xs mt-1">Provide your details to initiate a blueprint layout consult.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-luxury-black uppercase tracking-wider mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 bg-warm-white border border-gray-200 rounded-lg text-sm text-luxury-black focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-luxury-black uppercase tracking-wider mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="10-digit mobile number"
                        className="w-full px-4 py-2.5 bg-warm-white border border-gray-200 rounded-lg text-sm text-luxury-black focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-luxury-black uppercase tracking-wider mb-2">Email Address</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-4 py-2.5 bg-warm-white border border-gray-200 rounded-lg text-sm text-luxury-black focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-luxury-black uppercase tracking-wider mb-2">Service Required *</label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-2.5 bg-warm-white border border-gray-200 rounded-lg text-sm text-luxury-black focus:outline-none focus:border-gold-500 transition-all"
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
                    <label className="block text-[11px] font-bold text-luxury-black uppercase tracking-wider mb-2">Your Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline your location, plot square footage, room count requirements, or design styles..."
                      className="w-full px-4 py-2.5 bg-warm-white border border-gray-200 rounded-lg text-sm text-luxury-black focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-500/20 rounded-lg text-xs flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Thank you, {name || 'Customer'}! Your consultation inquiry has been stored locally. Our staff will coordinate.</span>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-luxury-black hover:bg-gold-500 text-white hover:text-luxury-black font-semibold text-xs tracking-wider uppercase rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Request Form
                  </button>
                </form>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Reactive Local Storage Consultations Dashboard */}
      {recentQuotes.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-warm-bg border border-gold-500/10 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gold-500/10 pb-4">
              <div className="flex items-center gap-2.5">
                <ClipboardList className="w-5 h-5 text-gold-500" />
                <div>
                  <h3 className="font-serif text-xl font-bold text-luxury-black">My Logged Requests</h3>
                  <p className="text-xs text-gray-500">Durable entries stored securely in your browser's local state.</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-gold-100 text-gold-700 rounded-full font-mono">
                {recentQuotes.length} active consultation{recentQuotes.length > 1 ? 's' : ''}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentQuotes.map((item) => (
                <div key={item.id} className="bg-white border border-gray-100 hover:border-gold-500/20 p-5 rounded-xl shadow-sm relative flex flex-col justify-between">
                  <button
                    onClick={() => handleDeleteQuote(item.id)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-rose-500 p-1 rounded-full hover:bg-rose-50 transition-colors"
                    title="Delete Request Entry"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-gold-500/10 text-gold-600 rounded-md font-mono uppercase">
                        {item.service}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400">
                        ID: #{item.id}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-luxury-black text-base truncate pr-6">
                      {item.name}
                    </h4>

                    <p className="text-xs text-gray-500 font-mono">
                      📞 {item.phone} {item.email ? `| ✉️ ${item.email}` : ''}
                    </p>

                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 bg-gray-50/50 p-2.5 rounded border border-gray-100">
                      "{item.message}"
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px]">
                    <span className="text-gray-400">{item.createdAt}</span>
                    <span className="flex items-center gap-1 text-emerald-600 font-semibold font-mono uppercase bg-emerald-50 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Pending Dispatch
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
