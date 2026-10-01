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
    slug: 'pk-signature-luxury-villa',
    name: 'PK Signature Luxury Villa',
    category: 'residential',
    subCategory: 'Turnkey Luxury Villa',
    location: 'Mandya, Karnataka',
    status: 'Completed',
    completionDate: '2024',
    area: '3,800 sq.ft Duplex Villa',
    clientType: 'Turnkey Architectural Build',
    price: 'Custom Turnkey Build',
    propertyType: 'Contemporary Luxury Villa',
    transactionType: 'Exclusive Listing',
    possession: 'Completed & Delivered',
    reraId: 'Mandya Urban Planning Approved',
    description: 'A masterpiece of contemporary residential engineering by PK Developers. This multi-level turnkey luxury villa features modern geometric facade architecture with warm ambient exterior spotlights, glass balustrades, integrated compound wall with security gates, false ceilings with CNC jaali work & blue LED cove lighting, custom floating TV entertainment console, acoustic-fluted master suites, and polished Italian marble flooring.',
    challenge: 'Executing a high-end turnkey residence requiring seamless synchronization of structural RCC civil work, bespoke interior millwork, ambient multi-circuit LED lighting, and custom architectural elevations.',
    solution: 'Delivered an end-to-end turnkey solution from foundation to interior handover, featuring designer ceiling trays, illuminated accent walls, motorized gate access, fluted wooden bedroom finishes, and energy-efficient ventilation.',
    features: [
      {
        category: 'Architecture',
        title: 'Modern Geometric Facade with Night Illumination',
        description: 'Multi-tiered elevation with composite wood-finish cladding, recessed exterior spot lighting, and clear glass terrace railings.'
      },
      {
        category: 'Interior',
        title: 'CNC Laser-Cut False Ceilings with Dual Lighting',
        description: 'Intricately patterned false ceiling trays equipped with ambient blue cove glow and warm task spot illumination.'
      },
      {
        category: 'Lifestyle',
        title: 'Custom TV Entertainment & Feature Wall',
        description: 'Spacious main hall with custom-crafted floating TV console, textured decorative accent wall, and mirror wall paneling.'
      },
      {
        category: 'Interior',
        title: 'Master Suite with Fluted Wood Paneling',
        description: 'Acoustic vertical fluting, integrated vertical LED profile lights, tray ceiling, luxury vanity station, and ensuite bath.'
      }
    ],
    coverImage: '/images/projects/pk-luxury-villa-exterior.png',
    galleryImages: [
      {
        url: '/images/projects/pk-luxury-villa-exterior.png',
        caption: 'PK Signature Luxury Villa night architectural elevation and facade lighting'
      },
      {
        url: '/images/projects/pk-luxury-villa-hall.png',
        caption: 'Grand living room with custom TV console, CNC ceiling, and Italian-finish flooring'
      },
      {
        url: '/images/projects/pk-luxury-villa-foyer.png',
        caption: 'Decorative foyer and hallway with textured accent wall and blue cove ceiling'
      },
      {
        url: '/images/projects/pk-luxury-villa-bedroom.jpg',
        caption: 'Executive master bedroom suite with acoustic fluted paneling and profile lighting'
      }
    ],
    timeline: [
      {
        stage: 'Architectural Design & 3D Visualization',
        duration: 'Month 1-2',
        status: 'completed',
        description: 'Complete floorplans, structural engineering, and 3D night elevation rendering.'
      },
      {
        stage: 'Civil Construction & Superstructure',
        duration: 'Month 3-7',
        status: 'completed',
        description: 'RCC framing, brick masonry, concealed electrical conduit plumbing, and exterior plastering.'
      },
      {
        stage: 'Interior Millwork, Ceilings & Handover',
        duration: 'Month 8-10',
        status: 'completed',
        description: 'CNC ceiling installation, LED cove lighting, marble flooring, custom TV unit, and client handover.'
      }
    ],
    featured: true
  },
  {
    id: 'proj-4',
    slug: 'pk-community-hall-events',
    name: 'PK Community Hall & Events',
    category: 'commercial',
    subCategory: 'Convention & Event Center',
    location: 'Srirangapatna / Mandya, Karnataka',
    status: 'Featured',
    completionDate: '2025',
    area: '35,000 sq.ft Built-up + 25,000 sq.ft Event Lawn',
    clientType: 'Commercial Hospitality & Event Venue',
    price: 'Event Booking & Venue Reservations Open',
    propertyType: 'Grand Banquet & Convention Complex',
    transactionType: 'Exclusive Listing',
    possession: 'Inauguration & Bookings Open',
    reraId: 'Commercial Sanction Approved',
    description: 'PK Community Hall & Events is an iconic multi-level convention, wedding, and social event destination in the Mandya-Srirangapatna corridor. Boasting a striking illuminated bronze and glass facade, expansive open-air celebration lawn with cocktail banquet setup, double-height grand entrance portico, multi-tier banquet halls, rooftop VIP party terraces with open fire pits, and comprehensive catering facilities.',
    challenge: 'Engineering a world-class hospitality venue capable of hosting large gatherings of 1,500+ attendees while ensuring fluid transitions between indoor AC banquet halls and open-air celebration lawns.',
    solution: 'Designed expansive column-free banquet floorplates on the ground floor opening directly onto manicured party lawns, dual upper-level viewing galleries, rooftop fire-pit lounges, and high-volume commercial catering infrastructure.',
    features: [
      {
        category: 'Architecture',
        title: 'Illuminated Facade with Grand Entrance Portico',
        description: 'Signature architectural entrance with vertical fluted bronze panels, ambient perimeter glow, and floor-to-ceiling glass fenestration.'
      },
      {
        category: 'Amenities',
        title: 'Expansive Celebration Lawn & Cocktail Banquet',
        description: '25,000 sq.ft manicured green lawn equipped with decorative festoon lighting, outdoor cocktail tables, and live banquet counters.'
      },
      {
        category: 'Lifestyle',
        title: 'Rooftop Lounges & Fire Pit Viewing Decks',
        description: 'Exclusive multi-level upper terraces with built-in stone fire pits and panoramic viewing balconies for VIP receptions.'
      },
      {
        category: 'Utilities',
        title: 'Full Hospitality & High-Capacity Parking',
        description: 'Commercial event kitchen, dedicated bride/groom green rooms, 100% DG power backup, and extensive valet parking.'
      }
    ],
    coverImage: '/images/projects/pk-community-hall-events.png',
    galleryImages: [
      {
        url: '/images/projects/pk-community-hall-events.png',
        caption: 'PK Community Hall & Events illuminated facade, celebration lawn, and rooftop terraces'
      }
    ],
    timeline: [
      {
        stage: 'Architectural Planning & Site Approvals',
        duration: 'Phase 1',
        status: 'completed',
        description: 'Comprehensive zoning, structural design, and hospitality spatial layout sanction.'
      },
      {
        stage: 'Superstructure & Facade Engineering',
        duration: 'Phase 2',
        status: 'completed',
        description: 'Multi-level structural framing, glass facade installation, and architectural lighting.'
      },
      {
        stage: 'Banquet Acoustic Fit-Out & Landscape Launch',
        duration: 'Phase 3',
        status: 'in-progress',
        description: 'Acoustic wall paneling, banquet hall commissioning, lawn landscaping, and event reservations.'
      }
    ],
    featured: true
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
