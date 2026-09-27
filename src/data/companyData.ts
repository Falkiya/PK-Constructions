import { ProcessStep, TeamMember, Testimonial, ValueItem } from '../types';

export const companyStats = [
  { value: '500+', label: 'Property Deals Closed', description: 'Proven track record in prime residential, commercial & land transactions' },
  { value: '15+', label: 'Years in Real Estate', description: 'Expert property dealing, market valuation & legal advisory' },
  { value: '₹650 Cr+', label: 'Property Transacted', description: 'High-value villas, corporate tech parks, retail spaces & plots' },
  { value: '100%', label: 'Clear Title Guarantee', description: 'Rigorous 30-year legal search, encumbrance check & municipal verification' },
  { value: '98.5%', label: 'Client Referral Rate', description: 'Trusted by families, high-net-worth investors & corporate enterprises' }
];

export const companyValues: ValueItem[] = [
  {
    title: 'Absolute Title Transparency',
    description: 'Every property listed or transacted undergoes a rigorous 30-year title search, encumbrance check, and RERA/municipal compliance audit before listing.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Fair Market Valuation',
    description: 'We utilize deep micro-market data and comparative property analyses to ensure buyers and sellers secure the most lucrative, realistic market rates.',
    icon: 'CheckCircle'
  },
  {
    title: 'Zero Hidden Fees & Clarity',
    description: 'Completely transparent advisory terms, open legal documentation, and zero surprise commissions throughout your property acquisition or sale.',
    icon: 'Eye'
  },
  {
    title: 'High-Yield Investment Insights',
    description: 'We pinpoint high-growth infrastructure corridors, pre-leased commercial assets, and high-appreciation land parcels delivering 8-12% annual returns.',
    icon: 'Zap'
  },
  {
    title: 'End-to-End Legal & Registration Support',
    description: 'From initial offer letters and sale agreements to sub-registrar deed registration and Khata transfer, our legal team manages every single step.',
    icon: 'Clock'
  },
  {
    title: 'Client-First Advisory',
    description: 'Whether you are buying your first luxury home, leasing a commercial tech park, or acquiring investment plots, your financial security is our highest priority.',
    icon: 'HeartHandshake'
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Requirement Consultation',
    subtitle: 'Mapping Your Property Goals & Budget',
    description: 'We begin with a focused consultation to evaluate your specific objectives—whether buying a luxury villa, acquiring commercial space, selling an estate, or investing in approved plots.',
    deliverables: ['Buyer / Investor Goal Blueprint', 'Location & Micro-Market Analysis', 'Budget & Payment Plan Structuring'],
    durationEstimate: 'Day 1 - 2',
    iconName: 'MessageSquare'
  },
  {
    number: '02',
    title: 'Curated Property Sourcing',
    subtitle: 'Exclusive Off-Market & Verified Listings',
    description: 'Our property advisors curate a handpicked portfolio of vetted properties meeting your exact layout, size, neighborhood, and return-on-investment parameters.',
    deliverables: ['Custom Property Dossier', 'High-Res Floor Plans & Photos', 'Comparative Price Analysis Matrix'],
    durationEstimate: 'Day 3 - 5',
    iconName: 'MapPin'
  },
  {
    number: '03',
    title: 'Legal Due Diligence',
    subtitle: '30-Year Title Search & RERA Verification',
    description: 'Our in-house property advocates review all mother deeds, encumbrance certificates (EC), layout approvals (BDA, BMRDA, DTCP), Khata certificates, and tax receipts.',
    deliverables: ['30-Year Legal Title Search Report', 'Encumbrance Certificate (Nil EC)', 'Statutory Approvals & RERA Check'],
    durationEstimate: 'Week 1 - 2',
    iconName: 'FileText'
  },
  {
    number: '04',
    title: 'Site Inspections & Valuation',
    subtitle: 'Guided Site Visits & Fair Price Audit',
    description: 'We escort you on private site inspections, assessing construction quality, neighborhood infrastructure, road connectivity, water availability, and future appreciation potential.',
    deliverables: ['On-Site Property Inspection', 'Infrastructure & Connectivity Audit', 'Independent Property Valuation'],
    durationEstimate: 'Week 2',
    iconName: 'Compass'
  },
  {
    number: '05',
    title: 'Negotiation & Sale Agreement',
    subtitle: 'Securing the Best Price & Terms',
    description: 'We negotiate directly with property owners and institutional builders to secure the most favorable commercial terms, followed by drafting a legally robust Agreement to Sell.',
    deliverables: ['Negotiated Best Market Price', 'Formal Agreement to Sell (ATS)', 'Bank Loan Approval Coordination'],
    durationEstimate: 'Week 2 - 3',
    iconName: 'Calculator'
  },
  {
    number: '06',
    title: 'Registration & Handover',
    subtitle: 'Sub-Registrar Execution & Key Handover',
    description: 'We coordinate all stamp duty payments, slot booking at the sub-registrar office, deed execution, formal possession handover, and post-registration mutation / Khata transfer.',
    deliverables: ['Registered Sale Deed / Lease Deed', 'Physical Possession & Keys Handover', 'Khata Transfer & Utility Mutation'],
    durationEstimate: 'Closing Day',
    iconName: 'KeyRound'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'P. K. Verma',
    role: 'Founder & Principal Real Estate Advisor',
    experience: '22+ Years in Real Estate & Property Dealing',
    bio: 'Founded PK Developers with a mission to deliver radical transparency, verified clear-title transactions, and premier investment advisory across South India.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    specialization: 'High-Value Property Deals, Land Acquisition & Real Estate Investment'
  },
  {
    id: 'team-2',
    name: 'Sarah Mathew',
    role: 'Director — Luxury Residential Dealing',
    experience: '16+ Years in Premium Real Estate Sales',
    bio: 'Leads our luxury residential division, specializing in bespoke villas, penthouses, and gated community estates for high-net-worth clients.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    specialization: 'Luxury Villas, Penthouses, Resale Advisory & Client Representation'
  },
  {
    id: 'team-3',
    name: 'Rajesh K. Nambiar',
    role: 'VP — Commercial Properties & Corporate Leasing',
    experience: '18+ Years in Commercial Real Estate',
    bio: 'Manages Grade-A IT park office acquisitions, high-street retail spaces, and pre-leased investment assets with institutional tenants.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    specialization: 'Commercial Leasing, Pre-Leased High-Yield Assets & Retail Deals'
  },
  {
    id: 'team-4',
    name: 'Ananya Deshmukh',
    role: 'Head of Legal Due Diligence & Property Documentation',
    experience: '12+ Years in Real Estate Law & RERA Compliance',
    bio: 'Oversees 30-year title verifications, encumbrance audits, RERA compliance, and sub-registrar deed execution for 100% dispute-free transactions.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    specialization: 'Property Title Verification, RERA Approvals, Khata Transfers & Deed Conveyance'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Dr. Vikramaditya Rao',
    clientRole: 'Private Homeowner, Whitefield',
    projectName: 'The Lumina Modern Villa',
    projectType: 'Luxury Villa Purchase (₹6.8 Cr)',
    rating: 5,
    comment: 'Finding an authentic clear-title luxury villa in Whitefield was daunting until we met PK Developers. Their legal team inspected 30 years of documentation, negotiated a stellar deal with the seller, and coordinated registration effortlessly.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    date: 'February 2025'
  },
  {
    id: 'test-2',
    clientName: 'Sanjay Krishnaswamy',
    clientRole: 'Managing Director, Fintech Venture',
    projectName: 'Vertex Corporate Tech Hub',
    projectType: 'Commercial Office Space Lease (45,000 sq.ft)',
    rating: 5,
    comment: 'PK Developers secured prime commercial floor-plates for our tech headquarters on the Outer Ring Road with flexible lease terms and pre-fitted infrastructure. Truly professional commercial property dealers.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    date: 'November 2024'
  },
  {
    id: 'test-3',
    clientName: 'Meera & Arvind Shenoy',
    clientRole: 'NRI Investors, Singapore',
    projectName: 'Serenity Palms Gated Villa Plots',
    projectType: 'RERA Villa Plot Investment (2 Plots)',
    rating: 5,
    comment: 'Being overseas, we needed complete trust and clear titles. PK Developers facilitated video walkthroughs, shared verified RERA approvals, and managed the entire power of attorney registration seamlessly. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    date: 'August 2024'
  }
];

export const contactInfo = {
  phone: '+91 (080) 4567-8900',
  phoneAlt: '+91 98765-43210',
  email: 'info@pkdevelopers.com',
  emailSales: 'deals@pkdevelopers.com',
  whatsapp: '+919876543210',
  whatsappDisplay: '+91 98765-43210',
  address: 'PK Business Towers, 4th Floor, 100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038',
  businessHours: 'Monday – Saturday: 9:00 AM – 7:30 PM | Sunday: By Appointment (Site Visits)'
};
