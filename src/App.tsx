import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';

function App() {
  return (
    <CharacterCounter minwords={25} maxwords={100} targetReadingTime={3} />
  );
}

export default App;
