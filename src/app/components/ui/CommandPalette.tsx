import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../../../data/portfolio';
import { User, Briefcase, Code2, Award, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useSmoothScroll } from '../../../hooks/useSmoothScroll';

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Using native scroll for simplicity in the command palette, lenis will catch it
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[20vh] px-4"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <Command className="w-full">
              <Command.Input 
                autoFocus 
                placeholder="Type a command or search..." 
                className="w-full px-4 py-4 bg-transparent border-b border-white/10 text-white placeholder:text-zinc-500 focus:outline-none"
              />
              <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-hide">
                <Command.Empty className="py-6 text-center text-sm text-zinc-500">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Navigation" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-zinc-500">
                  <Command.Item 
                    onSelect={() => runCommand(() => scrollTo('about'))}
                    className="flex items-center gap-2 px-2 py-3 rounded-lg text-sm text-zinc-300 aria-selected:bg-indigo-500/20 aria-selected:text-white cursor-pointer transition-colors"
                  >
                    <User size={16} /> Go to About
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => scrollTo('projects'))}
                    className="flex items-center gap-2 px-2 py-3 rounded-lg text-sm text-zinc-300 aria-selected:bg-indigo-500/20 aria-selected:text-white cursor-pointer transition-colors"
                  >
                    <Briefcase size={16} /> Go to Projects
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => scrollTo('skills'))}
                    className="flex items-center gap-2 px-2 py-3 rounded-lg text-sm text-zinc-300 aria-selected:bg-indigo-500/20 aria-selected:text-white cursor-pointer transition-colors"
                  >
                    <Code2 size={16} /> Go to Skills
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => scrollTo('experience'))}
                    className="flex items-center gap-2 px-2 py-3 rounded-lg text-sm text-zinc-300 aria-selected:bg-indigo-500/20 aria-selected:text-white cursor-pointer transition-colors"
                  >
                    <Award size={16} /> Go to Experience
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Links" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-zinc-500">
                  <Command.Item 
                    onSelect={() => runCommand(() => window.open(portfolioData.personal.github, '_blank'))}
                    className="flex items-center gap-2 px-2 py-3 rounded-lg text-sm text-zinc-300 aria-selected:bg-indigo-500/20 aria-selected:text-white cursor-pointer transition-colors"
                  >
                    <Github size={16} /> GitHub <ExternalLink size={14} className="ml-auto opacity-50" />
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => window.open(portfolioData.personal.linkedin, '_blank'))}
                    className="flex items-center gap-2 px-2 py-3 rounded-lg text-sm text-zinc-300 aria-selected:bg-indigo-500/20 aria-selected:text-white cursor-pointer transition-colors"
                  >
                    <Linkedin size={16} /> LinkedIn <ExternalLink size={14} className="ml-auto opacity-50" />
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => window.location.href = `mailto:${portfolioData.personal.email}`)}
                    className="flex items-center gap-2 px-2 py-3 rounded-lg text-sm text-zinc-300 aria-selected:bg-indigo-500/20 aria-selected:text-white cursor-pointer transition-colors"
                  >
                    <Mail size={16} /> Email <ExternalLink size={14} className="ml-auto opacity-50" />
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
