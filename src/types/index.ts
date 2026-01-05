// TextInput props
export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

// StatsDisplay props and supporting types
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}

export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}

// CharacterCounter props
export interface CharacterCounterProps {
  minwords?: number;
  maxwords?: number;
  targetReadingTime?: number; // in minutes
}
