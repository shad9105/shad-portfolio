import React from 'react';
import { 
  Stethoscope, 
  GraduationCap, 
  Award, 
  Calculator, 
  FileBadge, 
  Languages, 
  Briefcase, 
  ChevronRight, 
  Mail, 
  FileText, 
  Github, 
  Linkedin, 
  MapPin, 
  CheckCircle2, 
  BookOpen,
  ExternalLink
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface HeroBentoProps {
  onOpenContact: () => void;
  onOpenCv: () => void;
  onSelectUtility: (key: 'gpa-calc' | 'label-gen') => void;
}

export const HeroBento: React.FC<HeroBentoProps> = ({
  onOpenContact,
  onOpenCv,
  onSelectUtility,
}) => {
  const { profile } = usePortfolio();

  const handleLaunchGpaCalc = () => {
    if (profile.gpaCalcGithub) {
      window.open(profile.gpaCalcGithub, '_blank');
    } else {
      onSelectUtility('gpa-calc');
    }
  };

  const handleLaunchLabelGen = () => {
    if (profile.labelGenGithub) {
      window.open(profile.labelGenGithub, '_blank');
    } else {
      onSelectUtility('label-gen');
    }
  };

  return (
    <section id="bento" className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      
      {/* Status Banner Pill */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl bg-[#0f172a] border border-slate-800 emerald-glow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Stethoscope className="w-5 h-5 animate-bounce" />
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              Clinical & Academic Status
            </span>
            <p className="text-sm font-semibold text-white">
              {profile.statusPill}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#020617] text-emerald-400 border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-ping"></span>
            Expected Grad: {profile.expectedGraduation}
          </span>
        </div>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

        {/* BENTO CARD 1: MAIN PROFILE CARD (Span 2 col on md/lg) */}
        <div className="md:col-span-2 lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-[#0f172a] border border-slate-800 relative overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-slate-700 transition-all">
          {/* Subtle Ambient Watermark Icon */}
          <Stethoscope className="absolute -right-8 -bottom-8 w-64 h-64 text-emerald-500/5 pointer-events-none group-hover:scale-105 transition-transform duration-500" />
          
          <div className="space-y-4 relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                BAU Mymensingh
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                Doctor of Veterinary Medicine
              </span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {profile.name}
              </h1>
              <p className="text-lg font-semibold text-emerald-400 mt-1">
                {profile.title}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 flex flex-wrap items-center gap-2 mt-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{profile.institution}</span>
                </span>
                {profile.residenceHall && (
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 text-[11px] font-semibold border border-emerald-500/20">
                    Resident: {profile.residenceHall}
                  </span>
                )}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
              {profile.about}
            </p>
          </div>

          {/* Action Buttons & Socials */}
          <div className="pt-6 mt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 relative z-10">
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenContact}
                id="btn-bento-contact"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:from-emerald-400 hover:to-teal-400 transition-all shadow-lg shadow-emerald-500/20"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Shad</span>
              </button>
              <button
                onClick={onOpenCv}
                id="btn-bento-cv"
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-[#020617] text-emerald-400 border border-slate-800 hover:border-emerald-500/40 hover:text-white transition-all"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>CV</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                id="link-bento-github"
                className="p-2.5 rounded-xl bg-[#020617] text-slate-300 border border-slate-800 hover:text-white hover:border-emerald-500/40 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                id="link-bento-linkedin"
                className="p-2.5 rounded-xl bg-[#020617] text-slate-300 border border-slate-800 hover:text-white hover:border-emerald-500/40 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* BENTO CARD 2: CURRENT GPA CARD */}
        <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 flex flex-col justify-between relative overflow-hidden shadow-xl hover:border-emerald-500/40 transition-all group">
          <div className="flex items-center justify-between">
            <span className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <GraduationCap className="w-6 h-6" />
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 bg-[#020617] px-2.5 py-1 rounded-full border border-slate-800">
              BAU Academic Metric
            </span>
          </div>

          <div className="my-4 space-y-1">
            <div className="text-4xl sm:text-5xl font-black text-white tracking-tight flex items-baseline gap-1">
              <span>{profile.currentGpa}</span>
              <span className="text-lg text-emerald-400 font-semibold">/ {profile.gpaScale}</span>
            </div>
            <p className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
              Current CGPA (D.V.M.)
            </p>
            <p className="text-xs text-slate-400 pt-1">
              Bangladesh Agricultural University credit standard.
            </p>
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
            <span>Graduation Target:</span>
            <span className="font-bold text-emerald-400">{profile.expectedGraduation}</span>
          </div>
        </div>

        {/* BENTO CARD 3: ACADEMIC HONORS & SCHOLARSHIPS */}
        <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 flex flex-col justify-between relative overflow-hidden shadow-xl hover:border-emerald-500/40 transition-all group">
          <div className="flex items-center justify-between">
            <span className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Award className="w-6 h-6" />
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 bg-[#020617] px-2.5 py-1 rounded-full border border-slate-800">
              Board Scholar
            </span>
          </div>

          <div className="my-3 space-y-2">
            <h3 className="text-lg font-bold text-white leading-tight">
              2x Board Scholarship Winner
            </h3>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>HSC (Science): <strong>GPA 5.00/5.00</strong></span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>SSC (Science): <strong>GPA 5.00/5.00</strong></span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
            Shahid Syed Nazrul Islam College & Jamalpur Zilla School
          </div>
        </div>

        {/* BENTO CARD 4: TEACHING & EVALUATION WORK */}
        <div className="md:col-span-1 lg:col-span-2 p-6 rounded-3xl bg-[#0f172a] border border-slate-800 flex flex-col justify-between shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <Briefcase className="w-5 h-5" />
              </span>
              <h3 className="text-base font-bold text-white">
                Academic Teaching & Evaluation
              </h3>
            </div>
            <span className="text-xs font-bold text-teal-400 px-2.5 py-0.5 rounded-full bg-[#020617] border border-slate-800">
              UDVASH-উদ্ভাস
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
            <div className="p-3 rounded-2xl bg-[#020617] border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-300">Script Evaluator</span>
                <span className="text-[10px] text-emerald-400 font-mono">May 2025–Pres.</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Evaluating board & university admission model test answer scripts in Biology & Natural Science.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-[#020617] border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-teal-300">Q & A Teacher</span>
                <span className="text-[10px] text-teal-400 font-mono">Oct 2025–Mar 2026</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Solving online biological inquiries and clarifying concepts for students nationwide.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>Mymensingh & Remote Dhaka Operations</span>
          </div>
        </div>

        {/* BENTO CARD 5: LANGUAGES & GLOBAL DUOLINGO SCORE */}
        <div className="md:col-span-1 lg:col-span-2 p-6 rounded-3xl bg-[#0f172a] border border-slate-800 flex flex-col justify-between shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Languages className="w-5 h-5" />
              </span>
              <h3 className="text-base font-bold text-white">
                Language Proficiency
              </h3>
            </div>
            <span className="text-xs font-bold text-emerald-400 px-2.5 py-0.5 rounded-full bg-[#020617] border border-slate-800">
              Duolingo Verified
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 my-4">
            <div className="p-3 rounded-2xl bg-[#020617] border border-slate-800 text-center space-y-1">
              <span className="text-lg">🇬🇧</span>
              <h4 className="text-xs font-bold text-white">English</h4>
              <p className="text-xs font-black text-emerald-400">Score 129</p>
              <p className="text-[10px] text-slate-400">Advanced</p>
            </div>

            <div className="p-3 rounded-2xl bg-[#020617] border border-slate-800 text-center space-y-1">
              <span className="text-lg">🇪🇸</span>
              <h4 className="text-xs font-bold text-white">Spanish</h4>
              <p className="text-xs font-black text-teal-400">Score 14</p>
              <p className="text-[10px] text-slate-400">Elementary</p>
            </div>

            <div className="p-3 rounded-2xl bg-[#020617] border border-slate-800 text-center space-y-1">
              <span className="text-lg">🇧🇩</span>
              <h4 className="text-xs font-bold text-white">Bengali</h4>
              <p className="text-xs font-black text-emerald-400">Native</p>
              <p className="text-[10px] text-slate-400">Mother Tongue</p>
            </div>
          </div>

          <p className="text-xs text-slate-400">
            Fluent scientific writing, medical terminology translation, and clinical communication skills.
          </p>
        </div>

      </div>

      {/* BENTO ACTION BANNER: BAU STUDENT UTILITIES QUICK LAUNCH (Matches Image 1) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase bg-emerald-500 text-slate-950">
                Custom Student Tools
              </span>
              <span className="text-xs text-emerald-400 font-semibold">
                Designed for BAU Veterinary & Academic Community
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Interactive BAU Utilities Created by Shad
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Automated tools designed specifically for Bangladesh Agricultural University students to simplify practical notebook labeling and GPA credit forecasting.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleLaunchGpaCalc}
              id="btn-launch-gpa"
              className="flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:from-emerald-400 hover:to-teal-400 transition-all shadow-lg shadow-emerald-500/20 group"
            >
              <Calculator className="w-4 h-4" />
              <span>Launch GPA & Mark Calc</span>
              {profile.gpaCalcGithub ? (
                <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
              ) : (
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </button>

            <button
              onClick={handleLaunchLabelGen}
              id="btn-launch-label"
              className="flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-[#020617] text-emerald-400 border border-slate-800 hover:border-emerald-500/40 hover:text-white transition-all group"
            >
              <FileBadge className="w-4 h-4 text-emerald-400" />
              <span>Notebook Label Generator</span>
              {profile.labelGenGithub ? (
                <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
              ) : (
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

