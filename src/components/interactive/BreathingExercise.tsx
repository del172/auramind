import React, { useState, useEffect, useRef } from 'react';

interface BreathingExerciseProps {
  exerciseType?: 'box' | 'relaxing' | 'energizing';
  showInstructions?: boolean;
}

const BreathingExercise: React.FC<BreathingExerciseProps> = ({ 
  exerciseType = 'box',
  showInstructions = true
}) => {
  const [phase, setPhase] = useState<'inhale' | 'hold1' | 'exhale' | 'hold2'>('inhale');
  const [isPlaying, setIsPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const [showTextInstructions, setShowTextInstructions] = useState(showInstructions);
  
  const circleRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Configure timing based on exercise type
  const timings = {
    box: {
      inhale: 4,
      hold1: 4,
      exhale: 4,
      hold2: 4
    },
    relaxing: {
      inhale: 4,
      hold1: 7,
      exhale: 8,
      hold2: 0
    },
    energizing: {
      inhale: 6,
      hold1: 0,
      exhale: 2,
      hold2: 0
    }
  };
  
  const currentTiming = timings[exerciseType];
  
  // Instructions for each phase
  const instructions = {
    inhale: "Breathe in slowly through your nose...",
    hold1: "Hold your breath...",
    exhale: "Exhale slowly through your mouth...",
    hold2: "Hold your breath..."
  };
  
  // Colors for each phase
  const colors = {
    inhale: "bg-blue-500",
    hold1: "bg-purple-500",
    exhale: "bg-indigo-500",
    hold2: "bg-teal-500"
  };
  
  // Animation for each phase
  useEffect(() => {
    if (!isPlaying || !circleRef.current) return;
    
    const circle = circleRef.current;
    
    // Reset any existing animations
    circle.style.transition = 'none';
    
    // Apply animations based on phase
    if (phase === 'inhale') {
      circle.style.transform = 'scale(0.5)';
      setTimeout(() => {
        circle.style.transition = `transform ${currentTiming.inhale}s ease-in-out`;
        circle.style.transform = 'scale(1)';
      }, 10);
    } else if (phase === 'exhale') {
      circle.style.transform = 'scale(1)';
      setTimeout(() => {
        circle.style.transition = `transform ${currentTiming.exhale}s ease-in-out`;
        circle.style.transform = 'scale(0.5)';
      }, 10);
    }
    
    // Play sound cue
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
    
  }, [phase, isPlaying, exerciseType]);
  
  // Timer to control phases
  useEffect(() => {
    if (!isPlaying) return;
    
    let timer: NodeJS.Timeout;
    
    if (phase === 'inhale') {
      setCount(currentTiming.inhale);
      timer = setInterval(() => {
        setCount(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setPhase('hold1');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (phase === 'hold1') {
      setCount(currentTiming.hold1);
      if (currentTiming.hold1 === 0) {
        setPhase('exhale');
      } else {
        timer = setInterval(() => {
          setCount(prev => {
            if (prev <= 1) {
              clearInterval(timer);
              setPhase('exhale');
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
    } else if (phase === 'exhale') {
      setCount(currentTiming.exhale);
      timer = setInterval(() => {
        setCount(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setPhase('hold2');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (phase === 'hold2') {
      setCount(currentTiming.hold2);
      if (currentTiming.hold2 === 0) {
        setPhase('inhale');
      } else {
        timer = setInterval(() => {
          setCount(prev => {
            if (prev <= 1) {
              clearInterval(timer);
              setPhase('inhale');
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
    }
    
    return () => clearInterval(timer);
  }, [phase, isPlaying, exerciseType]);
  
  const togglePlay = () => {
    if (!isPlaying) {
      setPhase('inhale');
      setCount(currentTiming.inhale);
    }
    setIsPlaying(!isPlaying);
  };
  
  const resetExercise = () => {
    setIsPlaying(false);
    setPhase('inhale');
    setCount(0);
    if (circleRef.current) {
      circleRef.current.style.transform = 'scale(0.5)';
    }
  };
  
  const exerciseNames = {
    box: "Box Breathing",
    relaxing: "4-7-8 Relaxing Breath",
    energizing: "Energizing Breath"
  };
  
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{exerciseNames[exerciseType]}</h3>
      
      <div className="relative w-64 h-64 mb-6">
        {/* Outer static circle */}
        <div className="absolute inset-0 rounded-full border-4 border-dashed border-gray-300"></div>
        
        {/* Animated breathing circle */}
        <div 
          ref={circleRef}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full ${colors[phase]} shadow-lg transform scale-50 flex items-center justify-center`}
        >
          <span className="text-white text-4xl font-bold">{count > 0 ? count : ''}</span>
        </div>
      </div>
      
      {showTextInstructions && (
        <div className="mb-6 text-center">
          <p className="text-lg font-medium text-gray-700">{instructions[phase]}</p>
        </div>
      )}
      
      <div className="flex space-x-4">
        <button
          onClick={togglePlay}
          className={`px-6 py-2 rounded-lg font-medium ${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}
        >
          {isPlaying ? 'Pause' : 'Start'}
        </button>
        
        <button
          onClick={resetExercise}
          className="px-6 py-2 rounded-lg font-medium bg-gray-500 hover:bg-gray-600 text-white transition-colors"
        >
          Reset
        </button>
      </div>
      
      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          id="showInstructions"
          checked={showTextInstructions}
          onChange={() => setShowTextInstructions(!showTextInstructions)}
          className="mr-2 h-4 w-4"
        />
        <label htmlFor="showInstructions" className="text-gray-700">
          Show text instructions
        </label>
      </div>
      
      {/* Hidden audio element for sound cues */}
      <audio ref={audioRef} preload="auto">
        <source src="/soft-tick.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BreathingExercise;
