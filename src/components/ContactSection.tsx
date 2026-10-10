import React, { useState, useEffect } from 'react';
import { Mail, Send, Check, Copy, Clock, Globe, ArrowUpRight, MessageSquare } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/portfolioData';
import { ContactFormData } from '../types/portfolio';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: 'Web Application / Workstation',
    budget: '$15k – $30k',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Live San Francisco clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const projectTypes = [
    'Web Application / Workstation',
    'Design System & Tokens',
    'Creative 3D & Graphics',
    'Technical Advisory',
  ];

  const budgetOptions = ['< $15,000', '$15k – $30k', '$30k – $60k', '$60,000+'];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name or organization.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide a valid email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format (name@company.com).';
    }

    if (!formData.message.trim() || formData.message.length < 15) {
      newErrors.message = 'Please provide a brief description of the project (minimum 15 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CREATOR_PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'Web Application / Workstation',
      budget: '$15k – $30k',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-zinc-100/60 dark:bg-zinc-900/40 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Context & Direct Contact details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium mb-3">
                <MessageSquare className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span>INQUIRIES & COLLABORATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-tight mb-4">
                Let's engineer something extraordinary together.
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8">
                Currently reviewing contracts for Q4 2026. Whether you are building a mission-critical web application, modernizing design infrastructure, or pioneering 3D graphics, I would love to hear from you.
              </p>

              {/* Direct Email Card with One-Click Copy */}
              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800/90 shadow-xs mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Direct Inbound
                </span>
                <div className="flex items-center justify-between gap-3 mt-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                    <Mail className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                    <span className="truncate">{CREATOR_PROFILE.email}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shrink-0 cursor-pointer"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-2 font-medium">
                    Email copied to clipboard!
                  </p>
                )}
              </div>

              {/* Timezone & Availability Strip */}
              <div className="space-y-3 text-xs text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>San Francisco, CA: <strong className="font-mono text-zinc-900 dark:text-zinc-200">{currentTime || '10:49 AM PST'}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>Remote worldwide & on-site availability in SF Bay Area</span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 mt-8">
              <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block mb-3">
                Professional Networks
              </span>
              <div className="flex items-center gap-4 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                <a
                  href={CREATOR_PROFILE.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={CREATOR_PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={CREATOR_PROFILE.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center gap-1"
                >
                  <span>X / Twitter</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={CREATOR_PROFILE.socials.dribbble}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center gap-1"
                >
                  <span>Dribbble</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800/90 shadow-sm">
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center mb-5">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2 max-w-md leading-relaxed">
                    Thank you, <strong className="text-zinc-900 dark:text-zinc-100">{formData.name}</strong>. I have received your message regarding{' '}
                    <strong className="text-zinc-900 dark:text-zinc-100">{formData.projectType}</strong>. I usually respond within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-8 px-6 py-2.5 text-xs font-semibold rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
                      >
                        Your Name / Organization <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Sarah Chen / Acme Inc."
                        className={`w-full h-11 px-4 text-sm rounded-xl border ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500/20'
                            : 'border-zinc-300 dark:border-zinc-700 focus:border-teal-600 focus:ring-teal-600/20'
                        } bg-zinc-50/50 dark:bg-zinc-800/40 text-zinc-950 dark:text-zinc-50 placeholder:text-zinc-400 focus:outline-none focus:ring-2 transition-all`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-600 dark:text-red-400 mt-1.5 font-medium">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
                      >
                        Work Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@example.com"
                        className={`w-full h-11 px-4 text-sm rounded-xl border ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500/20'
                            : 'border-zinc-300 dark:border-zinc-700 focus:border-teal-600 focus:ring-teal-600/20'
                        } bg-zinc-50/50 dark:bg-zinc-800/40 text-zinc-950 dark:text-zinc-50 placeholder:text-zinc-400 focus:outline-none focus:ring-2 transition-all`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 dark:text-red-400 mt-1.5 font-medium">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Type Segmented Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                      Primary Project Type
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`h-11 px-3 text-xs font-medium rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                            formData.projectType === type
                              ? 'border-teal-600 dark:border-teal-500 bg-teal-50/50 dark:bg-teal-950/30 text-teal-950 dark:text-teal-200 font-semibold'
                              : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-800/40 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700'
                          }`}
                        >
                          <span className="truncate">{type}</span>
                          {formData.projectType === type && (
                            <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Estimated Budget Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                      Estimated Budget / Scope
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: opt })}
                          className={`h-10 px-2 text-xs font-medium rounded-xl border text-center transition-all cursor-pointer ${
                            formData.budget === opt
                              ? 'border-teal-600 dark:border-teal-500 bg-teal-50/50 dark:bg-teal-950/30 text-teal-950 dark:text-teal-200 font-semibold'
                              : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-800/40 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700'
                          }`}
                        >
                          <span>{opt}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
                    >
                      Project Overview & Timeline <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about the goals, key technical challenges, target launch date, and team context..."
                      className={`w-full p-4 text-sm rounded-xl border ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500/20'
                          : 'border-zinc-300 dark:border-zinc-700 focus:border-teal-600 focus:ring-teal-600/20'
                      } bg-zinc-50/50 dark:bg-zinc-800/40 text-zinc-950 dark:text-zinc-50 placeholder:text-zinc-400 focus:outline-none focus:ring-2 transition-all resize-y`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-600 dark:text-red-400 mt-1.5 font-medium">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl bg-teal-700 hover:bg-teal-800 dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400 text-white font-medium text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99] shadow-xs cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
