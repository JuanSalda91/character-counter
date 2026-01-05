# LAB 9.2

## Reflection Questions:

1. How did you handle state updates when the text changed?
    State is updated in a single handleTextChange function that receives the new text, updates the text state with setText(value), and then recalculates a TextStats object (character count, word count, reading time) before calling setStats(newStats).
    This keeps the state update logic centralized and ensures the statistics always match the most recent input.

2. What considerations did you make when calculating reading time?
    Reading time is based on a simple assumption of an average reading speed (for example, 200 words per minute), so the value is computed as wordCount / 200 in minutes and then formatted into a more readable mm:ss style in the UI.
    Edge cases like empty input are handled explicitly by returning 0 minutes when there are no words, preventing NaN or confusing values from appearing.

3. How did you ensure the UI remained responsive during rapid text input?
    The component only performs very lightweight calculations on each change (string length, splitting on whitespace, basic arithmetic), which run quickly even during rapid typing.
    All logic stays on the client with useState and simple derived values, so React can efficiently re-render the StatsDisplay without noticeable lag.


4. What challenges did you face when implementing the statistics calculations?
    A key challenge was correctly counting words while handling extra spaces, so the implementation trims the text, splits on whitespace with a regex, and filters out empty strings to avoid overcounting.
    Another challenge was avoiding incorrect values for empty or near-empty text; this was solved by special-casing empty input (returning zero counts and reading time) so the stats always look consistent and intentional.
