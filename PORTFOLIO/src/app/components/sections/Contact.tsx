import { useState } from 'react';
import { motion } from 'motion/react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { portfolioData } from '../../../data/portfolio';
import { GlowCard } from '../ui/GlowCard';
import { MagneticButton } from '../ui/MagneticButton';
import { Copy, Github, Linkedin, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');

    const formData = new FormData(e.currentTarget);

    // IMPORTANT: Replace this placeholder with your actual Web3Forms access key
    // Get yours for free at https://web3forms.com/
    formData.append("access_key", "3f95ebef-01ce-44cd-b86a-70c05338796d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormState('success');
        e.currentTarget.reset();
      } else {
        console.error("Form error:", data);
        setFormState('idle');
        alert("Something went wrong. Please check your Access Key or email directly.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setFormState('idle');
      alert("Network error. Please try again or email directly.");
    }

    setTimeout(() => {
      setFormState('idle');
    }, 3000);
  };

  return (
    <SectionWrapper id="contact">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
        <div className="w-20 h-1 bg-indigo-500 rounded-full mx-auto mb-8"></div>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          I'm currently open for full-time roles, internships, and freelance projects.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* Contact Info Cards */}
        <div className="lg:col-span-2 space-y-4">
          <GlowCard
            className="p-6 cursor-pointer group"
            onClick={copyEmail}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div className="flex-1">
                <div className="text-sm text-zinc-500 mb-1 font-mono uppercase tracking-wider">Email</div>
                <div className="text-lg font-medium text-white mb-2">{personal.email}</div>
                <div className="text-sm text-indigo-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                  {copied ? 'Copied to clipboard' : 'Click to copy'}
                </div>
              </div>
            </div>
          </GlowCard>

          <div className="grid grid-cols-2 gap-4">
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
              <GlowCard className="p-6 h-full flex flex-col items-center justify-center text-center group">
                <div className="p-3 rounded-xl bg-white/5 text-zinc-400 group-hover:bg-[#0A66C2] group-hover:text-white transition-colors mb-3">
                  <Linkedin size={24} />
                </div>
                <div className="text-sm font-medium text-white">LinkedIn</div>
              </GlowCard>
            </a>

            <a href={personal.github} target="_blank" rel="noopener noreferrer">
              <GlowCard className="p-6 h-full flex flex-col items-center justify-center text-center group">
                <div className="p-3 rounded-xl bg-white/5 text-zinc-400 group-hover:bg-white group-hover:text-black transition-colors mb-3">
                  <Github size={24} />
                </div>
                <div className="text-sm font-medium text-white">GitHub</div>
              </GlowCard>
            </a>
          </div>

          <GlowCard className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5 text-zinc-400">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-sm text-zinc-500 mb-1 font-mono uppercase tracking-wider">Location</div>
                <div className="text-white">{personal.location}</div>
              </div>
            </div>
          </GlowCard>
        </div>

        {/* Contact Form */}
        <GlowCard className="lg:col-span-3 p-8">
          <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2 flex-1 flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <MagneticButton
              type="submit"
              variant="primary"
              className="w-full py-4 flex items-center justify-center gap-2"
              disabled={formState !== 'idle'}
            >
              {formState === 'idle' && (
                <>
                  Send Message <Send size={18} />
                </>
              )}
              {formState === 'sending' && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                />
              )}
              {formState === 'success' && (
                <>
                  <CheckCircle2 size={18} /> Sent Successfully
                </>
              )}
            </MagneticButton>
          </form>
        </GlowCard>

      </div>
    </SectionWrapper>
  );
}
