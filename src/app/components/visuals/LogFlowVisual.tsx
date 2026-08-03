import { motion } from 'motion/react';

export function LogFlowVisual() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#050505]/80 overflow-hidden group-hover:bg-[#050505]/20 transition-colors duration-700">
      <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Paths */}
        <path id="stream1" d="M -50 100 Q 150 20 250 100 T 450 100" fill="none" stroke="url(#grad1)" strokeWidth="1" />
        <path id="stream2" d="M -50 120 Q 150 180 250 100 T 450 80" fill="none" stroke="url(#grad1)" strokeWidth="1" />
        <path id="stream3" d="M -50 80 Q 150 50 200 120 T 450 120" fill="none" stroke="url(#grad1)" strokeWidth="1" />

        {/* Data Packets */}
        <circle r="3" fill="#818cf8" filter="url(#glow)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M -50 100 Q 150 20 250 100 T 450 100" />
        </circle>
        <circle r="2" fill="#c084fc" filter="url(#glow)">
          <animateMotion dur="4s" repeatCount="indefinite" path="M -50 120 Q 150 180 250 100 T 450 80" />
        </circle>
        <circle r="2.5" fill="#38bdf8" filter="url(#glow)">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M -50 80 Q 150 50 200 120 T 450 120" />
        </circle>
        <circle r="2" fill="#818cf8" filter="url(#glow)">
          <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M -50 100 Q 150 20 250 100 T 450 100" />
        </circle>
      </svg>
      
      {/* Central Node / Database */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.15)] z-10 transition-transform duration-500 group-hover:scale-110">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-indigo-400">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      </div>
    </div>
  )
}
