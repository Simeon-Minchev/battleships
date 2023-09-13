import GameBoard from './components/GameBoard/GameBoard';
import { GameBoardProvider } from './components/GameBoard/GameBoardProvider';

const App = () => {
  return (
    <GameBoardProvider>
      <GameBoard />
    </GameBoardProvider>
  );
};

export default App;
