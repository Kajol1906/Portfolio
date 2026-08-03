import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { TextReveal } from '../ui/TextReveal';
import { GradientText } from '../ui/GradientText';
import { MagneticButton } from '../ui/MagneticButton';
import { portfolioData } from '../../../data/portfolio';
import { ChevronDown, FileText, Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';

export function Hero() {
  const { personal } = portfolioData;
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const socialLinks = [
    { icon: <Github size={20} />, href: personal.github, label: "GitHub" },
    { icon: <Linkedin size={20} />, href: personal.linkedin, label: "LinkedIn" },
    { icon: <Mail size={20} />, href: `mailto:${personal.email}`, label: "Email" },
  ];

  return (
    <SectionWrapper id="hero" className="pt-32 pb-16 min-h-[100svh] flex flex-col justify-center">
      {/* Availability Badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-24 right-6 md:right-12 xl:right-24 glass-panel px-4 py-2 rounded-full flex items-center gap-2 text-sm text-zinc-300 border-indigo-500/30"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        Available for opportunities
      </motion.div>

      {/* Floating Social Links (Desktop) */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="hidden md:flex flex-col gap-4 absolute left-6 xl:left-12 top-1/2 -translate-y-1/2"
      >
        {socialLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all hover:border-indigo-500/50"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </motion.div>

      <div className="max-w-4xl mx-auto w-full z-10 text-center md:text-left pt-12 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 font-mono mb-4 text-sm md:text-base tracking-wider uppercase"
        >
          // Hello, World. I am
        </motion.div>

        <h1 className="mb-4 leading-tight">
          <TextReveal text={personal.name} delay={0.2} />
        </h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-zinc-400"
        >
          I build <GradientText>scalable systems</GradientText>.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-10 mx-auto md:mx-0 leading-relaxed"
        >
          {personal.bio}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start w-full sm:w-auto"
        >
          <a href="#projects" className="w-full sm:w-48">
            <MagneticButton variant="grey" className="w-full">
              View Projects
            </MagneticButton>
          </a>
          
          <div className="relative w-full sm:w-48">
            <div onClick={() => setIsResumeOpen(!isResumeOpen)}>
              <MagneticButton variant="grey" className="w-full">
                <div className="flex items-center justify-center gap-2">
                  <span>Resume</span>
                  <ChevronDown size={18} className={`transition-transform duration-300 ${isResumeOpen ? 'rotate-180' : ''}`} />
                </div>
              </MagneticButton>
            </div>
            
            <AnimatePresence>
              {isResumeOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 sm:left-auto sm:right-0 mt-3 w-full sm:w-48 bg-[#1a1a1a] backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-50 flex flex-col ring-1 ring-white/5"
                >
                  <a 
                    href="/src/imports/KAJOL_GEHLOT-RESUME.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/10 transition-colors text-left flex items-center justify-between group"
                    onClick={() => setIsResumeOpen(false)}
                  >
                    View Resume
                    <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <a 
                    href="/src/imports/KAJOL_GEHLOT-RESUME.pdf" 
                    download="Kajol_Gehlot_Resume.pdf" 
                    className="px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/10 transition-colors text-left flex items-center justify-between group"
                    onClick={() => setIsResumeOpen(false)}
                  >
                    Download Resume
                    <Download size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
