import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Filter 
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { ProjectCard } from '../components/common/ProjectCard';
import { CTASection } from '../components/common/CTASection';
import { projectsData } from '../data/projectsData';

export const ResidentialProjectsPage: React.FC = () => {
  const [selectedSubtype, setSelectedSubtype] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('all');

  const subtypes = ['All', 'Villas', 'Luxury Homes', 'Apartments', 'Multi-unit Residential Buildings'];

  const residentialList = useMemo(() => {
    return projectsData
      .filter((p) => p.category === 'residential' || p.category === 'villas')
      .filter((p) => {
        if (selectedSubtype !== 'All') {
          if (selectedSubtype === 'Villas' && p.subCategory !== 'Villas') return false;
          if (selectedSubtype === 'Luxury Homes' && p.subCategory !== 'Luxury Homes') return false;
          if (selectedSubtype === 'Apartments' && p.subCategory !== 'Apartments') return false;
          if (selectedSubtype === 'Multi-unit Residential Buildings' && p.subCategory !== 'Multi-unit Residential Buildings') return false;
        }

        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          return p.name.toLowerCase().includes(q) || p.location.toLowerCase().includes(q);
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'completed') return (b.status === 'Completed' ? 1 : 0) - (a.status === 'Completed' ? 1 : 0);
        if (sortBy === 'ongoing') return (b.status === 'Ongoing' ? 1 : 0) - (a.status === 'Ongoing' ? 1 : 0);
        return 0;
      });
  }, [selectedSubtype, searchQuery, sortBy]);

  return (
    <>
      <SEOHead
        title="Residential Properties & Luxury Villas | Buy & Invest | PK Developers"
        description="Explore our verified residential portfolio of luxury villas, independent bungalows, and premium gated estates across Bengaluru with 100% clear titles."
        canonicalPath="/projects/residential"
      />

      {/* HERO */}
      <section className="relative py-28 bg-slate-900 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Residential Properties Portfolio"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6">
            <Home className="w-3.5 h-3.5" />
            Verified Residential Inventory
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Residential Properties & Villas
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            From signature contemporary designer villas to sprawling courtyard estates, explore verified luxury residential properties for sale and high-yield investment.
          </p>
        </div>
      </section>

      {/* FILTER & CONTROLS */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-[73px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              {subtypes.map((sub) => (
                <button
                  key={sub}
                  type="button"
                  onClick={() => setSelectedSubtype(sub)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    selectedSubtype === sub
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-100 text-slate-700 hover:text-blue-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search residential project..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed First</option>
                <option value="ongoing">Ongoing First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {residentialList.length === 0 ? (
            <div className="py-16 text-center text-slate-500">
              No residential projects match your filter.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {residentialList.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Build Your Private Residence?"
        subtitle="Consult with our senior residential structural engineers to review your plot, budget constraints, and custom architectural requirements."
        primaryButtonText="Discuss Your Home Project"
        primaryButtonLink="/get-a-quote"
        secondaryButtonText="View All Projects"
        secondaryButtonLink="/projects"
      />
    </>
  );
};
