import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Compass, HardHat, Palette, Check, ArrowRight, Phone, Award, ShieldCheck, Landmark, Star } from 'lucide-react';
import { IMAGES } from '../constants';
import { PageType } from '../types';

function Counter({ end, suffix, text }: { end: number, suffix: string, text: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center p-6 space-y-2">
      <div className="font-serif text-5xl md:text-6xl font-bold text-gold-500">
        {count}{suffix}
      </div>
      <div className="text-luxury-black font-semibold uppercase tracking-widest text-xs">
        {text}
      </div>
    </div>
  );
}

const TESTIMONIALS = [
  { name: 'Karthikeyan', location: 'Coimbatore', text: 'LAAMARIX built our dream home exactly as we visualized. Their transparency in pricing and daily site updates were remarkable. Highly recommended!' },
  { name: 'Ramesh Babu', location: 'Coimbatore', text: 'The structural quality and premium finishes are outstanding. The interior work in our living room was perfectly executed by their expert team.' },
  { name: 'Senthil Kumar', location: 'Trichy', text: 'From architectural planning to final handover, the process was completely stress-free. Very professional engineers and zero hidden costs.' },
  { name: 'Murugan', location: 'Theni', text: 'We hired them for a commercial building project. The modern elevation and timely delivery exceeded our expectations. Best builders in the region.' },
  { name: 'Vignesh', location: 'Madurai', text: 'Excellent interior design execution! They transformed our old kitchen into an ultra-modern modular setup with perfect lighting.' },
];

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden w-full max-w-4xl mx-auto py-10">
      <div 
        className="flex transition-transform duration-700 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="min-w-full px-4 text-center space-y-6 shrink-0">
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-gold-500 fill-gold-500" />)}
            </div>
            <p className="text-gray-600 font-serif text-lg md:text-xl italic max-w-2xl mx-auto">"{t.text}"</p>
            <div>
              <h4 className="font-bold text-luxury-black">{t.name}</h4>
              <p className="text-xs text-gold-600 font-mono tracking-widest uppercase mt-1">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-8">
        {TESTIMONIALS.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentIndex ? 'bg-gold-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}

interface HomeViewProps {
  setCurrentPage: (page: PageType) => void;
  onOpenQuote: () => void;
}

export default function HomeView({ setCurrentPage, onOpenQuote }: HomeViewProps) {
  
  const quickServices = [
    {
      title: 'Architectural Design',
      description: 'Elegant space layouts, custom front elevations, full 2D/3D visualizations, and precise Vastu compliance planning.',
      icon: Compass,
      id: 'services',
    },
    {
      title: 'Premium Construction',
      description: 'Complete end-to-end residential and commercial builds from durable foundation work to absolute turnkey handover.',
      icon: HardHat,
      id: 'services',
    },
    {
      title: 'Interior Masterpieces',
      description: 'Sophisticated living rooms, ultra-premium modular kitchens, beautiful wardrobes, and custom lighting designs.',
      icon: Palette,
      id: 'services',
    },
  ];

  const valueProps = [
    {
      title: 'Complete Solutions',
      description: 'Architectural, structural, municipal approvals, construction, and detailed interior styling - all beautifully managed under a single unified roof.',
      icon: Landmark,
    },
    {
      title: 'Experienced Professionals',
      description: 'Led by elite civil engineers, structural specialists, and master craftsmen with over a decade of flawless execution across South India.',
      icon: Award,
    },
    {
      title: 'Transparent Pricing',
      description: 'We believe in complete integrity. Zero hidden costs, strict material brands specified, and explicit payment stages based on real work progress.',
      icon: ShieldCheck,
    },
  ];

  const handleLearnMore = (targetPage: PageType) => {
    setCurrentPage(targetPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 pb-24">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-luxury-black">
        {/* Full-width image background */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="LAAMARIX INFRA Luxury Residence Dusk Exterior"
            className="w-full h-full object-cover object-center opacity-65 scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Subtle vignette overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/85 via-luxury-black/30 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-left w-full">
          <div className="max-w-3xl space-y-6 md:space-y-8">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500 text-xs font-semibold tracking-wider uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              South India's Trusted Builders
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-none"
            >
              Building Dreams.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 via-gold-100 to-gold-500">
                Creating Reality.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-base sm:text-lg md:text-xl font-sans leading-relaxed max-w-2xl font-normal"
            >
              LAAMARIX INFRA delivers premium architectural design, structural engineering, interior solutions, and construction services across Tamilnadu. We transform your vision into exceptional spaces with quality, transparency, and timely delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={onOpenQuote}
                className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-luxury-black font-bold text-sm tracking-wider uppercase rounded-lg shadow-xl shadow-gold-500/20 transition-all duration-300 inline-flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="https://wa.me/919566953683?text=Hi%20LAAMARIX%20INFRA,%20I%20am%20looking%20for%20construction/interior%20services.%20Please%20guide%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent hover:bg-white/5 text-white border-2 border-white/80 hover:border-gold-500 rounded-lg text-sm font-bold tracking-wider uppercase transition-all duration-300 inline-flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-gold-500" />
                WhatsApp Us
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Quick Services Overview Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-gold-500 tracking-[0.25em] uppercase">What We Deliver</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-luxury-black">
            Our Key Areas of Expertise
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto"></div>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            From design boards to finished properties, we provide unified excellence. Discover the key services that shape our elite portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-white border border-gold-500/10 p-8 rounded-xl hover:shadow-2xl hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Icon Circle */}
                  <div className="w-12 h-12 bg-gold-50 rounded-lg text-gold-500 flex items-center justify-center group-hover:bg-luxury-black group-hover:text-gold-500 transition-all duration-300 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold text-luxury-black group-hover:text-gold-500 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => handleLearnMore(service.id as PageType)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-luxury-black hover:text-gold-500 transition-colors group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Mid-Page Split Banner (Visual statement) */}
      <section className="relative h-[50vh] flex items-center bg-luxury-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.interior}
            alt="LAAMARIX INFRA Premium Interior Finish"
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/75 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold text-gold-500 tracking-[0.2em] uppercase">Craftsmanship & Luxury</span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Spaces Designed For Living. Engineered For Generations.
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              We coordinate structural safety, innovative spatial architecture, and Vastu tenets to craft homes that foster harmony and enduring quality.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us (Detailed Points) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-gold-500 tracking-[0.25em] uppercase">Why Choose Us</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-luxury-black">
              Uncompromising Quality & Transparency
            </h2>
            <div className="w-16 h-1 bg-gold-500"></div>
            <p className="text-gray-600 text-sm leading-relaxed">
              At LAAMARIX INFRA, we have broken the stereotypes of traditional contractor networks by institutionalizing standard material packages, daily site reports, and transparent billing stages.
            </p>
            <div className="space-y-3 pt-2">
              {[
                'Strict structural quality controls and soil testing',
                'Supervised entirely by qualified architectural and civil engineers',
                'Daily updates with photorealistic site progress trackers',
                'Zero hidden cost guarantee - quote has full item list',
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleLearnMore('about')}
              className="mt-4 px-6 py-3 bg-luxury-black text-white hover:bg-gold-500 hover:text-luxury-black text-xs font-bold tracking-wider uppercase rounded-lg transition-all inline-flex items-center gap-2 group"
            >
              Learn Our Philosophy
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {valueProps.map((item, index) => {
              const ValueIcon = item.icon;
              return (
                <div
                  key={index}
                  className={`p-6 bg-white border border-gold-500/10 rounded-xl space-y-4 hover:shadow-lg transition-all duration-300 ${
                    index === 2 ? 'md:col-span-2 bg-gradient-to-br from-gold-50 to-white border-gold-500/20' : ''
                  }`}
                >
                  <div className="w-10 h-10 bg-gold-50 rounded-lg text-gold-600 flex items-center justify-center">
                    <ValueIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-luxury-black">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-warm-white border-y border-gold-500/10 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gold-500/20">
            <Counter end={4} suffix="+" text="Completed Projects" />
            <Counter end={6} suffix="+" text="Completed Interior Projects" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold text-gold-500 tracking-[0.25em] uppercase">Client Testimonials</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-luxury-black">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto"></div>
        </div>
        <TestimonialCarousel />
      </section>

      {/* 5. Quick Consultation Block */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-warm-bg border border-gold-500/10 rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-500/5 rounded-full blur-2xl -ml-16 -mb-16"></div>
          
          <span className="text-[10px] font-bold text-gold-600 tracking-[0.3em] uppercase">Free Design Call</span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-black">
            Want to see how your dream building fits your budget?
          </h3>
          <p className="text-gray-600 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Call or submit an online request. Our engineers will arrange a site check, measure raw terrain parameters, and prepare a custom floor concept without a single rupee of commitment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 bg-luxury-black hover:bg-gold-500 text-white hover:text-luxury-black font-semibold text-xs tracking-wider uppercase rounded-lg transition-all"
            >
              Get Free Design Proposal
            </button>
            <a
              href="tel:9566953683"
              className="px-6 py-3 border border-luxury-black/30 hover:border-gold-500 text-luxury-black font-semibold text-xs tracking-wider uppercase rounded-lg transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold-500" />
              Call +91 9566953683
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
