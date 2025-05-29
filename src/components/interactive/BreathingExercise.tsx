'use client';

import React, { useState, useEffect } from 'react';

interface BreathingExerciseProps {
  defaultPattern?: 'box' | 'relaxing' | 'energizing';
  showInstructions?: boolean;
}

const BreathingExercise: React.FC<BreathingExerciseProps> = ({ 
  defaultPattern = 'box',
  showInstructions = true
}) => {
  const [pattern, setPattern] = useState<'box' | 'relaxing' | 'energizing'>(defaultPattern);
  const [phase, setPhase] = useState<'inhale' | 'hold1' | 'exhale' | 'hold2'>('inhale');
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);
  const [displayInstructions, setDisplayInstructions] = useState(showInstructions);
  
  // Pattern configurations
  const patterns = {
    box: {
      inhale: 4,
      hold1: 4,
      exhale: 4,
      hold2: 4,
      description: "Box breathing (4-4-4-4) helps reduce stress and improve focus."
    },
    relaxing: {
      inhale: 4,
      hold1: 7,
      exhale: 8,
      hold2: 0,
      description: "4-7-8 breathing helps calm the nervous system and prepare for sleep."
    },
    energizing: {
      inhale: 6,
      hold1: 0,
      exhale: 2,
      hold2: 0,
      description: "Energizing breath (6-0-2-0) increases alertness and energy."
    }
  };
  
  const currentPattern = patterns[pattern];
  const maxCount = currentPattern[phase];
  
  // Sound effects
  const playSound = (sound: string) => {
    const audio = new Audio(`/audio/${sound}.mp3`);
    audio.volume = 0.3;
    audio.play().catch(e => console.error("Error playing sound:", e));
  };
  
  // Timer logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isActive) {
      if (count < maxCount) {
        timer = setTimeout(() => {
          setCount(count + 1);
        }, 1000);
      } else {
        // Move to next phase
        setCount(0);
        
        if (phase === 'inhale') {
          setPhase('hold1');
          if (currentPattern.hold1 > 0) {
            playSound('hold');
          } else {
            setPhase('exhale');
            playSound('exhale');
          }
        } else if (phase === 'hold1') {
          setPhase('exhale');
          playSound('exhale');
        } else if (phase === 'exhale') {
          if (currentPattern.hold2 > 0) {
            setPhase('hold2');
            playSound('hold');
          } else {
            setPhase('inhale');
            playSound('inhale');
          }
        } else if (phase === 'hold2') {
          setPhase('inhale');
          playSound('inhale');
        }
      }
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isActive, count, phase, maxCount, currentPattern]);
  
  // Start/stop the exercise
  const toggleActive = () => {
    if (!isActive) {
      setPhase('inhale');
      setCount(0);
      playSound('inhale');
    }
    setIsActive(!isActive);
  };
  
  // Change breathing pattern
  const changePattern = (newPattern: 'box' | 'relaxing' | 'energizing') => {
    setPattern(newPattern);
    setPhase('inhale');
    setCount(0);
    if (isActive) {
      playSound('inhale');
    }
  };
  
  // Calculate circle size based on phase
  const getCircleSize = () => {
    if (phase === 'inhale') {
      return 50 + (count / maxCount) * 50;
    } else if (phase === 'exhale') {
      return 100 - (count / maxCount) * 50;
    } else {
      return phase === 'hold1' ? 100 : 50;
    }
  };
  
  // Get instruction text
  const getInstructionText = () => {
    switch (phase) {
      case 'inhale': return 'Inhale';
      case 'hold1': return 'Hold';
      case 'exhale': return 'Exhale';
      case 'hold2': return 'Hold';
      default: return '';
    }
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Breathing Exercise</h2>
        <p className="text-gray-600 mb-4">{currentPattern.description}</p>
        
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => changePattern('box')}
            className={`px-4 py-2 rounded-full ${
              pattern === 'box' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Box Breathing
          </button>
          <button
            onClick={() => changePattern('relaxing')}
            className={`px-4 py-2 rounded-full ${
              pattern === 'relaxing' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Relaxing
          </button>
          <button
            onClick={() => changePattern('energizing')}
            className={`px-4 py-2 rounded-full ${
              pattern === 'energizing' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Energizing
          </button>
        </div>
        
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="showInstructions"
            checked={displayInstructions}
            onChange={() => setDisplayInstructions(!displayInstructions)}
            className="mr-2"
          />
          <label htmlFor="showInstructions">Show text instructions</label>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center">
        <div className="relative mb-8 w-64 h-64 flex items-center justify-center">
          <div 
            className="absolute bg-blue-500 rounded-full transition-all duration-1000"
            style={{
              width: `${getCircleSize()}%`,
              height: `${getCircleSize()}%`,
              opacity: 0.7
            }}
          ></div>
          
          {displayInstructions && (
            <div className="relative z-10 text-center">
              <div className="text-2xl font-bold">{getInstructionText()}</div>
              <div className="text-3xl">{count + 1}/{maxCount}</div>
            </div>
          )}
        </div>
        
        <button
          onClick={toggleActive}
          className={`px-6 py-3 rounded-full font-bold ${
            isActive 
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {isActive ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  );
};

export default BreathingExercise;
