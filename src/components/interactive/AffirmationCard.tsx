'use client';

import React, { useState } from 'react';

interface AffirmationCardProps {
  affirmations: string[];
}

const AffirmationCard: React.FC<AffirmationCardProps> = ({ affirmations = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const defaultAffirmations = [
    "I release the day's tension and welcome peaceful sleep.",
    "My mind is calm, my body is relaxed, and I am ready for restful sleep.",
    "I deserve quality rest and my body knows how to sleep deeply.",
    "With each breath, I become more relaxed and ready for sleep.",
    "I trust in my ability to fall asleep easily and naturally.",
    "My bedroom is a sanctuary of peace and comfort.",
    "I let go of all worries as I prepare for sleep.",
    "Sleep comes easily to me, and I wake feeling refreshed.",
    "I am grateful for this time to rest and rejuvenate.",
    "My body and mind are in harmony as I drift into sleep."
  ];

  const allAffirmations = affirmations.length > 0 ? affirmations : defaultAffirmations;
  
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextClick = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allAffirmations.length);
  };

  const handlePrevClick = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + allAffirmations.length) % allAffirmations.length);
  };

  const handleRandomClick = () => {
    setIsFlipped(false);
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * allAffirmations.length);
    } while (newIndex === currentIndex && allAffirmations.length > 1);
    setCurrentIndex(newIndex);
  };

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
    // In a real app, we would save this to local storage or a database
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Sleep Affirmation',
        text: allAffirmations[currentIndex],
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      alert(`Copy this affirmation: ${allAffirmations[currentIndex]}`);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      <div 
        className={`relative w-full aspect-[3/2] cursor-pointer perspective-1000 mb-4 ${isFlipped ? 'rotate-y-180' : ''}`}
        onClick={handleCardClick}
      >
        <div className={`absolute w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          {/* Front of card */}
          <div className={`absolute w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-xl p-6 flex items-center justify-center text-white text-center text-xl font-medium backface-hidden ${isFlipped ? 'hidden' : ''}`}>
            Click to reveal your sleep affirmation
          </div>
          
          {/* Back of card */}
          <div className={`absolute w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg shadow-xl p-6 flex items-center justify-center text-white text-center text-xl font-medium backface-hidden rotate-y-180 ${isFlipped ? '' : 'hidden'}`}>
            {allAffirmations[currentIndex]}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4 mb-4">
        <button 
          onClick={handlePrevClick}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center"
          aria-label="Previous affirmation"
        >
          &lt;
        </button>
        <button 
          onClick={handleRandomClick}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center"
          aria-label="Random affirmation"
        >
          ↻
        </button>
        <button 
          onClick={handleNextClick}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center"
          aria-label="Next affirmation"
        >
          &gt;
        </button>
      </div>
      
      <div className="flex justify-center space-x-4">
        <button 
          onClick={handleSaveClick}
          className={`px-4 py-2 rounded-full flex items-center justify-center transition-colors ${isSaved ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          <span className="mr-1">{isSaved ? '✓' : ''}</span> Save
        </button>
        <button 
          onClick={handleShareClick}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full flex items-center justify-center"
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default AffirmationCard;
