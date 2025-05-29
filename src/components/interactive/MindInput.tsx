'use client';

import React, { useState } from 'react';

interface MindInputProps {
  onSubmit?: (input: string) => void;
}

const MindInput: React.FC<MindInputProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    
    // Simulate processing time
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let responseText = '';
      
      // Simple keyword matching for personalized responses
      if (lowerInput.includes('anxious') || lowerInput.includes('anxiety') || lowerInput.includes('worried')) {
        responseText = `
          <h3 class="text-xl font-semibold mb-3">Anxiety Relief Techniques</h3>
          <p class="mb-3">It sounds like you're feeling anxious. Here are some techniques that might help:</p>
          <ul class="list-disc pl-5 mb-4">
            <li>Try the Box Breathing exercise in our Breathing Exercise tool</li>
            <li>Listen to Alpha Waves in our Binaural Beats section</li>
            <li>Practice progressive muscle relaxation before bed</li>
            <li>Write down your worries in a journal before sleep</li>
          </ul>
          <p>Remember that anxiety is a normal response to stress, but there are effective ways to manage it.</p>
        `;
      } else if (lowerInput.includes('depress') || lowerInput.includes('sad') || lowerInput.includes('low mood')) {
        responseText = `
          <h3 class="text-xl font-semibold mb-3">Mood Enhancement Strategies</h3>
          <p class="mb-3">I notice you mentioned feeling down. Here are some evidence-based approaches that might help:</p>
          <ul class="list-disc pl-5 mb-4">
            <li>Check out our positive affirmations in the Sleep Affirmations section</li>
            <li>Try to get 15-30 minutes of morning sunlight</li>
            <li>Consider a regular sleep schedule using our Sleep Quality Tracker</li>
            <li>Gentle exercise during the day can improve sleep and mood</li>
          </ul>
          <p>If your feelings persist or worsen, please consider speaking with a healthcare professional.</p>
        `;
      } else if (lowerInput.includes('stress') || lowerInput.includes('overwhelm')) {
        responseText = `
          <h3 class="text-xl font-semibold mb-3">Stress Reduction Techniques</h3>
          <p class="mb-3">Dealing with stress can be challenging. Here are some approaches that might help:</p>
          <ul class="list-disc pl-5 mb-4">
            <li>Try our Breathing Exercise tool for quick stress relief</li>
            <li>Listen to Theta Waves in our Binaural Beats section</li>
            <li>Practice mindfulness meditation before bed</li>
            <li>Create a pre-sleep routine that includes relaxing activities</li>
          </ul>
          <p>Remember that managing stress is an ongoing practice, and small steps can make a big difference.</p>
        `;
      } else if (lowerInput.includes('can\'t sleep') || lowerInput.includes('insomnia') || lowerInput.includes('trouble sleeping')) {
        responseText = `
          <h3 class="text-xl font-semibold mb-3">Sleep Improvement Strategies</h3>
          <p class="mb-3">Difficulty sleeping can be frustrating. Here are some evidence-based approaches:</p>
          <ul class="list-disc pl-5 mb-4">
            <li>Check out our complete Sleep Action Plan</li>
            <li>Try the Guided Sleep Meditation in our Binaural Beats section</li>
            <li>Practice the 4-7-8 breathing technique in our Breathing Exercise tool</li>
            <li>Track your sleep patterns with our Sleep Quality Tracker</li>
          </ul>
          <p>Consistency is key with sleep habits. Try to maintain a regular schedule even on weekends.</p>
        `;
      } else {
        responseText = `
          <h3 class="text-xl font-semibold mb-3">Personalized Relaxation Recommendations</h3>
          <p class="mb-3">Thank you for sharing. Based on what you've written, here are some tools that might help:</p>
          <ul class="list-disc pl-5 mb-4">
            <li>Explore our Breathing Exercise tool for relaxation techniques</li>
            <li>Try different frequencies in our Binaural Beats section</li>
            <li>Use positive affirmations from our Sleep Affirmations section</li>
            <li>Track your sleep patterns with our Sleep Quality Tracker</li>
          </ul>
          <p>Remember that improving sleep and relaxation is a journey. Be patient with yourself as you explore different techniques.</p>
        `;
      }
      
      setResponse(responseText);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">What's on your mind?</h2>
      <p className="text-gray-600 mb-6 text-center">
        Share your thoughts and feelings, and we'll provide personalized exercises and help related to your needs.
      </p>
      
      <textarea
        value={input}
        onChange={handleInputChange}
        placeholder="Type here..."
        className="w-full p-4 border border-gray-300 rounded-md mb-4 min-h-[120px] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-black"
      />
      
      <div className="flex justify-center mb-6">
        <button
          onClick={handleSubmit}
          disabled={isLoading || !input.trim()}
          className={`px-6 py-2 rounded-full font-medium transition-colors ${
            isLoading || !input.trim()
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isLoading ? 'Processing...' : 'Get Personalized Help'}
        </button>
      </div>
      
      {response && (
        <div className="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded-md">
          <div dangerouslySetInnerHTML={{ __html: response }} />
        </div>
      )}
    </div>
  );
};

export default MindInput;
