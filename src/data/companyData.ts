import { ProcessStep, TeamMember, Testimonial, ValueItem } from '../types';

export const companyStats = [
  { value: '15+', label: 'Years in Construction', description: 'Proven track record of structural engineering excellence' },
  { value: '180+', label: 'Completed Projects', description: 'Delivered across residential and commercial sectors' },
  { value: '2.8M+', label: 'Sq.Ft Developed', description: 'Precision engineered built-up area executed to date' },
  { value: '99.2%', label: 'On-Time Delivery', description: 'Disciplined CPM project schedule and resource tracking' },
  { value: '100%', label: 'Safety Compliance', description: 'Zero compromise on site occupational health and safety' }
];

export const companyValues: ValueItem[] = [
  {
    title: 'Uncompromising Quality',
    description: 'From concrete batch certifications to final millwork detailing, we enforce exacting quality control at every phase of construction.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Absolute Integrity',
    description: 'We conduct our business with unyielding honesty, ethical procurement, and strict adherence to structural codes and safety standards.',
    icon: 'CheckCircle'
  },
  {
    title: 'Complete Transparency',
    description: 'Open-book estimation, itemized Bill of Quantities (BOQ), and real-time site progress reporting leave zero room for unexpected surprises.',
    icon: 'Eye'
  },
  {
    title: 'Engineering Innovation',
    description: 'Leveraging post-tensioned spans, BIM spatial clash detection, green building practices, and modern composite structural methods.',
    icon: 'Zap'
  },
  {
    title: 'Dependable Reliability',
    description: 'A timeline promised is a timeline delivered. We employ rigorous Project Management Consultancy practices to hit every milestone.',
    icon: 'Clock'
  },
  {
    title: 'Client-Centric Focus',
    description: 'We treat every home and commercial facility as a personal legacy, aligning every design decision with the client’s vision and future needs.',
    icon: 'HeartHandshake'
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation',
    subtitle: 'Understanding Requirements & Project Goals',
    description: 'We initiate our partnership by listening intently to your vision, spatial requirements, budget parameters, and intended timeline. We discuss architectural aspirations and project feasibility.',
    deliverables: ['Client Vision Brief', 'Feasibility Assessment', 'Initial Budget Framework'],
    durationEstimate: 'Week 1',
    iconName: 'MessageSquare'
  },
  {
    number: '02',
    title: 'Site Assessment',
    subtitle: 'Reviewing Site & Environmental Conditions',
    description: 'Our civil and geotechnical engineers conduct in-depth topographic surveys, geotechnical soil bearing tests, groundwater analysis, boundary verification, and environmental considerations.',
    deliverables: ['Soil Bearing Capacity Report', 'Topographical Contour Survey', 'Municipal Boundary Verification'],
    durationEstimate: 'Week 1 - 2',
    iconName: 'MapPin'
  },
  {
    number: '03',
    title: 'Planning',
    subtitle: 'Preliminary Concepts & Strategic Roadmaps',
    description: 'Developing master project roadmaps, regulatory zoning analysis, floor-area ratio (FAR) calculations, and spatial massing concepts to determine optimal building orientation.',
    deliverables: ['Zoning & FAR Analysis', 'Conceptual Massing Studies', 'Master Milestone Roadmap'],
    durationEstimate: 'Week 2 - 3',
    iconName: 'FileText'
  },
  {
    number: '04',
    title: 'Design',
    subtitle: 'Architectural & Engineering Drawings',
    description: 'Our studio finalizes comprehensive architectural blueprints, 3D photorealistic renderings, structural engineering calculations, and integrated MEP (mechanical, electrical, plumbing) layouts.',
    deliverables: ['Good-for-Construction (GFC) Blueprints', '3D Photorealistic Exterior & Interior Renders', 'Structural Engineering Analysis'],
    durationEstimate: 'Week 3 - 6',
    iconName: 'Compass'
  },
  {
    number: '05',
    title: 'Estimation',
    subtitle: 'Scope, Specifications & Itemized BOQ',
    description: 'We draft a fully itemized Bill of Quantities (BOQ) with transparent material grades, brand specifications, cost schedules, and milestone payment schedules—eliminating unexpected cost variations.',
    deliverables: ['Comprehensive Itemized BOQ', 'Material Specification Matrix', 'Milestone Payment Schedule'],
    durationEstimate: 'Week 6 - 7',
    iconName: 'Calculator'
  },
  {
    number: '06',
    title: 'Construction',
    subtitle: 'Groundbreaking & Site Execution',
    description: 'Groundbreaking begins under the active supervision of our full-time site engineers and project managers. We deploy modern equipment, quality materials, and enforce strict HSE safety standards.',
    deliverables: ['Substructure Raft/Piling Execution', 'RCC Superstructure Casts', 'Daily Digital Site Progress Logs'],
    durationEstimate: 'Project Dependent',
    iconName: 'HardHat'
  },
  {
    number: '07',
    title: 'Quality Control',
    subtitle: 'Continuous Multi-Tier Inspections',
    description: 'At every milestone—cube compressive strength testing, rebar tie checks, waterproofing flood tests, and MEP pressure tests—our QA/QC team executes rigid multi-stage verification before sign-off.',
    deliverables: ['Concrete Cube Test Certificates', 'Waterproofing Flood Test Signoffs', 'Thermal & MEP Acoustic Audit Logs'],
    durationEstimate: 'Ongoing Throughout',
    iconName: 'ShieldAlert'
  },
  {
    number: '08',
    title: 'Final Inspection',
    subtitle: 'Snag Audits & Systematic Commissioning',
    description: 'Prior to client walkthrough, our senior audit team executes a 250-point inspection covering door seals, electrical lux levels, plumbing gradients, surface finishes, and life-safety systems.',
    deliverables: ['250-Point Snag Audit Dossier', 'Equipment Commissioning Records', 'Statutory Fire & Lift Clearance'],
    durationEstimate: '2 - 3 Weeks Prior to Handover',
    iconName: 'CheckSquare'
  },
  {
    number: '09',
    title: 'Handover',
    subtitle: 'Key Delivery & As-Built Documentation',
    description: 'We welcome you to your completed building with a celebration. We hand over keys, Occupancy Certificate (OC), As-Built drawing sets, equipment warranties, and schedule 1-year complimentary maintenance checks.',
    deliverables: ['Occupancy Certificate (OC)', 'As-Built CAD & Digital Twin Manual', 'Warranty Dossiers & Maintenance Schedule'],
    durationEstimate: 'Completion Day',
    iconName: 'KeyRound'
  }
];

