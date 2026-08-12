import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ShieldCheck, Lock, Check, X, RefreshCw, LogOut, User, Github, GraduationCap, Award, Link2 } from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminCustomizationModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const { profile, isAdmin, loginAdmin, logoutAdmin, updateProfile, resetToDefaults } = usePortfolio();

  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);

  // Form states for profile edit
  const [name, setName] = useState(profile.name);
  const [title, setTitle] = useState(profile.title);
  const [institution, setInstitution] = useState(profile.institution);
  const [residenceHall, setResidenceHall] = useState(profile.residenceHall || '');
  const [currentGpa, setCurrentGpa] = useState(profile.currentGpa);
  const [expectedGraduation, setExpectedGraduation] = useState(profile.expectedGraduation);
  const [statusPill, setStatusPill] = useState(profile.statusPill);
  const [github, setGithub] = useState(profile.github);
  const [linkedin, setLinkedin] = useState(profile.linkedin);
  const [gpaCalcGithub, setGpaCalcGithub] = useState(profile.gpaCalcGithub || '');
  const [labelGenGithub, setLabelGenGithub] = useState(profile.labelGenGithub || '');
  const [about, setAbout] = useState(profile.about);

  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(pinInput);
    if (!success) {
      setPinError(true);
    } else {
      setPinError(false);
      setPinInput('');
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name,
      title,
      institution,
      residenceHall,
      currentGpa,
      expectedGraduation,
      statusPill,
      github,
      linkedin,
      gpaCalcGithub,
      labelGenGithub,
      about
    });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Shad&apos;s Portfolio Customization</span>
                {isAdmin && (
                  <span className="text-[10px] font-black uppercase bg-emerald-500 text-slate-950 px-2 py-0.5 rounded-full">
                    Admin Active
                  </span>
                )}
              </h3>
              <p className="text-xs text-slate-400">
                Update credentials, utility links, and dynamic site information
              </p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isAdmin ? (
          /* Authentication Form */
          <form onSubmit={handleLogin} className="space-y-4 py-4 max-w-sm mx-auto text-center">
            <div className="p-4 rounded-2xl bg-[#020617] border border-slate-800 space-y-3">
              <Lock className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="text-sm font-bold text-white">Enter Security Passcode</h4>
              <p className="text-xs text-slate-400">
                Only Shad can edit and customize portfolio details.
              </p>

              <input
                type="password"
                value={pinInput}
                onChange={(e) => {
                  setPinInput(e.target.value);
                  setPinError(false);
                }}
                placeholder="Passcode (Default: 1209)"
                className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-4 py-2.5 text-center text-sm font-mono text-white focus:outline-none focus:border-emerald-400"
                autoFocus
              />

              {pinError && (
                <p className="text-xs text-red-400 font-semibold">
                  Incorrect passcode. Try passcode: 1209
                </p>
              )}

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors text-xs"
              >
                Unlock Customization
              </button>
            </div>
          </form>
        ) : (
          /* Admin Editing Interface */
          <div className="space-y-6">
            
            {/* Success message */}
            {saveSuccess && (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-300 text-xs text-center flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Changes saved successfully to your browser storage!</span>
              </div>
            )}

            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
              
              {/* Basic Info */}
              <div className="space-y-3 bg-[#020617] p-4 rounded-2xl border border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  <span>Profile Basics</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Academic Title</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Institution</label>
                    <input
                      type="text"
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Residence Hall</label>
                    <input
                      type="text"
                      value={residenceHall}
                      onChange={(e) => setResidenceHall(e.target.value)}
                      placeholder="e.g. Shaheed Shamsul Haque Hall"
                      className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Status Banner Pill Text</label>
                  <input
                    type="text"
                    value={statusPill}
                    onChange={(e) => setStatusPill(e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">About Bio</label>
                  <textarea
                    rows={3}
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              {/* GPA & Graduation */}
              <div className="space-y-3 bg-[#020617] p-4 rounded-2xl border border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Metrics</span>
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Current CGPA</label>
                    <input
                      type="text"
                      value={currentGpa}
                      onChange={(e) => setCurrentGpa(e.target.value)}
                      className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Expected Graduation</label>
                    <input
                      type="text"
                      value={expectedGraduation}
                      onChange={(e) => setExpectedGraduation(e.target.value)}
                      className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>
              </div>

              {/* External Links & Utility Repositories */}
              <div className="space-y-3 bg-[#020617] p-4 rounded-2xl border border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Link2 className="w-4 h-4" />
                  <span>External & GitHub Repository Links</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">GitHub Profile Link</label>
                    <input
                      type="url"
                      value={github}
                      onChange={(e) => setGithub(e.target.value)}
                      className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">LinkedIn Profile Link</label>
                    <input
                      type="url"
                      value={linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                      className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-emerald-300 font-semibold mb-1">
                      BAU GPA Calculator GitHub Link
                    </label>
                    <input
                      type="url"
                      value={gpaCalcGithub}
                      onChange={(e) => setGpaCalcGithub(e.target.value)}
                      placeholder="https://github.com/shad9105/bau-gpa-calculator"
                      className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-2 text-emerald-300 font-mono text-[11px] focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-teal-300 font-semibold mb-1">
                      Practical Notebook Label Gen GitHub Link
                    </label>
                    <input
                      type="url"
                      value={labelGenGithub}
                      onChange={(e) => setLabelGenGithub(e.target.value)}
                      placeholder="https://github.com/shad9105/bau-notebook-label-generator"
                      className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-3 py-2 text-teal-300 font-mono text-[11px] focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>
              </div>

              {/* Save & Reset Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm('Reset all portfolio details back to default values?')) {
                        resetToDefaults();
                        onClose();
                      }
                    }}
                    className="px-3 py-2 rounded-xl bg-slate-800 text-slate-400 hover:text-red-400 transition-colors text-xs flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Reset Defaults</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      logoutAdmin();
                      onClose();
                    }}
                    className="px-3 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1.5"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Exit Admin</span>
                  </button>
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all flex items-center gap-1.5 shadow-lg shadow-emerald-500/20"
                >
                  <Check className="w-4 h-4" />
                  <span>Save Profile Changes</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
