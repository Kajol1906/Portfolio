import { SectionWrapper } from '../layout/SectionWrapper';
import { portfolioData } from '../../../data/portfolio';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Certifications() {
  const { certifications } = portfolioData;

  return (
    <SectionWrapper id="certifications" className="overflow-hidden">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
        <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
      </div>

      <div className="w-full relative">
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
          {certifications.map((cert, index) => (
            <div
              key={`${cert.id}-${index}`}
              className="w-[300px] md:w-[350px] shrink-0 snap-center"
            >
              <div className="h-full rounded-2xl glass p-5 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300 font-mono">
                    {cert.type}
                  </span>
                  <span className="text-xs text-zinc-500 font-medium">
                    {cert.platform}
                  </span>
                </div>

                <div className="flex-1 rounded-xl border border-white/5 bg-black/40 p-1 mb-4 overflow-hidden group">
                  <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-black/60 relative flex items-center justify-center">
                    {cert.image ? (
                      <ImageWithFallback
                        src={`/imports/${cert.image}`}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <span className="text-zinc-600 text-sm">Image not available</span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-zinc-400">
                    {cert.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-4 text-xs text-zinc-500 font-mono tracking-widest uppercase flex items-center justify-center gap-2">
        <span className="w-10 h-px bg-zinc-700"></span>
        Swipe or scroll to explore
        <span className="w-10 h-px bg-zinc-700"></span>
      </div>
    </SectionWrapper>
  );
}