// Placeholder team members as instructed
export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'P. K. Verma',
    role: 'Founder & Managing Director',
    experience: '22+ Years in Civil Infrastructure',
    bio: 'Pioneered PK Developers with a dedication to engineering precision, structural longevity, and transparent client partnerships across South India.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    specialization: 'Structural Strategy, Corporate Leadership & Real Estate Development'
  },
  {
    id: 'team-2',
    name: 'Sarah Mathew',
    role: 'Chief Architect & Design Director',
    experience: '16+ Years in Contemporary Architecture',
    bio: 'Leads the architectural studio creating climate-responsive residences and landmark commercial high-rises with international design standards.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    specialization: 'Biophilic Design, Sustainable Façades & Master Planning'
  },
  {
    id: 'team-3',
    name: 'Rajesh K. Nambiar',
    role: 'VP — Construction & Civil Engineering',
    experience: '18+ Years in Structural Projects',
    bio: 'Oversees site execution, post-tensioned slab construction, structural integrity testing, and vendor management with a zero-compromise mindset.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    specialization: 'High-Rise RCC Engineering, Soil Mechanics & Precast Systems'
  },
  {
    id: 'team-4',
    name: 'Ananya Deshmukh',
    role: 'Head of Project Management & QA/QC',
    experience: '12+ Years in Construction Management',
    bio: 'Enforces rigid quality control standards, milestone tracking, and safety protocols across all ongoing residential and commercial sites.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    specialization: 'CPM Scheduling, BIM Clash Detection & ISO Quality Compliance'
  }
];

// Placeholder testimonials as instructed
export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Client Reference #01 (Residential Villa)',
    clientRole: 'Homeowner, Whitefield Residence',
    projectName: 'The Lumina Modern Villa',
    projectType: 'Luxury Villa Construction',
    rating: 5,
    comment: 'PK Developers delivered our home exactly to the architectural blueprint. The transparency in their bill of quantities, weekly photo audits, and punctual completion set a new benchmark for construction in the city.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    date: 'February 2025'
  },
  {
    id: 'test-2',
    clientName: 'Client Reference #02 (Corporate Tech Campus)',
    clientRole: 'Infrastructure Director, Tech Enterprise',
    projectName: 'Vertex Corporate Tech Hub',
    projectType: 'Commercial Office Tower',
    rating: 5,
    comment: 'Managing a fast-track 185,000 sq.ft commercial construction during heavy monsoons was a massive challenge. PK Developers executed the composite steel frame flawlessly with zero workplace safety incidents.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    date: 'November 2024'
  },
  {
    id: 'test-3',
    clientName: 'Client Reference #03 (Heritage Manor)',
    clientRole: 'Estate Trustee, Richmond Town',
    projectName: 'Colonial Manor Restoration',
    projectType: 'Comprehensive Renovation & Remodeling',
    rating: 5,
    comment: 'Restoring a 90-year-old heritage structure without losing its historic character required extraordinary craftsmanship. Their structural retrofitting and artisan masonry team were second to none.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    date: 'August 2024'
  }
];

export const contactInfo = {
  phone: '+91 (080) 4567-8900',
  phoneAlt: '+91 98765-43210',
  email: 'info@pkdevelopers.com',
  emailSales: 'sales@pkdevelopers.com',
  whatsapp: '+919876543210',
  whatsappDisplay: '+91 98765-43210',
  address: 'PK Business Towers, 4th Floor, 100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038',
  businessHours: 'Monday – Saturday: 9:00 AM – 7:00 PM | Sunday: By Appointment'
};
