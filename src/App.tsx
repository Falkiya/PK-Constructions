import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { FloatingActions } from './components/common/FloatingActions';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { ResidentialConstructionPage } from './pages/ResidentialConstructionPage';
import { CommercialConstructionPage } from './pages/CommercialConstructionPage';
import { RenovationRemodelingPage } from './pages/RenovationRemodelingPage';
import { ArchitecturePlanningPage } from './pages/ArchitecturePlanningPage';
import { ProjectManagementPage } from './pages/ProjectManagementPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ResidentialProjectsPage } from './pages/ResidentialProjectsPage';
import { CommercialProjectsPage } from './pages/CommercialProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { ProcessPage } from './pages/ProcessPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import { GetAQuotePage } from './pages/GetAQuotePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';
import { SitemapPage } from './pages/SitemapPage';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-stone-950 text-stone-100 selection:bg-amber-500 selection:text-stone-950 font-sans">
        {/* Global Navigation Header with desktop mega-menus & mobile drawer */}
        <Header />

        {/* Dynamic Route View */}
        <main className="flex-1">
          <Routes>
            {/* Primary Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />

            {/* Services Routes */}
            <Route path="/services" element={<ServicesOverviewPage />} />
            <Route path="/services/residential-construction" element={<ResidentialConstructionPage />} />
            <Route path="/services/commercial-construction" element={<CommercialConstructionPage />} />
            <Route path="/services/renovation-remodeling" element={<RenovationRemodelingPage />} />
            <Route path="/services/architecture-planning" element={<ArchitecturePlanningPage />} />
            <Route path="/services/project-management" element={<ProjectManagementPage />} />

            {/* Projects Routes */}
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/residential" element={<ResidentialProjectsPage />} />
            <Route path="/projects/commercial" element={<CommercialProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />

            {/* Trust, Process, Gallery & Proof */}
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />

            {/* Contact & Lead Gen */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/get-a-quote" element={<GetAQuotePage />} />

            {/* Error, Legal & Utility */}
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />

            {/* Catch-all fallback to 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Actions: WhatsApp, Call, Back-to-Top */}
        <FloatingActions />
      </div>
    </Router>
  );
};

export default App;
