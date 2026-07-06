import { motion } from 'motion/react';
import { Target, Eye, Shield, Users, Lightbulb, Sparkles, HeartHandshake } from 'lucide-react';
import { IMAGES } from '../constants';

export default function AboutView() {
  
  const coreValues = [
    {
      title: 'Quality',
      description: 'Zero compromise on construction materials. We strictly implement branded cement, premium steel, structural soil testing, and expert masonry.',
      icon: Shield,
    },
    {
      title: 'Integrity',
      description: 'Absolute truth in raw pricing and stage reports. We provide a complete material classification list on day one with zero hidden costs.',
      icon: HeartHandshake,
    },
    {
      title: 'Innovation',
      description: 'Blending contemporary space-saving concepts, smart home automation, high-end false ceilings, and premium eco-friendly materials.',
      icon: Lightbulb,
    },
    {
      title: 'Commitment',
      description: 'Delivering exceptional projects on time or ahead of schedule, with robust contract terms protecting our clients.',
      icon: Target,
    },
    {
      title: 'Customer First',
      description: 'We adapt fully to your visual design choices, lifestyle parameters, customized kitchen demands, and budget milestones.',
      icon: Users,
    }
  ];

  const teamMembers = [
    { name: 'Anand', role: 'Site Engineer', image: '/anand.JPG', fallback: 'A' },
    { name: 'Vikash Kumar', role: 'Site Engineer', image: '/vikash.png', fallback: 'VK' },
    { name: 'Kavya', role: 'Design Engineer', image: null, fallback: 'K' }
  ];

  return (
    <div className="space-y-24 pb-24">
      
      {/* 1. Hero Header Section with geometric architectural feel */}
      <section className="relative py-20 bg-warm-white border-b border-gold-500/10 overflow-hidden">
        {/* Subtle geometric grid background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C59B4B 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-gold-500 tracking-[0.3em] uppercase">Who We Are</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-luxury-black">
            About LAAMARIX INFRA
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            A premier construction, structural engineering, and interior solution team serving families and businesses across Tamilnadu.
          </p>
        </div>
      </section>

      {/* 2. Who Are We Split Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-gold-500 tracking-[0.2em] uppercase">Headquartered in Theni</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxury-black leading-tight">
              Shaping Spaces That Stand the Test of Time
            </h2>
            <div className="w-16 h-1 bg-gold-500"></div>
            
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
              LAAMARIX INFRA is a trusted construction company headquartered in Theni with a major branch in Coimbatore, serving clients across Tamilnadu. We specialize in architectural planning, structural engineering, residential and commercial construction, interior design, 2D & 3D visualization, and turnkey project execution. 
            </p>
            
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
              With a team of experienced architects, engineers, project managers, and skilled professionals, we focus on delivering projects that combine quality, innovation, and durability. Every project is planned with precision, executed with transparency, and completed with customer satisfaction as our highest priority. Whether it's a dream home, a commercial building, or an industrial facility, LAAMARIX INFRA is committed to creating spaces that stand the test of time.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gold-500/15">
              <img
                src={IMAGES.about}
                alt="LAAMARIX INFRA architectural studio design review"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-warm-white/95 backdrop-blur-md rounded-lg border border-gold-500/10 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-gold-500 shrink-0" />
                <span className="text-xs font-semibold text-luxury-black font-mono">
                  Engineered Blueprint Review & Spatial Compliance Testing
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Founder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-xl shadow-xl border border-gold-500/10 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 lg:col-span-3">
              <div className="relative rounded-xl overflow-hidden border-2 border-gold-500/20 shadow-lg mx-auto w-48 h-48 md:w-full md:h-auto aspect-square">
                <img 
                  src="/founder.jpeg" 
                  alt="Sridhar Maarimuthu" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-8 lg:col-span-9 space-y-4">
              <span className="text-xs font-bold text-gold-500 tracking-[0.2em] uppercase">Meet The Founder</span>
              <h3 className="font-serif text-3xl font-bold text-luxury-black">
                Sridhar Maarimuthu
              </h3>
              <p className="font-mono text-sm text-gold-600 font-semibold uppercase tracking-wider">
                B.E. CIVIL ENGINEERING
              </p>
              <div className="w-12 h-1 bg-gold-500"></div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify mt-4">
                With a strong foundation in civil engineering and a passion for architectural excellence, Sridhar leads LAAMARIX INFRA with unwavering commitment to quality and innovation. His vision is to redefine the construction landscape in Tamilnadu by delivering premium, durable, and aesthetically magnificent structures tailored to our clients' unique aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-gold-500 tracking-[0.25em] uppercase">The Experts Behind The Scenes</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-luxury-black">
            Our Engineering Team
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-gold-500/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:border-gold-500/30 transition-all text-center group"
            >
              <div className="w-full aspect-square bg-warm-bg relative overflow-hidden flex items-center justify-center">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gold-50 to-gold-100 flex items-center justify-center">
                    <span className="font-serif text-5xl text-gold-500/40">{member.fallback}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-luxury-black">{member.name}</h3>
                <p className="font-mono text-xs text-gold-600 font-semibold uppercase tracking-wider mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Split Section - Vision & Mission (Contrasting Dark Block) */}
      <section className="bg-luxury-black text-white py-20 relative overflow-hidden mt-24">
        {/* Subtle decorative grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#C59B4B_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.04]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Our Vision */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 md:p-12 rounded-xl bg-luxury-gray/50 border border-gold-500/20 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg text-gold-500 flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gold-500 tracking-wide">
                  Our Vision
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify">
                  To become one of South India's most trusted construction companies by delivering innovative, sustainable, and high-quality building solutions that exceed customers' expectations.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-800 text-xs font-mono text-gold-600/80">
                01 // SOUTHERN EXPANSION GOAL
              </div>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 md:p-12 rounded-xl bg-luxury-gray/50 border border-gold-500/20 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg text-gold-500 flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gold-500 tracking-wide">
                  Our Mission
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify">
                  To provide complete construction solutions with honesty, professionalism, and excellence. We aim to build lasting relationships by ensuring quality workmanship, transparent pricing, timely project completion, and exceptional customer service.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-800 text-xs font-mono text-gold-600/80">
                02 // DELIVERING ABSOLUTE TRANSPARENCY
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Our Core Values Section (Grid Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-gold-500 tracking-[0.25em] uppercase">Our Standards</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-luxury-black">
            Our Core Values
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto"></div>
          <p className="text-gray-500 text-sm leading-relaxed">
            These values govern every brick laid, every column cast, and every interior layout designed by the LAAMARIX team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((val, idx) => {
            const ValueIcon = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 md:p-8 bg-white border border-gold-500/10 rounded-xl hover:shadow-xl hover:border-gold-500/20 transition-all duration-300 space-y-4"
              >
                <div className="w-10 h-10 bg-gold-50 rounded-lg text-gold-500 flex items-center justify-center shadow-inner">
                  <ValueIcon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-luxury-black">
                  {val.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
