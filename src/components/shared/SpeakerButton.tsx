import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { speak } from '../../engine/tts';

interface SpeakerButtonProps {
  text: string;
  className?: string;
}

export const SpeakerButton: React.FC<SpeakerButtonProps> = ({ text, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      speak(
        text,
        () => setIsPlaying(true),
        () => setIsPlaying(false)
      );
    }
  };

  return (
    <button
      onClick={handlePlay}
      className={`inline-flex items-center justify-center rounded-full transition-colors ${
        isPlaying 
          ? 'text-indigo-600 bg-indigo-100 animate-pulse' 
          : 'text-slate-400 hover:text-indigo-600 hover:bg-slate-100'
      } ${className}`}
      title="Listen to pronunciation"
    >
      {isPlaying ? <Volume2 size={18} /> : <Volume2 size={18} />}
    </button>
  );
};
