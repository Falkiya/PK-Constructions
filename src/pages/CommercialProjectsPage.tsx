import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { ProjectCard } from '../components/common/ProjectCard';
import { CTASection } from '../components/common/CTASection';
import { projectsData } from '../data/projectsData';

export const CommercialProjectsPage: React.FC = () => {
  const [selectedSubtype, setSelectedSubtype] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const subtypes = ['All', 'Offices', 'Commercial Buildings', 'Retail Spaces'];

  const commercialList = useMemo(() => {
    return projectsData
      .filter((p) => p.category === 'commercial')
      .filter((p) => {
        if (selectedSubtype !== 'All') {
          if (selectedSubtype === 'Offices' && p.subCategory !== 'Offices') return false;
          if (selectedSubtype === 'Commercial Buildings' && p.subCategory !== 'Commercial Buildings') return false;
          if (selectedSubtype === 'Retail Spaces' && p.subCategory !== 'Retail Spaces') return false;
        }

        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          return p.name.toLowerCase().includes(q) || p.location.toLowerCase().includes(q);
        }

        return true;
      });
  }, [selectedSubtype, searchQuery]);

  return (
    <>
      <SEOHead
        title="Commercial Real Estate & Office Spaces | For Lease & Sale | PK Developers"
        description="Explore Grade-A commercial tech parks, corporate office headquarters, and high-footfall retail destinations across Bengaluru available for lease and institutional investment."
        canonicalPath="/projects/commercial"
      />

      {/* HERO */}
      <section className="relative py-28 bg-slate-900 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Commercial Real Estate Portfolio"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6">
            <Building2 className="w-3.5 h-3.5" />
            Commercial & Leasing Inventory
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Commercial Real Estate & Leasing
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Grade-A enterprise tech parks, corporate office spaces, and high-footfall retail complexes across Bengaluru available for lease, sale, and high-yield institutional investment.
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

            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search commercial work..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {commercialList.length === 0 ? (
            <div className="py-16 text-center text-slate-500">
              No commercial projects match your search criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commercialList.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Planning a Commercial Development?"
        subtitle="Speak directly with our commercial civil directors to review structural schemes, precast options, and fast-track execution methodologies."
        primaryButtonText="Submit Commercial RFP"
        primaryButtonLink="/get-a-quote"
        secondaryButtonText="View All Portfolios"
        secondaryButtonLink="/projects"
      />
    </>
  );
};
