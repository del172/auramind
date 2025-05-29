import React from 'react';
import Link from 'next/link';

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">What is AuraMind?</h2>
          <p>
            AuraMind is a comprehensive sleep and relaxation resource web application designed to help users struggling with sleep due to stressful life situations. The app features interactive tools, educational content, and personalized recommendations to improve sleep quality and overall wellbeing.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">How do binaural beats work?</h2>
          <p>
            Binaural beats work by playing two slightly different frequencies in each ear. Your brain perceives a third tone, which is the difference between the two frequencies. This can help entrain your brainwaves to specific frequencies associated with relaxation, focus, or sleep. For best results, use stereo headphones when listening to binaural beats.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">How often should I practice breathing exercises?</h2>
          <p>
            For optimal results, try to practice breathing exercises daily. Even 5-10 minutes per day can make a significant difference in your stress levels and sleep quality. You can practice at any time, but many find it particularly helpful before bed or during stressful moments throughout the day.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">Are sleep affirmations effective?</h2>
          <p>
            Sleep affirmations can be effective as part of a comprehensive approach to improving sleep. They work by replacing negative thought patterns with positive ones, helping to reduce anxiety and create a more peaceful mindset conducive to sleep. Consistency is key—try incorporating affirmations into your nightly routine for best results.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">How long does it take to see improvements in sleep quality?</h2>
          <p>
            Everyone's experience is different, but many people notice small improvements within a few days of implementing new sleep habits and techniques. More significant and lasting changes typically develop over 2-4 weeks of consistent practice. Be patient with yourself and remember that improving sleep is a gradual process.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">Can I use AuraMind alongside other sleep treatments?</h2>
          <p>
            Yes, AuraMind can complement other sleep treatments or therapies you may be using. However, if you're currently under medical care for sleep disorders or other health conditions, we recommend consulting with your healthcare provider about incorporating new sleep techniques into your routine.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">How do I track my progress?</h2>
          <p>
            Use our Sleep Quality Tracker to monitor your sleep patterns over time. Consistent tracking can help you identify what techniques are most effective for you and how your sleep quality changes over time. We recommend tracking for at least 2-3 weeks to start seeing patterns.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">Is my data private?</h2>
          <p>
            Yes, your privacy is important to us. Any information you enter in the "What's on your mind?" feature or Sleep Quality Tracker is stored locally on your device and is not transmitted to our servers. You can use AuraMind with confidence knowing your personal data remains private.
          </p>
        </div>
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
