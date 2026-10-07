import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, Check, Copy, ExternalLink, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-slate-100/50 dark:bg-slate-900/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-sm font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Let's Connect & Collaborate
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Have an opportunity, a project collaboration idea, or want to discuss web development? Feel free to reach out!
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with Copy Feature */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-lg transition-all space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                    Direct Email
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white break-all">
                    {personalInfo.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={copyEmail}
                  className="flex-1 inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 border border-indigo-200/60 dark:border-indigo-800/40 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-lg transition-all flex items-center justify-between block"
            >
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                    LinkedIn Network
                  </span>
                  <span className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                    {personalInfo.linkedinHandle}
                  </span>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-lg transition-all flex items-center justify-between block"
            >
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-2xl bg-slate-500/10 text-slate-700 dark:text-slate-300 group-hover:scale-105 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                    GitHub Codebase
                  </span>
                  <span className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                    {personalInfo.githubHandle}
                  </span>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 transition-colors" />
            </a>

            {/* Location Pill */}
            <div className="glass-panel p-5 rounded-3xl border border-slate-200/80 dark:border-white/10 flex items-center space-x-3 text-slate-600 dark:text-slate-300">
              <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-500">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Based In</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  {personalInfo.location} • {personalInfo.college}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-xl relative">
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill in the details below and I'll get back to you promptly.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm flex items-center space-x-2 animate-fade-in">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get in touch with you soon!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship / Tech Collaboration / Project"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, idea, or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 text-sm"
                >
                  {loading ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
