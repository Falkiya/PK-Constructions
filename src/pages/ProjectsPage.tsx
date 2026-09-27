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
        if (project.transactionType !== 'For Sale') return false;
      } else if (selectedFilter === 'For Lease') {
        if (project.transactionType !== 'For Lease') return false;
      } else if (selectedFilter === 'Residential') {
        if (project.category !== 'residential' && project.category !== 'villas') return false;
      } else if (selectedFilter === 'Commercial') {
        if (project.category !== 'commercial') return false;
      } else if (selectedFilter === 'Plots / Land') {
        if (project.propertyType !== 'Plot' && project.propertyType !== 'Land' && project.category !== 'renovation') return false;
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
        title="Verified Properties & Deals | Real Estate Inventory | PK Properties"
        description="Browse our curated inventory of verified residential luxury villas, Grade-A commercial towers, approved plotted developments, and high-yield real estate investments."
        canonicalPath="/projects"
      />

      {/* HERO SECTION */}
      <section className="relative py-28 bg-stone-950 overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="PK Properties Real Estate Portfolio"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Curated Real Estate Inventory
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Verified Properties & Deals
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            A premier showcase of verified residential luxury villas, Grade-A commercial spaces, approved layout plots, and strategic investments across Bengaluru with 100% clear legal titles.
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH BAR */}
      <section className="py-8 bg-stone-900 border-b border-stone-800 sticky top-[73px] z-30 shadow-md">
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
                      ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                      : 'bg-stone-800/80 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-700/60'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* Search Input & Sort */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-64">
                <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search project or city..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-300 text-xs focus:outline-none focus:border-amber-500"
              >
                <option value="featured">Featured First</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center rounded-2xl bg-stone-900 border border-stone-800 p-8">
              <p className="text-base text-stone-400">No projects match the selected criteria.</p>
              <button
                type="button"
                onClick={() => { setSelectedFilter('All'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 rounded-xl bg-amber-500 text-stone-950 text-xs font-bold"
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
      <section className="py-16 bg-stone-900/40 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/projects/residential"
              className="p-8 rounded-2xl bg-stone-900 border border-stone-800 hover:border-amber-500/40 transition-colors flex items-center justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Home className="w-4 h-4" />
                  <span>Dedicated Category</span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  Residential Projects Portal
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  Villas, private homes, and luxury multi-unit complexes.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-stone-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              to="/projects/commercial"
              className="p-8 rounded-2xl bg-stone-900 border border-stone-800 hover:border-amber-500/40 transition-colors flex items-center justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Building2 className="w-4 h-4" />
                  <span>Dedicated Category</span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  Commercial Projects Portal
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  Corporate office towers, retail malls, and tech centers.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-stone-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
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
