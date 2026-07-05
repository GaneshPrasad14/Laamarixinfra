import { motion } from 'motion/react';
import { Check, Sparkles, Compass, HardHat, Palette, Activity, Building2, Layers } from 'lucide-react';
import { IMAGES } from '../constants';

interface ServicesViewProps {
  onOpenQuoteWithService: (serviceName: string) => void;
}

export default function ServicesView({ onOpenQuoteWithService }: ServicesViewProps) {
  
  const detailedServices = [
    {
      id: 'architectural',
      title: 'Architectural Design',
      tagline: 'Modern Ideas | Creative Designs | Dream Spaces | Realistic Views',
      description: 'We Design Your Dreams, You Live in Reality. Transforming blueprints into masterpieces with structural efficiency.',
      subdivisions: [
        'PLAN: 2D & 3D PLANNING',
        'DESIGN: ELEVATION DESIGN',
        'BUILD: QUALITY CONSTRUCTION',
        'DELIVER: ON TIME DELIVERY'
      ],
      image: IMAGES.architectural_design,
      icon: Compass,
    },
    {
      id: 'structural',
      title: 'Structural Design',
      tagline: 'STRENGTH. STABILITY. SAFETY.',
      description: 'We design safe, durable and cost effective structures using advanced engineering principles and latest technology (ETABS, STAAD.Pro, AutoCAD, Revit).',
      subdivisions: [
        'Structural Planning & Analysis',
        'RCC Design (Column, Beam, Slab)',
        'Foundation & Retaining Wall Design',
        'Structural Detailing & Steel Structure Design',
        '3D Structural Modeling',
        'BOQ & Estimation'
      ],
      image: IMAGES.structural_design, 
      icon: Activity,
    },
    {
      id: 'construction',
      title: 'House Construction',
      tagline: 'From Concept to Completion – We Build Your Dream Home',
      description: 'We Build Your Dream, You Live Your Vision. Quality Construction, On-Time Delivery, Transparent Process, Experienced Team, Customer Satisfaction.',
      subdivisions: [
        'FOUNDATION: Strong foundations build stronger tomorrows.',
        'STRUCTURE: Precision in structure, perfection in every detail.',
        'BRICKWORK: Shaping spaces. Building comfort.',
        'FINISHING TOUCH: Where quality construction meets beautiful living.'
      ],
      image: IMAGES.house_construction,
      icon: HardHat,
    },
    {
      id: 'commercial',
      title: 'Commercial Construction',
      tagline: 'Building Spaces. Building Success.',
      description: 'We design and construct commercial spaces that enhance your business and create long-term value.',
      subdivisions: [
        'Modern Architecture',
        'Premium Quality',
        'Timely Delivery',
        'Client Satisfaction'
      ],
      image: IMAGES.commercial_construction,
      icon: Building2,
    },
    {
      id: 'interior',
      title: 'Interior Designs',
      tagline: 'Designing Spaces. Defining Lifestyles.',
      description: 'Every space tells a story, we design yours. We craft interiors that blend aesthetics, comfort, and functionality to create spaces that truly reflect you. More than interiors, we design experiences.',
      subdivisions: [
        'Creative Concepts & Functional Spaces',
        'Premium Materials & Elegant Finishes',
        'Timeless Designs & Attention to Detail',
        'MODERN BEDROOM: Comfort meets style',
        'STYLISH KITCHEN: Designed for effortless living',
        'ELEGANT DINING: Where memories are made'
      ],
      image: IMAGES.interior_design,
      icon: Palette,
    },
    {
      id: 'visualization',
      title: 'Floor Plans & Visualization',
      tagline: 'Immersive visualizers before physical work begins.',
      description: 'Never guess what your home will look like. We prepare rich, scaled 2D blueprints and high-fidelity 3D renderings to let you virtually walk through your building before a single brick is laid.',
      subdivisions: [
        'Detailed 2D Floor Plans with dimensions',
        'Isometric 3D Floor Layout Renderings',
        'Cinematic 3D Video Walkthroughs',
        'Dynamic VR Virtual Interior walkthroughs',
        'Color combination & material mockups'
      ],
      image: IMAGES.floor_plans,
      icon: Layers,
    }
  ];

  return (
    <div className="space-y-24 pb-24">
      
      {/* Hero Head */}
      <section className="relative py-20 bg-warm-white border-b border-gold-500/10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C59B4B 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-gold-500 tracking-[0.3em] uppercase">Services Portfolio</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-luxury-black">
            Our Expertise
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Comprehensive construction and design solutions under one roof. We manage every single aspect of your structure with professional engineering and custom craftsmanship.
          </p>
        </div>
      </section>

      {/* Service Blocks with alternating layouts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {detailedServices.map((service, index) => {
          const isEven = index % 2 === 0;
          const ServiceIcon = service.icon;
          
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              
              {/* Image side */}
              <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative group overflow-hidden rounded-xl shadow-xl border border-gold-500/10 bg-warm-bg aspect-4/3">
                  <img
                    src={service.image}
                    alt={`${service.title} LAAMARIX INFRA`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Luxury gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-[10px] font-bold font-mono text-gold-500 tracking-wider uppercase">LAAMARIX STANDARDS</span>
                    <h4 className="font-serif text-lg font-semibold tracking-wide">{service.title} Portfolio</h4>
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold-50 text-gold-500 rounded-lg flex items-center justify-center">
                    <ServiceIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold font-mono text-gold-600 tracking-widest uppercase">
                    SERVICES // {index + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-3xl md:text-4xl font-semibold text-luxury-black tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gold-600 font-sans text-xs font-bold uppercase tracking-wider italic">
                    {service.tagline}
                  </p>
                </div>

                <div className="w-16 h-1 bg-gold-500"></div>

                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  {service.description}
                </p>

                {/* Bullet details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.subdivisions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                      <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => onOpenQuoteWithService(service.title)}
                    className="px-6 py-3.5 bg-luxury-black text-white hover:bg-gold-500 hover:text-luxury-black text-xs font-bold tracking-wider uppercase rounded-lg shadow-md transition-all inline-flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-gold-500" />
                    Inquire About {service.title}
                  </button>
                  <a
                    href={`https://wa.me/919566953683?text=Hi%20LAAMARIX%20INFRA,%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20services.%20Please%20share%20some%20samples.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-white hover:bg-gold-50 border border-gray-200 text-luxury-black hover:text-gold-600 text-xs font-bold tracking-wider uppercase rounded-lg transition-all text-center"
                  >
                    Discuss on WhatsApp
                  </a>
                </div>
              </div>

            </motion.div>
          );
        })}
      </section>

    </div>
  );
}
