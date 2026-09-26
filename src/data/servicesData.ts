import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'residential',
    slug: 'residential-construction',
    title: 'Residential Construction',
    shortDescription: 'From custom architectural villas to multi-unit luxury apartments, we build bespoke living spaces engineered for generations.',
    fullDescription: 'PK Developers provides end-to-end residential construction solutions combining aesthetic refinement with structural integrity. We handle every phase with exacting detail—soil analysis, structural engineering, premium material sourcing, and master craftsmanship.',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      'Engineered post-tensioned foundations & seismic-resilient RCC frames',
      'Turnkey delivery with guaranteed milestone timelines',
      'Transparent itemized BOQ with zero hidden escalations',
      '10-year structural warranty & 1-year complimentary maintenance'
    ],
    capabilities: [
      'Independent Houses & Custom Bungalows',
      'Contemporary Luxury Villas',
      'Boutique Multi-Family Apartments',
      'Gated Community Enclaves',
      'Penthouse Duplexes & Mansions'
    ],
    deliverables: [
      'Comprehensive Structural & Architectural Blueprints',
      'Certified Material Testing Reports (Steel, Cement, Concrete)',
      'Digital Site Progress Reports with 360° Photo Audits',
      'Municipal Sanctions & Occupancy Certificate (OC) Handover'
    ]
  },
  {
    id: 'commercial',
    slug: 'commercial-construction',
    title: 'Commercial Construction',
    shortDescription: 'High-performance commercial office towers, corporate tech hubs, business centres, and vibrant retail spaces.',
    fullDescription: 'Our commercial division executes large-scale corporate infrastructure, enterprise headquarters, and modern retail establishments. We prioritize floor-plate efficiency, intelligent building systems, sustainability ratings (IGBC/LEED), and accelerated construction cycles.',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      'Fast-track composite steel & precast erection methods',
      'BIM-integrated spatial coordination to eliminate MEP clashes',
      'High-efficiency thermal envelopes & acoustic glass facades',
      'Strict adherence to OSHA, NBC, and local civic compliance'
    ],
    capabilities: [
      'Corporate Headquarters & Grade-A IT Parks',
      'Commercial High-Rise Office Towers',
      'Retail Lifestyle Hubs & Shopping Centers',
      'Business Incubators & Co-working Centers',
      'Mixed-Use Commercial & Hospitality Podiums'
    ],
    deliverables: [
      'LEED / IGBC Green Building Certification Documentation',
      'Integrated BMS, MEP & Life-Safety Commissioning Files',
      'As-Built 3D CAD & Digital Twin Models',
      'Fire NOC, Elevator & Environmental Approvals'
    ]
  },
  {
    id: 'villas',
    slug: 'residential-construction', // Villa is a sub-specialty routed directly to residential with villa focus
    title: 'Villa Construction',
    shortDescription: 'Ultra-luxury private sanctuaries built with cantilevered architecture, courtyard integrations, and resort-grade amenities.',
    fullDescription: 'We specialize in private sanctuary developments designed for discerning homeowners. Every villa integrates bespoke architectural statements, private swimming pools, high-span glazed facades, landscaped courtyards, and home automation.',
    icon: 'Castle',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      'Signature architectural elevations tailored to homeowner taste',
      'Seamless indoor-outdoor microclimate design',
      'High acoustic dampening and acoustic glazed fenestrations',
      'Dedicated artisan stone & timber craftsmanship'
    ],
    capabilities: [
      'Contemporary Minimalist Villas',
      'Courtyard & Heritage-Inspired Estates',
      'Hillside & Sloped Topography Mansions',
      'Waterfront & Lakeview Residences'
    ],
    deliverables: [
      'Custom 3D VR Walkthroughs',
      'Artisan Material Specifications (Imported Marble, Teak)',
      'Subterranean Waterproofing Certification',
      'Smart Automation Commissioning Dossier'
    ]
  },
  {
    id: 'renovation',
    slug: 'renovation-remodeling',
    title: 'Renovation & Remodeling',
    shortDescription: 'Transforming existing residential and commercial properties with structural upgrades, modern layouts, and luxury finishes.',
    fullDescription: 'From structural retrofitting and historic colonial conservation to complete corporate office overhauls, our renovation team rejuvenates aging structures into modern, energy-efficient landmarks without compromising structural safety.',
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      'Non-destructive testing & structural load redistribution',
      'Phased execution allowing continued partial occupancy',
      'Modern MEP retrofitting inside vintage envelopes',
      'Dramatic energy efficiency and insulation upgrades'
    ],
    capabilities: [
      'Complete Home & Villa Modernization',
      'Corporate Office Reconfiguration & Interior Fitout',
      'Facade Transformation & Modern Cladding',
      'Structural Strengthening & Column Jacketing',
      'Heritage Building Conservation & Stabilization'
    ],
    deliverables: [
      'Structural Audit & Load Bearing Diagnostic',
      'Before & After Architectural Spatial Mapping',
      'HVAC & Concealed Electrical Re-wiring Blueprints',
      'Turnover With Full Building System Warranties'
    ]
  },
  {
    id: 'architecture',
    slug: 'architecture-planning',
    title: 'Architectural Planning & Design',
    shortDescription: 'Comprehensive concept development, 3D visualization, municipal sanction drawings, and structural coordination.',
    fullDescription: 'Our design and architectural studio crafts context-driven architectural visions that fuse spatial beauty with engineering feasibility. We produce photorealistic 3D renders, structural calculations, and municipal sanction documentation.',
    icon: 'Compass',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      'Photorealistic 3D architectural rendering & virtual reality previews',
      'Bioclimatic design maximizing daylight and natural cooling',
      'Total harmony between architectural vision and civil engineering',
      'Complete handling of statutory municipal building permits'
    ],
    capabilities: [
      'Conceptual Design & Massing Studies',
      'Detailed Working Architectural Drawings',
      'Structural Engineering & Seismic Analysis',
      'Vastu-Compliant Architectural Layouts',
      'Interior Space Optimization & Millwork Plans'
    ],
    deliverables: [
      'Comprehensive GFC (Good-for-Construction) Drawing Sets',
      'High-Definition Exterior & Interior 3D CGI Renders',
      'Structural Stability & Soil Mechanics Reports',
      'Municipal Approval & Statutory Sanction Dossiers'
    ]
  },
  {
    id: 'management',
    slug: 'project-management',
    title: 'Project Management & PMC',
    shortDescription: 'Rigorous schedule control, material audits, contractor supervision, budget tracking, and real-time site monitoring.',
    fullDescription: 'PK Developers provides disciplined Project Management Consultancy (PMC) for complex construction endeavors. We enforce strict timeline adherence, quality benchmarks, financial transparency, and site safety standards.',
    icon: 'ClipboardCheck',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      'Daily site logs and weekly milestone drone/photo reports',
      'Critical Path Method (CPM) project scheduling',
      'Stringent multi-tier material batch testing',
      'Vendor management and contract milestone dispute resolution'
    ],
    capabilities: [
      'Site Supervision & Quality Assurance (QA/QC)',
      'Procurement Management & Rate Contract Auditing',
      'Budgetary Variance Tracking & Cashflow Forecasts',
      'Health, Safety & Environment (HSE) Compliance',
      'Commissioning, Snagging & Project Handover'
    ],
    deliverables: [
      'Master Project CPM Gantt Chart & Baseline Schedule',
      'Weekly Digital Progress & Milestone Dashboard',
      'Comprehensive 250-point Quality Snag List & Rectification Logs',
      'Final Cost Reconciliation & Contractor Discharge Certificates'
    ]
  },
  {
    id: 'interior',
    slug: 'architecture-planning',
    title: 'Interior Development',
    shortDescription: 'High-end interior architecture, acoustic treatments, bespoke millwork, and turnkey commercial & residential interiors.',
    fullDescription: 'Our interior development division creates refined living and working environments. We blend custom carpentry, premium marble, acoustic treatments, concealed ambient lighting, and curated hardware.',
    icon: 'Layers',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      'Factory-crafted precision joinery & modular cabinetry',
      'Flawless coordination with structural electrical & plumbing',
      'Custom acoustic damping for conference rooms & media suites',
      'Zero toxic VOC finishes and sustainable natural timbers'
    ],
    capabilities: [
      'Luxury Residential Interior Architecture',
      'Corporate Headquarters & Collaborative Workspaces',
      'Boutique Hospitality & Retail Environments',
      'Smart Home Lighting & AV System Integration'
    ],
    deliverables: [
      '3D Material Boards & Moodboard Presentations',
      'Detailed Joinery & Millwork Shop Drawings',
      'Lighting Scheme & Lux Level Calculations',
      'Turnkey Snag-Free Furnished Handover'
    ]
  },
  {
    id: 'exterior',
    slug: 'architecture-planning',
    title: 'Exterior Development & Facades',
    shortDescription: 'Innovative facade engineering, landscape architecture, tensile shading, and civil civil perimeter works.',
    fullDescription: 'First impressions matter. We engineer exterior envelopes that harmonize durability with striking presence—from unitized curtain walls and terracotta baguettes to sprawling infinity pools and landscape hardscapes.',
    icon: 'Trees',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      'Weather-resistant ventilated rainscreen facade systems',
      'Custom architectural lighting schemes & facade illumination',
      'Durable exterior stone paving, drainage, and retaining walls',
      'Integrated water features and infinity swimming pools'
    ],
    capabilities: [
      'Ventilated Cladding & High-Pressure Laminates',
      'Curtain Walls & Double Glazed Facade Systems',
      'Landscape Hardscaping, Paving & Retaining Terraces',
      'Swimming Pools, Spas & Water Features'
    ],
    deliverables: [
      'Facade Engineering Structural Load Calculations',
      'Thermal Performance & Shading Simulations',
      'Comprehensive Drainage & Hardscape Grading Plans',
      'Weatherproofing 10-Year Guarantee Documentation'
    ]
  }
];
