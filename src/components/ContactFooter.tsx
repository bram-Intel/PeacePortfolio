import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { BrandLogo } from './BrandLogo';
import { CheckCircle, Mail, MapPin, Phone, Figma, FileText, Briefcase, Check, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

const FIGMA_URL =
  'https://www.figma.com/design/NYhqBxZVmVnieeyyK34SVG/Untitled?node-id=0-1';
const CV_URL = '/assets/Peace_Olododo_Imoaseda_CV.pdf';

export const ContactFooter: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [whatsappHref, setWhatsappHref] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    const bundledMessage = [
      `Hello Peace, I visited your portfolio and would like to connect!`,
      ``,
      `*Name:* ${formData.name.trim() || 'Portfolio Visitor'}`,
      `*Email:* ${formData.email.trim()}`,
      `*Message:*`,
      formData.message.trim(),
    ].join('\n');

    const url = `https://wa.me/2347034644644?text=${encodeURIComponent(bundledMessage)}`;
    setWhatsappHref(url);
    window.open(url, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 6000);
  };

  return (
    <footer
      id="contact"
      className="bg-[var(--surface)] text-[var(--text)] px-5 sm:px-8 md:px-10 py-20 border-t border-[var(--border)] relative z-20 transition-colors duration-300"
    >
      {/* Designer Pitch Banner (Clean Editorial Style, No Extra 3D) */}
      <div className="max-w-6xl mx-auto mb-16 pb-12 border-b border-[var(--border)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <FadeIn delay={0.1} y={20} className="lg:col-span-8 text-center lg:text-left space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--background)] border border-[var(--border)] text-xs font-mono font-bold text-[var(--accent)] shadow-sm">
            <Briefcase className="w-4 h-4 text-[var(--accent)]" />
            PRODUCT DESIGNER • UI/UX (WEB &amp; MOBILE)
          </div>

          <h3 className="hero-heading text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight">
            DESIGNING INTUITIVE DIGITAL EXPERIENCES
          </h3>

          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
            I&apos;m passionate about turning ideas and everyday user challenges into clean, functional, and engaging interfaces. Whether you&apos;re building a new web platform, refining a mobile app, or need thoughtful creative &amp; voice-over direction, I bring curiosity, care, and collaborative execution.
          </p>

          <div className="pt-1 flex flex-wrap justify-center lg:justify-start gap-2.5 text-xs font-mono font-semibold">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--text)]">
              <Check className="w-3.5 h-3.5 text-[var(--accent)]" /> User-Centred Thinking
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--text)]">
              <Check className="w-3.5 h-3.5 text-[var(--accent)]" /> Clean Figma Workflows
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--text)]">
              <Check className="w-3.5 h-3.5 text-[var(--accent)]" /> Collaborative &amp; Adaptable
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} y={20} className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-stretch">
          <a
            href={FIGMA_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-3 px-6 py-4 rounded-2xl bg-[var(--background)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors shadow-sm group"
          >
            <div className="flex items-center gap-3">
              <Figma className="w-5 h-5 text-[var(--accent)]" />
              <div className="text-left">
                <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">Explore</div>
                <div className="text-sm font-bold text-[var(--text)] group-hover:text-[var(--accent)]">Figma Portfolio</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[var(--accent)]" />
          </a>

          <a
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-3 px-6 py-4 rounded-2xl bg-[var(--background)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors shadow-sm group"
          >
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[var(--accent)]" />
              <div className="text-left">
                <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">Resume</div>
                <div className="text-sm font-bold text-[var(--text)] group-hover:text-[var(--accent)]">View Full CV</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[var(--accent)]" />
          </a>
        </FadeIn>
      </div>

      {/* Main Contact Form & Details Grid */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-md flex flex-col justify-between">
          <div>
            <FadeIn delay={0.05} y={10} className="mb-4">
              <div className="flex items-center gap-3">
                <BrandLogo sizeClass="w-14 h-14" />
                <div>
                  <span className="text-xs uppercase tracking-widest text-[var(--accent)] font-mono font-bold block">
                    JP • Olododo Peace
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">Product Designer (UI/UX)</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} y={20}>
              <h2 className="hero-heading text-4xl sm:text-6xl font-black uppercase tracking-tight mb-4">
                Let&apos;s Connect
              </h2>
              <p className="text-[var(--text-muted)] font-normal text-base sm:text-lg mb-8 leading-relaxed">
                Have a product idea, UI/UX project, design role, or voice-over brief in mind? Reach out anytime!
              </p>
            </FadeIn>

            <FadeIn delay={0.2} y={20}>
              <div className="flex flex-col gap-3.5 text-sm sm:text-base font-medium text-[var(--text)]">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[var(--accent)] flex-shrink-0" />
                  <a href="mailto:olododoimoaseda@gmail.com" className="hover:text-[var(--accent)] hover:underline break-all">
                    olododoimoaseda@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                  <a href="https://wa.me/2347034644644" target="_blank" rel="noreferrer" className="hover:text-[#25D366] hover:underline">
                    WhatsApp: 07034644644
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[var(--accent)] flex-shrink-0" />
                  <a href="tel:+2349130685316" className="hover:text-[var(--accent)] hover:underline">
                    Call: 09130685316
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[var(--accent)] flex-shrink-0" />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} y={20} className="mt-8">
            <div className="flex gap-3">
              <a
                href="https://wa.me/2347034644644"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-[var(--background)] border border-[var(--border)] hover:border-[#25D366] text-[#25D366] transition-colors shadow-sm"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href={FIGMA_URL}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-[var(--background)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors shadow-sm text-[var(--text)]"
                aria-label="Figma Portfolio"
                title="Figma Portfolio"
              >
                <Figma className="w-5 h-5" />
              </a>
              <a
                href="mailto:olododoimoaseda@gmail.com"
                className="p-3 rounded-full bg-[var(--background)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors shadow-sm text-[var(--text)]"
                aria-label="Email Peace"
                title="Email Peace"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} y={30} className="flex-grow max-w-lg">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 bg-[var(--background)] p-6 sm:p-8 rounded-[30px] border border-[var(--border)] shadow-sm"
          >
            <h3 className="text-xl font-bold uppercase tracking-wider mb-1 text-[var(--accent)]">
              Send Message
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
            />

            <input
              type="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
            />

            <textarea
              required
              rows={4}
              placeholder="Tell me about your project or opportunity..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
            />

            {submitted ? (
              <div className="flex flex-col gap-2 text-emerald-500 font-bold py-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Opening WhatsApp with your message!</span>
                </div>
                {whatsappHref && (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[var(--accent)] underline font-semibold w-fit"
                  >
                    Click here if WhatsApp didn&apos;t open automatically
                  </a>
                )}
              </div>
            ) : (
              <div className="pt-2 flex flex-col gap-2">
                <ContactButton
                  label="Send via WhatsApp"
                  icon={<WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366]" />}
                />
                <span className="text-[11px] text-[var(--text-muted)] font-mono">
                  Bundles your details straight to Peace&apos;s WhatsApp (+234 703 464 4644).
                </span>
              </div>
            )}
          </form>
        </FadeIn>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-[var(--border)] text-center text-xs text-[var(--text-muted)] uppercase tracking-widest font-medium">
        &copy; {new Date().getFullYear()} Olododo Imoaseda Peace (JP). All rights reserved.
      </div>
    </footer>
  );
};
