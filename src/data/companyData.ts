import { ProcessStep, TeamMember, Testimonial, ValueItem } from '../types';

export const companyStats = [
  { value: '25+', label: 'Years of Experience', description: 'Company-reported track record in construction and property development [Needs Documentary Confirmation]' },
  { value: '4', label: 'Featured Projects', description: 'Active plotted townships, luxury turnkey villas & commercial convention venues' },
  { value: '100%', label: 'Title Transparency', description: 'Commitment to encumbrance verification, survey demarcation, and legal due diligence' },
  { value: 'Direct', label: 'Developer Pricing', description: 'Direct consultation with the developer with zero intermediary commissions' }
];

export const companyValues: ValueItem[] = [
  {
    title: 'Absolute Title Transparency',
    description: 'We prioritize clear title records, Encumbrance Certificate (EC) scrutiny, and statutory municipal compliance before offering any property.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Fair Market Valuation',
    description: 'We evaluate local micro-market data and comparative land pricing across Mysuru and Mandya to ensure competitive and realistic rates.',
    icon: 'CheckCircle'
  },
  {
    title: 'Zero Hidden Fees & Clarity',
    description: 'Direct and transparent dealings, open project documentation, and zero surprise intermediary fees throughout your purchase.',
    icon: 'Eye'
  },
  {
    title: 'Strategic Growth Corridors',
    description: 'Our layouts and developments are selected for high-appreciation connectivity along the Bengaluru-Mysuru Expressway and Mysuru Ring Road.',
    icon: 'Zap'
  },
  {
    title: 'End-to-End Registration Support',
    description: 'From initial site visit and agreement to Sub-Registrar execution and Khata facilitation, we assist at each key step.',
    icon: 'Clock'
  },
  {
    title: 'Client-First Advisory',
    description: 'Whether you are purchasing a residential plot, commissioning a turnkey villa, or booking a venue, your satisfaction and security are our priority.',
    icon: 'HeartHandshake'
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Requirement Consultation',
    subtitle: 'Understanding Your Property Goals & Budget',
    description: 'We begin with an in-person or remote consultation to evaluate your specific requirements—whether acquiring a residential plot, custom villa build, or venue reservation.',
    deliverables: ['Buyer Goal Assessment', 'Project Availability Details', 'Transparent Price Structure'],
    durationEstimate: 'Day 1 - 2',
    iconName: 'MessageSquare'
  },
  {
    number: '02',
    title: 'Project & Site Inspection',
    subtitle: 'Guided On-Site Layout Visit',
    description: 'We coordinate an on-site visit to inspect the layout, verify plot boundaries, review road infrastructure, water pipelines, and surrounding connectivity.',
    deliverables: ['Physical Plot Inspection', 'Masterplan Review', 'Location Connectivity Assessment'],
    durationEstimate: 'Day 2 - 4',
    iconName: 'MapPin'
  },
  {
    number: '03',
    title: 'Legal Due Diligence',
    subtitle: 'Title Search & Municipal Document Review',
    description: 'Review of parent title deeds, Nil-Encumbrance Certificates (EC), survey maps, conversion orders, and municipal/panchayat approvals.',
    deliverables: ['Title Document Copies', 'Nil-Encumbrance Verification', 'Statutory Approval Check'],
    durationEstimate: 'Week 1',
    iconName: 'FileText'
  },
  {
    number: '04',
    title: 'Allotment & Agreement',
    subtitle: 'Formal Agreement to Sell',
    description: 'Following plot selection, we draft a transparent Agreement to Sell detailing all commercial terms, plot dimensions, and payment schedules.',
    deliverables: ['Written Agreement to Sell', 'Milestone Payment Schedule', 'Bank Loan Support (if required)'],
    durationEstimate: 'Week 1 - 2',
    iconName: 'Calculator'
  },
  {
    number: '05',
    title: 'Sub-Registrar Deed Execution',
    subtitle: 'Official Registration & Deed Handover',
    description: 'We coordinate stamp duty compliance, sub-registrar slot booking, registered deed execution, and physical plot boundary handover.',
    deliverables: ['Registered Sale Deed', 'Physical Possession & Boundary Markers', 'Khata Transfer Assistance'],
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
  email: 'info@pkdevelopers.co.in',
  emailSales: 'deals@pkdevelopers.co.in',
  whatsapp: '919108081321',
  whatsappDisplay: '+91 91080 81321',
  address: 'No 39, Opp to Al Badar Circle, 1st Floor, 2nd Stage, Rajiv Nagar, Mysuru - 570019, Karnataka',
  businessHours: '10:00 AM – 3:00 PM & 7:00 PM – 10:00 PM',
  social: {
    instagram: 'https://www.instagram.com/p.k_devx?psln=MXZtemNqd2ZkejlsMA==',
    facebook: 'https://www.facebook.com/share/1CBQT34ced/',
    x: 'https://x.com/home',
    linkedin: 'https://www.linkedin.com/feed/',
    whatsapp: 'https://wa.me/919108081321?text=Hello%20PK%20Developers,%20I%20would%20like%20to%20inquire%20about%20your%20properties.'
  }
};

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/p.k_devx?psln=MXZtemNqd2ZkejlsMA==',
    icon: '/images/social/instagram.png',
    label: 'Follow PK Developers on Instagram'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1CBQT34ced/',
    icon: '/images/social/facebook.png',
    label: 'Follow PK Developers on Facebook'
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/home',
    icon: '/images/social/x.png',
    label: 'Follow PK Developers on X'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/feed/',
    icon: '/images/social/linkedin.png',
    label: 'Connect with PK Developers on LinkedIn'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/919108081321?text=Hello%20PK%20Developers,%20I%20would%20like%20to%20inquire%20about%20your%20properties.',
    icon: '/images/social/whatsapp.png',
    label: 'Chat with PK Developers on WhatsApp'
  }
];

export const WEB3FORMS_ACCESS_KEY = '489005f5-571f-4a93-a524-79cd6aa51244';

