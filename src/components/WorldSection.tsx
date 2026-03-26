import { motion } from 'motion/react';
import { worldData } from '../data';

export function WorldSection() {
  return (
    <section id="world" className="py-24 md:py-32 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-amber-500 font-serif tracking-[0.2em] uppercase text-sm mb-4">World Concepts</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">세계관 핵심 설정</h3>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {worldData.core.map((concept, index) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass-panel p-8 hover:bg-white/5 transition-colors"
            >
              <div className="relative z-10 h-full flex flex-col justify-start">
                <h4 className="text-2xl font-serif font-bold text-amber-500 mb-4 transition-colors">
                  {concept.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {concept.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
