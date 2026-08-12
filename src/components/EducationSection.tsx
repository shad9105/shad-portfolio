import React from 'react';
import { GraduationCap, Award, School, CheckCircle, Calendar, Edit2, Trash2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const EducationSection: React.FC = () => {
  const { education, isAdmin, deleteEducation } = usePortfolio();

  return (
    <section id="qualifications" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <GraduationCap className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Academic Background
            </span>
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Education & Qualifications
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md">
          A continuous track record of academic excellence, top merit board scholarships, and rigorous veterinary science coursework at Bangladesh Agricultural University.
        </p>
      </div>

      {/* Timeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {education.map((item, idx) => (
          <div
            key={item.id}
            className={`p-6 rounded-3xl border transition-all relative flex flex-col justify-between ${
              item.isCurrent
                ? 'bg-[#0f172a] border-slate-700 emerald-glow-sm hover:border-emerald-500/40'
                : 'bg-[#0f172a] border-slate-800 hover:border-slate-700'
            }`}
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {idx === 0 ? (
                  <GraduationCap className="w-6 h-6" />
                ) : idx === 1 ? (
                  <Award className="w-6 h-6 text-amber-400" />
                ) : (
                  <School className="w-6 h-6 text-teal-400" />
                )}
              </div>

              <div className="flex items-center gap-2">
                {item.isCurrent ? (
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500 text-slate-950 uppercase tracking-wider">
                    Ongoing Degree
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    Board Scholarship
                  </span>
                )}

                {isAdmin && (
                  <button
                    onClick={() => deleteEducation(item.id)}
                    className="p-1 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-800"
                    title="Delete item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3 my-2">
              <h3 className="text-xl font-bold text-white leading-tight">
                {item.degree}
              </h3>
              
              <p className="text-sm font-semibold text-emerald-400">
                {item.institution}
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span>{item.period}</span>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-semibold text-slate-400">Grade / Score:</span>
                  <span className="text-lg font-black text-white bg-[#020617] px-2.5 py-0.5 rounded-lg border border-slate-800">
                    GPA {item.gpa}
                  </span>
                </div>
              </div>
            </div>

            {/* Footer Achievement Note */}
            {item.achievement && (
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-start gap-2 text-xs text-emerald-400">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item.achievement}</span>
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};
