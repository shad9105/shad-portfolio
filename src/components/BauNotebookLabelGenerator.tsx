import React, { useState } from 'react';
import { FileBadge, Printer, Copy, Check, Sparkles, RefreshCw, BookOpen, User, Building, Calendar, Award } from 'lucide-react';
import { BauNotebookData } from '../types';
import { BAU_PRESET_SUBJECTS } from '../data/portfolioData';

export const BauNotebookLabelGenerator: React.FC = () => {
  const [formData, setFormData] = useState<BauNotebookData>({
    studentName: 'Shad Bin Ibne Kamal',
    studentRoll: '2501009',
    regNo: '54321',
    session: '2024-2025',
    faculty: 'Faculty of Veterinary Science',
    department: 'Anatomy & Histology',
    courseTitle: 'Veterinary Anatomy II (Splanchnology)',
    courseCode: 'VAN-102',
    teacherName: 'Prof. Dr. M. A. Rahman',
    teacherDesignation: 'Professor, Dept. of Anatomy & Histology',
    submissionDate: new Date().toISOString().split('T')[0],
    themeColor: 'emerald',
  });

  const [copied, setCopied] = useState(false);

  const handleInputChange = (field: keyof BauNotebookData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const applyPresetSubject = (preset: typeof BAU_PRESET_SUBJECTS[0]) => {
    setFormData((prev) => ({
      ...prev,
      courseCode: preset.code,
      courseTitle: preset.name,
      department: preset.dept,
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `BANGLADESH AGRICULTURAL UNIVERSITY, MYMENSINGH\n` +
      `${formData.faculty.toUpperCase()}\n` +
      `DEPARTMENT OF ${formData.department.toUpperCase()}\n\n` +
      `PRACTICAL NOTEBOOK / LAB REPORT\n` +
      `Course Code: ${formData.courseCode}\n` +
      `Course Title: ${formData.courseTitle}\n\n` +
      `Submitted By:\n` +
      `Name: ${formData.studentName}\n` +
      `Roll No: ${formData.studentRoll} | Reg No: ${formData.regNo}\n` +
      `Session: ${formData.session}\n\n` +
      `Submitted To:\n` +
      `${formData.teacherName}\n` +
      `${formData.teacherDesignation}\n` +
      `Date: ${formData.submissionDate}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-2xl space-y-8">
      
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <FileBadge className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              BAU Practical Notebook Label Generator
            </h3>
            <p className="text-xs text-emerald-400">
              Automated cover & lab label creator for Bangladesh Agricultural University students
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyText}
            id="btn-copy-notebook-text"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-[#020617] text-emerald-400 border border-slate-800 hover:border-emerald-500/40 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Text'}</span>
          </button>
          <button
            onClick={handlePrint}
            id="btn-print-notebook-label"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:from-emerald-400 hover:to-teal-400 transition-all shadow-md shadow-emerald-500/20"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Preset Subject Selector Chips */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Quick BAU Veterinary Subject Presets:</span>
        </span>
        <div className="flex flex-wrap gap-2">
          {BAU_PRESET_SUBJECTS.map((sub, idx) => (
            <button
              key={idx}
              onClick={() => applyPresetSubject(sub)}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#020617] text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors"
            >
              <strong className="text-emerald-400 font-mono mr-1">{sub.code}:</strong>
              <span>{sub.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Form & Live Card Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Form Controls */}
        <div className="space-y-4 bg-[#020617] p-5 rounded-2xl border border-slate-800">
          <h4 className="text-sm font-bold text-white border-b border-slate-800 pb-2">
            Customize Notebook Cover Details
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] text-slate-400 block mb-1">Student Full Name</label>
              <input
                type="text"
                value={formData.studentName}
                onChange={(e) => handleInputChange('studentName', e.target.value)}
                className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="text-[11px] text-slate-400 block mb-1">Roll / Student ID</label>
              <input
                type="text"
                value={formData.studentRoll}
                onChange={(e) => handleInputChange('studentRoll', e.target.value)}
                className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-emerald-300 font-mono font-bold focus:outline-none"
              />
            </div>

            <div>
              <label className="text-[11px] text-slate-400 block mb-1">Registration No</label>
              <input
                type="text"
                value={formData.regNo}
                onChange={(e) => handleInputChange('regNo', e.target.value)}
                className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-200 font-mono focus:outline-none"
              />
            </div>

            <div>
              <label className="text-[11px] text-slate-400 block mb-1">Academic Session</label>
              <input
                type="text"
                value={formData.session}
                onChange={(e) => handleInputChange('session', e.target.value)}
                className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-200 font-mono focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] text-slate-400 block mb-1">Faculty</label>
              <input
                type="text"
                value={formData.faculty}
                onChange={(e) => handleInputChange('faculty', e.target.value)}
                className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="text-[11px] text-slate-400 block mb-1">Department</label>
              <input
                type="text"
                value={formData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
                className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-[11px] text-slate-400 block mb-1">Course Code</label>
              <input
                type="text"
                value={formData.courseCode}
                onChange={(e) => handleInputChange('courseCode', e.target.value)}
                className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-emerald-300 font-mono font-bold focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-[11px] text-slate-400 block mb-1">Course Title</label>
              <input
                type="text"
                value={formData.courseTitle}
                onChange={(e) => handleInputChange('courseTitle', e.target.value)}
                className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] text-slate-400 block mb-1">Teacher / Instructor</label>
              <input
                type="text"
                value={formData.teacherName}
                onChange={(e) => handleInputChange('teacherName', e.target.value)}
                className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="text-[11px] text-slate-400 block mb-1">Submission Date</label>
              <input
                type="date"
                value={formData.submissionDate}
                onChange={(e) => handleInputChange('submissionDate', e.target.value)}
                className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none font-mono"
              />
            </div>
          </div>
        </div>

        {/* Live Card Preview (Targeted for Printing!) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-emerald-400 font-semibold">
            <span>Live Printable BAU Cover Card:</span>
            <span className="font-mono text-[10px] text-slate-400">Format: Standard A4 / Notebook Cover Label</span>
          </div>

          <div
            id="printable-bau-label"
            className="p-6 sm:p-8 bg-white text-slate-900 rounded-2xl shadow-2xl border-4 border-emerald-900 space-y-6 relative overflow-hidden font-serif"
          >
            {/* Header Crest Branding */}
            <div className="text-center border-b-2 border-emerald-900 pb-4 space-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-900 text-amber-300 font-bold text-lg mb-1 mx-auto shadow-inner">
                BAU
              </div>
              <h2 className="text-lg sm:text-xl font-black text-emerald-950 uppercase tracking-wide">
                Bangladesh Agricultural University
              </h2>
              <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Mymensingh - 2202, Bangladesh
              </p>
              <p className="text-xs font-semibold text-emerald-900 uppercase pt-1">
                {formData.faculty}
              </p>
            </div>

            {/* Department & Cover Title Banner */}
            <div className="text-center space-y-2 py-2">
              <span className="inline-block px-4 py-1 bg-emerald-950 text-white text-xs font-bold uppercase tracking-widest rounded-sm">
                Practical Notebook
              </span>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                Department of {formData.department}
              </p>
            </div>

            {/* Course Information Box */}
            <div className="p-3 bg-emerald-50 border border-emerald-900/30 text-xs space-y-1">
              <div className="flex items-baseline justify-between font-mono">
                <span className="font-bold text-emerald-950">Course Code: {formData.courseCode}</span>
                <span className="text-slate-600">Session: {formData.session}</span>
              </div>
              <p className="font-bold text-slate-900 text-sm font-sans">
                Course Title: {formData.courseTitle}
              </p>
            </div>

            {/* Student & Teacher Submission Grid */}
            <div className="grid grid-cols-2 gap-4 text-xs pt-2 border-t border-emerald-900/20">
              
              {/* Submitted By */}
              <div className="space-y-1.5 border-r border-emerald-900/20 pr-3">
                <p className="font-bold text-emerald-950 uppercase text-[10px] tracking-wider border-b border-emerald-900/20 pb-0.5">
                  Submitted By:
                </p>
                <p className="font-extrabold text-sm text-slate-9 font-sans">{formData.studentName}</p>
                <p className="text-slate-700"><strong>Roll No:</strong> {formData.studentRoll}</p>
                <p className="text-slate-700"><strong>Reg No:</strong> {formData.regNo}</p>
                <p className="text-slate-700"><strong>Session:</strong> {formData.session}</p>
              </div>

              {/* Submitted To */}
              <div className="space-y-1.5 pl-1">
                <p className="font-bold text-emerald-950 uppercase text-[10px] tracking-wider border-b border-emerald-900/20 pb-0.5">
                  Submitted To:
                </p>
                <p className="font-bold text-slate-900">{formData.teacherName}</p>
                <p className="text-[11px] text-slate-700 leading-tight">{formData.teacherDesignation}</p>
                <p className="text-[11px] text-slate-700 pt-1">Dept. of {formData.department}</p>
              </div>

            </div>

            {/* Footer Verification & Date */}
            <div className="pt-6 border-t-2 border-emerald-900 flex items-end justify-between text-[11px]">
              <div>
                <p className="font-bold text-slate-800">Date of Submission:</p>
                <p className="font-mono text-emerald-950 font-bold">{formData.submissionDate}</p>
              </div>

              <div className="text-center space-y-1">
                <div className="w-28 border-b border-dashed border-slate-900"></div>
                <p className="text-[10px] text-slate-600 font-sans">Teacher's Signature</p>
              </div>
            </div>

            {/* Barcode Simulation Graphic */}
            <div className="pt-2 flex items-center justify-between opacity-60 text-[9px] font-mono text-slate-500">
              <span>BAU-DVM-LABEL-{formData.studentRoll}</span>
              <div className="flex gap-0.5 h-4 items-center">
                <span className="w-0.5 h-full bg-slate-900"></span>
                <span className="w-1 h-full bg-slate-900"></span>
                <span className="w-0.5 h-full bg-slate-900"></span>
                <span className="w-1.5 h-full bg-slate-900"></span>
                <span className="w-0.5 h-full bg-slate-900"></span>
                <span className="w-1 h-full bg-slate-900"></span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
