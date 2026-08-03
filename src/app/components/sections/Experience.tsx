import { motion } from 'motion/react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { portfolioData } from '../../../data/portfolio';
import { GlowCard } from '../ui/GlowCard';

export function Experience() {
  const { experience } = portfolioData;

  return (
    <SectionWrapper id="experience">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
        <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
      </div>

      <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
        {/* Animated timeline line */}
        <motion.div 
          className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {experience.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full bg-black border-2 border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] z-10" />
            
            {/* Timeline Line connecting dot to card */}
            <div className="absolute -left-[37px] md:-left-[53px] top-[9px] w-8 md:w-12 h-[2px] bg-white/10" />

            <GlowCard className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{item.title}</h3>
                  <div className="text-indigo-400 font-medium">{item.company}</div>
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-zinc-400 shrink-0">
                  {item.year}
                </div>
              </div>

              <p className="text-zinc-400 mb-6 leading-relaxed">
                {item.description}
              </p>

              <ul className="space-y-3">
                {item.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500/50 shrink-0" />
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
