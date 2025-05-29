import React from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import AffirmationCard from '../../components/interactive/AffirmationCard';

export default function SleepAffirmations() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Sleep Affirmations</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">The Power of Sleep Affirmations</h2>
            <p className="text-gray-700 mb-4">
              Sleep affirmations are positive statements that can help calm your mind, reduce anxiety, and prepare your body 
              for restful sleep. When practiced regularly, these affirmations can help reprogram your subconscious mind to 
              associate bedtime with positive feelings rather than stress or worry.
            </p>
            <p className="text-gray-700 mb-4">
              Our thoughts have a powerful impact on our emotions and physical state. By intentionally focusing on calming, 
              positive thoughts before sleep, you can create a mental environment conducive to falling asleep faster and 
              enjoying deeper, more restorative rest.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">How to Use Sleep Affirmations</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Find a comfortable position in bed</li>
                <li>Take several deep, slow breaths to begin relaxing</li>
                <li>Choose one or more affirmations that resonate with you</li>
                <li>Repeat each affirmation slowly, either silently or in a soft whisper</li>
                <li>As you repeat the affirmation, truly feel the meaning behind the words</li>
                <li>If your mind wanders, gently bring your focus back to the affirmation</li>
                <li>Continue for 5-10 minutes or until you naturally drift off to sleep</li>
              </ol>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Interactive Affirmation Cards</h2>
            <p className="text-gray-700 mb-6">
              Explore our collection of sleep affirmations. Click on a card to reveal an affirmation, save your favorites, 
              or share them with others who might benefit. You can also use the navigation buttons to browse through all 
              available affirmations or get a random one.
            </p>
            
            <AffirmationCard />
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Creating Your Own Affirmations</h2>
            <p className="text-gray-700 mb-4">
              While our collection provides many useful affirmations, you may want to create your own that address your 
              specific sleep challenges. Here are some guidelines for creating effective sleep affirmations:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2 text-gray-800">Do:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Use present tense ("I am" not "I will")</li>
                  <li>Keep them positive (what you want, not what you don't want)</li>
                  <li>Make them personal and meaningful to you</li>
                  <li>Keep them simple and easy to remember</li>
                  <li>Focus on feelings of safety, peace, and relaxation</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2 text-gray-800">Avoid:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Negative words (even in positive statements)</li>
                  <li>Complex or lengthy phrases</li>
                  <li>Statements that feel untrue or inauthentic</li>
                  <li>Focusing on sleep problems or insomnia</li>
                  <li>Creating pressure or expectations about sleep</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-800">Examples of Personalized Affirmations:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>For racing thoughts: "My mind is calm and ready for peaceful sleep"</li>
                <li>For anxiety: "I am safe, protected, and completely at ease"</li>
                <li>For physical tension: "My body knows how to relax completely"</li>
                <li>For work stress: "I release the day's activities and welcome deep rest"</li>
                <li>For grief or emotional pain: "I give myself permission to rest and heal"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
