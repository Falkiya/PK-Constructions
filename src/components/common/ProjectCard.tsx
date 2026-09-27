import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Maximize2, ArrowUpRight, Tag, CheckCircle2 } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  featuredLayout?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featuredLayout = false }) => {
  return (
    <div className="group relative flex flex-col bg-stone-900/70 border border-stone-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5">
      {/* Image container */}
      <div className={`relative overflow-hidden ${featuredLayout ? 'h-72 sm:h-80' : 'h-64'}`}>
        <img
          src={project.coverImage}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-stone-950/85 backdrop-blur-md text-amber-400 text-xs font-semibold uppercase tracking-wider border border-amber-500/30 flex items-center gap-1.5">
            <Tag className="w-3 h-3 text-amber-400" />
            {project.transactionType || project.subCategory}
          </span>
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-medium border backdrop-blur-md ${
              project.possession === 'Ready to Move' || project.possession === 'Immediate Registration'
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
            }`}
          >
            {project.possession || project.status}
          </span>
        </div>

        {/* Bottom overlay info */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-stone-300">
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="truncate max-w-[150px]">{project.location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-stone-400">
            <Maximize2 className="w-3.5 h-3.5 text-amber-500" />
            <span>{project.area.split('(')[0].trim()}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Price & Property Subtype */}
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-lg font-extrabold text-amber-400 tracking-tight font-display">
              {project.price || 'Price on Request'}
            </span>
            <span className="text-[11px] text-stone-400 font-medium px-2 py-0.5 rounded-md bg-stone-800/80 border border-stone-700/60 truncate max-w-[130px]">
              {project.propertyType?.split(' ')[0] || project.subCategory}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
            <Link to={`/projects/${project.slug}`}>
              {project.name}
            </Link>
          </h3>

          <p className="text-sm text-stone-400 mt-2 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Action Button & Verification Pill */}
        <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-[11px] text-stone-400 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Verified Title</span>
          </span>
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 group-hover:translate-x-1 transition-all"
          >
            <span>View Property</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
