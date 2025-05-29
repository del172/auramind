import React, { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  tracks?: {
    title: string;
    description?: string;
    src: string;
    duration?: number;
  }[];
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ 
  tracks = [
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
  ]
}) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  
  const currentTrack = tracks[currentTrackIndex];
  
  // Format time in MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  // Handle play/pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  // Handle track change
  const changeTrack = (index: number) => {
    if (index >= 0 && index < tracks.length) {
      setCurrentTrackIndex(index);
      setCurrentTime(0);
      setIsPlaying(false);
      
      // Allow a moment for the audio element to update its source
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(e => console.log("Audio play failed:", e));
          setIsPlaying(true);
        }
      }, 100);
    }
  };
  
  // Handle next/previous track
  const nextTrack = () => changeTrack((currentTrackIndex + 1) % tracks.length);
  const prevTrack = () => changeTrack(currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1);
  
  // Handle progress bar click
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && audioRef.current) {
      const progressBar = progressBarRef.current;
      const rect = progressBar.getBoundingClientRect();
      const clickPosition = (e.clientX - rect.left) / rect.width;
      const newTime = clickPosition * duration;
      
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };
  
  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };
  
  // Update time display
  useEffect(() => {
    const updateTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration || tracks[currentTrackIndex].duration || 0);
      }
    };
    
    const timeInterval = setInterval(updateTime, 1000);
    return () => clearInterval(timeInterval);
  }, [currentTrackIndex, tracks]);
  
  // Handle track end
  useEffect(() => {
    const handleTrackEnd = () => {
      nextTrack();
    };
    
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener('ended', handleTrackEnd);
      return () => audioElement.removeEventListener('ended', handleTrackEnd);
    }
  }, [currentTrackIndex]);
  
  // Set initial volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, []);
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800">{currentTrack.title}</h3>
        {currentTrack.description && (
          <p className="text-gray-600 text-sm mt-1">{currentTrack.description}</p>
        )}
      </div>
      
      {/* Progress bar */}
      <div 
        ref={progressBarRef}
        className="h-2 bg-gray-200 rounded-full mb-4 cursor-pointer"
        onClick={handleProgressClick}
      >
        <div 
          className="h-full bg-blue-500 rounded-full"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>
      
      {/* Time display */}
      <div className="flex justify-between text-sm text-gray-600 mb-4">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
      
      {/* Controls */}
      <div className="flex justify-center items-center space-x-6 mb-6">
        <button 
          onClick={prevTrack}
          className="text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={togglePlay}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 focus:outline-none"
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
        
        <button 
          onClick={nextTrack}
          className="text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Volume control */}
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      
      {/* Track list */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Tracks</h4>
        <div className="space-y-2">
          {tracks.map((track, index) => (
            <div 
              key={index}
              onClick={() => changeTrack(index)}
              className={`p-3 rounded-lg cursor-pointer transition-colors ${
                currentTrackIndex === index 
                  ? 'bg-blue-100 border-l-4 border-blue-500' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <div className="font-medium">{track.title}</div>
              {track.description && (
                <div className="text-sm text-gray-600">{track.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={currentTrack.src}
        preload="metadata"
      />
    </div>
  );
};

export default AudioPlayer;
