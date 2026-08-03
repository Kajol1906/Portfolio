import { motion } from 'motion/react';

export function JSONParserVisual() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#050505]/80 overflow-hidden group-hover:bg-[#050505]/20 transition-colors duration-700">
      
      {/* Abstract Syntax Tree */}
      <svg className="absolute inset-0 w-full h-full opacity-30 transition-opacity duration-500 group-hover:opacity-60" viewBox="0 0 300 200">
        <path d="M 150 50 L 100 110" stroke="url(#treeGrad)" strokeWidth="1.5" />
        <path d="M 150 50 L 200 110" stroke="url(#treeGrad)" strokeWidth="1.5" />
        <path d="M 100 110 L 60 170" stroke="url(#treeGrad)" strokeWidth="1.5" />
        <path d="M 100 110 L 140 170" stroke="url(#treeGrad)" strokeWidth="1.5" />
        <path d="M 200 110 L 180 170" stroke="url(#treeGrad)" strokeWidth="1.5" />
        <path d="M 200 110 L 240 170" stroke="url(#treeGrad)" strokeWidth="1.5" />
        
        <defs>
          <linearGradient id="treeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[
          [150, 50], [100, 110], [200, 110], [60, 170], [140, 170], [180, 170], [240, 170]
        ].map((pos, i) => (
          <circle key={i} cx={pos[0]} cy={pos[1]} r="3" className="fill-amber-500/50" />
        ))}
      </svg>

      {/* Main Brackets */}
      <div className="relative flex items-center justify-center font-mono text-7xl font-light text-zinc-700 transition-colors duration-500 group-hover:text-zinc-500 z-10">
        <motion.span 
          animate={{ x: [-8, 0, -8], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >{'{'}</motion.span>
        
        <div className="w-16 flex flex-col gap-2.5 items-center justify-center mx-4">
           <motion.div className="w-10 h-1 bg-amber-500/60 rounded shadow-[0_0_10px_rgba(245,158,11,0.3)]" animate={{ width: ['30%', '90%', '30%'] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
           <motion.div className="w-6 h-1 bg-rose-500/60 rounded shadow-[0_0_10px_rgba(244,63,94,0.3)]" animate={{ width: ['90%', '40%', '90%'] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }} />
           <motion.div className="w-12 h-1 bg-sky-500/60 rounded shadow-[0_0_10px_rgba(14,165,233,0.3)]" animate={{ width: ['50%', '100%', '50%'] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1, ease: "easeInOut" }} />
        </div>

        <motion.span 
          animate={{ x: [8, 0, 8], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >{'}'}</motion.span>
      </div>
    </div>
  )
}
