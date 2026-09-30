import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Send, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Website Design',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create pre-filled mailto URL
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} — ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Nasim,\n\nMy name is ${formData.name} (${formData.email}).\n\nProject Scope: ${formData.projectType}\n\nProject Details:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10"
      />

      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs uppercase font-mono tracking-widest text-cyan-400">
            05 / Contact
          </span>
          <span className="w-12 h-[1px] bg-cyan-500/30" />
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-display">
          {SITE_CONFIG.contactHeading}
        </h2>
        <p className="text-base sm:text-lg text-zinc-300 mt-4 max-w-xl">
          {SITE_CONFIG.contactCopy}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Contact & Availability Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Direct Email Card */}
          <div className="p-7 rounded-3xl liquid-glass border border-white/10 shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Direct Contact
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available Now
              </span>
            </div>

            <div>
              <p className="text-xs text-zinc-400 mb-1">Email Address</p>
              <p className="text-base sm:text-lg font-medium text-white font-mono break-all select-all">
                {SITE_CONFIG.email}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Project%20Inquiry%20for%20Nasim%20Sarwar`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-black bg-cyan-300 hover:bg-cyan-200 transition-colors shadow-lg"
              >
                <Mail className="w-4 h-4" />
                <span>Start a Conversation</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-4 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-zinc-200 hover:text-white transition-colors flex items-center justify-center gap-2 text-xs"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Availability & Location Card */}
          <div className="p-6 rounded-3xl liquid-glass border border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white font-display">
                  Project Availability
                </h4>
                <p className="text-xs text-zinc-400">
                  Open for new website design & interactive collaborations.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-400">
              <span>Location:</span>
              <span className="text-zinc-200 font-medium">{SITE_CONFIG.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Message Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl liquid-glass border border-white/10 shadow-2xl relative">
            <h3 className="text-xl font-bold text-white font-display mb-2">
              Send a Project Message
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6">
              Share details about your upcoming project, goals, or design inquiries.
            </p>

            {formSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-4">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-white font-display mb-2">
                  Message Prepared
                </h4>
                <p className="text-sm text-zinc-300 max-w-sm mb-6">
                  Your mail client has been opened with your inquiry. You can also contact directly at {SITE_CONFIG.email}.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-xs text-zinc-300 hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.05] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.05] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090b10] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400/60 transition-colors"
                  >
                    <option value="Website Design">Website Design</option>
                    <option value="Landing Page Design">Landing Page Design</option>
                    <option value="UI/UX Redesign">UI/UX Redesign</option>
                    <option value="3D & Interactive Web Experience">3D & Interactive Web Experience</option>
                    <option value="Full Website Development">Full Website Development</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.05] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-black bg-gradient-to-r from-cyan-300 via-white to-sky-200 hover:from-white hover:to-cyan-300 transition-all duration-200 shadow-[0_0_25px_rgba(110,231,249,0.25)] flex items-center justify-center gap-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <span>Start a Conversation</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
