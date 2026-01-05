import React from 'react';
import type { StatsDisplayProps } from '../../types/index.ts';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
    stats,
    showReadingTime = true,
  }) => {
    const { characterCount, wordCount, readingTime } = stats;
  
    // Simple helper to format minutes (number) into mm:ss style
    const totalSeconds = Math.round(readingTime * 60);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  
    return (
      <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg text-center">
          <h2 className="text-sm font-semibold text-gray-500">Characters</h2>
          <p className="text-2xl font-bold">{characterCount}</p>
        </div>
  
        <div className="p-4 border rounded-lg text-center">
          <h2 className="text-sm font-semibold text-gray-500">Words</h2>
          <p className="text-2xl font-bold">{wordCount}</p>
        </div>
  
        {showReadingTime && (
          <div className="p-4 border rounded-lg text-center">
            <h2 className="text-sm font-semibold text-gray-500">Reading Time</h2>
            <p className="text-2xl font-bold">{formattedTime}</p>
          </div>
        )}
      </div>
    );
  };