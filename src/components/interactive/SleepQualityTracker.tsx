'use client';

import React, { useState, useEffect } from 'react';

interface SleepQualityTrackerProps {
  initialData?: {
    date: string;
    quality: number;
    duration: number;
    notes: string;
  }[];
}

const SleepQualityTracker: React.FC<SleepQualityTrackerProps> = ({
  initialData = []
}) => {
  const [entries, setEntries] = useState(initialData);
  const [showForm, setShowForm] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [quality, setQuality] = useState(3);
  const [duration, setDuration] = useState(7);
  const [notes, setNotes] = useState('');
  const [view, setView] = useState<'list' | 'chart'>('list');
  
  // Initialize current date on component mount
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    setCurrentDate(`${year}-${month}-${day}`);
  }, []);
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new entry
    const newEntry = {
      date: currentDate,
      quality,
      duration,
      notes
    };
    
    // Add to entries
    setEntries([...entries, newEntry]);
    
    // Reset form
    setQuality(3);
    setDuration(7);
    setNotes('');
    setShowForm(false);
  };
  
  // Delete an entry
  const deleteEntry = (index: number) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };
  
  // Get quality label
  const getQualityLabel = (quality: number) => {
    switch(quality) {
      case 1: return 'Very Poor';
      case 2: return 'Poor';
      case 3: return 'Average';
      case 4: return 'Good';
      case 5: return 'Excellent';
      default: return 'Unknown';
    }
  };
  
  // Get quality color
  const getQualityColor = (quality: number) => {
    switch(quality) {
      case 1: return 'bg-red-500';
      case 2: return 'bg-orange-500';
      case 3: return 'bg-yellow-500';
      case 4: return 'bg-green-500';
      case 5: return 'bg-emerald-500';
      default: return 'bg-gray-500';
    }
  };
  
  // Sort entries by date (newest first)
  const sortedEntries = [...entries].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  // Calculate average sleep quality and duration
  const averageQuality = entries.length > 0 
    ? entries.reduce((sum, entry) => sum + entry.quality, 0) / entries.length
    : 0;
    
  const averageDuration = entries.length > 0
    ? entries.reduce((sum, entry) => sum + entry.duration, 0) / entries.length
    : 0;
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Sleep Quality Tracker</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setView('list')}
            className={`px-3 py-1 rounded ${view === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            List
          </button>
          <button
            onClick={() => setView('chart')}
            className={`px-3 py-1 rounded ${view === 'chart' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Chart
          </button>
        </div>
      </div>
      
      {entries.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-700 mb-1">Entries</p>
            <p className="text-2xl font-bold text-blue-900">{entries.length}</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm text-purple-700 mb-1">Avg. Quality</p>
            <p className="text-2xl font-bold text-purple-900">
              {averageQuality.toFixed(1)} / 5
            </p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <p className="text-sm text-indigo-700 mb-1">Avg. Duration</p>
            <p className="text-2xl font-bold text-indigo-900">
              {averageDuration.toFixed(1)} hrs
            </p>
          </div>
        </div>
      )}
      
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="mb-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Sleep Entry
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="mb-6 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">New Sleep Entry</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={currentDate}
                onChange={(e) => setCurrentDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-black"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sleep Duration (hours)
              </label>
              <input
                type="number"
                min="0"
                max="24"
                step="0.5"
                value={duration}
                onChange={(e) => setDuration(parseFloat(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md text-black"
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sleep Quality: {getQualityLabel(quality)}
            </label>
            <input
              type="range"
              min="1"
              max="5"
              value={quality}
              onChange={(e) => setQuality(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Very Poor</span>
              <span>Poor</span>
              <span>Average</span>
              <span>Good</span>
              <span>Excellent</span>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md h-24 text-black"
              placeholder="How did you feel when you woke up? Any dreams? Factors that might have affected your sleep?"
            ></textarea>
          </div>
          
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Save Entry
            </button>
          </div>
        </form>
      )}
      
      {view === 'list' ? (
        <div>
          {entries.length > 0 ? (
            <div className="space-y-4">
              {sortedEntries.map((entry, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">{formatDate(entry.date)}</h4>
                      <div className="flex items-center mt-1">
                        <div className={`w-3 h-3 rounded-full ${getQualityColor(entry.quality)} mr-2`}></div>
                        <span className="text-sm text-gray-600">
                          {getQualityLabel(entry.quality)} • {entry.duration} hours
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteEntry(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  {entry.notes && (
                    <p className="mt-2 text-sm text-gray-600">{entry.notes}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <h3 className="text-lg font-medium text-gray-800 mb-1">No sleep entries yet</h3>
              <p className="text-gray-600">
                Start tracking your sleep quality to see patterns and improvements
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-gray-50 p-4 rounded-lg">
          {entries.length > 0 ? (
            <div>
              <h3 className="text-lg font-semibold mb-4">Sleep Quality Trends</h3>
              
              {/* Simple chart visualization */}
              <div className="h-64 flex items-end space-x-1">
                {sortedEntries.slice(0, 14).reverse().map((entry, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className={`${getQualityColor(entry.quality)} rounded-t-sm w-full`} 
                      style={{ height: `${(entry.quality / 5) * 100}%` }}
                    ></div>
                    <span className="text-xs text-gray-600 mt-1 transform -rotate-45 origin-top-left">
                      {new Date(entry.date).getDate()}/{new Date(entry.date).getMonth() + 1}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Sleep Duration Trends</h3>
                
                {/* Simple duration chart */}
                <div className="h-64 flex items-end space-x-1">
                  {sortedEntries.slice(0, 14).reverse().map((entry, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div 
                        className="bg-blue-500 rounded-t-sm w-full" 
                        style={{ height: `${(entry.duration / 12) * 100}%` }}
                      ></div>
                      <span className="text-xs text-gray-600 mt-1 transform -rotate-45 origin-top-left">
                        {new Date(entry.date).getDate()}/{new Date(entry.date).getMonth() + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-800 mb-1">No data to display</h3>
              <p className="text-gray-600">
                Add sleep entries to see your trends visualized here
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SleepQualityTracker;
