import React, { useState } from 'react';

interface AffirmationCardProps {
  affirmations?: string[];
  allowSave?: boolean;
  allowShare?: boolean;
}

const AffirmationCard: React.FC<AffirmationCardProps> = ({
  affirmations = [
    "I release the day's tension and welcome peaceful sleep.",
    "My mind is calm, my body is relaxed, and I am ready for restful sleep.",
    "I deserve quality rest and my body knows how to sleep deeply.",
    "With each breath, I become more relaxed and ready for sleep.",
    "I let go of all worries as I prepare for rejuvenating sleep.",
    "My bedroom is a sanctuary for peaceful, healing sleep.",
    "I trust in my ability to fall asleep easily and naturally.",
    "I am grateful for this day and welcome the gift of restful sleep.",
    "My sleep is becoming deeper and more refreshing each night.",
    "I am safe, I am calm, and I welcome deep, peaceful sleep."
  ],
  allowSave = true,
  allowShare = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [savedAffirmations, setSavedAffirmations] = useState<string[]>([]);
  const [showSaved, setShowSaved] = useState(false);
  
  const currentAffirmation = affirmations[currentIndex];
  
  const nextAffirmation = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % affirmations.length);
    }, 300);
  };
  
  const previousAffirmation = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? affirmations.length - 1 : prevIndex - 1
      );
    }, 300);
  };
  
  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  const saveAffirmation = () => {
    if (!savedAffirmations.includes(currentAffirmation)) {
      setSavedAffirmations([...savedAffirmations, currentAffirmation]);
    }
  };
  
  const removeSavedAffirmation = (affirmation: string) => {
    setSavedAffirmations(savedAffirmations.filter(item => item !== affirmation));
  };
  
  const shareAffirmation = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Sleep Affirmation from AuraMind',
        text: currentAffirmation
      }).catch(err => {
        console.log('Error sharing:', err);
        // Fallback for desktop
        navigator.clipboard.writeText(currentAffirmation)
          .then(() => alert('Affirmation copied to clipboard!'))
          .catch(err => console.log('Error copying to clipboard:', err));
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(currentAffirmation)
        .then(() => alert('Affirmation copied to clipboard!'))
        .catch(err => console.log('Error copying to clipboard:', err));
    }
  };
  
  const randomAffirmation = () => {
    setIsFlipped(false);
    setTimeout(() => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * affirmations.length);
      } while (newIndex === currentIndex && affirmations.length > 1);
      setCurrentIndex(newIndex);
    }, 300);
  };
  
  return (
    <div className="max-w-md mx-auto">
      {!showSaved ? (
        <div className="mb-8">
          {/* Card */}
          <div 
            className={`relative w-full h-64 cursor-pointer transition-transform duration-300 transform-gpu ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
            onClick={toggleFlip}
          >
            {/* Front of card */}
            <div 
              className={`absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl shadow-xl p-6 flex items-center justify-center backface-hidden ${
                isFlipped ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <p className="text-white text-xl font-medium text-center">
                Click to reveal your sleep affirmation
              </p>
            </div>
            
            {/* Back of card */}
            <div 
              className={`absolute inset-0 bg-white rounded-xl shadow-xl p-6 flex items-center justify-center backface-hidden rotate-y-180 ${
                isFlipped ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <p className="text-gray-800 text-xl font-medium text-center">
                {currentAffirmation}
              </p>
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={previousAffirmation}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={randomAffirmation}
              className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            
            <button 
              onClick={nextAffirmation}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Action buttons */}
          <div className="flex justify-center mt-6 space-x-4">
            {allowSave && (
              <button 
                onClick={saveAffirmation}
                className="flex items-center px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Save
              </button>
            )}
            
            {allowShare && (
              <button 
                onClick={shareAffirmation}
                className="flex items-center px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </button>
            )}
            
            {savedAffirmations.length > 0 && (
              <button 
                onClick={() => setShowSaved(true)}
                className="flex items-center px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Saved ({savedAffirmations.length})
              </button>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">Saved Affirmations</h3>
            <button 
              onClick={() => setShowSaved(false)}
              className="text-blue-600 hover:text-blue-800"
            >
              Back to Cards
            </button>
          </div>
          
          {savedAffirmations.length > 0 ? (
            <div className="space-y-3">
              {savedAffirmations.map((affirmation, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow p-4 flex justify-between items-center"
                >
                  <p className="text-gray-800">{affirmation}</p>
                  <button 
                    onClick={() => removeSavedAffirmation(affirmation)}
                    className="text-red-500 hover:text-red-700 ml-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center py-8">
              You haven't saved any affirmations yet.
            </p>
          )}
        </div>
      )}
      
      <style jsx>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default AffirmationCard;
