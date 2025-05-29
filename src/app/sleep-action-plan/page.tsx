import React from 'react';
import Link from 'next/link';

export default function SleepActionPlan() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sleep Action Plan</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Sleep</h2>
        <p className="mb-4">
          Sleep is essential for physical health, cognitive function, and emotional wellbeing. 
          During sleep, your body works to support healthy brain function and maintain your physical health.
        </p>
        <p className="mb-4">
          The recommended amount of sleep for adults is 7-9 hours per night, though individual needs may vary.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Sleep Challenges</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Difficulty falling asleep</li>
          <li>Waking up during the night</li>
          <li>Waking up too early</li>
          <li>Not feeling well-rested after sleep</li>
          <li>Daytime sleepiness</li>
          <li>Stress and anxiety affecting sleep</li>
        </ul>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Sleep Action Plan</h2>
        
        <h3 className="text-xl font-medium mb-3">1. Create a Sleep-Friendly Environment</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Keep your bedroom cool, dark, and quiet</li>
          <li>Use comfortable bedding and pillows</li>
          <li>Remove electronic devices or use night mode</li>
          <li>Consider using white noise or earplugs if needed</li>
        </ul>
        
        <h3 className="text-xl font-medium mb-3">2. Establish a Consistent Sleep Schedule</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Go to bed and wake up at the same time every day, even on weekends</li>
          <li>Create a relaxing bedtime routine to signal to your body it's time to sleep</li>
          <li>Avoid naps after 3 PM</li>
        </ul>
        
        <h3 className="text-xl font-medium mb-3">3. Mind Your Daytime Habits</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Get regular exercise, but not too close to bedtime</li>
          <li>Expose yourself to natural sunlight during the day</li>
          <li>Limit caffeine and alcohol, especially in the afternoon and evening</li>
          <li>Avoid large meals before bedtime</li>
        </ul>
        
        <h3 className="text-xl font-medium mb-3">4. Manage Stress and Anxiety</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Practice relaxation techniques before bed</li>
          <li>Try <Link href="/mindfulness-techniques" className="text-blue-500 hover:underline">mindfulness meditation</Link></li>
          <li>Use <Link href="/sleep-affirmations" className="text-blue-500 hover:underline">sleep affirmations</Link></li>
          <li>Consider journaling to clear your mind</li>
        </ul>
        
        <h3 className="text-xl font-medium mb-3">5. Use Sound Therapy</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Try <Link href="/binaural-beats" className="text-blue-500 hover:underline">binaural beats</Link> for sleep</li>
          <li>Use calming nature sounds or white noise</li>
          <li>Listen to guided sleep meditations</li>
        </ul>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">When to Seek Professional Help</h2>
        <p className="mb-4">
          If you've tried these strategies and still struggle with sleep, consider consulting a healthcare provider. 
          Persistent sleep problems may indicate an underlying sleep disorder or health condition that requires treatment.
        </p>
        <p>
          Remember that good sleep is essential for your overall health and wellbeing. 
          Be patient with yourself as you implement these changes—it may take time to see improvements in your sleep quality.
        </p>
      </div>
      
      <div className="flex justify-center mt-8">
        <Link 
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition duration-300"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
