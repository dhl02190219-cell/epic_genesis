import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Volume2, VolumeX, Play, Pause } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // Open by default so users see the controls
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Reliable direct MP3 URL for background music
  const audioUrl = "https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current && !isPlaying) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (err) {
        console.log("Autoplay prevented. Waiting for user interaction.", err);
      }
    };

    // Try playing immediately on mount
    playAudio();

    // Also try playing on the first user interaction with the page
    const handleInteraction = () => {
      playAudio();
      ['click', 'keydown', 'touchstart'].forEach(event => 
        document.removeEventListener(event, handleInteraction)
      );
    };

    ['click', 'keydown', 'touchstart'].forEach(event => 
      document.addEventListener(event, handleInteraction, { once: true })
    );

    return () => {
      ['click', 'keydown', 'touchstart'].forEach(event => 
        document.removeEventListener(event, handleInteraction)
      );
    };
  }, []);

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (err) {
        console.error("Playback failed:", err);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <audio
        ref={audioRef}
        src={audioUrl}
        loop
        preload="auto"
        crossOrigin="anonymous"
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 p-2 rounded-full glass-panel border border-white/10 shadow-2xl flex items-center gap-3"
          >
            <button
              onClick={togglePlay}
              className="p-3 rounded-full bg-amber-600/20 hover:bg-amber-600/40 text-amber-500 transition-colors"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
            </button>

            <div className="flex items-center gap-2 w-28 pr-4">
              <button onClick={toggleMute} className="text-gray-400 hover:text-white transition-colors">
                {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen 
            ? 'bg-amber-600 text-white' 
            : 'glass-panel border border-white/10 text-amber-500 hover:text-amber-400 hover:bg-white/5'
        }`}
      >
        {isPlaying ? (
          <div className="relative flex items-center justify-center w-6 h-6">
            <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-20 animate-ping"></span>
            <Music size={24} className="animate-pulse" />
          </div>
        ) : (
          <Music size={24} />
        )}
      </button>
    </div>
  );
}
