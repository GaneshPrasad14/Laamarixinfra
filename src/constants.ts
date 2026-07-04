import { ServiceItem, ProcessStep } from './types';

export const IMAGES = {
  hero: '/src/assets/images/laamarix_hero_1783176338381.jpg',
  about: '/src/assets/images/laamarix_about_1783176353228.jpg',
  interior: '/src/assets/images/laamarix_interior_1783176365298.jpg',
  construction: '/src/assets/images/laamarix_construct_1783176380032.jpg',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'architectural',
    title: 'Architectural Design',
    description: 'Transforming blueprints into masterpieces. Custom structures designed to balance aesthetics, ergonomics, and durability.',
    iconName: 'DraftingCompass',
    features: [
      'Space planning & optimization',
      '2D & 3D elevations',
      'Vastu planning compliance',
      'Detailed working drawings',
      'Government approval drawings',
      'Site layout & planning'
    ],
    image: IMAGES.about,
  },
  {
    id: 'construction',
    title: 'House Construction',
    description: 'Turnkey residential building solutions from layout foundation to the final painted handover, managed by expert engineers.',
    iconName: 'HardHat',
    features: [
      'Excavation & robust foundation',
      'Premium brick work & plastering',
      'Slab roofing & structural integrity',
      'High-end flooring & tile layout',
      'Premium electrical & plumbing lines',
      'Weatherproof external painting'
    ],
    image: IMAGES.construction,
  },
  {
    id: 'interior',
    title: 'Interior Design',
    description: 'Creating luxurious, customized spaces that reflect your personality. Elevate your everyday life with elegant design touches.',
    iconName: 'Palette',
    features: [
      'Bespoke living room layouts',
      'Premium modular kitchen setups',
      'Elegant bedroom wardrobes & TV units',
      'Sophisticated lighting layouts',
      'Contemporary false ceilings',
      'Premium dining area solutions'
    ],
    image: IMAGES.interior,
  },
  {
    id: 'structural',
    title: 'Structural Design',
    description: 'Ensuring structural stability and safety through meticulous calculations and precision-engineered layouts.',
    iconName: 'Activity',
    features: [
      'Foundation load calculation',
      'Beam & column engineering',
      'Concrete slab thickness design',
      'Advanced structural analysis',
      'Steel reinforcement optimization'
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Construction',
    description: 'Scale your business with tailored retail, institutional, healthcare, or corporate spaces designed for ultimate utility.',
    iconName: 'Building2',
    features: [
      'Modern executive office buildings',
      'High-traffic showroom floors',
      'Hospitals & educational institutions',
      'Custom industrial warehouses',
      'Retail and restaurant complexes'
    ],
  },
  {
    id: 'visualization',
    title: 'Floor Plans & Visualization',
    description: 'Visualize your dream project before bricklaying begins. High-fidelity rendering gives you an immersive feel.',
    iconName: 'Layers',
    features: [
      'Detailed 2D Floor Plans',
      'Realistic 3D Floor Plans',
      'Immersive 3D Walkthroughs',
      'Virtual interior walkthroughs'
    ],
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Free Consultation',
    description: 'We meet to understand your goals, dream designs, spatial needs, budget parameters, and key expectations.',
  },
  {
    step: 2,
    title: 'Site Visit',
    description: 'Our senior engineers inspect the actual site terrain, measure key dimensions, and review soil and orientation conditions.',
  },
  {
    step: 3,
    title: 'Planning & Design',
    description: 'Our architectural team drafts meticulous 2D and 3D floor designs, custom elevations, and structural drawings for your review.',
  },
  {
    step: 4,
    title: 'Transparent Quotation',
    description: 'We provide a highly detailed quote with a fully transparent material list and cost breakdown. No hidden surprises.',
  },
  {
    step: 5,
    title: 'Quality-Assured Construction',
    description: 'Execution is supervised daily by experienced site engineers and project managers, holding strict quality checkpoints.',
  },
  {
    step: 6,
    title: 'Final Handover',
    description: 'Upon deep-clean inspection, we officially hand over your premium key with documentation and guaranteed customer satisfaction.',
  }
];
