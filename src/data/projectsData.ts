import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    slug: 'pk-green-town-phase-2',
    name: 'PK Green Town (Phase-2)',
    category: 'residential',
    subCategory: 'Residential Plots & Layouts',
    location: 'Belvadi Village, Srirangapatna, Mandya',
    status: 'Ongoing',
    completionDate: '2025',
    area: '20x30, 20x40 & 30x40 Plots (89+ Units)',
    clientType: 'Gated Layout & Villa Community',
    price: 'Affordable & Premium Plots Available',
    propertyType: 'Master-Planned Plotted Layout',
    transactionType: 'For Sale',
    possession: 'Immediate Registration Ready',
    reraId: 'Sy No. 182/1, Kasaba Hobli, Belvadi',
    description: 'PK Green Town Phase-2 is a premier residential layout situated at Sy No. 182/1, Belvadi Village, Kasaba Hobli, Srirangapatna Taluk, Mandya. Offering 20x30 (60 Units), 20x40 (12 Units), and 30x40 (17 Units) plots with 40-foot main road, 22-foot internal roads, 24x7 water and electricity.',
    challenge: 'Developing a well-connected gated plotted community with 40ft wide roads, underground utilities, and turnkey villa construction models close to the Ring Road.',
    solution: 'Constructed wide 40ft & 22ft asphalted roads, integrated 24x7 water and electrical distribution network, avenue tree plantation, and ready-to-build 20x30, 20x40 & 30x40 villa floorplans.',
    features: [
      {
        category: 'Layout',
        title: '40\' Main Road & 22\' Cross Roads',
        description: 'Generous 40-foot wide central road and 22-foot cross streets with kerbing and drainage.'
      },
      {
        category: 'Utilities',
        title: '24x7 Water & Electricity Supply',
        description: 'Round-the-clock dedicated water supply pipeline and electrical transformer infrastructure.'
      },
      {
        category: 'Inventory',
        title: 'Plot Sizes: 20x30, 20x40 & 30x40',
        description: '20x30 (60 No\'s), 20x40 (12 No\'s), and 30x40 (17 No\'s) with clear individual title deeds.'
      },
      {
        category: 'Connectivity',
        title: '3.0 KM From Ring Road',
        description: '2.0 KM from Prajwal Hospital, 1.5 KM from Presentation School, and 2.0 KM from Lekenzi Restaurant.'
      }
    ],
    coverImage: '/images/projects/pk-green-town-phase-2-masterplan.jpg',
    galleryImages: [
      {
        url: '/images/projects/pk-green-town-phase-2-masterplan.jpg',
        caption: 'PK Green Town Phase-2 Master Layout Plan (89 Plots)'
      },
      {
        url: '/images/projects/pk-green-town-phase-2-layout.jpg',
        caption: 'PK Green Town Phase-2 Sector 19-Plot Strip Layout'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        caption: 'Modern 20x30 and 30x40 Duplex Villa Design Options'
      }
    ],
    timeline: [
      {
        stage: 'Layout Planning & Survey Verification',
        duration: 'Phase 1',
        status: 'completed',
        description: 'Sy No. 182/1 survey demarcation, title vetting, and statutory layout approvals.'
      },
      {
        stage: 'Civil Infrastructure & Utilities',
        duration: 'Phase 2',
        status: 'completed',
        description: '40ft & 22ft road asphalting, water lines, transformer installation, and tree plantation.'
      },
      {
        stage: 'Registration & Villa Construction',
        duration: 'Phase 3',
        status: 'in-progress',
        description: 'Plot deed registrations, khata transfers, and turnkey villa execution.'
      }
    ],
    featured: true
  },
  {
    id: 'proj-2',
    slug: 'pk-vip-gallery',
    name: 'PK VIP Gallery',
    category: 'residential',
    subCategory: 'Luxury Villa Plots',
    location: 'Belvadi Village, Srirangapatna, Mandya',
    status: 'Featured',
    completionDate: '2024',
    area: '40x60, 30x40 & 20x30 Premium Plots',
    clientType: 'Boutique Gated Enclave',
    price: 'Prime Investment Pricing',
    propertyType: 'Exclusive VIP Plotted Layout',
    transactionType: 'Exclusive Listing',
    possession: 'Immediate Registration',
    reraId: 'Kasaba Hobli, Belvadi Village, Srirangapatna',
    description: 'PK VIP Gallery is an ultra-exclusive gated residential enclave in Belvadi Village, Srirangapatna Taluk, Mandya. Featuring premium 40x60 luxury estate plots, 28-foot central avenue, 20-foot access road, and 24x7 water and electricity.',
    challenge: 'Designing a private, high-security boutique residential enclave for discerning buyers requiring spacious 40x60 parcels with immediate highway connectivity.',
    solution: 'Executed wide 28ft central asphalt driveway, underground drainage, electrified perimeter, dedicated power connections, and 24x7 water network.',
    features: [
      {
        category: 'Layout',
        title: '28\' Central Road & 20\' Access Road',
        description: 'Engineered 28-foot wide internal avenue with smooth turning radius and roadside green berms.'
      },
      {
        category: 'Dimensions',
        title: '40\' x 60\' Luxury Estate Plots',
        description: 'Spacious rectangular executive parcels (Plots 1 to 13) ideal for independent villas with private gardens.'
      },
      {
        category: 'Utilities',
        title: '24x7 Water & Electricity Supply',
        description: 'Dedicated water pipeline and high-capacity electrical grid with underground cabling.'
      },
      {
        category: 'Connectivity',
        title: '3.0 KM From Ring Road',
        description: '2.0 KM from Prajwal Hospital, 1.5 KM from Presentation School, and 2.0 KM from Lekenzi Restaurant.'
      }
    ],
    coverImage: '/images/projects/pk-vip-gallery-masterplan.jpg',
    galleryImages: [
      {
        url: '/images/projects/pk-vip-gallery-masterplan.jpg',
        caption: 'PK VIP Gallery 3D Aerial Masterplan & Road Layout'
      },
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
        caption: 'Luxury Villa Concept for 40x60 Plots'
      }
    ],
    timeline: [
      {
        stage: 'Boutique Layout Demarcation',
        duration: 'Phase 1',
        status: 'completed',
        description: 'Plot numbering (1 to 13) and 28ft roadway demarcation.'
      },
      {
        stage: 'Road Formation & Utilities',
        duration: 'Phase 2',
        status: 'completed',
        description: 'Asphalt paving, 24x7 water connection, power supply, and streetlights.'
      },
      {
        stage: 'VIP Registration & Villa Builds',
        duration: 'Phase 3',
        status: 'in-progress',
        description: 'Clear title registrations and custom villa architecture.'
      }
    ],
    featured: true
  },
  {
    id: 'proj-3',
    slug: 'pk-residency',
    name: 'PK Residency',
    category: 'residential',
    subCategory: 'Luxury Homes',
    location: 'Bengaluru, Karnataka',
    status: 'Upcoming',
    completionDate: '2026',
    area: '1,450 - 3,200 sq.ft',
    clientType: 'Modern Living',
    price: '₹85 Lakhs - ₹1.85 Cr',
    propertyType: 'Modern Homes & Penthouses',
    transactionType: 'Exclusive Listing',
    possession: 'Pre-Booking Open',
    reraId: 'PRM/KA/RERA/1251/310/PR/231105/005844',
    description: 'Modern homes with world-class amenities for a better lifestyle, offering expansive layouts, smart home automation, and clubhouse privileges.',
    challenge: 'Designing high-efficiency modern homes in a prime Bengaluru growth corridor with sustainable architecture.',
    solution: 'PK Developers crafted an eco-sensitive master plan featuring rooftop recreation, co-working lounges, and EV charging points.',
    features: [
      {
        category: 'Lifestyle',
        title: 'World-Class Amenities',
        description: 'Swimming pool, gymnasium, multi-purpose hall, and jogging tracks.'
      },
      {
        category: 'Smart Living',
        title: 'Home Automation & Fiber Internet',
        description: 'Keyless entry, automated lighting controls, and high-speed FTTH.'
      },
      {
        category: 'Location',
        title: 'Prime Connectivity',
        description: 'Close proximity to metro stations, tech parks, and top international schools.'
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
        caption: 'PK Residency architectural facade.'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
        caption: 'Master suite opening to scenic city view terrace.'
      }
    ],
    timeline: [
      {
        stage: 'Master Planning & Sanctions',
        duration: 'Phase 1',
        status: 'completed',
        description: 'Architectural drafting, structural engineering, and statutory filings.'
      },
      {
        stage: 'Groundbreaking & Pre-Launch',
        duration: 'Phase 2',
        status: 'in-progress',
        description: 'Site leveling, foundation piling, and VIP investor pre-allocations.'
      },
      {
        stage: 'Main Structure & Delivery',
        duration: 'Phase 3',
        status: 'upcoming',
        description: 'Full tower structural completion and possession.'
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
    solution: 'PK Developers structured multi-floor corporate leases with multinational banks and consulting firms, maximizing occupancy and achieving record rental yields.',
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
    solution: 'PK Developers structured early investor purchase options backed by guaranteed pre-lease agreements with national F&B and fashion brands.',
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
    solution: 'PK Developers conducted private viewings, managed seller negotiations, and facilitated instant clear-title registration with 100% bank loan approval coordination.',
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
    solution: 'PK Developers vetted the layout master plan, verified all municipal conversion sanctions, and provides end-to-end plot registration and turnkey construction support.',
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
