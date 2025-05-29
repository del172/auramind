import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">AuraMind</h3>
            <p className="text-gray-300">
              Your companion for better sleep and relaxation during stressful life situations.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/sleep-action-plan" className="text-blue-300 hover:text-white transition-colors">Sleep Action Plan</a></li>
              <li><a href="/binaural-beats" className="text-blue-300 hover:text-white transition-colors">Binaural Beats</a></li>
              <li><a href="/sleep-affirmations" className="text-blue-300 hover:text-white transition-colors">Sleep Affirmations</a></li>
              <li><a href="/mindfulness-techniques" className="text-blue-300 hover:text-white transition-colors">Mindfulness Techniques</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">
              Have questions or feedback? We'd love to hear from you.
            </p>
            <a href="#" className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
              Contact Us
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AuraMind. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
