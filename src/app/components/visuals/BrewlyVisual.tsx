import { motion } from 'motion/react';

export function BrewlyVisual() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#050505]/80 overflow-hidden group-hover:bg-[#050505]/20 transition-colors duration-700">
      <div className="relative w-full max-w-[300px] h-[200px] flex items-center justify-between px-6 scale-75 md:scale-100 transition-transform duration-500 group-hover:scale-90 md:group-hover:scale-110">
        
        {/* API Server */}
        <div className="w-16 h-24 border border-white/10 bg-black/60 backdrop-blur-md rounded-xl relative flex flex-col justify-evenly p-2 shadow-[0_0_30px_rgba(16,185,129,0.1)] z-10">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-full h-1.5 rounded bg-white/5 relative overflow-hidden">
               <motion.div 
                 className="absolute top-0 bottom-0 left-0 bg-emerald-500/60 w-1/3 shadow-[0_0_5px_#10b981]"
                 animate={{ x: ['-100%', '300%'] }}
                 transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity, ease: "linear" }}
               />
            </div>
          ))}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#050505] px-2 text-[9px] text-emerald-400 font-mono border border-white/10 rounded tracking-wider uppercase">Spring</div>
        </div>

        {/* Connecting Lines */}
        <div className="absolute top-1/2 left-20 right-20 h-[2px] bg-white/5 -translate-y-1/2 z-0 overflow-hidden">
          <motion.div 
            className="w-1/3 h-full bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent shadow-[0_0_10px_#34d399]"
            animate={{ x: ['-100%', '400%'] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Dashboard / Analytics */}
        <div className="w-20 h-20 border border-white/10 bg-black/60 backdrop-blur-md rounded-xl flex items-end justify-between p-3 shadow-[0_0_30px_rgba(16,185,129,0.1)] z-10">
           <motion.div className="w-3 bg-indigo-500/60 rounded-t shadow-[0_0_10px_rgba(99,102,241,0.5)]" animate={{ height: ['30%', '70%', '40%'] }} transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }} />
           <motion.div className="w-3 bg-purple-500/60 rounded-t shadow-[0_0_10px_rgba(168,85,247,0.5)]" animate={{ height: ['60%', '30%', '90%'] }} transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror" }} />
           <motion.div className="w-3 bg-emerald-500/60 rounded-t shadow-[0_0_10px_rgba(16,185,129,0.5)]" animate={{ height: ['40%', '90%', '50%'] }} transition={{ duration: 1.8, repeat: Infinity, repeatType: "mirror" }} />
           <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#050505] px-2 text-[9px] text-indigo-400 font-mono border border-white/10 rounded tracking-wider uppercase">React</div>
        </div>

      </div>
    </div>
  )
}
