import React from 'react';
import { X, Printer, Download, GraduationCap, Award, Briefcase, Mail, Phone, MapPin, Globe, CheckCircle } from 'lucide-react';
import { PROFILE_DATA, ACADEMIC_QUALIFICATIONS, WORK_EXPERIENCE, LANGUAGE_SKILLS, SOFTWARE_TOOLS } from '../data/portfolioData';

interface CvModalProps {
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-[#020617] sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Curriculum Vitae</h3>
              <p className="text-xs text-emerald-400 font-mono">{PROFILE_DATA.name} - D.V.M. Candidate</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print CV</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#0f172a] text-slate-400 hover:text-white border border-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Printable Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto font-sans bg-white text-slate-900 text-xs">
          
          {/* CV Printable Header */}
          <div className="border-b-2 border-emerald-900 pb-4 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-2xl font-black text-emerald-950 tracking-tight">
                {PROFILE_DATA.name}
              </h1>
              <p className="text-sm font-bold text-emerald-800 mt-0.5">
                Doctor of Veterinary Medicine (D.V.M.) Candidate
              </p>
              <p className="text-xs text-slate-700">
                Bangladesh Agricultural University (BAU), Mymensingh - 2202, Bangladesh
              </p>
            </div>

            <div className="space-y-1 text-right text-slate-700 font-mono text-[11px]">
              <p><strong>Academic Mail:</strong> {PROFILE_DATA.academicEmail}</p>
              <p><strong>Personal Mail:</strong> {PROFILE_DATA.personalEmail}</p>
              <p><strong>GitHub:</strong> github.com/shad9105</p>
              <p><strong>LinkedIn:</strong> linkedin.com/in/shad22</p>
            </div>
          </div>

          {/* Academic Objective / Profile */}
          <div className="space-y-1">
            <h2 className="text-xs font-extrabold text-emerald-950 uppercase tracking-wider border-b border-emerald-900/30 pb-0.5">
              Academic Summary
            </h2>
            <p className="text-slate-800 leading-relaxed pt-1">
              {PROFILE_DATA.about}
            </p>
          </div>

          {/* Academic Qualifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold text-emerald-950 uppercase tracking-wider border-b border-emerald-900/30 pb-0.5">
              Education & Academic Qualifications
            </h2>

            <div className="space-y-3">
              {ACADEMIC_QUALIFICATIONS.map((item) => (
                <div key={item.id} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">{item.institution}</h3>
                    <p className="font-semibold text-emerald-900">{item.degree}</p>
                    {item.achievement && (
                      <p className="text-emerald-800 italic">{item.achievement}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-slate-900 font-mono">GPA {item.gpa}</span>
                    <p className="text-slate-600 font-mono">{item.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Teaching & Evaluation Experience */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold text-emerald-950 uppercase tracking-wider border-b border-emerald-900/30 pb-0.5">
              Academic & Teaching Experience
            </h2>

            <div className="space-y-3">
              {WORK_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm text-slate-900">{exp.role} - <span className="text-emerald-900">{exp.company}</span></h3>
                    <span className="font-mono text-slate-600">{exp.period}</span>
                  </div>
                  <p className="text-slate-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Student Utilities & Projects */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold text-emerald-950 uppercase tracking-wider border-b border-emerald-900/30 pb-0.5">
              Student Utilities & Projects
            </h2>

            <div className="space-y-2">
              <div>
                <strong className="text-slate-900">BAU GPA & Mark Calculator:</strong>
                <span className="text-slate-700 ml-1">Custom grade forecasting tool tailored for BAU credit system and target CGPA calculations.</span>
              </div>
              <div>
                <strong className="text-slate-900">BAU Practical Notebook Label Generator:</strong>
                <span className="text-slate-700 ml-1">Automated cover and laboratory label printing tool for Bangladesh Agricultural University students.</span>
              </div>
            </div>
          </div>

          {/* Skills & Languages */}
          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-emerald-900/30">
            <div>
              <h2 className="text-xs font-extrabold text-emerald-950 uppercase tracking-wider border-b border-emerald-900/30 pb-0.5 mb-1">
                Languages
              </h2>
              <ul className="list-disc list-inside space-y-0.5 text-slate-800">
                {LANGUAGE_SKILLS.map((lang, idx) => (
                  <li key={idx}>
                    <strong>{lang.name}:</strong> {lang.level} {lang.score ? `(${lang.score})` : ''}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-extrabold text-emerald-950 uppercase tracking-wider border-b border-emerald-900/30 pb-0.5 mb-1">
                Software & Competencies
              </h2>
              <p className="text-slate-800 leading-relaxed">
                Microsoft Excel, Office, PowerPoint Presentations, Scientific Writing, Clinical Diagnostics, Biological Q&A.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
