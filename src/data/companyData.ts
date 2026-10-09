import { ProcessStep, TeamMember, Testimonial, ValueItem } from '../types';

export const companyStats = [
  { value: '100%', label: 'Clear Title Guarantee', description: 'Rigorous 30-year legal search, encumbrance check & municipal verification' },
  { value: 'Direct', label: 'Owner Representation', description: 'Direct seller negotiation with zero hidden brokerage or markups' },
  { value: 'RERA', label: 'Compliant & Approved', description: 'Vetted layout plots, residential developments & commercial properties' },
  { value: 'End-to-End', label: 'Legal & Registration', description: 'Complete sub-registrar execution, deed conveyance & Khata transfer' }
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

export const teamMembers: TeamMember[] = [];

export const testimonialsData: Testimonial[] = [];

export const contactInfo = {
  phone: '+91 91080 81321',
  phoneRaw: '+919108081321',
  phoneAlt: '+91 91080 81321',
  email: 'info@pkdevelopers.com',
  emailSales: 'deals@pkdevelopers.com',
  whatsapp: '919108081321',
  whatsappDisplay: '+91 91080 81321',
  address: 'Indiranagar, Bengaluru, Karnataka 560038',
  businessHours: 'Monday – Saturday: 9:00 AM – 7:30 PM | Sunday: By Appointment (Site Visits)'
};
