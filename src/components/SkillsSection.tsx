import React, { useState } from 'react';
import { 
  Languages, 
  FileSpreadsheet, 
  FileText, 
  Presentation, 
  Camera, 
  Stethoscope, 
  Activity, 
  CheckCircle2, 
  Sparkles,
  X,
  Trees,
  Microscope
} from 'lucide-react';
import { LANGUAGE_SKILLS, SOFTWARE_TOOLS, PROFILE_DATA, SAMPLE_PHOTOGRAPHY } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<typeof SAMPLE_PHOTOGRAPHY[0] | null>(null);

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-emerald-400" />;
      case 'FileText': return <FileText className="w-5 h-5 text-teal-400" />;
      case 'Presentation': return <Presentation className="w-5 h-5 text-amber-400" />;
      case 'Camera': return <Camera className="w-5 h-5 text-emerald-300" />;
      default: return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Activity className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Competencies & Proficiency
            </span>
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Medical, Software & Language Skills
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md">
          Combining clinical veterinary knowledge, analytical software tools, and verified multilingual fluency for research and education.
        </p>
      </div>

      {/* Grid Layout: Medical Competencies, Software, Languages */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* COL 1: Medical & Clinical Competencies */}
        <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Veterinary Medical Focus</h3>
              <p className="text-[11px] text-emerald-400 font-semibold">BAU Clinical Curriculum</p>
            </div>
          </div>

          <div className="space-y-3">
            {PROFILE_DATA.medicalCompetencies.map((comp, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-[#020617] border border-slate-800 space-y-1 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-white">{comp.name}</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-[#0f172a] px-2 py-0.5 rounded-full border border-slate-800">
                    {comp.level}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* COL 2: Software & Productivity Tools */}
        <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Software & Tech Tools</h3>
                <p className="text-[11px] text-teal-300 font-semibold">Office, Analysis & Photography</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {SOFTWARE_TOOLS.map((tool, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-[#020617] border border-slate-800 space-y-1 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getToolIcon(tool.iconName)}
                    <span className="text-xs font-extrabold text-white">{tool.name}</span>
                  </div>
                  <span className="text-[10px] font-bold text-teal-300 bg-[#0f172a] px-2 py-0.5 rounded-full border border-slate-800">
                    {tool.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Photography Gallery CTA */}
          <div className="pt-2">
            <div className="p-3.5 rounded-2xl bg-[#020617] border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <Camera className="w-4 h-4 text-emerald-400" />
                  <span>Clinical & Campus Photography</span>
                </span>
                <span className="text-[10px] bg-[#0f172a] px-2 py-0.5 rounded-full text-emerald-300 font-semibold border border-slate-800">
                  3 Showcases
                </span>
              </div>
              <p className="text-[11px] text-slate-300">
                Macro pathology imaging, BAU campus botanical vistas, and veterinary lab observations.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-1">
                {SAMPLE_PHOTOGRAPHY.map((photo) => (
                  <button
                    key={photo.id}
                    onClick={() => setActivePhoto(photo)}
                    className="p-2 rounded-xl bg-[#0f172a] border border-slate-800 hover:border-emerald-500/40 text-center text-[10px] text-slate-300 hover:text-white transition-all"
                  >
                    <Camera className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-1" />
                    <span className="line-clamp-1">{photo.category}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* COL 3: Languages & Duolingo Scores */}
        <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Languages</h3>
                <p className="text-[11px] text-amber-300 font-semibold">Duolingo Verified Fluency</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {LANGUAGE_SKILLS.map((lang, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-[#020617] border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{lang.flag}</span>
                  <div>
                    <h4 className="text-xs font-extrabold text-white">{lang.name}</h4>
                    <p className="text-[11px] text-slate-400">{lang.level}</p>
                  </div>
                </div>

                {lang.score ? (
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                    {lang.score}
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300">
                    Native
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-2xl bg-[#020617] border border-slate-800 text-xs text-slate-300 space-y-1">
            <span className="font-bold text-emerald-400 block">Academic Communication:</span>
            <p className="text-[11px] leading-relaxed">
              Capable of analyzing English medical research papers, conducting clinical discussions, and teaching in Bengali or English.
            </p>
          </div>
        </div>

      </div>

      {/* Photography Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl relative">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-[#020617] text-slate-400 hover:text-white border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className={`h-48 rounded-2xl bg-gradient-to-br ${activePhoto.placeholderBg} flex flex-col items-center justify-center p-6 text-center border border-slate-800 space-y-2`}>
              {activePhoto.icon === 'Trees' ? (
                <Trees className="w-12 h-12 text-emerald-400 animate-pulse" />
              ) : activePhoto.icon === 'Microscope' ? (
                <Microscope className="w-12 h-12 text-teal-400 animate-pulse" />
              ) : (
                <Stethoscope className="w-12 h-12 text-emerald-300 animate-pulse" />
              )}
              <h4 className="text-lg font-extrabold text-white">{activePhoto.title}</h4>
              <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-emerald-500 text-slate-950">
                {activePhoto.category}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activePhoto.description}
            </p>

            <button
              onClick={() => setActivePhoto(null)}
              className="w-full py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs"
            >
              Close Photography Showcase
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
