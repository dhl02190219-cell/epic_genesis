import { motion } from 'motion/react';
import { worldData } from '../data';

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 md:py-32 relative bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-amber-500 font-serif tracking-[0.2em] uppercase text-sm mb-4">Chronicles</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">세계 역사 타임라인</h3>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2" />

          {worldData.timeline.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-12 md:mb-24 flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot */}
              <div className="absolute left-[-5px] md:left-1/2 top-2 md:top-1/2 w-2 h-2 bg-amber-500 rounded-full transform md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_10px_rgba(217,119,6,0.8)] z-10" />

              {/* Content */}
              <div className={`pl-8 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                <div className="glass-panel p-6 md:p-8 rounded-2xl hover:bg-white/5 transition-colors">
                  <h4 className="text-2xl font-serif font-bold text-white mb-2">{item.period}</h4>
                  {item.date && (
                    <span className="inline-block px-3 py-1 bg-amber-900/30 text-amber-400 text-xs font-mono tracking-widest rounded-full mb-4 border border-amber-500/20">
                      {item.date}
                    </span>
                  )}
                  <p className="text-gray-400 text-sm leading-relaxed mt-2">
                    {item.event}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
