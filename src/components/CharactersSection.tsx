import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { worldData } from '../data';
import { X } from 'lucide-react';

export function CharactersSection() {
  const [selectedRace, setSelectedRace] = useState<string>('all');
  const [selectedChar, setSelectedChar] = useState<typeof worldData.characters[0] | null>(null);

  const filteredChars = selectedRace === 'all' 
    ? worldData.characters 
    : worldData.characters.filter(c => c.raceId === selectedRace);

  return (
    <section id="characters" className="py-24 md:py-32 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-amber-500 font-serif tracking-[0.2em] uppercase text-sm mb-4">Dramatis Personae</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">등장인물</h3>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-12" />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'malakh', 'luctator', 'anthropos'].map(race => (
              <button
                key={race}
                onClick={() => setSelectedRace(race)}
                className={`px-6 py-2 rounded-full text-sm font-medium tracking-widest uppercase transition-all duration-300 ${
                  selectedRace === race 
                    ? 'bg-amber-600 text-white shadow-[0_0_15px_rgba(217,119,6,0.5)]' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {race === 'all' ? '전체' : race}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredChars.map((char, index) => (
              <motion.div
                layout
                key={char.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedChar(char)}
              >
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-white/5 shadow-lg">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <p className="text-xs font-bold tracking-widest uppercase text-amber-500 mb-1">{char.title}</p>
                    <h4 className="text-xl font-serif font-bold text-white">{char.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Character Modal */}
      <AnimatePresence>
        {selectedChar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedChar(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedChar(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full">
                <img
                  src={selectedChar.image}
                  alt={selectedChar.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a0a0a]" />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 text-gray-300 flex flex-col justify-center">
                <div className="mb-8">
                  <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-2 block">
                    {selectedChar.raceId.toUpperCase()}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{selectedChar.name}</h3>
                  <p className="text-xl font-serif text-gray-400 italic">{selectedChar.title}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">직위</h4>
                    <p className="text-white">{selectedChar.position}</p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">외형</h4>
                    <p className="text-sm leading-relaxed">{selectedChar.appearance}</p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">성격</h4>
                    <p className="text-sm font-mono text-amber-400/80 bg-amber-900/10 p-3 rounded-lg border border-amber-500/20">
                      {selectedChar.personality}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">말투</h4>
                    <p className="text-sm italic text-gray-400">"{selectedChar.speech}"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
