'use client';

import React, { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  tracks?: {
    title: string;
    description: string;
    src: string;
    duration: number;
  }[];
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ tracks = [] }) => {
  const defaultTracks = [
    {
      title: "Delta Waves (0.5-4Hz)",
      description: "Deep sleep, healing, and recovery",
      src: "/audio/delta-waves.mp3",
      duration: 180
    },
    {
      title: "Theta Waves (4-8Hz)",
      description: "Meditation, creativity, and REM sleep",
      src: "/audio/theta-waves.mp3",
      duration: 180
    },
    {
      title: "Alpha Waves (8-13Hz)",
      description: "Relaxation, calmness, and positive thinking",
      src: "/audio/alpha-waves.mp3",
      duration: 180
    },
    {
      title: "Guided Sleep Meditation",
      description: "Gentle voice guidance for sleep",
      src: "/audio/guided-sleep.mp3",
      duration: 600
    }
  ];

  const allTracks = tracks.length > 0 ? tracks : defaultTracks;
  
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const animationRef = useRef<number>();
  
  const currentTrack = allTracks[currentTrackIndex];
  
  useEffect(() => {
    // Reset current time when track changes
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Error playing audio:", e));
      }
    }
  }, [currentTrackIndex]);
  
  useEffect(() => {
    // Set volume when it changes
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        cancelAnimationFrame(animationRef.current!);
      } else {
        audioRef.current.play().catch(e => console.error("Error playing audio:", e));
        animationRef.current = requestAnimationFrame(updateProgress);
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const updateProgress = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      animationRef.current = requestAnimationFrame(updateProgress);
    }
  };
  
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };
  
  const handlePrevTrack = () => {
    setCurrentTrackIndex((prevIndex) => 
      prevIndex === 0 ? allTracks.length - 1 : prevIndex - 1
    );
  };
  
  const handleNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => 
      (prevIndex + 1) % allTracks.length
    );
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const handleTrackSelect = (index: number) => {
    setCurrentTrackIndex(index);
  };
  
  const handleAudioEnded = () => {
    handleNextTrack();
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-2">{currentTrack.title}</h2>
      <p className="text-gray-600 mb-4">{currentTrack.description}</p>
      
      <audio 
        ref={audioRef}
        src={currentTrack.src}
        onEnded={handleAudioEnded}
        preload="metadata"
      />
      
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(currentTrack.duration)}</span>
        </div>
        <input
          type="range"
          min="0"
          max={currentTrack.duration}
          value={currentTime}
          onChange={handleTimeChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      
      <div className="flex justify-center items-center space-x-6 mb-6">
        <button 
          onClick={handlePrevTrack}
          className="text-2xl text-gray-700 hover:text-blue-600 focus:outline-none"
          aria-label="Previous track"
        >
          ⟪
        </button>
        <button 
          onClick={togglePlayPause}
          className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 focus:outline-none"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
        <button 
          onClick={handleNextTrack}
          className="text-2xl text-gray-700 hover:text-blue-600 focus:outline-none"
          aria-label="Next track"
        >
          ⟫
        </button>
      </div>
      
      <div className="flex items-center mb-6">
        <span className="mr-2">🔈</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <span className="ml-2">🔊</span>
      </div>
      
      <div>
        <h3 className="font-bold mb-2">Tracks</h3>
        <div className="space-y-2">
          {allTracks.map((track, index) => (
            <div 
              key={index}
              onClick={() => handleTrackSelect(index)}
              className={`p-3 rounded-md cursor-pointer transition-colors ${
                index === currentTrackIndex 
                  ? 'bg-blue-100 border-l-4 border-blue-500' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <div className="font-medium">{track.title}</div>
              <div className="text-sm text-gray-600">{track.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
