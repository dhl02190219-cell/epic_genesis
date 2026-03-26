import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-amber-500 font-serif tracking-[0.3em] uppercase text-sm md:text-base mb-6">
            세계관 설정집
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 tracking-tighter text-glow">
            디에픽<span className="text-amber-500">;</span>제네시스
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            태초의 거목 엘라, 그리고 세 종족의 엇갈린 신념. <br className="hidden md:block" />
            새로운 성위(Axiomos)를 차지하기 위한 거대한 서사시가 시작된다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <a
            href="#world"
            className="inline-flex flex-col items-center text-gray-400 hover:text-white transition-colors"
          >
            <span className="text-xs uppercase tracking-widest mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
