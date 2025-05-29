'use client';

import React, { useState, useEffect } from 'react';

interface SleepQualityTrackerProps {}

type SleepEntry = {
  date: string;
  quality: number;
  duration: number;
  notes: string;
};

const SleepQualityTracker: React.FC<SleepQualityTrackerProps> = () => {
  const [entries, setEntries] = useState<SleepEntry[]>([]);
  const [quality, setQuality] = useState<number>(3);
  const [hours, setHours] = useState<number>(7);
  const [minutes, setMinutes] = useState<number>(0);
  const [notes, setNotes] = useState<string>('');
  const [view, setView] = useState<'list' | 'chart'>('list');
  
  // Load entries from localStorage on component mount
  useEffect(() => {
    const savedEntries = localStorage.getItem('sleepEntries');
    if (savedEntries) {
      try {
        setEntries(JSON.parse(savedEntries));
      } catch (e) {
        console.error('Error loading sleep entries:', e);
      }
    }
  }, []);
  
  // Save entries to localStorage when they change
  useEffect(() => {
    localStorage.setItem('sleepEntries', JSON.stringify(entries));
  }, [entries]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const today = new Date().toISOString().split('T')[0];
    const duration = hours + (minutes / 60);
    
    const newEntry: SleepEntry = {
      date: today,
      quality,
      duration,
      notes
    };
    
    setEntries([newEntry, ...entries]);
    
    // Reset form
    setQuality(3);
    setHours(7);
    setMinutes(0);
    setNotes('');
  };
  
  const handleDelete = (index: number) => {
    const newEntries = [...entries];
    newEntries.splice(index, 1);
    setEntries(newEntries);
  };
  
  const getQualityLabel = (quality: number) => {
    switch (quality) {
      case 1: return 'Very Poor';
      case 2: return 'Poor';
      case 3: return 'Average';
      case 4: return 'Good';
      case 5: return 'Excellent';
      default: return 'Unknown';
    }
  };
  
  const getQualityColor = (quality: number) => {
    switch (quality) {
      case 1: return 'bg-red-500';
      case 2: return 'bg-orange-500';
      case 3: return 'bg-yellow-500';
      case 4: return 'bg-green-500';
      case 5: return 'bg-emerald-500';
      default: return 'bg-gray-500';
    }
  };
  
  const formatDuration = (duration: number) => {
    const hours = Math.floor(duration);
    const minutes = Math.round((duration - hours) * 60);
    return `${hours}h ${minutes}m`;
  };
  
  const renderChart = () => {
    // Only show last 7 entries for the chart
    const chartEntries = [...entries].slice(0, 7).reverse();
    
    return (
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Sleep Quality Trend</h3>
        <div className="h-64 flex items-end space-x-4">
          {chartEntries.map((entry, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div 
                className={`${getQualityColor(entry.quality)} w-full rounded-t-md`} 
                style={{ height: `${entry.quality * 20}%` }}
              ></div>
              <div className="text-xs mt-2 text-center">{new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
            </div>
          ))}
        </div>
        
        <h3 className="text-lg font-semibold mt-8 mb-4">Sleep Duration Trend</h3>
        <div className="h-64 flex items-end space-x-4">
          {chartEntries.map((entry, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div 
                className="bg-blue-500 w-full rounded-t-md" 
                style={{ height: `${Math.min(entry.duration / 12 * 100, 100)}%` }}
              ></div>
              <div className="text-xs mt-2 text-center">{new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Track Your Sleep</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Sleep Quality</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setQuality(value)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    quality === value 
                      ? `${getQualityColor(value)} text-white` 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
            <div className="text-sm text-gray-600 mt-1">{getQualityLabel(quality)}</div>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Sleep Duration</label>
            <div className="flex items-center">
              <select
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value))}
                className="mr-2 p-2 border border-gray-300 rounded-md"
              >
                {Array.from({ length: 13 }, (_, i) => i).map((value) => (
                  <option key={value} value={value}>{value} hours</option>
                ))}
              </select>
              
              <select
                value={minutes}
                onChange={(e) => setMinutes(parseInt(e.target.value))}
                className="p-2 border border-gray-300 rounded-md"
              >
                {[0, 15, 30, 45].map((value) => (
                  <option key={value} value={value}>{value} minutes</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows={3}
              placeholder="How did you feel when you woke up? Any dreams? Factors that affected your sleep?"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Add Entry
          </button>
        </form>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Sleep History</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setView('list')}
              className={`px-3 py-1 rounded-md ${
                view === 'list' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              List
            </button>
            <button
              onClick={() => setView('chart')}
              className={`px-3 py-1 rounded-md ${
                view === 'chart' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Chart
            </button>
          </div>
        </div>
        
        {view === 'list' ? (
          entries.length > 0 ? (
            <div className="space-y-4">
              {entries.map((entry, index) => (
                <div key={index} className="border rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">{new Date(entry.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                      <div className="flex items-center mt-1">
                        <span className={`inline-block w-4 h-4 rounded-full ${getQualityColor(entry.quality)} mr-2`}></span>
                        <span>{getQualityLabel(entry.quality)}</span>
                        <span className="mx-2">•</span>
                        <span>{formatDuration(entry.duration)}</span>
                      </div>
                      {entry.notes && (
                        <div className="mt-2 text-gray-700">{entry.notes}</div>
                      )}
                    </div>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No sleep entries yet. Start tracking your sleep quality above.
            </div>
          )
        ) : (
          entries.length > 0 ? (
            renderChart()
          ) : (
            <div className="text-center py-8 text-gray-500">
              No data available for charts. Add some sleep entries to see trends.
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SleepQualityTracker;
