import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { HonorAward } from '../types';
import { Trophy, Award, Flag, Briefcase, Globe, Edit2, Plus, Trash2, Check, X, ShieldCheck } from 'lucide-react';

export const HonorsSection: React.FC = () => {
  const { honors, isAdmin, addHonor, updateHonor, deleteHonor } = usePortfolio();
  
  const [editingHonor, setEditingHonor] = useState<HonorAward | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // Form state
  const [formTitle, setFormTitle] = useState('');
  const [formLevel, setFormLevel] = useState('');
  const [formDate, setFormDate] = useState('');
  const [formIcon, setFormIcon] = useState<'briefcase' | 'flag' | 'trophy' | 'award'>('flag');
  const [formLink, setFormLink] = useState('');

  const openEditModal = (honor: HonorAward) => {
    setEditingHonor(honor);
    setFormTitle(honor.title);
    setFormLevel(honor.awardLevel || '');
    setFormDate(honor.date);
    setFormIcon(honor.iconType || 'flag');
    setFormLink(honor.link || '');
    setIsAddingNew(false);
  };

  const openAddModal = () => {
    setEditingHonor(null);
    setFormTitle('');
    setFormLevel('Winner');
    setFormDate('');
    setFormIcon('flag');
    setFormLink('');
    setIsAddingNew(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) return;

    if (isAddingNew) {
      addHonor({
        title: formTitle,
        awardLevel: formLevel,
        date: formDate,
        iconType: formIcon,
        link: formLink
      });
    } else if (editingHonor) {
      updateHonor(editingHonor.id, {
        title: formTitle,
        awardLevel: formLevel,
        date: formDate,
        iconType: formIcon,
        link: formLink
      });
    }

    closeModal();
  };

  const closeModal = () => {
    setEditingHonor(null);
    setIsAddingNew(false);
  };

  const renderIcon = (type?: string) => {
    switch (type) {
      case 'briefcase':
        return <Briefcase className="w-5 h-5 text-slate-700" />;
      case 'trophy':
        return <Trophy className="w-5 h-5 text-slate-700" />;
      case 'award':
        return <Award className="w-5 h-5 text-slate-700" />;
      case 'flag':
      default:
        return <Flag className="w-5 h-5 text-slate-700" />;
    }
  };

  return (
    <section id="honors" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Honors, Olympiads & Achievements
            </h2>
            <p className="text-xs text-slate-400">
              National & Regional competitive distinctions in mathematics, science, and programming
            </p>
          </div>
        </div>

        {isAdmin && (
          <button
            onClick={openAddModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Honor / Award</span>
          </button>
        )}
      </div>

      {/* List Container - matching Image 2 layout */}
      <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-4 sm:p-6 shadow-xl divide-y divide-slate-800/80">
        {honors.map((honor) => (
          <div
            key={honor.id}
            className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4 group hover:bg-slate-800/30 px-2 sm:px-3 rounded-2xl transition-colors"
          >
            <div className="flex items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
              {/* Circular Icon Avatar - like Image 2 */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-200 flex items-center justify-center shrink-0 shadow-md">
                {renderIcon(honor.iconType)}
              </div>

              {/* Text Info */}
              <div className="min-w-0 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-100 truncate group-hover:text-emerald-400 transition-colors">
                  {honor.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mt-0.5">
                  {honor.awardLevel && (
                    <span className="font-semibold text-slate-300">{honor.awardLevel}</span>
                  )}
                  {honor.awardLevel && honor.date && (
                    <span className="text-slate-600">•</span>
                  )}
                  {honor.date && (
                    <span>{honor.date}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons: Globe Link & Edit Pencil (Image 2 style) */}
            <div className="flex items-center gap-2 shrink-0">
              {honor.link && (
                <a
                  href={honor.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="View details / link"
                >
                  <Globe className="w-4 h-4" />
                </a>
              )}

              {/* Always show pencil when admin is active or hovering */}
              {isAdmin && (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => openEditModal(honor)}
                    className="p-2 rounded-xl text-slate-300 hover:text-emerald-400 hover:bg-slate-800 transition-colors"
                    title="Edit item"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteHonor(honor.id)}
                    className="p-2 rounded-xl text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors"
                    title="Delete item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {honors.length === 0 && (
          <div className="py-8 text-center text-xs text-slate-400">
            No honors or olympiads added yet. Click &quot;Add Honor / Award&quot; in Admin Mode to customize.
          </div>
        )}
      </div>

      {/* Edit / Add Modal */}
      {(editingHonor || isAddingNew) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 max-w-lg w-full space-y-5 shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-bold text-white">
                  {isAddingNew ? 'Add Honor / Award' : 'Edit Honor / Award'}
                </h3>
              </div>
              <button onClick={closeModal} className="p-1.5 rounded-lg text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Title / Event Name</label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g. Regional Winner at Bangladesh Mathematical Olympiad, 2021"
                  className="w-full bg-[#020617] border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Award Level / Status</label>
                  <input
                    type="text"
                    value={formLevel}
                    onChange={(e) => setFormLevel(e.target.value)}
                    placeholder="e.g. Winner"
                    className="w-full bg-[#020617] border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Date / Period</label>
                  <input
                    type="text"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    placeholder="e.g. 30 March 2021 - 31 March 2021"
                    className="w-full bg-[#020617] border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Icon Style</label>
                  <select
                    value={formIcon}
                    onChange={(e) => setFormIcon(e.target.value as any)}
                    className="w-full bg-[#020617] border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  >
                    <option value="briefcase">Briefcase / Trophy</option>
                    <option value="flag">Flag</option>
                    <option value="trophy">Trophy</option>
                    <option value="award">Award Medal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">External Link (Optional)</label>
                  <input
                    type="url"
                    value={formLink}
                    onChange={(e) => setFormLink(e.target.value)}
                    placeholder="https://example.com"
                    className="w-full bg-[#020617] border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 flex items-center gap-1.5"
                >
                  <Check className="w-4 h-4" />
                  <span>Save Honor</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
