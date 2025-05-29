import React from 'react';
import Link from 'next/link';
import MindInput from '@/components/interactive/MindInput';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link href="/sleep-action-plan" className="block bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  1
                </div>
                <h2 className="text-xl font-bold mb-2">Sleep Action Plan</h2>
                <p className="text-gray-600">A comprehensive guide with techniques and resources for better sleep</p>
              </div>
            </Link>
            
            <Link href="/binaural-beats" className="block bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  2
                </div>
                <h2 className="text-xl font-bold mb-2">Binaural Beats</h2>
                <p className="text-gray-600">Educational content about how binaural beats work and their benefits</p>
              </div>
            </Link>
            
            <Link href="/sleep-affirmations" className="block bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  3
                </div>
                <h2 className="text-xl font-bold mb-2">Sleep Affirmations</h2>
                <p className="text-gray-600">A collection of positive statements to help you achieve better sleep</p>
              </div>
            </Link>
            
            <Link href="/mindfulness-techniques" className="block bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  4
                </div>
                <h2 className="text-xl font-bold mb-2">Mindfulness Techniques</h2>
                <p className="text-gray-600">Additional relaxation techniques to calm your mind and body</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Mind Input Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <MindInput />
        </div>
      </section>
      
      {/* Interactive Features Section */}
      <section className="w-full py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Interactive Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-indigo-800 mb-4">Breathing Exercise</h3>
              <p className="text-gray-700 mb-6">Visual animations synchronized with breathing instructions to help you relax and prepare for sleep.</p>
              <Link href="/mindfulness-techniques" className="text-indigo-600 font-medium hover:underline">Try Now</Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-indigo-800 mb-4">Binaural Beats Player</h3>
              <p className="text-gray-700 mb-6">Listen to specially designed audio tracks that help entrain your brainwaves for better sleep.</p>
              <Link href="/binaural-beats" className="text-indigo-600 font-medium hover:underline">Listen Now</Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-indigo-800 mb-4">Sleep Tracker</h3>
              <p className="text-gray-700 mb-6">Track your sleep quality and patterns to identify areas for improvement.</p>
              <span className="text-indigo-400 font-medium">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
