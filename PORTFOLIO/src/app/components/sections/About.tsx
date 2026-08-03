import { motion } from 'motion/react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { portfolioData } from '../../../data/portfolio';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { GlowCard } from '../ui/GlowCard';
import { Code2, Trophy, FolderDot } from 'lucide-react';

export function About() {
  const { personal, stats } = portfolioData;

  const getIconForStat = (index: number) => {
    switch(index) {
      case 0: return <Code2 className="text-indigo-400 mb-4" size={32} />;
      case 1: return <Trophy className="text-purple-400 mb-4" size={32} />;
      case 2: return <FolderDot className="text-pink-400 mb-4" size={32} />;
      default: return <Code2 className="text-indigo-400 mb-4" size={32} />;
    }
  };

  return (
    <SectionWrapper id="about">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
        
        {/* Main Bio Card - Spans 2 columns, 2 rows */}
        <GlowCard className="md:col-span-2 md:row-span-2 p-8 flex flex-col justify-center">
          <div className="text-indigo-400 font-mono text-sm mb-4">{"// Background"}</div>
          <h3 className="text-2xl font-bold mb-4">Student by day, developer by night.</h3>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Currently pursuing my {personal.education.degree} at {personal.education.university}. 
            I specialize in backend architecture and full-stack development. My focus is on building 
            robust, scalable systems that solve real-world problems.
          </p>
          <div className="mt-auto">
            <div className="text-sm text-zinc-500 mb-1">Current Focus</div>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs border border-indigo-500/20">Distributed Systems</span>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs border border-purple-500/20">Spring Boot Microservices</span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs border border-emerald-500/20">AI Integration</span>
            </div>
          </div>
        </GlowCard>

        {/* Stats Cards */}
        {stats.map((stat, index) => (
          <GlowCard key={index} className="p-6 flex flex-col justify-center items-center text-center">
            {getIconForStat(index)}
            <div className="text-4xl font-bold mb-2 text-white">
              <AnimatedCounter value={stat.value} plus={stat.plus} duration={2000} />
            </div>
            <div className="text-sm text-zinc-400 uppercase tracking-wider font-mono">
              {stat.label}
            </div>
          </GlowCard>
        ))}

        {/* Education Card */}
        <GlowCard className="md:col-span-2 p-6 flex flex-col justify-center">
          <div className="text-purple-400 font-mono text-sm mb-4">{"// Education"}</div>
          <h4 className="text-xl font-bold mb-1">{personal.education.university}</h4>
          <div className="text-zinc-300 mb-2">{personal.education.degree}</div>
          <div className="flex justify-between items-end mt-4">
            <div className="text-sm text-zinc-500">{personal.education.period}</div>
            <div className="text-lg font-mono font-bold text-white">CGPA: {personal.education.cgpa}</div>
          </div>
        </GlowCard>

        {/* Open Source Card */}
        <GlowCard className="p-6 flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-indigo-500/30">
          <div className="text-emerald-400 font-mono text-sm mb-3">{"// Open Source"}</div>
          <h4 className="text-lg font-bold mb-2">GSSoC 2026</h4>
          <p className="text-xs text-zinc-400">Selected contributor in Open Source and AI Agent tracks.</p>
        </GlowCard>

      </div>
    </SectionWrapper>
  );
}
