import React from 'react';
import { Briefcase, Calendar, MapPin, Trash2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const ExperienceSection: React.FC = () => {
  const { experience, isAdmin, deleteExperience } = usePortfolio();

  return (
    <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
              <Briefcase className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
              Professional & Teaching Experience
            </span>
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Academic Work & Evaluation
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md">
          Active teaching, biological question-answering, and answer-script evaluation at UDVASH-উদ্ভাস, Bangladesh’s premier academic care network.
        </p>
      </div>

      {/* Experience List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="p-6 sm:p-8 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-xl hover:border-slate-700 transition-all space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                  {exp.company}
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  {isAdmin && (
                    <button
                      onClick={() => deleteExperience(exp.id)}
                      className="p-1 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-800"
                      title="Delete item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white">
                  {exp.role}
                </h3>
                <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{exp.location}</span>
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
                {exp.description}
              </p>
            </div>

            {/* Tags */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
              {exp.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[#020617] text-emerald-400 border border-slate-800"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
