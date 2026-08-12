import React, { useState } from 'react';
import { Stethoscope, FileText, Mail, Menu, X, Trophy, Settings, ShieldCheck } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface HeaderProps {
  onOpenContact: () => void;
  onOpenCv: () => void;
  onOpenAdmin: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenContact,
  onOpenCv,
  onOpenAdmin,
  activeSection,
  setActiveSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { profile, isAdmin } = usePortfolio();

  const navLinks = [
    { id: 'bento', label: 'Overview' },
    { id: 'honors', label: 'Honors & Olympiads' },
    { id: 'qualifications', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'utilities', label: 'BAU Utilities' },
    { id: 'skills', label: 'Skills & Languages' },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="header" className="sticky top-0 z-50 bg-[#020617]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Medical Title */}
        <div 
          onClick={() => scrollTo('bento')}
          className="cursor-pointer flex items-center gap-3 group"
          id="brand-logo-container"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 p-0.5 emerald-glow-sm group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0f172a] rounded-[10px] flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-emerald-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                {profile.headerBrand}
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1"></span>
                BAU
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Veterinary Medicine Student
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0f172a]/90 p-1.5 rounded-full border border-slate-800">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              id={`nav-link-${link.id}`}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeSection === link.id
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Admin Customization Trigger */}
          <button
            onClick={onOpenAdmin}
            id="btn-header-admin"
            className={`p-2 rounded-xl text-xs font-semibold border transition-all ${
              isAdmin 
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' 
                : 'bg-[#0f172a] text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
            }`}
            title="Edit / Customize Portfolio Information"
          >
            <ShieldCheck className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenCv}
            id="btn-header-cv"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#0f172a] text-emerald-400 border border-slate-800 hover:border-emerald-500/40 hover:text-white transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>CV</span>
          </button>

          <button
            onClick={onOpenContact}
            id="btn-header-contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:from-emerald-400 hover:to-teal-400 transition-all shadow-lg shadow-emerald-500/20"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenAdmin}
            className="p-2 rounded-lg bg-[#0f172a] text-slate-300 border border-slate-800"
            title="Edit Portfolio"
          >
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="btn-mobile-menu"
            className="p-2 rounded-lg bg-[#0f172a] text-emerald-400 border border-slate-800"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0f172a] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between py-2 mb-2 border-b border-slate-800">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              {profile.statusPill}
            </span>
          </div>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCv(); }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold bg-[#020617] text-emerald-300 border border-slate-800"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>View CV</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-emerald-500 text-slate-950"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
