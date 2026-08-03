import { SectionWrapper } from '../layout/SectionWrapper';
import { portfolioData } from '../../../data/portfolio';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { BrewlyVisual } from '../visuals/BrewlyVisual';
import { LogFlowVisual } from '../visuals/LogFlowVisual';
import { JSONParserVisual } from '../visuals/JSONParserVisual';

export function Projects() {
  const { projects } = portfolioData;

  const getVisual = (id: string) => {
    switch(id) {
      case 'brewly': return <BrewlyVisual />;
      case 'logflow': return <LogFlowVisual />;
      case 'json-parser': return <JSONParserVisual />;
      default: return <div className="absolute inset-0 bg-[#050505]/80 group-hover:bg-[#050505]/40 transition-colors duration-700"></div>;
    }
  };

  return (
    <SectionWrapper id="projects">
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Engineering Work</h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
        </div>
        <div className="text-zinc-400 max-w-md text-sm leading-relaxed">
          Showcasing a selection of complex, backend-focused systems built for high performance and scalability.
        </div>
      </div>

      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a] flex flex-col lg:flex-row lg:min-h-[320px] transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1"
          >
            {/* Visual Area */}
            <div className="relative overflow-hidden bg-black h-[200px] lg:h-auto lg:w-[55%] lg:order-2 border-b lg:border-b-0 lg:border-l border-white/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] z-10 pointer-events-none opacity-50" />
              {getVisual(project.id)}
            </div>

            {/* Content Area */}
            <div className="p-6 lg:p-8 flex flex-col flex-1 relative z-20 lg:w-[45%] lg:order-1 justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0a0a0a] to-[#0a0a0a] pointer-events-none z-0" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-[10px] uppercase tracking-widest text-indigo-400 font-mono shrink-0">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-[11px] font-mono text-zinc-400 bg-white/[0.03] border border-white/10 rounded-full px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors"
                    >
                      <Github size={18} /> <span>Source</span>
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                    >
                      <span>Demo</span> <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            {/* Hover Glow Effect Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/20 rounded-2xl transition-colors duration-500 pointer-events-none z-30" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
