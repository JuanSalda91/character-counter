import React, { useState } from 'react';
import type { CharacterCounterProps, TextStats } from '../../types/index.ts';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
    minwords,
    maxwords,
    targetReadingTime,
  }) => {
    const [text, setText] = useState<string>('');
    const [stats, setStats] = useState<TextStats>({
      characterCount: 0,
      wordCount: 0,
      readingTime: 0,
    });
  
    const calculateStats = (value: string): TextStats => {
      const characterCount = value.length;
  
      const words = value
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0);
  
      const wordCount = value.trim().length === 0 ? 0 : words.length;
  
      // Simple reading time: average 200 words per minute
      const readingTime = wordCount === 0 ? 0 : wordCount / 200;
  
      return {
        characterCount,
        wordCount,
        readingTime,
      };
    };
  
    const handleTextChange = (value: string) => {
      setText(value);
      const newStats = calculateStats(value);
      setStats(newStats);
    };
  
    return (
      <div className="max-w-2xl mx-auto p-4">
        <TextInput
          onTextChange={handleTextChange}
          placeholder="Start typing your content here..."
          initialValue={text}
        />
  
        <StatsDisplay stats={stats} showReadingTime={true} />
  
        {/* Optional simple goal display using minwords/maxwords/targetReadingTime */}
        <div className="mt-4 text-sm text-gray-600">
          {(minwords || maxwords) && (
            <p>
              Min: {minwords ?? 0} | Max: {maxwords ?? 0}
            </p>
          )}
          {typeof targetReadingTime === 'number' && (
            <p>Target reading time: {targetReadingTime} min</p>
          )}
        </div>
      </div>
    );
  };