import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, MapPin, ExternalLink, GraduationCap, Send, PhoneCall } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedAcademic, setCopiedAcademic] = useState(false);
  const [copiedPersonal, setCopiedPersonal] = useState(false);
  const [msgSent, setMsgSent] = useState(false);
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');

  const copyEmail = (email: string, isAcademic: boolean) => {
    navigator.clipboard.writeText(email);
    if (isAcademic) {
      setCopiedAcademic(true);
      setTimeout(() => setCopiedAcademic(false), 2000);
    } else {
      setCopiedPersonal(true);
      setTimeout(() => setCopiedPersonal(false), 2000);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message || !senderEmail) return;
    setMsgSent(true);
    setTimeout(() => {
      setMsgSent(false);
      setMessage('');
      setSenderName('');
      setSenderEmail('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Mail className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Contact Shad Bin Ibne Kamal
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md">
          Open to academic discussions, veterinary clinical research collaborations, teaching opportunities, and scientific networking.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Contact Info Cards */}
        <div className="space-y-4">
          
          {/* Academic Email Card */}
          <div className="p-5 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                  Official BAU Academic Mail
                </span>
                <span className="text-sm font-bold text-white font-mono break-all">
                  {PROFILE_DATA.academicEmail}
                </span>
              </div>
            </div>

            <button
              onClick={() => copyEmail(PROFILE_DATA.academicEmail, true)}
              className="p-2.5 rounded-xl bg-[#020617] text-emerald-400 border border-slate-800 hover:border-emerald-500/40 transition-colors shrink-0"
              title="Copy Academic Email"
            >
              {copiedAcademic ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Personal Email Card */}
          <div className="p-5 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider block">
                  Personal Email
                </span>
                <span className="text-sm font-bold text-white font-mono break-all">
                  {PROFILE_DATA.personalEmail}
                </span>
              </div>
            </div>

            <button
              onClick={() => copyEmail(PROFILE_DATA.personalEmail, false)}
              className="p-2.5 rounded-xl bg-[#020617] text-teal-300 border border-slate-800 hover:border-emerald-500/40 transition-colors shrink-0"
              title="Copy Personal Email"
            >
              {copiedPersonal ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-3xl bg-[#0f172a] border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-3 group"
            >
              <div className="p-2.5 rounded-2xl bg-[#020617] text-emerald-400 border border-slate-800">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">GitHub</span>
                <span className="text-[10px] text-slate-400 font-mono">shad9105</span>
              </div>
            </a>

            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-3xl bg-[#0f172a] border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-3 group"
            >
              <div className="p-2.5 rounded-2xl bg-[#020617] text-emerald-400 border border-slate-800">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">LinkedIn</span>
                <span className="text-[10px] text-slate-400 font-mono">shad22</span>
              </div>
            </a>
          </div>

          {/* Location Badge */}
          <div className="p-4 rounded-2xl bg-[#0f172a] border border-slate-800 text-xs text-slate-300 flex items-center gap-3">
            <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Faculty of Veterinary Science, Bangladesh Agricultural University (BAU), Mymensingh - 2202, Bangladesh.</span>
          </div>

        </div>

        {/* Send Direct Message Form */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-2xl space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Send className="w-5 h-5 text-emerald-400" />
            <span>Send Direct Message</span>
          </h3>

          {msgSent ? (
            <div className="p-6 rounded-2xl bg-[#020617] border border-emerald-500 text-center space-y-2 animate-in fade-in duration-300">
              <Check className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="text-lg font-bold text-white">Message Dispatched!</h4>
              <p className="text-xs text-slate-300">
                Thank you for reaching out to Shad Bin Ibne Kamal. Your query will be reviewed shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Dr. Abdul Karim"
                  className="w-full bg-[#020617] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">Your Email Address</label>
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-[#020617] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">Message / Inquiry</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your note regarding research, academic mentorship, or clinical inquiries..."
                  className="w-full bg-[#020617] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-xs hover:from-emerald-400 hover:to-teal-400 transition-all shadow-lg shadow-emerald-500/20"
              >
                Send Message to Shad
              </button>
            </form>
          )}
        </div>

      </div>

    </section>
  );
};
