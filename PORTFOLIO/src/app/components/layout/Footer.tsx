import { portfolioData } from '../../../data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors text-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
