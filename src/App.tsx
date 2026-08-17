import React, { useState } from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { Header } from './components/Header';
import { HeroBento } from './components/HeroBento';
import { HonorsSection } from './components/HonorsSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { BauGpaCalculator } from './components/BauGpaCalculator';
import { BauNotebookLabelGenerator } from './components/BauNotebookLabelGenerator';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { CvModal } from './components/CvModal';
import { AdminCustomizationModal } from './components/AdminCustomizationModal';
import { Stethoscope, ArrowUp, ExternalLink, Calculator, FileBadge, X } from 'lucide-react';

function AppContent() {
  const { profile } = usePortfolio();
  const [activeSection, setActiveSection] = useState('bento');
  const [showCvModal, setShowCvModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);

  // Modal launcher for interactive utilities if opened via popup
  const [activeUtilityModal, setActiveUtilityModal] = useState<'gpa-calc' | 'label-gen' | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectUtility = (key: 'gpa-calc' | 'label-gen') => {
    setActiveUtilityModal(key);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950 font-sans">
      
      {/* Header */}
      <Header
        onOpenContact={scrollToContact}
        onOpenCv={() => setShowCvModal(true)}
        onOpenAdmin={() => setShowAdminModal(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1 space-y-12 pb-20">
        
        {/* 1. Hero Bento Overview */}
        <HeroBento
          onOpenContact={scrollToContact}
          onOpenCv={() => setShowCvModal(true)}
          onSelectUtility={handleSelectUtility}
        />

        {/* 2. Honors, Olympiads & Achievements (Image 2 Section) */}
        <HonorsSection />

        {/* 3. Education & Qualifications */}
        <EducationSection />

        {/* 4. Academic Work & Experience */}
        <ExperienceSection />

        {/* 5. Skills, Languages & Software */}
        <SkillsSection />

        {/* 6. Contact Section */}
        <ContactSection />

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#0f172a] py-8 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-white">{profile.headerBrand}</span>
            <span>– {profile.name}</span>
          </div>

          <p className="text-center sm:text-right text-[11px] text-slate-400">
            Bangladesh Agricultural University (BAU), Mymensingh. D.V.M. Student.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-800 text-emerald-400 hover:bg-slate-700 hover:text-white transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </footer>

      {/* Modals */}
      {showCvModal && (
        <CvModal onClose={() => setShowCvModal(false)} />
      )}

      {showAdminModal && (
        <AdminCustomizationModal
          isOpen={showAdminModal}
          onClose={() => setShowAdminModal(false)}
        />
      )}

      {/* Interactive Utility Overlay Modal (When launched from banner) */}
      {activeUtilityModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-[#0f172a] border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative overflow-hidden my-auto">
            
            {/* Modal Top Bar */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-[#020617] sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {activeUtilityModal === 'gpa-calc' ? <Calculator className="w-5 h-5" /> : <FileBadge className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-white">
                    {activeUtilityModal === 'gpa-calc' ? 'BAU GPA & Mark Calculator' : 'BAU Practical Notebook Label Generator'}
                  </h3>
                  <p className="text-xs text-emerald-400 font-mono">Created by {profile.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {activeUtilityModal === 'gpa-calc' && profile.gpaCalcGithub && (
                  <a
                    href={profile.gpaCalcGithub}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 text-xs font-semibold text-emerald-400 hover:text-white"
                  >
                    <span>GitHub Repo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {activeUtilityModal === 'label-gen' && profile.labelGenGithub && (
                  <a
                    href={profile.labelGenGithub}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 text-xs font-semibold text-teal-400 hover:text-white"
                  >
                    <span>GitHub Repo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setActiveUtilityModal(null)}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
              {activeUtilityModal === 'gpa-calc' ? (
                <BauAdmissionGpaMarkCalculator />
              ) : (
                <BauNotebookLabelGenerator />
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <AppContent />
    </PortfolioProvider>
  );
}
