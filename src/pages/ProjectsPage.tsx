import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Filter, 
  Search, 
  ArrowRight, 
  Layers, 
  Home, 
  Building2, 
  Hammer, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { ProjectCard } from '../components/common/ProjectCard';
import { CTASection } from '../components/common/CTASection';
import { projectsData } from '../data/projectsData';

export const ProjectsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');

  const filterOptions = [
    'All',
    'For Sale',
    'For Lease',
    'Residential',
    'Commercial',
    'Plots / Land',
    'Investment'
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // Category / Status / Transaction Filter
      if (selectedFilter === 'All') {
        // keep all
      } else if (selectedFilter === 'For Sale') {
        if (project.transactionType !== 'For Sale' && project.transactionType !== 'Exclusive Listing') return false;
      } else if (selectedFilter === 'For Lease') {
        if (project.transactionType !== 'For Lease') return false;
      } else if (selectedFilter === 'Residential') {
        if (project.category !== 'residential' && project.category !== 'villas') return false;
      } else if (selectedFilter === 'Commercial') {
        if (project.category !== 'commercial') return false;
      } else if (selectedFilter === 'Plots / Land') {
        if (!project.propertyType?.toLowerCase().includes('plot') && !project.propertyType?.toLowerCase().includes('land') && project.category !== 'renovation') return false;
      } else if (selectedFilter === 'Investment') {
        if (project.transactionType !== 'Investment' && project.transactionType !== 'Exclusive Listing') return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = project.name.toLowerCase().includes(query);
        const matchesLocation = project.location.toLowerCase().includes(query);
        const matchesSubCategory = project.subCategory.toLowerCase().includes(query);
        const matchesType = project.propertyType?.toLowerCase().includes(query);
        if (!matchesName && !matchesLocation && !matchesSubCategory && !matchesType) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'featured') {
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [selectedFilter, searchQuery, sortBy]);

  return (
    <>
      <SEOHead
        title="Verified Properties & Deals | Real Estate Inventory | PK Developers"
        description="Browse our curated inventory of verified residential luxury villas, Grade-A commercial towers, approved plotted developments, and high-yield real estate investments."
        canonicalPath="/projects"
      />

      {/* HERO SECTION */}
      <section className="relative py-28 bg-slate-900 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="PK Developers Real Estate Portfolio"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6">
            Curated Real Estate Inventory
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Verified Properties & Deals
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            A premier showcase of verified residential luxury villas, Grade-A commercial spaces, approved layout plots, and strategic investments across Bengaluru with 100% clear legal titles.
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH BAR */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-[73px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setSelectedFilter(opt)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    selectedFilter === opt
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-100 text-slate-700 hover:text-blue-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* Search Input & Sort */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search project or city..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs focus:outline-none focus:border-blue-500"
              >
                <option value="featured">Featured First</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">
              <p className="text-base text-slate-600">No properties match the selected criteria.</p>
              <button
                type="button"
                onClick={() => { setSelectedFilter('All'); setSearchQuery(''); }}
                className="mt-4 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* QUICK CATEGORY SWITCHERS */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/projects/residential"
              className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex items-center justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
                  <Home className="w-4 h-4" />
                  <span>Dedicated Category</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Residential Projects Portal
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Villas, private homes, and luxury multi-unit complexes.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              to="/projects/commercial"
              className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex items-center justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
                  <Building2 className="w-4 h-4" />
                  <span>Dedicated Category</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Commercial Projects Portal
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Corporate office towers, retail malls, and tech centers.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Build Your Next Landmark?"
        subtitle="Submit your project details to receive a confidential preliminary civil estimation and architectural study."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/get-a-quote"
      />
    </>
  );
};
