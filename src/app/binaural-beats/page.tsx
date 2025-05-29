import React from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import AudioPlayer from '../../components/interactive/AudioPlayer';

export default function BinauralBeats() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Binaural Beats</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">What Are Binaural Beats?</h2>
            <p className="text-gray-700 mb-4">
              Binaural beats are an auditory illusion perceived when two different pure-tone sine waves, 
              both with frequencies lower than 1500 Hz, with less than a 40 Hz difference between them, 
              are presented to a listener dichotically (one through each ear).
            </p>
            <p className="text-gray-700 mb-4">
              For example, if a 300 Hz pure tone is presented to the right ear and a 310 Hz pure tone is presented 
              to the left ear, the brain perceives a third "beat" at 10 Hz (the difference between 300 Hz and 310 Hz). 
              This third beat is not actually present in the auditory stimulus, but is perceived by the brain.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">How Do They Work?</h2>
            <p className="text-gray-700 mb-4">
              When you hear two tones of slightly different frequencies, one in each ear, your brain processes 
              this difference to produce a third tone, which is the binaural beat. This process is called frequency 
              following response, where your brainwaves naturally synchronize with the frequency of the binaural beat.
            </p>
            <p className="text-gray-700 mb-4">
              This phenomenon is a form of brainwave entrainment, where external stimuli can influence your brainwave 
              patterns. Different frequencies of binaural beats are associated with different states of consciousness.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2 text-gray-800">Delta Waves (0.5-4 Hz)</h3>
                <p className="text-gray-700">
                  Associated with deep, dreamless sleep and restorative rest. Delta waves can help promote healing 
                  and regeneration. These are the slowest recorded brain waves in humans.
                </p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2 text-gray-800">Theta Waves (4-8 Hz)</h3>
                <p className="text-gray-700">
                  Present during deep meditation, light sleep, and REM sleep. Theta waves are associated with 
                  creativity, emotional connection, intuition, and relaxation.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2 text-gray-800">Alpha Waves (8-13 Hz)</h3>
                <p className="text-gray-700">
                  Dominant during quietly flowing thoughts, meditation, or when closing your eyes. Alpha waves 
                  promote relaxation, positive thinking, and stress reduction.
                </p>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2 text-gray-800">Beta Waves (13-30 Hz)</h3>
                <p className="text-gray-700">
                  Present during normal waking consciousness and active thinking. Beta waves are associated with 
                  concentration, cognition, alertness, and anxiety.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Benefits for Sleep</h2>
            <p className="text-gray-700 mb-4">
              Binaural beats, particularly in the delta and theta ranges, may help improve sleep quality by:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Reducing the time it takes to fall asleep</li>
              <li>Increasing deep sleep duration</li>
              <li>Decreasing nighttime awakenings</li>
              <li>Promoting relaxation before bedtime</li>
              <li>Reducing anxiety that may interfere with sleep</li>
            </ul>
            
            <p className="text-gray-700">
              While research is still ongoing, many people report subjective improvements in their sleep quality 
              when listening to binaural beats before or during sleep.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">How to Use Binaural Beats</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Find a quiet, comfortable place where you won't be disturbed</li>
                <li>Use stereo headphones (essential for binaural beats to work properly)</li>
                <li>Choose the appropriate frequency based on your desired state</li>
                <li>Listen for at least 15-30 minutes for optimal effects</li>
                <li>Practice regularly for best results</li>
              </ol>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Listen to Binaural Beats</h2>
            <p className="text-gray-700 mb-6">
              Try our selection of binaural beats designed to help with relaxation and sleep. 
              Remember to use stereo headphones for the proper effect.
            </p>
            
            <AudioPlayer />
            
            <div className="mt-8 bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> Binaural beats are not recommended for individuals with epilepsy, 
                seizure disorders, or those who are pregnant. If you have any medical conditions, please 
                consult with a healthcare professional before use.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
