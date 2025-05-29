import React from 'react';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to AuraMind</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your companion for better sleep and relaxation during stressful life situations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/sleep-action-plan" className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-6 rounded-lg shadow-lg transition-colors">
                Start Sleep Plan
              </Link>
              <Link href="/mindfulness-techniques" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg transition-colors">
                Explore Techniques
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How AuraMind Helps You</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Sleep Action Plan</h3>
                <p className="text-gray-600 text-center">
                  A comprehensive guide with techniques and resources for better sleep
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Binaural Beats</h3>
                <p className="text-gray-600 text-center">
                  Educational content about how binaural beats work and their benefits
                </p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Sleep Affirmations</h3>
                <p className="text-gray-600 text-center">
                  A collection of positive statements to help you achieve better sleep
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                  4
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Mindfulness Techniques</h3>
                <p className="text-gray-600 text-center">
                  Additional relaxation techniques to calm your mind and body
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* What's on your mind Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-center mb-6">What's on your mind?</h2>
              <p className="text-gray-600 text-center mb-6">
                Share your thoughts and feelings, and we'll provide personalized exercises and help related to your needs.
              </p>
              
              <form className="space-y-4">
                <div>
                  <textarea 
                    className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" 
                    placeholder="Type here..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors">
                    Get Personalized Help
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        
        {/* Interactive Features Preview */}
        <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Interactive Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Breathing Exercises</h3>
                <p className="mb-4">
                  Interactive visualization tools to guide your breathing and help you relax.
                </p>
                <Link href="/mindfulness-techniques" className="inline-block bg-white text-purple-600 hover:bg-purple-100 font-semibold py-2 px-4 rounded transition-colors">
                  Try Now
                </Link>
              </div>
              
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Audio Player</h3>
                <p className="mb-4">
                  Listen to binaural beats and guided meditations to help you sleep better.
                </p>
                <Link href="/binaural-beats" className="inline-block bg-white text-purple-600 hover:bg-purple-100 font-semibold py-2 px-4 rounded transition-colors">
                  Listen Now
                </Link>
              </div>
              
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Sleep Tracker</h3>
                <p className="mb-4">
                  Track your sleep quality and patterns to identify areas for improvement.
                </p>
                <Link href="#" className="inline-block bg-white text-purple-600 hover:bg-purple-100 font-semibold py-2 px-4 rounded transition-colors">
                  Coming Soon
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
