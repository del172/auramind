import React from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import BreathingExercise from '../../components/interactive/BreathingExercise';

export default function MindfulnessTechniques() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Mindfulness Techniques</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Breathing Exercises</h2>
            <p className="text-gray-700 mb-6">
              Breathing exercises are a powerful way to reduce stress, calm your mind, and prepare your body for sleep. 
              These techniques help activate your parasympathetic nervous system, which controls relaxation responses.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 text-gray-800">Box Breathing</h3>
              <p className="text-gray-700 mb-6">
                Box breathing (also called square breathing) is a simple technique that can help you return to calm. 
                It involves breathing in, holding, breathing out, and holding again for equal counts.
              </p>
              
              <div className="mb-8">
                <BreathingExercise exerciseType="box" />
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 text-gray-800">4-7-8 Relaxing Breath</h3>
              <p className="text-gray-700 mb-6">
                The 4-7-8 breathing technique is a breathing pattern developed by Dr. Andrew Weil. It's based on pranayama, 
                an ancient yogic practice that helps people control their breathing. This technique can help reduce anxiety, 
                help you fall asleep, and manage cravings.
              </p>
              
              <div className="mb-8">
                <BreathingExercise exerciseType="relaxing" />
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 text-gray-800">Energizing Breath</h3>
              <p className="text-gray-700 mb-6">
                While most breathing techniques focus on relaxation, this technique can help increase alertness and energy. 
                It involves quick, forceful exhales followed by natural inhales. This is useful when you need to be alert 
                but calm, such as before an important meeting or presentation.
              </p>
              
              <div className="mb-8">
                <BreathingExercise exerciseType="energizing" />
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Progressive Muscle Relaxation</h2>
            <p className="text-gray-700 mb-6">
              Progressive muscle relaxation is a technique that involves tensing and then relaxing different muscle groups 
              throughout your body. This helps you become more aware of physical sensations and releases physical tension.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-800">How to Practice:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Find a quiet, comfortable place to sit or lie down</li>
                <li>Take a few deep breaths to begin relaxing</li>
                <li>Start with your feet: tense the muscles as tightly as you can for 5 seconds</li>
                <li>Release the tension and notice how your muscles feel when relaxed</li>
                <li>Move up to your calves, then thighs, and continue upward through your body</li>
                <li>For each muscle group, tense for 5 seconds, then relax for 30 seconds</li>
                <li>Pay attention to the differences between tension and relaxation</li>
              </ol>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Body Scan Meditation</h2>
            <p className="text-gray-700 mb-6">
              Body scan meditation is a practice that involves mentally scanning your body from head to toe, 
              paying attention to any sensations, tensions, or areas of discomfort. This practice helps increase 
              body awareness and can help you identify where you're holding stress.
            </p>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-800">How to Practice:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Lie down in a comfortable position</li>
                <li>Close your eyes and take several deep breaths</li>
                <li>Bring your attention to your feet, noticing any sensations</li>
                <li>Gradually move your attention up through your body</li>
                <li>For each part of your body, notice sensations without judgment</li>
                <li>If you notice tension, breathe into that area and imagine it softening</li>
                <li>Continue until you've scanned your entire body</li>
              </ol>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Visualization</h2>
            <p className="text-gray-700 mb-6">
              Visualization involves creating detailed mental images of peaceful, calming scenes or experiences. 
              This technique can help reduce stress and anxiety by focusing your mind on positive imagery.
            </p>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-800">How to Practice:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Find a quiet place where you won't be disturbed</li>
                <li>Close your eyes and take several deep breaths</li>
                <li>Think of a place where you feel peaceful (a beach, forest, etc.)</li>
                <li>Imagine this place in as much detail as possible</li>
                <li>What do you see? Notice colors, shapes, movements</li>
                <li>What do you hear? Imagine the sounds around you</li>
                <li>What do you feel? Temperature, textures, air on your skin</li>
                <li>What do you smell? Imagine any scents in your peaceful place</li>
                <li>Spend 5-10 minutes fully immersed in this visualization</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
