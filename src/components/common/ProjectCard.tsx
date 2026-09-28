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
    <div className="group relative flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
      {/* Image container */}
      <div className={`relative overflow-hidden ${featuredLayout ? 'h-72 sm:h-80' : 'h-64'}`}>
        <img
          src={project.coverImage}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-blue-300 text-xs font-semibold uppercase tracking-wider border border-blue-400/30 flex items-center gap-1.5">
            <Tag className="w-3 h-3 text-blue-400" />
            {project.transactionType || project.subCategory}
          </span>
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border backdrop-blur-md ${
              project.possession === 'Ready to Move' || project.possession === 'Immediate Registration'
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                : 'bg-blue-500/20 text-blue-200 border-blue-400/30'
            }`}
          >
            {project.possession || project.status}
          </span>
        </div>

        {/* Bottom overlay info */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span className="truncate max-w-[150px]">{project.location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-200">
            <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
            <span>{project.area.split('(')[0].trim()}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Price & Property Subtype */}
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-xl font-extrabold text-blue-600 tracking-tight font-display">
              {project.price || 'Price on Request'}
            </span>
            <span className="text-[11px] text-blue-700 font-semibold px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 truncate max-w-[140px]">
              {project.propertyType?.split(' ')[0] || project.subCategory}
            </span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
            <Link to={`/projects/${project.slug}`}>
              {project.name}
            </Link>
          </h3>

          <p className="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Action Button & Verification Pill */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Verified Title</span>
          </span>
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 group-hover:translate-x-1 transition-all"
          >
            <span>View Property</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
