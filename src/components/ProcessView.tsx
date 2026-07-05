import { motion } from 'motion/react';
import { CalendarDays, MapPin, Edit3, ClipboardList, HardHat, Key, Sparkles, ArrowRight } from 'lucide-react';

interface ProcessViewProps {
  onOpenQuote: () => void;
}

export default function ProcessView({ onOpenQuote }: ProcessViewProps) {
  
  const steps = [
    {
      step: 1,
      title: 'Free Consultation',
      subtitle: 'Understanding Your Dream Space',
      icon: CalendarDays,
      description: 'We understand your ideas, requirements, budget, and expectations. Our senior designers meet you either at our Coimbatore office or at your convenience to analyze the primary goals.',
      tips: 'Bring along sample photos, ideas, or land maps if you have them!',
      badgeColor: 'bg-amber-100 text-amber-700'
    },
    {
      step: 2,
      title: 'Site Visit',
      subtitle: 'Technical Ground Measurement Check',
      icon: MapPin,
      description: 'Our senior civil engineers inspect the site and collect measurements. We check soil strength, orientation parameters for Vastu design, and note water and road connectivity lines.',
      tips: 'Our team performs this visit completely free of charge across Tamilnadu.',
      badgeColor: 'bg-emerald-100 text-emerald-700'
    },
    {
      step: 3,
      title: 'Planning & Design',
      subtitle: 'Crafting Architectural Blueprints',
      icon: Edit3,
      description: 'Architectural and structural drawings are prepared for your approval. We craft detailed 2D layouts and luxury 3D models of front elevations so you can witness the project visually before construction.',
      tips: 'We iterate on design designs until you are 100% happy with every room.',
      badgeColor: 'bg-blue-100 text-blue-700'
    },
    {
      step: 4,
      title: 'Quotation',
      subtitle: 'Zero Hidden Cost Breakdown',
      icon: ClipboardList,
      description: 'A transparent estimate with complete cost breakdown is provided. We detail exact material brands (e.g. UltraTech Cement, Vizag Steel, Kajaria Tiles) and specify payment stages based purely on work milestones.',
      tips: 'The price on our approved contract is final - absolutely no mid-project raises.',
      badgeColor: 'bg-purple-100 text-purple-700'
    },
    {
      step: 5,
      title: 'Construction',
      subtitle: 'Supervised Engineering Execution',
      icon: HardHat,
      description: 'Execution begins under professional supervision with regular quality checks. Experienced site engineers supervise daily tasks, test concrete cubes, check plaster finishes, and keep you updated via WhatsApp progress reports.',
      tips: 'You receive high-res photos and progress logs at the end of every week.',
      badgeColor: 'bg-indigo-100 text-indigo-700'
    },
    {
      step: 6,
      title: 'Final Handover',
      subtitle: 'Delivering Premium Perfection',
      icon: Key,
      description: 'The completed project is delivered after final inspection and customer approval. We perform deep chemical cleanings, verify all tap connections, test electrical lines, and hand you the keys with complete documents.',
      tips: 'Every construction comes with standard structural soundness assurance.',
      badgeColor: 'bg-rose-100 text-rose-700'
    }
  ];

  return (
    <div className="space-y-24 pb-24">
      
      {/* Hero Header */}
      <section className="relative py-20 bg-warm-white border-b border-gold-500/10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C59B4B 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-gold-500 tracking-[0.3em] uppercase">How We Work</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-luxury-black">
            Our Six-Step Process
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Our standard six-step architectural framework is engineered to keep your project fully organized, stress-free, and transparent.
          </p>
        </div>
      </section>

      {/* Vertical Timeline Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Central Vertical Line for Desktop Timeline */}
        <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-gold-500 via-gold-500/40 to-gold-500/10 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((item, index) => {
            const StepIcon = item.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-stretch ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                
                {/* Timeline node circle for desktop */}
                <div className="absolute left-8 md:left-1/2 top-0 w-12 h-12 bg-luxury-black border-4 border-gold-500 text-gold-500 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-lg hidden md:flex">
                  <span className="font-serif font-bold text-sm">{item.step}</span>
                </div>

                {/* Left/Right empty spacer for balance on desktop */}
                <div className="w-full md:w-1/2 hidden md:block"></div>

                {/* Content Card Side */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-10">
                  <div className="bg-white border border-gold-500/10 p-6 md:p-8 rounded-xl hover:shadow-xl hover:border-gold-500/30 transition-all duration-300 relative space-y-4">
                    
                    {/* Floating Step Number for Mobile */}
                    <div className="inline-flex md:hidden items-center justify-center w-8 h-8 bg-luxury-black text-gold-500 rounded-full font-serif font-bold text-xs mb-2">
                      {item.step}
                    </div>

                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gold-50 text-gold-500`}>
                        <StepIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold font-mono text-gold-600 tracking-wider uppercase">
                          STAGE {item.step}
                        </span>
                        <h3 className="font-serif text-xl md:text-2xl font-bold text-luxury-black">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-500 text-xs md:text-sm font-semibold italic text-gold-700">
                      {item.subtitle}
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed text-justify">
                      {item.description}
                    </p>

                    {/* Pro Tip Highlight box */}
                    <div className="p-3 bg-gold-50 rounded-lg border-l-4 border-gold-500 text-xs text-luxury-black leading-relaxed">
                      <strong>Engineering Tip:</strong> {item.tips}
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Box to book Step 1 */}
      <section className="max-w-3xl mx-auto px-4">
        <div className="bg-luxury-black text-white p-8 md:p-12 rounded-xl text-center space-y-6 border border-gold-500/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl"></div>
          
          <span className="text-xs font-bold text-gold-500 tracking-[0.2em] uppercase">Begin Stage 1 Today</span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            No Commitment. Just Professional Planning.
          </h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Click below to schedule your Phase 1 Free Consultation. Our civil engineers will arrange site measurements, design preliminary ideas, and review budget milestones with you.
          </p>
          
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-luxury-black font-bold text-xs tracking-wider uppercase rounded-lg shadow-lg inline-flex items-center gap-2 transition-all duration-300 group"
            >
              Schedule Phase 1 Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
