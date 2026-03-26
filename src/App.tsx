/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WorldSection } from './components/WorldSection';
import { RacesSection } from './components/RacesSection';
import { CharactersSection } from './components/CharactersSection';
import { TimelineSection } from './components/TimelineSection';
import { MusicPlayer } from './components/MusicPlayer';

export default function App() {
  return (
    <main className="relative min-h-screen text-gray-200 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Global Background */}
      <div className="fixed inset-0 z-[-1]">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" 
          alt="Eden Background" 
          className="w-full h-full object-cover opacity-70"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-[2px]" />
      </div>

      <Navbar />
      <HeroSection />
      <WorldSection />
      <RacesSection />
      <CharactersSection />
      <TimelineSection />
      <MusicPlayer />
      
      <footer className="py-12 text-center border-t border-white/10 bg-black/80 backdrop-blur-md">
        <p className="text-gray-500 text-sm font-serif tracking-widest uppercase">
          © 870 The Epic;Genesis. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

