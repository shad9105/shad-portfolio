import React, { useState } from 'react';
import { Calculator, Plus, Trash2, RefreshCw, Copy, Check, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { BauCourse } from '../types';
import { BAU_PRESET_SUBJECTS } from '../data/portfolioData';

const GRADE_POINTS: Record<string, number> = {
  'A+': 4.00,
  'A': 3.75,
  'A-': 3.50,
  'B+': 3.25,
  'B': 3.00,
  'B-': 2.75,
  'C+': 2.50,
  'C': 2.25,
  'D': 2.00,
  'F': 0.00,
};

const getGradeFromMarks = (marks: number): string => {
  if (marks >= 80) return 'A+';
  if (marks >= 75) return 'A';
  if (marks >= 70) return 'A-';
  if (marks >= 65) return 'B+';
  if (marks >= 60) return 'B';
  if (marks >= 55) return 'B-';
  if (marks >= 50) return 'C+';
  if (marks >= 45) return 'C';
  if (marks >= 40) return 'D';
  return 'F';
};

export const BauGpaCalculator: React.FC = () => {
  const [courses, setCourses] = useState<BauCourse[]>([
    { id: '1', code: 'VAN-101', name: 'Veterinary Anatomy I', credits: 3, grade: 'A+', marks: 82 },
    { id: '2', code: 'VPH-101', name: 'Veterinary Physiology I', credits: 3, grade: 'A', marks: 77 },
    { id: '3', code: 'VBC-101', name: 'General Biochemistry', credits: 2, grade: 'A-', marks: 72 },
    { id: '4', code: 'ANH-101', name: 'Animal Health & Feeds', credits: 2, grade: 'A+', marks: 85 },
  ]);

  const [copied, setCopied] = useState(false);

  // Target GPA Forecaster state
  const [pastCredits, setPastCredits] = useState<string>('15');
  const [pastCgpa, setPastCgpa] = useState<string>('3.484');
  const [targetCgpa, setTargetCgpa] = useState<string>('3.60');

  const addCourse = () => {
    const newCourse: BauCourse = {
      id: Date.now().toString(),
      code: `COURSE-${courses.length + 1}`,
      name: 'Custom BAU Subject',
      credits: 3,
      grade: 'A+',
      marks: 80,
    };
    setCourses([...courses, newCourse]);
  };

  const removeCourse = (id: string) => {
    if (courses.length <= 1) return;
    setCourses(courses.filter((c) => c.id !== id));
  };

  const updateCourse = (id: string, field: keyof BauCourse, value: any) => {
    setCourses(
      courses.map((c) => {
        if (c.id === id) {
          const updated = { ...c, [field]: value };
          if (field === 'marks') {
            const numMarks = Number(value);
            updated.grade = getGradeFromMarks(numMarks);
          } else if (field === 'grade') {
            // keep marks synced logically
          }
          return updated;
        }
        return c;
      })
    );
  };

  const loadPresetCourses = () => {
    const loaded: BauCourse[] = BAU_PRESET_SUBJECTS.slice(0, 5).map((p, idx) => ({
      id: (idx + 1).toString(),
      code: p.code,
      name: p.name,
      credits: p.credit,
      grade: 'A+',
      marks: 80 + (idx % 3) * 3,
    }));
    setCourses(loaded);
  };

  // Calculations
  const totalCredits = courses.reduce((sum, c) => sum + (Number(c.credits) || 0), 0);
  const totalPoints = courses.reduce((sum, c) => {
    const pts = GRADE_POINTS[c.grade] ?? 0;
    return sum + pts * (Number(c.credits) || 0);
  }, 0);

  const semesterGpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(3) : '0.000';

  // Forecaster calculation
  const pCred = Number(pastCredits) || 0;
  const pGpa = Number(pastCgpa) || 0;
  const tGpa = Number(targetCgpa) || 0;
  const futureCredits = totalCredits;
  const totalTargetPoints = (pCred + futureCredits) * tGpa;
  const currentEarnedPoints = pCred * pGpa;
  const requiredSemesterPoints = totalTargetPoints - currentEarnedPoints;
  const requiredSemesterGpa = futureCredits > 0 ? (requiredSemesterPoints / futureCredits).toFixed(3) : 'N/A';

  const copySummary = () => {
    const text = `BAU GPA Calculation Summary (Shad DVM Tool)\n` +
      `Semester Total Credits: ${totalCredits}\n` +
      `Calculated Semester GPA: ${semesterGpa} / 4.00\n\n` +
      `Courses breakdown:\n` +
      courses.map(c => `- ${c.code} (${c.name}): ${c.credits} Credits | ${c.marks}% | Grade ${c.grade}`).join('\n');

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-2xl space-y-6">
      
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              BAU GPA & Mark Calculator
            </h3>
            <p className="text-xs text-emerald-400">
              Tailored for Bangladesh Agricultural University (BAU) grading system
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={loadPresetCourses}
            id="btn-gpa-preset"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#020617] text-emerald-400 border border-slate-800 hover:border-emerald-500/40 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Load D.V.M. Presets</span>
          </button>
          <button
            onClick={copySummary}
            id="btn-copy-gpa-summary"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
          </button>
        </div>
      </div>

      {/* Main Calculation Metrics Header */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-[#020617] border border-slate-800 text-center">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
            Calculated Term GPA
          </span>
          <span className="text-3xl sm:text-4xl font-black text-white mt-1 block">
            {semesterGpa}
          </span>
          <span className="text-[10px] text-slate-400">Scale 4.00</span>
        </div>

        <div className="p-4 rounded-2xl bg-[#020617] border border-slate-800 text-center">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
            Total Credit Hours
          </span>
          <span className="text-3xl sm:text-4xl font-black text-emerald-400 mt-1 block">
            {totalCredits}
          </span>
          <span className="text-[10px] text-slate-400">Credits Included</span>
        </div>

        <div className="p-4 rounded-2xl bg-[#020617] border border-slate-800 text-center">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
            Total Quality Points
          </span>
          <span className="text-3xl sm:text-4xl font-black text-teal-300 mt-1 block">
            {totalPoints.toFixed(2)}
          </span>
          <span className="text-[10px] text-slate-400">Credit × Grade Points</span>
        </div>
      </div>

      {/* Course Entry Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-200 min-w-[600px]">
          <thead>
            <tr className="border-b border-slate-800 bg-[#020617] text-emerald-400 font-bold uppercase tracking-wider">
              <th className="py-3 px-3">Course Code</th>
              <th className="py-3 px-3">Course Name</th>
              <th className="py-3 px-3 text-center">Credits</th>
              <th className="py-3 px-3 text-center">Marks (%)</th>
              <th className="py-3 px-3 text-center">Grade</th>
              <th className="py-3 px-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {courses.map((course) => (
              <tr key={course.id} className="hover:bg-slate-800/40 transition-colors">
                <td className="py-2.5 px-3">
                  <input
                    type="text"
                    value={course.code}
                    onChange={(e) => updateCourse(course.id, 'code', e.target.value)}
                    className="w-full bg-[#020617] border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-emerald-300 font-mono font-bold focus:outline-none focus:border-emerald-400"
                  />
                </td>
                <td className="py-2.5 px-3">
                  <input
                    type="text"
                    value={course.name}
                    onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                    className="w-full bg-[#020617] border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-emerald-400"
                  />
                </td>
                <td className="py-2.5 px-3 text-center">
                  <input
                    type="number"
                    min="1"
                    max="6"
                    step="0.5"
                    value={course.credits}
                    onChange={(e) => updateCourse(course.id, 'credits', Number(e.target.value))}
                    className="w-16 bg-[#020617] border border-slate-800 rounded-lg px-2 py-1 text-xs text-white text-center focus:outline-none focus:border-emerald-400 font-mono"
                  />
                </td>
                <td className="py-2.5 px-3 text-center">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={course.marks ?? 80}
                    onChange={(e) => updateCourse(course.id, 'marks', Number(e.target.value))}
                    className="w-16 bg-[#020617] border border-slate-800 rounded-lg px-2 py-1 text-xs text-emerald-300 text-center font-mono focus:outline-none focus:border-emerald-400"
                  />
                </td>
                <td className="py-2.5 px-3 text-center">
                  <select
                    value={course.grade}
                    onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                    className="bg-[#020617] border border-slate-800 rounded-lg px-2 py-1 text-xs text-emerald-400 font-bold font-mono focus:outline-none focus:border-emerald-400"
                  >
                    {Object.keys(GRADE_POINTS).map((g) => (
                      <option key={g} value={g}>
                        {g} ({GRADE_POINTS[g].toFixed(2)})
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-2.5 px-3 text-center">
                  <button
                    onClick={() => removeCourse(course.id)}
                    className="p-1.5 rounded-lg text-rose-400 hover:bg-rose-950/60 transition-colors"
                    title="Remove Course"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Course Button */}
      <button
        onClick={addCourse}
        id="btn-add-course"
        className="w-full py-2.5 rounded-2xl border border-dashed border-slate-700 text-emerald-400 hover:bg-[#020617] hover:border-emerald-500/40 text-xs font-bold flex items-center justify-center gap-2 transition-all"
      >
        <Plus className="w-4 h-4" />
        <span>Add Another Course Row</span>
      </button>

      {/* Target CGPA Forecaster Section */}
      <div className="p-5 rounded-2xl bg-[#020617] border border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-emerald-400">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <h4 className="text-xs font-bold uppercase tracking-wider">
            BAU Cumulative Target GPA Forecaster
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="text-[11px] text-slate-400 block mb-1">Past Completed Credits</label>
            <input
              type="number"
              value={pastCredits}
              onChange={(e) => setPastCredits(e.target.value)}
              className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none font-mono"
            />
          </div>

          <div>
            <label className="text-[11px] text-slate-400 block mb-1">Current CGPA</label>
            <input
              type="text"
              value={pastCgpa}
              onChange={(e) => setPastCgpa(e.target.value)}
              className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-emerald-300 font-bold focus:outline-none font-mono"
            />
          </div>

          <div>
            <label className="text-[11px] text-slate-400 block mb-1">Desired Target CGPA</label>
            <input
              type="text"
              value={targetCgpa}
              onChange={(e) => setTargetCgpa(e.target.value)}
              className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-teal-300 font-bold focus:outline-none font-mono"
            />
          </div>
        </div>

        <div className="p-3 rounded-xl bg-[#0f172a] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <span className="text-slate-300">
            Average GPA needed across these <strong>{totalCredits}</strong> current credits to reach <strong>{targetCgpa}</strong> CGPA:
          </span>
          <span className="text-sm font-black text-emerald-400 bg-[#020617] px-3 py-1 rounded-lg border border-slate-800">
            {requiredSemesterGpa} / 4.00
          </span>
        </div>
      </div>

    </div>
  );
};
