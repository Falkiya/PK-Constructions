import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'residential',
    slug: 'residential-construction',
    title: 'Residential Property Dealing & Sales',
    shortDescription: 'Buying, selling, and resale of luxury architectural villas, premium penthouses, and gated community residences.',
    fullDescription: 'PK Properties represents discerning buyers and sellers in high-value residential property transactions. We offer a curated inventory of verified luxury villas, duplex penthouses, and prime residential apartments across Bengaluru with 100% legal title verification, fair-market valuation, and transparent closing.',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      '100% verified clear-title properties with 30-year search history',
      'Exclusive off-market luxury villa and penthouse listings',
      'Transparent fair-market price negotiation directly with verified owners',
      'Complete legal documentation, sale agreement drafting & registration assistance'
    ],
    capabilities: [
      'Ultra-Luxury Independent Villas & Estates',
      'Gated Community Designer Villas',
      'High-Rise Luxury Penthouses & Duplexes',
      'Resale & Secondary Market Premium Properties',
      'Pre-Launch & Ready-to-Move Builder Inventory'
    ],
    deliverables: [
      'Comprehensive Property Title Verification Report',
      'Market Comparative Pricing & Rental Yield Analysis',
      'Formulated Agreement to Sell (ATS) & Legal Diligence Dossier',
      'Sub-Registrar Slot Booking, Registration & Key Handover'
    ]
  },
  {
    id: 'commercial',
    slug: 'commercial-construction',
    title: 'Commercial Real Estate & Corporate Leasing',
    shortDescription: 'Prime office spaces, Grade-A IT park floor-plates, retail lifestyle showrooms, and pre-leased investment assets.',
    fullDescription: 'Our commercial property division assists enterprises, retail brands, and institutional investors in securing high-visibility commercial spaces. From tech park office leases to high-street retail showrooms and pre-leased bank/corporate spaces offering assured rental yields.',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      'Direct access to Grade-A commercial tech parks and corporate buildings',
      'Pre-leased commercial properties delivering 8% - 10% guaranteed rental returns',
      'Flexible corporate lease structuring with lock-in & escalation clauses',
      'Complete statutory, zoning, fire NOC, and occupancy certificate (OC) checks'
    ],
    capabilities: [
      'Grade-A Corporate Office Spaces & IT Campuses',
      'High-Street Retail Showrooms & Plazas',
      'Pre-Leased Commercial Investment Assets',
      'Co-Working & Managed Enterprise Office Floors',
      'Industrial Warehouses & Logistics Hubs'
    ],
    deliverables: [
      'Commercial Space Feasibility & Footfall Density Audit',
      'Commercial Lease Agreement Drafting & Legal Vetting',
      'Tenant Verification & Corporate Due Diligence File',
      'Fit-Out Coordination & Handover Documentation'
    ]
  },
  {
    id: 'plots-land',
    slug: 'architecture-planning',
    title: 'Plots & Land Dealing (Residential & Commercial)',
    shortDescription: 'RERA, BDA & BMRDA approved villa plots, commercial highway frontage lands, and joint venture development parcels.',
    fullDescription: 'We specialize in sourcing, verifying, and transacting high-potential land parcels and approved layout plots. Every land parcel undergoes rigorous legal scrutiny to ensure clear titles, unencumbered ownership, and approved zoning for immediate construction or long-term capital appreciation.',
    icon: 'Compass',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      'BDA, BMRDA, DTCP & RERA sanctioned residential layout plots',
      'Zero-encumbrance agricultural, conversion & commercial lands',
      'High-growth corridor locations with immense capital appreciation potential',
      'Assistance with boundary survey, demarcation & fencing'
    ],
    capabilities: [
      'Gated Community Villa Plots with Underground Utilities',
      'Commercial Highway Frontage Land Parcels',
      'Joint Venture (JV) Land Sourcing for Developers',
      'Farmland & Managed Agro-Estates',
      'Corner & Lake-Facing Premium Plots'
    ],
    deliverables: [
      'Certified Layout Sanction Plan & RERA Registration Copy',
      'Survey Settlement Records (Tippani, Akarband, RTC)',
      'Nil Encumbrance Certificate (Form 15 for 30 Years)',
      'Sub-Registrar Registration & E-Khata Transfer'
    ]
  },
  {
    id: 'investment',
    slug: 'project-management',
    title: 'Real Estate Investment Advisory & High-Yield Assets',
    shortDescription: 'Data-driven investment strategies, pre-leased commercial acquisitions, and high-ROI property portfolio management.',
    fullDescription: 'PK Properties guides high-net-worth individuals, NRIs, and institutional investors toward high-performing real estate assets. We analyze micro-market infrastructure developments, metro extensions, and rental demand trends to maximize capital growth and steady cashflows.',
    icon: 'ClipboardCheck',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      'Pre-leased commercial assets with AAA-rated multinational tenants',
      'In-depth 5-year and 10-year capital appreciation forecasts',
      'Distressed and motivated seller off-market opportunities',
      'Complete portfolio rebalancing and property management services'
    ],
    capabilities: [
      'Pre-Leased Banks & MNC Corporate Office Spaces',
      'Fractional & Sole-Ownership Commercial Real Estate',
      'Emerging Infrastructure Corridor Land Scouting',
      'NRI Real Estate Investment Desk',
      'Asset Valuation & Exit Strategy Planning'
    ],
    deliverables: [
      'Customized Real Estate Investment Dossier (IRR & ROI Models)',
      'Tenant Lease Security & Cashflow History Documentation',
      'Comprehensive Micro-Market Price Velocity Report',
      'Quarterly Asset Appreciation Review'
    ]
  },
  {
    id: 'development',
    slug: 'renovation-remodeling',
    title: 'Turnkey Property Development & Villa Construction',
    shortDescription: 'For buyers acquiring plots: complete architectural design, municipal sanctions, and turnkey luxury villa construction.',
    fullDescription: 'For clients who purchase land or plots through us and wish to construct their dream villa or commercial building, our in-house civil engineering division provides turnkey design and build services with fixed timelines, transparent BOQs, and 10-year structural guarantees.',
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      'Single-window accountability from land purchase to final housewarming',
      'Custom architectural floor plans, 3D renderings & Vastu design',
      'Fixed-cost transparent itemized Bill of Quantities (BOQ)',
      '10-year structural warranty & occupancy certificate (OC) handover'
    ],
    capabilities: [
      'Turnkey Luxury Villa Construction on Client Plots',
      'Commercial Showroom & Office Building Development',
      'Comprehensive Renovation & Modernization of Acquired Properties',
      'Interior Fit-Outs & Custom Millwork',
      'Municipal Sanction Approvals & Utility Connections'
    ],
    deliverables: [
      'Good-for-Construction (GFC) Blueprints & 3D Renders',
      'Itemized Material Specification Contract',
      'Milestone-Driven Progress Logs with Photos',
      'Occupancy Certificate & Building Handover Dossier'
    ]
  }
];
