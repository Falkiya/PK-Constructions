import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Home, ArrowRight, Layers } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="404 — Under Construction | PK Developers"
        description="The page you are looking for is currently under construction or does not exist."
        canonicalPath="/404"
      />

      <section className="min-h-[75vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto shadow-2xl">
            <HardHat className="w-10 h-10 animate-bounce" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold block">
              Error 404
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              “Looks like this page is under construction.”
            </h1>
            <p className="text-sm text-stone-400 leading-relaxed">
              The blueprint for this URL might have been moved, updated, or is currently being engineered by our web development crew.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-200 hover:text-white hover:bg-stone-800 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Explore Projects</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
