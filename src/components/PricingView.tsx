import { motion } from 'motion/react';
import { Home, Sparkles, Gem, Crown, Compass, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface PricingViewProps {
  onOpenQuote: () => void;
}

export default function PricingView({ onOpenQuote }: PricingViewProps) {
  const packages = [
    {
      title: 'ECONOMY',
      price: '2,005',
      icon: Home,
      subtext: 'Standard building materials',
      gradient: 'from-emerald-400 to-green-600',
      iconColor: 'text-green-600',
      shadowHover: 'hover:shadow-green-500/20',
      borderHover: 'hover:border-green-500/50',
    },
    {
      title: 'ESSENTIAL',
      price: '2,199',
      icon: Sparkles,
      subtext: 'Enhanced core materials',
      gradient: 'from-blue-400 to-indigo-600',
      iconColor: 'text-indigo-600',
      shadowHover: 'hover:shadow-indigo-500/20',
      borderHover: 'hover:border-indigo-500/50',
    },
    {
      title: 'PREMIUM',
      price: '2,499',
      icon: Gem,
      subtext: 'Includes Elevation Design Works',
      gradient: 'from-purple-400 to-fuchsia-600',
      iconColor: 'text-purple-600',
      shadowHover: 'hover:shadow-purple-500/30',
      borderHover: 'hover:border-purple-500/50',
      popular: true,
    },
    {
      title: 'LUXURY',
      price: '2,899',
      icon: Crown,
      subtext: 'Elevation + Interior Works',
      gradient: 'from-rose-400 to-red-600',
      iconColor: 'text-red-600',
      shadowHover: 'hover:shadow-red-500/20',
      borderHover: 'hover:border-red-500/50',
    },
    {
      title: 'DESIGN ONLY',
      price: '2',
      icon: Compass,
      subtext: 'Architectural Blueprint Services',
      gradient: 'from-amber-400 to-orange-600',
      iconColor: 'text-orange-600',
      shadowHover: 'hover:shadow-orange-500/20',
      borderHover: 'hover:border-orange-500/50',
    }
  ];

  return (
    <div className="pt-8 pb-24 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-12">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-bold text-gold-500 tracking-[0.25em] uppercase"
        >
          Transparent Pricing
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-luxury-black tracking-tight"
        >
          HOUSE CONSTRUCTION PACKAGES
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-1 bg-gold-500 mx-auto"
        ></motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
        >
          Select the perfect construction tier tailored to your vision and budget. We ensure absolutely zero hidden costs and uncompromising structural integrity across all packages.
        </motion.p>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col bg-white rounded-3xl p-1 transition-all duration-500 shadow-xl hover:-translate-y-2 ${pkg.shadowHover} group`}
              >
                {/* Gradient Border Wrapper */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pkg.gradient} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} style={{ margin: '-1px' }}></div>
                
                <div className="relative flex-1 flex flex-col bg-white rounded-[23px] p-6 text-center h-full z-10">
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className={`bg-gradient-to-r ${pkg.gradient} text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg whitespace-nowrap`}>
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="flex-1 space-y-6 mt-4">
                    {/* Glowing Icon Container */}
                    <div className="relative w-20 h-20 mx-auto">
                      <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} rounded-full blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-500 animate-pulse`}></div>
                      <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${pkg.gradient} p-0.5 shadow-inner`}>
                        <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                          <Icon className={`w-8 h-8 ${pkg.iconColor} group-hover:scale-110 transition-transform duration-500`} />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`font-serif text-lg font-bold tracking-wide uppercase ${pkg.iconColor}`}>
                      {pkg.title}
                    </h3>

                    {/* Pricing */}
                    <div className="pt-2 pb-2">
                      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">Starting From</p>
                      <div className="flex items-start justify-center gap-1">
                        <span className="font-serif text-xl font-bold text-luxury-black mt-1.5">₹</span>
                        <span className="font-serif text-4xl xl:text-5xl font-bold text-luxury-black tracking-tighter">{pkg.price}</span>
                      </div>
                      <p className="text-gray-400 text-xs font-semibold mt-1">/ Sq.ft*</p>
                    </div>

                    {/* Subtext */}
                    <p className="text-xs text-gray-500 font-medium h-10 flex items-center justify-center px-2">
                      {pkg.subtext}
                    </p>
                  </div>

                  {/* Call to action */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button
                      onClick={onOpenQuote}
                      className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center justify-center gap-2 relative overflow-hidden group/btn`}
                    >
                      {/* Button Background Gradient on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${pkg.gradient} opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300`}></div>
                      
                      {pkg.popular ? (
                        <div className={`absolute inset-0 bg-gradient-to-r ${pkg.gradient} opacity-100 group-hover/btn:opacity-90 transition-opacity duration-300`}></div>
                      ) : null}
                      
                      <span className={`relative z-10 ${pkg.popular ? 'text-white' : 'text-luxury-black group-hover/btn:' + pkg.iconColor}`}>
                        Select Package
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400 font-medium">*Terms & Conditions Apply. Final rates may vary based on exact material selections, plot location, and structural requirements.</p>
        </div>
      </section>

      {/* Value Add / Trust block */}
      <section className="max-w-4xl mx-auto px-4 mt-16">
        <div className="bg-luxury-black rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10 space-y-6">
            <ShieldCheck className="w-12 h-12 text-gold-500 mx-auto" />
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">Need a detailed material specification list?</h3>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
              We maintain absolute transparency. When you request a consultation, we provide a comprehensive breakdown of every single material brand, grade, and specification included in your chosen package.
            </p>
            <button
              onClick={onOpenQuote}
              className="mt-4 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-luxury-black font-bold text-sm tracking-wider uppercase rounded-lg shadow-xl shadow-gold-500/20 transition-all inline-flex items-center gap-2"
            >
              Get Free Material Breakdown
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
