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
    area: '9,200 sq.ft',
    clientType: 'Private Homeowner',
    description: 'A bespoke modern residence featuring cantilevered concrete volumes, floor-to-ceiling acoustic glass facades, and seamless indoor-outdoor living with an integrated reflection pool.',
    challenge: 'The sloped topography required complex structural retaining walls, while the client demanded unobstructed 18-meter column-free spans for the open ground-floor living area without compromising seismic resilience.',
    solution: 'Engineered post-tensioned reinforced concrete slabs and concealed steel framing, paired with climate-responsive double-glazed low-E thermal assemblies to optimize natural ventilation and daylighting.',
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
        stage: 'Architectural Blueprint & Sanctions',
        duration: 'Month 1 - 2',
        status: 'completed',
        description: 'Site analysis, structural simulations, soil testing, and BBMP municipal approvals.'
      },
      {
        stage: 'Piling & Deep Retaining Substructure',
        duration: 'Month 3 - 5',
        status: 'completed',
        description: 'Micropiling, reinforced diaphragm retaining walls, and waterproof foundation raft.'
      },
      {
        stage: 'Superstructure & Post-Tensioned Slabs',
        duration: 'Month 6 - 9',
        status: 'completed',
        description: 'Casting post-tensioned spans, cantilever shuttering, and structural steel integration.'
      },
      {
        stage: 'MEP, Glazing & High-End Finishes',
        duration: 'Month 10 - 13',
        status: 'completed',
        description: 'Automated HVAC, European aluminum fenestration, Italian stone cladding, and fixtures.'
      },
      {
        stage: 'Testing, Quality Audit & Handover',
        duration: 'Month 14',
        status: 'completed',
        description: 'Thermal imaging, air leak testing, 200+ point quality inspection, and zero-defect delivery.'
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
    area: '185,000 sq.ft',
    clientType: 'Global Enterprise Solutions',
    description: 'An IGBC Platinum-certified commercial office complex engineered for modern tech workforce density, offering flexible floor plates, double glazed curtain walls, and rooftop amenities.',
    challenge: 'Tight 14-month construction schedule amidst monsoon season, requiring fast-track structural erection and strict vibration control adjacent to operational data centers.',
    solution: 'Adopted composite steel-concrete structural frames with prefabricated precast floor units and 4D BIM digital twin tracking to shave 9 weeks off the critical path.',
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
        stage: 'Civil & Foundation Basements',
        duration: 'Month 1 - 4',
        status: 'completed',
        description: 'Double basement excavation with secant pile shoring and heavy machinery rafts.'
      },
      {
        stage: 'Composite Steel Superstructure',
        duration: 'Month 5 - 8',
        status: 'completed',
        description: 'Precision structural steel erection using twin tower cranes and laser metrology.'
      },
      {
        stage: 'Facade & Envelope Sealing',
        duration: 'Month 9 - 11',
        status: 'completed',
        description: 'Unitized panel installation, wind tunnel testing verification, and roof insulation.'
      },
      {
        stage: 'Smart Building MEP & Handover',
        duration: 'Month 12 - 14',
        status: 'completed',
        description: 'BMS building automation, fire suppression, elevator commissioning, and occupancy certification.'
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
    area: '14,500 sq.ft',
    clientType: 'Private Family Office',
    description: 'An expansive traditional-contemporary courtyard manor that reinterprets heritage veranda architecture with state-of-the-art structural craftsmanship, natural stone, and brass detailing.',
    challenge: 'Preserving 14 mature banyan and mango trees on site while crafting a 6-bedroom estate with subterranean wine cellar and multi-car underground pavilion.',
    solution: 'Designed an organic U-shaped courtyard footprint wrapped around the root zones, using non-invasive screw-pile foundations near critical tree canopies.',
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
        stage: 'Tree Protection & Foundations',
        duration: 'Month 1 - 3',
        status: 'completed',
        description: 'Arboricultural root radar mapping and non-disruptive specialized substructure.'
      },
      {
        stage: 'Artisan Masonry & Stone Superstructure',
        duration: 'Month 4 - 8',
        status: 'completed',
        description: 'Master stone masonry construction with seismic dampening joints.'
      },
      {
        stage: 'Joinery, Interiors & Handover',
        duration: 'Month 9 - 13',
        status: 'completed',
        description: 'High-precision timber roofing, brass fittings, landscaping, and final client signoff.'
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
    area: '240,000 sq.ft',
    clientType: 'Commercial Real Estate Consortium',
    description: 'A 16-storey landmark commercial high-rise combining corporate headquarters, premium financial suites, and rooftop sky lounge with panoramic city vistas.',
    challenge: 'Urban infill plot with zero property line setback on two sides, requiring top-down basement construction and noise mitigation in an active metropolitan district.',
    solution: 'Deployed silent hydraulic sheet piling, advanced top-down construction techniques, and real-time structural health optical sensors during excavation.',
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
        stage: 'Top-Down Substructure & Shoring',
        duration: 'Month 1 - 6',
        status: 'completed',
        description: 'Excavation of 3 subterranean parking levels with zero ground settlement.'
      },
      {
        stage: 'Core & Shell High-Rise Erection',
        duration: 'Month 7 - 14',
        status: 'completed',
        description: 'Slip-form concrete core construction reaching level 16 ahead of schedule.'
      },
      {
        stage: 'High-Rise Enclosure & Fit-Out',
        duration: 'Month 15 - 20',
        status: 'completed',
        description: 'Curtain wall glazing, high-speed destination elevators, and corporate handover.'
      }
    ],
    featured: true
  },
  {
    id: 'proj-5',
    slug: 'colonial-heritage-manor-restoration',
    name: 'Colonial Heritage Manor Restoration',
    category: 'renovation',
    subCategory: 'Renovation & Remodeling',
    location: 'Richmond Town, Bengaluru',
    status: 'Completed',
    completionDate: '2024',
    area: '11,200 sq.ft',
    clientType: 'Private Estate Trust',
    description: 'Comprehensive historic conservation and structural retrofitting of a 90-year-old colonial manor into a contemporary private luxury residence while preserving vintage masonry and roof timber work.',
    challenge: 'Deteriorated lime-mortar walls, failing wooden truss members, and outdated plumbing and electrical networks without destroying heritage lime-plaster mouldings.',
    solution: 'Used lime-pozzolana injections for seismic consolidation, concealed carbon-fiber structural reinforcement inside vintage beams, and routed conduit through sub-floor channels.',
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
        stage: 'Heritage Diagnostic & Structural Shoring',
        duration: 'Month 1 - 2',
        status: 'completed',
        description: 'Non-destructive testing, micro-drilling, and temporary hydraulic support frameworks.'
      },
      {
        stage: 'Sub-surface Underpinning & Masonry Repair',
        duration: 'Month 3 - 5',
        status: 'completed',
        description: 'Foundation underpinning, crack stabilization, and lime re-pointing.'
      },
      {
        stage: 'MEP Integration & Restorative Finishes',
        duration: 'Month 6 - 9',
        status: 'completed',
        description: 'Concealed services, artisan plaster recreation, and antique brass finishing.'
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
    area: '115,000 sq.ft',
    clientType: 'Retail Consortium',
    description: 'An open-air experiential shopping, dining, and community plaza featuring cantilevered sky terraces, kinetic shading canopies, and double-height anchor retail stores.',
    challenge: 'High foot-traffic logistics, complex curvilinear steel canopy structures, and multi-tenant mechanical venting requirements.',
    solution: 'Modular steel fabrication, computational fluid dynamics (CFD) airflow modelling, and separate tenant service corridors with direct basement loading docks.',
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
        stage: 'Foundation & Parking Infrastructure',
        duration: 'Month 1 - 5',
        status: 'completed',
        description: 'Two-level basement structure with automated parking bays and loading bays.'
      },
      {
        stage: 'Curvilinear Steel & Podium Construction',
        duration: 'Month 6 - 11',
        status: 'in-progress',
        description: 'Current phase: Heavy structural steel framing and canopy erection.'
      },
      {
        stage: 'Shopfronts, Public Realm & Handover',
        duration: 'Month 12 - 16',
        status: 'upcoming',
        description: 'Tenant interior guidelines, granite paving, water features, and grand opening.'
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
    area: '48,000 sq.ft',
    clientType: 'Luxury Multi-Family Developer',
    description: 'A boutique luxury apartment development featuring 12 exclusive full-floor residences with private lift lobbies, acoustic floor underlayments, and panoramic wrap-around balconies.',
    challenge: 'Zero setback urban boundaries with adjacent heritage bungalows requiring minimal construction disturbance and zero dust migration.',
    solution: 'Erected acoustic perimeter scaffolding with dust misting canons, paired with specialized low-vibration pile augers.',
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
        stage: 'Piling & Basement Construction',
        duration: 'Month 1 - 4',
        status: 'completed',
        description: 'Secant piling, basement construction with continuous vibration monitoring.'
      },
      {
        stage: 'RCC Superstructure Erection',
        duration: 'Month 5 - 10',
        status: 'completed',
        description: 'Cast-in-place high-performance concrete frame up to Level 12.'
      },
      {
        stage: 'Interiors, Elevators & Handover',
        duration: 'Month 11 - 15',
        status: 'completed',
        description: 'OTIS high-speed elevators, imported Italian marble, and occupancy certifications.'
      }
    ],
    featured: false
  },
  {
    id: 'proj-8',
    slug: 'verdant-haven-duplex',
    name: 'Verdant Haven Duplexes',
    category: 'residential',
    subCategory: 'Multi-unit Residential Buildings',
    location: 'HSR Layout, Bengaluru',
    status: 'Ongoing',
    completionDate: 'Q4 2026',
    area: '22,000 sq.ft',
    clientType: 'Private Investors Syndicate',
    description: 'An eco-conscious cluster of luxury duplex residences designed with terracotta facade screens, cross-ventilated dual-aspect plans, and shared rooftop wellness gardens.',
    challenge: 'Stringent height limitations requiring optimized floor-to-ceiling heights without sacrificing spaciousness.',
    solution: 'Utilized flat slab post-tensioned construction eliminating drop beams, yielding an additional 400mm clear headroom per level.',
    features: [
      {
        category: 'Architecture',
        title: 'Terracotta Baguette Screen',
        description: 'Earthy baked-clay facade elements providing privacy and thermal insulation.'
      },
      {
        category: 'Sustainability',
        title: 'Greywater Recycling Plant',
        description: 'Integrated submerged aerated filter recycling 100% of water for landscaping.'
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
        caption: 'Architectural rendering of the terracotta facade and duplex terracing.'
      }
    ],
    timeline: [
      {
        stage: 'Raft Foundation & Basement Retaining',
        duration: 'Month 1 - 3',
        status: 'completed',
        description: 'Mass concrete pour with crystalline waterproofing admixtures.'
      },
      {
        stage: 'Post-Tensioned Flat Slabs',
        duration: 'Month 4 - 8',
        status: 'in-progress',
        description: 'Current milestone: Level 3 slab post-tensioning and masonry partitioning.'
      },
      {
        stage: 'Facade Cladding & Interior Fitout',
        duration: 'Month 9 - 14',
        status: 'upcoming',
        description: 'Terracotta louvers, smart home automation, and final municipal approvals.'
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
