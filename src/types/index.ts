export type ProjectCategory = 'residential' | 'commercial' | 'villas' | 'renovation';
export type ProjectStatus = 'Completed' | 'Ongoing';

export interface ProjectFeature {
  title: string;
  description: string;
  category: 'Architecture' | 'Materials' | 'Interior' | 'Landscaping' | 'Sustainability';
}

export interface ProjectTimelineStage {
  stage: string;
  duration: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  description: string;
}

export interface ProjectImage {
  url: string;
  caption: string;
  category?: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  category: ProjectCategory;
  subCategory: string;
  location: string;
  status: ProjectStatus;
  completionDate: string;
  area: string;
  clientType: string;
  description: string;
  challenge: string;
  solution: string;
  features: ProjectFeature[];
  coverImage: string;
  galleryImages: ProjectImage[];
  timeline: ProjectTimelineStage[];
  featured: boolean;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  keyBenefits: string[];
  capabilities: string[];
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  projectName: string;
  projectType: string;
  rating: number;
  comment: string;
  image: string;
  date: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  durationEstimate: string;
  iconName: string;
}

export type GalleryCategory =
  | 'All'
  | 'Completed Projects'
  | 'Construction Sites'
  | 'Architecture'
  | 'Interiors'
  | 'Exteriors'
  | 'Materials'
  | 'Team'
  | 'Behind the Scenes';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  imageUrl: string;
  caption: string;
  location?: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
  specialization: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}
