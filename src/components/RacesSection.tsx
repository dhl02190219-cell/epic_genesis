import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { worldData } from '../data';
import { X } from 'lucide-react';

export function RacesSection() {
  const [selectedRace, setSelectedRace] = useState<typeof worldData.races[0] | null>(null);

  return (
    <section id="races" className="py-24 md:py-32 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-amber-500 font-serif tracking-[0.2em] uppercase text-sm mb-4">The Three Races</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">세 종족</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">각 종족의 포스터를 클릭하여 상세 정보를 확인하세요.</p>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {worldData.races.map((race, index) => (
            <motion.div
              key={race.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative group cursor-pointer aspect-[2/3] rounded-xl overflow-hidden shadow-2xl"
              onClick={() => setSelectedRace(race)}
            >
              <img
                src={race.poster}
                alt={race.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${race.themeColor} opacity-80 group-hover:opacity-60 transition-opacity`} />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
                <span className={`text-xs font-bold tracking-widest uppercase mb-2 ${race.textColor}`}>
                  {race.subtitle}
                </span>
                <h4 className="text-3xl font-serif font-bold text-white mb-2">
                  {race.name.split(' ')[0]}
                </h4>
                <div className={`w-12 h-0.5 bg-current ${race.textColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedRace && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedRace(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedRace(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-2/5 relative min-h-[300px] md:min-h-full">
                <img
                  src={selectedRace.poster}
                  alt={selectedRace.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedRace.themeColor} opacity-60`} />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-4xl font-serif font-bold text-white mb-2">{selectedRace.name}</h3>
                  <p className={`text-lg font-medium ${selectedRace.textColor}`}>{selectedRace.subtitle}</p>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-3/5 p-8 md:p-12 text-gray-300 space-y-8">
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">국가 및 컨셉</h4>
                  <p className="text-lg text-white mb-1">{selectedRace.nation}</p>
                  <p className="text-sm italic text-gray-400">{selectedRace.concept}</p>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-3">핵심 키워드</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRace.keywords.map(kw => (
                      <span key={kw} className="px-3 py-1 text-xs border border-white/20 rounded-full text-gray-300">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">배경</h4>
                  <p className="leading-relaxed text-sm">{selectedRace.background}</p>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">신념</h4>
                  <p className="leading-relaxed text-sm whitespace-pre-line border-l-2 border-amber-600/50 pl-4 py-1 italic">
                    {selectedRace.belief}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">목표</h4>
                  <p className="leading-relaxed text-sm whitespace-pre-line">{selectedRace.goal}</p>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">클라비스 (성유물)</h4>
                  <p className={`text-lg font-serif ${selectedRace.textColor}`}>{selectedRace.clavis}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
