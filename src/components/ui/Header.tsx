import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold tracking-tight hover:text-blue-100 transition-colors">
              AuraMind
            </Link>
            <span className="ml-2 text-sm bg-blue-400 px-2 py-1 rounded-full">Beta</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-2 md:gap-6">
            <Link href="/" className="px-3 py-2 rounded hover:bg-blue-500 transition-colors">
              Home
            </Link>
            <Link href="/sleep-action-plan" className="px-3 py-2 rounded hover:bg-blue-500 transition-colors">
              Sleep Plan
            </Link>
            <Link href="/binaural-beats" className="px-3 py-2 rounded hover:bg-blue-500 transition-colors">
              Binaural Beats
            </Link>
            <Link href="/sleep-affirmations" className="px-3 py-2 rounded hover:bg-blue-500 transition-colors">
              Affirmations
            </Link>
            <Link href="/mindfulness-techniques" className="px-3 py-2 rounded hover:bg-blue-500 transition-colors">
              Mindfulness
            </Link>
            <Link href="/faq" className="px-3 py-2 rounded hover:bg-blue-500 transition-colors">
              FAQ
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
