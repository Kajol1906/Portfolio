import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { portfolioData } from '../../../data/portfolio';
import { GlowCard } from '../ui/GlowCard';
import { Code2, Server, Database, Cloud, Cog, Wrench } from 'lucide-react';

export function Skills() {
  const { skills } = portfolioData;
  const categories = Array.from(new Set(skills.map(s => s.category)));
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredSkills = skills.filter(s => s.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages': return <Code2 size={16} />;
      case 'Frameworks & Libraries': return <Server size={16} />;
      case 'Databases & Infra': return <Database size={16} />;
      case 'Tools & Platforms': return <Cloud size={16} />;
      case 'Core Concepts': return <Cog size={16} />;
      default: return <Wrench size={16} />;
    }
  };

  return (
    <SectionWrapper id="skills">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
        <div className="w-20 h-1 bg-indigo-500 rounded-full mx-auto mb-8"></div>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          I've spent years working across the stack, but my true passion lies in backend architecture, 
          data engineering, and building robust APIs.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
        {/* Category Tabs */}
        <div className="w-full md:w-64 flex flex-row md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all whitespace-nowrap md:whitespace-normal text-left ${
                activeCategory === category 
                  ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-lg shadow-indigo-500/5' 
                  : 'text-zinc-400 hover:bg-white/5 hover:text-white border border-transparent'
              }`}
            >
              <span className={activeCategory === category ? 'text-indigo-400' : 'text-zinc-500'}>
                {getCategoryIcon(category)}
              </span>
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="flex-1 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filteredSkills.map((skill, index) => (
                <GlowCard key={skill.name} className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold">{skill.name}</h3>
                    <span className="text-xs font-mono text-zinc-500">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </GlowCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
