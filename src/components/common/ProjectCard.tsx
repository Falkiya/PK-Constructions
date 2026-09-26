import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Maximize2, ArrowUpRight } from 'lucide-react';
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
          <span className="px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md text-amber-400 text-xs font-semibold uppercase tracking-wider border border-amber-500/20">
            {project.subCategory || project.category}
          </span>
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
              project.status === 'Completed'
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Bottom overlay info */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-stone-300">
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-stone-400">
            <Maximize2 className="w-3.5 h-3.5 text-amber-500" />
            <span>{project.area}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between text-xs text-stone-500 mb-2 font-mono">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.completionDate}
            </span>
            <span className="capitalize">{project.clientType}</span>
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

        {/* Action Button */}
        <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between">
          <span className="text-xs text-stone-400">
            Detailed Case Study
          </span>
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 group-hover:translate-x-1 transition-all"
          >
            <span>View Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
