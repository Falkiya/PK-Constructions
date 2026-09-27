import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    slug: 'the-lumina-modern-villa',
    name: 'The Lumina Modern Villa',
    category: 'residential',
    subCategory: 'Villas',
    location: 'Whitefield, Bengaluru',
    status: 'Completed',
    completionDate: '2025',
    area: '9,200 sq.ft (Plot: 12,000 sq.ft)',
    clientType: 'Private Homeowner Deal',
    price: '₹6.80 Cr',
    propertyType: '4BHK Ultra-Luxury Designer Villa',
    transactionType: 'For Sale',
    possession: 'Ready to Move',
    reraId: 'PRM/KA/RERA/1251/310/PR/240218/006412',
    description: 'An exclusive clear-title luxury modern residence featuring cantilevered architectural volumes, private basalt reflection pool, double-height atrium, and fully automated European fittings in a prime Whitefield enclave.',
    challenge: 'Securing a clear, unencumbered 12,000 sq.ft plot with 30-year mother title verification in high-demand Whitefield while coordinating customized structural engineering approvals with BBMP.',
    solution: 'PK Properties conducted rigorous title due diligence, obtained nil-encumbrance clearance, negotiated direct pricing from the estate owner, and managed the complete legal deed execution.',
    features: [
      {
        category: 'Architecture',
        title: 'Cantilevered Volumetric Form',
        description: 'Striking geometric projections providing passive solar shading across both upper levels.'
      },
      {
        category: 'Materials',
        title: 'Travertine & Fair-Faced Concrete',
        description: 'Premium imported Italian silver travertine contrasted with exposed architectural concrete.'
      },
      {
        category: 'Interior',
        title: 'Double-Height Atrium',
        description: 'Soaring 7.2-meter ceiling with custom fluted timber accents and integrated ambient lighting.'
      },
      {
        category: 'Landscaping',
        title: 'Reflective Water Basin & Flora',
        description: 'Native drought-tolerant flora and a cascading basalt infinity water element.'
      },
      {
        category: 'Sustainability',
        title: '15kW Solar & Rainwater Harvesting',
        description: 'Rooftop micro-inverter solar grid combined with 40,000L subterranean rainwater filtration.'
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        caption: 'South-facing exterior showing post-tensioned cantilevers and ambient mood lighting.'
      },
      {
        url: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=80',
        caption: 'Spacious double-height living room with acoustic glazing overlooking the garden.'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
        caption: 'State-of-the-art minimalist chef kitchen with integrated quartz waterfall island.'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
        caption: 'Master suite opening into private elevated timber terrace and plunge pool.'
      }
    ],
    timeline: [
      {
        stage: 'Title Due Diligence & Sourcing',
        duration: 'Week 1 - 2',
        status: 'completed',
        description: '30-year mother deed audit, encumbrance check, and zoning compliance verification.'
      },
      {
        stage: 'Direct Seller Negotiation & ATS',
        duration: 'Week 3',
        status: 'completed',
        description: 'Commercial price negotiation and drafting of the formal Agreement to Sell (ATS).'
      },
      {
        stage: 'Architectural Review & Handover Audit',
        duration: 'Week 4',
        status: 'completed',
        description: 'Comprehensive 200-point structural, MEP, and finish quality audit prior to registration.'
      },
      {
        stage: 'Sub-Registrar Registration & Handover',
        duration: 'Closing Day',
        status: 'completed',
        description: 'Stamp duty payment, registered sale deed execution, Khata mutation, and key handover.'
      }
    ],
    featured: true
  },
  {
    id: 'proj-2',
    slug: 'vertex-corporate-tech-hub',
    name: 'Vertex Corporate Tech Hub',
    category: 'commercial',
    subCategory: 'Offices',
    location: 'Electronic City, Phase 1',
    status: 'Completed',
    completionDate: '2024',
    area: '185,000 sq.ft (Floor-plate: 32,000 sq.ft)',
    clientType: 'Institutional Corporate Deal',
    price: '₹140 Cr (Yield: 9.2%)',
    propertyType: 'Grade-A Commercial IT Campus',
    transactionType: 'Investment',
    possession: 'Pre-Leased Asset',
    reraId: 'PRM/KA/RERA/1251/310/PR/230911/005210',
    description: 'A pre-leased IGBC Platinum-certified commercial office complex occupied by Fortune 500 tech firms, providing an immediate 9.2% net rental yield with long-term 9-year institutional leases.',
    challenge: 'Structuring a complex cross-border commercial acquisition involving multiple international corporate leases, escrow mechanisms, and statutory environmental clearances.',
    solution: 'PK Properties structured the commercial deal, audited tenant covenants, verified fire NOC and occupancy certifications, and closed the transaction within 45 days.',
    features: [
      {
        category: 'Architecture',
        title: 'High-Efficiency Floor Plates',
        description: 'Core-centric structural layout offering 89% net usable space per floor.'
      },
      {
        category: 'Materials',
        title: 'Unitized Curtain Wall Glazing',
        description: 'Acoustic-damped double silver Low-E thermal unitized facade with shading louvers.'
      },
      {
        category: 'Interior',
        title: 'Biophilic Collaboration Atrium',
        description: 'Internal living green walls spanning 4 stories with circulating purified airflow.'
      },
      {
        category: 'Sustainability',
        title: 'IGBC Platinum & Net Zero Ready',
        description: 'Variable Refrigerant Flow (VRF) HVAC system with energy heat recovery wheels.'
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
        caption: 'Tower exterior showcasing high-performance unitized curtain wall glazing.'
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
        caption: 'Grand reception and security turnstile concourse with Italian terrazzo.'
      },
      {
        url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80',
        caption: 'Executive boardroom and hybrid collaborative conference facilities.'
      }
    ],
    timeline: [
      {
        stage: 'Institutional Deal Structuring',
        duration: 'Month 1',
        status: 'completed',
        description: 'Auditing 9-year corporate tenant lease covenants and rental cashflow histories.'
      },
      {
        stage: 'Statutory & Technical Due Diligence',
        duration: 'Month 2',
        status: 'completed',
        description: 'Verifying Occupancy Certificate (OC), Fire NOC, and environmental compliance.'
      },
      {
        stage: 'Commercial Conveyance & Closing',
        duration: 'Month 3',
        status: 'completed',
        description: 'Escrow payment settlement, sub-registrar lease assignment, and seamless yield transfer.'
      }
    ],
    featured: true
  },
  {
    id: 'proj-3',
    slug: 'the-grand-courtyard-estate',
    name: 'The Grand Courtyard Estate',
    category: 'residential',
    subCategory: 'Luxury Homes',
    location: 'Sarjapur Hills, Bengaluru',
    status: 'Completed',
    completionDate: '2024',
    area: '14,500 sq.ft (Plot: 24,000 sq.ft)',
    clientType: 'Private Family Office',
    price: '₹12.50 Cr',
    propertyType: '6BHK Heritage Courtyard Manor',
    transactionType: 'Exclusive Listing',
    possession: 'Immediate Registration',
    reraId: 'PRM/KA/RERA/1251/310/PR/231105/005844',
    description: 'An expansive traditional-contemporary courtyard manor that reinterprets heritage veranda architecture on a private 24,000 sq.ft wooded plot with private lap pool and subterranean wine cellar.',
    challenge: 'High-value private resale requiring confidential representation, buyer qualification, and comprehensive municipal khata consolidation across two adjacent land parcels.',
    solution: 'PK Properties handled the exclusive private mandate, consolidated the E-Khata documentation, and represented both buyer and seller with complete fiduciary integrity.',
    features: [
      {
        category: 'Architecture',
        title: 'Centred Microclimate Courtyard',
        description: 'Central open-to-sky atrium creates passive cooling convection currents throughout.'
      },
      {
        category: 'Materials',
        title: 'Chiseled Granite & Teakwood',
        description: 'Hand-dressed local Sadahalli granite paired with sustainably sourced Burma teak.'
      },
      {
        category: 'Landscaping',
        title: 'Conservation Arboretum',
        description: 'Landscape integrated seamlessly with 40-year-old preserved native trees and rain swales.'
      },
      {
        category: 'Interior',
        title: 'Bespoke Art Deco Millwork',
        description: 'Custom fluted brass partitions, marble inlaid entry halls, and artisan timber ceilings.'
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
        caption: 'Rear terrace view featuring the natural stone lap pool and heritage pergola.'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        caption: 'Daylight view of the central open courtyard connector.'
      }
    ],
    timeline: [
      {
        stage: 'Private Mandate & Valuation',
        duration: 'Week 1',
        status: 'completed',
        description: 'Valuation appraisal, title check, and confidential buyer matching.'
      },
      {
        stage: 'Khata Consolidation & Vetting',
        duration: 'Week 2 - 3',
        status: 'completed',
        description: 'BBMP E-Khata consolidation and boundary survey verification.'
      },
      {
        stage: 'Registration & Handover',
        duration: 'Week 4',
        status: 'completed',
        description: 'Deed execution at sub-registrar and formal physical estate handover.'
      }
    ],
    featured: true
  },
  {
    id: 'proj-4',
    slug: 'the-prism-business-tower',
    name: 'The Prism Business Tower',
    category: 'commercial',
    subCategory: 'Commercial Buildings',
    location: 'Central CBD, Bengaluru',
    status: 'Completed',
    completionDate: '2025',
    area: '240,000 sq.ft (Available: 15,000 - 60,000 sq.ft)',
    clientType: 'Commercial Real Estate Deal',
    price: '₹165 / sq.ft (Lease) | ₹210 Cr (Outright)',
    propertyType: '16-Storey Commercial Corporate Tower',
    transactionType: 'For Lease',
    possession: 'Immediate Fit-Out',
    reraId: 'PRM/KA/RERA/1251/310/PR/240112/006122',
    description: 'A landmark 16-storey commercial corporate tower in the heart of Bengaluru Central CBD, offering column-free floor plates, 100% DG backup, and 3 levels of subterranean parking.',
    challenge: 'Coordinating high-profile corporate lease negotiations for multiple financial banking suites with tailored lock-in terms and parking bay allocations.',
    solution: 'PK Properties structured multi-floor corporate leases with multinational banks and consulting firms, maximizing occupancy and achieving record rental yields.',
    features: [
      {
        category: 'Architecture',
        title: 'Parametric Facade Geometry',
        description: 'Faceted glass curtain wall creating a prismatic jewel aesthetic on the skyline.'
      },
      {
        category: 'Sustainability',
        title: 'LEED Gold Certified',
        description: 'Smart energy recuperation elevators, daylight harvesting sensors, and rooftop solar canopy.'
      },
      {
        category: 'Materials',
        title: 'High-Strength Concrete Core',
        description: 'M70 grade specialized self-compacting concrete engineered for 100+ year durability.'
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80',
        caption: 'The dramatic prismatic glass facade soaring against the skyline.'
      },
      {
        url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80',
        caption: 'Triple-height grand entrance lobby with security turnstiles and natural stone.'
      }
    ],
    timeline: [
      {
        stage: 'Commercial Floor Allocation',
        duration: 'Month 1',
        status: 'completed',
        description: 'Corporate client requirement matching and floor-plate optimization.'
      },
      {
        stage: 'Commercial Lease Structuring',
        duration: 'Month 2',
        status: 'completed',
        description: 'Agreement on lock-in periods, CAM charges, and rent-free fitout duration.'
      },
      {
        stage: 'Possession for Tenant Fit-Out',
        duration: 'Month 3',
        status: 'completed',
        description: 'Key handover to corporate fit-out contractors and operations kickoff.'
      }
    ],
    featured: true
  },
  {
    id: 'proj-5',
    slug: 'colonial-heritage-manor-restoration',
    name: 'Colonial Heritage Estate Parcel',
    category: 'renovation',
    subCategory: 'Heritage Properties',
    location: 'Richmond Town, Bengaluru',
    status: 'Completed',
    completionDate: '2024',
    area: '11,200 sq.ft (Plot: 18,000 sq.ft)',
    clientType: 'Private Heritage Trust',
    price: '₹16.50 Cr',
    propertyType: 'Restored Colonial Estate & Land',
    transactionType: 'Exclusive Listing',
    possession: 'Immediate Possession',
    reraId: 'PRM/KA/RERA/1251/310/PR/230419/004910',
    description: 'A restored 90-year-old colonial manor set on an 18,000 sq.ft prime residential parcel in central Richmond Town, offering restored vintage architecture and immense redevelopment or private living value.',
    challenge: 'Complex inheritance title resolution spanning three generations of family trust deeds requiring meticulous legal reconciliation.',
    solution: 'Our property legal desk reconciled 50+ years of trust documents, drafted consent deeds, obtained BBMP Khata certification, and conducted a dispute-free private sale.',
    features: [
      {
        category: 'Architecture',
        title: 'Heritage Facade Conservation',
        description: 'Restoration of hand-carved Mangalore tile cornices, arched colonnades, and brass ironmongery.'
      },
      {
        category: 'Materials',
        title: 'Authentic Lime & Reclaimed Teak',
        description: 'Breathable traditional lime plasters mixed with natural jaggery and egg-white formulas.'
      },
      {
        category: 'Interior',
        title: 'Modern HVAC & Concealed Automation',
        description: 'Discreet ceiling-recessed climate control vents preserving original decorative rosettes.'
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
        caption: 'Restored colonial facade with refinished heritage wooden verandas and shutters.'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        caption: 'Living salon featuring exposed restored timber rafters and contemporary furnishings.'
      }
    ],
    timeline: [
      {
        stage: 'Trust Document Audit',
        duration: 'Month 1',
        status: 'completed',
        description: 'Reconciling 50-year trust deeds and inheritance succession certificates.'
      },
      {
        stage: 'Khata Clearance & Mutation',
        duration: 'Month 2',
        status: 'completed',
        description: 'BBMP Khata transfer and encumbrance certification.'
      },
      {
        stage: 'Sale Execution & Closing',
        duration: 'Month 3',
        status: 'completed',
        description: 'High-value deed execution and physical estate possession.'
      }
    ],
    featured: false
  },
  {
    id: 'proj-6',
    slug: 'zenith-retail-galleria',
    name: 'Zenith Retail & Lifestyle Galleria',
    category: 'commercial',
    subCategory: 'Retail Spaces',
    location: 'Outer Ring Road, Marathahalli',
    status: 'Ongoing',
    completionDate: 'Q3 2026',
    area: '115,000 sq.ft (Showrooms: 1,800 - 8,500 sq.ft)',
    clientType: 'Commercial Retail Project',
    price: '₹3.20 Cr onwards (Investment)',
    propertyType: 'High-Street Retail Showrooms',
    transactionType: 'For Sale',
    possession: 'Under Construction (Possession Q3 2026)',
    reraId: 'PRM/KA/RERA/1251/310/PR/240502/006811',
    description: 'An open-air experiential shopping, dining, and retail plaza on the high-density Outer Ring Road corridor, offering pre-leased anchor retail spaces with projected 8.8% rental yields.',
    challenge: 'Investor allocation for individual commercial showroom units while securing national retail brand anchor commitments in advance.',
    solution: 'PK Properties structured early investor purchase options backed by guaranteed pre-lease agreements with national F&B and fashion brands.',
    features: [
      {
        category: 'Architecture',
        title: 'Open Promenade Design',
        description: 'Pedestrian-priority boulevard with shaded pocket plazas and amphitheatre steps.'
      },
      {
        category: 'Materials',
        title: 'Kinetic Shading & Steel Pergolas',
        description: 'Tensile membrane canopies that adapt dynamically to ambient temperature and sunlight.'
      },
      {
        category: 'Landscaping',
        title: 'Urban Water Ribbons',
        description: 'Continuous recirculating water streams that lower the ambient microclimate temperature.'
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1600&q=80',
        caption: 'Render and on-site construction view of the central dining promenade.'
      }
    ],
    timeline: [
      {
        stage: 'Retail Anchor Signings',
        duration: 'Month 1 - 3',
        status: 'completed',
        description: 'Pre-leasing 45,000 sq.ft to national anchor brands.'
      },
      {
        stage: 'Investor Allotments',
        duration: 'Month 4 - 8',
        status: 'in-progress',
        description: 'Individual showroom title allotments and RERA agreement execution.'
      },
      {
        stage: 'Fit-Out & Retail Launch',
        duration: 'Upcoming',
        status: 'upcoming',
        description: 'Handover to retail brands and commencement of rental cashflows.'
      }
    ],
    featured: false
  },
  {
    id: 'proj-7',
    slug: 'aurora-sky-residences',
    name: 'Aurora Sky Residences',
    category: 'residential',
    subCategory: 'Apartments',
    location: 'Indiranagar, Bengaluru',
    status: 'Completed',
    completionDate: '2024',
    area: '48,000 sq.ft (Units: 4,000 sq.ft Full Floor)',
    clientType: 'Luxury Boutique Apartment Listing',
    price: '₹5.50 Cr',
    propertyType: 'Exclusive Full-Floor 4BHK Residence',
    transactionType: 'For Sale',
    possession: 'Ready to Move',
    reraId: 'PRM/KA/RERA/1251/310/PR/230815/005520',
    description: 'An ultra-exclusive boutique residence with just 12 full-floor homes in prime 100 Feet Road Indiranagar, featuring private elevator lobbies, wrap-around balconies, and Italian marble finishes.',
    challenge: 'Very high demand with low inventory requiring quick verification of high-net-worth buyers and streamlined legal execution.',
    solution: 'PK Properties conducted private viewings, managed seller negotiations, and facilitated instant clear-title registration with 100% bank loan approval coordination.',
    features: [
      {
        category: 'Architecture',
        title: 'Boutique Full-Floor Layouts',
        description: 'Only one residence per floor ensuring total 360-degree privacy and natural light.'
      },
      {
        category: 'Interior',
        title: 'Acoustically Isolated Slabs',
        description: 'German acoustic resilient layers beneath marble flooring for zero impact noise.'
      },
      {
        category: 'Sustainability',
        title: 'Electric Vehicle Infrastructure',
        description: 'Dedicated 22kW smart EV charging point for every residence parking stall.'
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
        caption: 'Front facade showing stepped landscaped balconies and vertical louvers.'
      }
    ],
    timeline: [
      {
        stage: 'Exclusive Listing & Verification',
        duration: 'Week 1',
        status: 'completed',
        description: 'Complete title check, occupancy certificate verification, and property staging.'
      },
      {
        stage: 'Private Viewings & Offer',
        duration: 'Week 2',
        status: 'completed',
        description: 'HNW buyer client viewings and formal price offer acceptance.'
      },
      {
        stage: 'Registration & Possession',
        duration: 'Week 3',
        status: 'completed',
        description: 'Sub-registrar deed execution, car parking allotment, and key handover.'
      }
    ],
    featured: false
  },
  {
    id: 'proj-8',
    slug: 'verdant-haven-duplex',
    name: 'Serenity Palms Gated Villa Plots',
    category: 'residential',
    subCategory: 'Plots & Land',
    location: 'Sarjapur Road, Bengaluru',
    status: 'Completed',
    completionDate: '2025',
    area: 'Plots: 1,500 – 4,000 sq.ft (Total 28 Acres)',
    clientType: 'Gated Community Land Deal',
    price: '₹85 Lakhs onwards',
    propertyType: 'RERA & BDA Approved Villa Plots',
    transactionType: 'For Sale',
    possession: 'Immediate Registration',
    reraId: 'PRM/KA/RERA/1251/310/PR/240320/006619',
    description: 'Premium RERA and BDA approved residential layout plots in a master-planned 28-acre gated community featuring underground electricity, wide asphalt roads, clubhouse, and landscaped parks.',
    challenge: 'Ensuring 100% legal compliance including conversion orders, layout sanctions, and individual E-Khata issuance for all 160 individual plot parcels.',
    solution: 'PK Properties vetted the layout master plan, verified all municipal conversion sanctions, and provides end-to-end plot registration and turnkey construction support.',
    features: [
      {
        category: 'Architecture',
        title: 'Underground Infrastructure',
        description: 'Fully concealed underground cabling, fiber-optic ducts, and storm-water drainage.'
      },
      {
        category: 'Sustainability',
        title: 'Rainwater Recharge & Green Parks',
        description: '4 sprawling landscaped parks with 500+ planted native trees and rainwater percolation wells.'
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
        caption: 'Wide tree-lined asphalt roads and demarcated villa plots ready for registration.'
      }
    ],
    timeline: [
      {
        stage: 'Layout Sanction & RERA Approval',
        duration: 'Completed',
        status: 'completed',
        description: 'BDA layout approval, RERA registration, and release order verification.'
      },
      {
        stage: 'Individual Plot Demarcation',
        duration: 'Completed',
        status: 'completed',
        description: 'GPS boundary stones, pillar numbering, and individual E-Khata preparation.'
      },
      {
        stage: 'Buyer Registration & Handover',
        duration: 'Ongoing',
        status: 'completed',
        description: 'Immediate sub-registrar deed registration and on-demand turnkey villa design.'
      }
    ],
    featured: false
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find((p) => p.slug === slug);
};

export const getRelatedProjects = (currentSlug: string, count: number = 3): Project[] => {
  const current = getProjectBySlug(currentSlug);
  if (!current) return projectsData.slice(0, count);
  
  // Prioritize same category, then fallback to others
  const sameCategory = projectsData.filter((p) => p.slug !== currentSlug && p.category === current.category);
  const others = projectsData.filter((p) => p.slug !== currentSlug && p.category !== current.category);
  
  return [...sameCategory, ...others].slice(0, count);
};
